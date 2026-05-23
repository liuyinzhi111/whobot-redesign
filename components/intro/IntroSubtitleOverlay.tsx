"use client"

import { RefObject, useEffect, useReducer, useRef } from "react"

/* ===================== 字幕数据 ===================== */
type Subtitle = { index: number; start: number; end: number; text: string }

const subtitles: Subtitle[] = [
  { index: 1, start: 0.2, end: 0.566, text: "你好" },
  { index: 2, start: 0.566, end: 2.8, text: "我是呼波特的电话数字员工" },
  { index: 3, start: 2.933, end: 4.2, text: "当然，我也可以成为" },
  { index: 4, start: 4.2, end: 5.966, text: "你的电话数字员工" },
  { index: 5, start: 6.2, end: 8.133, text: "我可以帮您主动外呼获客" },
  { index: 6, start: 8.4, end: 9.533, text: "筛选意向客户" },
  { index: 7, start: 9.533, end: 11.133, text: "也能自动接听来电" },
  { index: 8, start: 11.266, end: 12.533, text: "记录沟通内容" },
  { index: 9, start: 12.766, end: 14.166, text: "您可以直接和我聊聊" },
  { index: 10, start: 14.166, end: 16.633, text: "看看我能为您的业务带来多少线索" },
]

/* 6 个位置循环 */
const POSITIONS = [
  "left-top",
  "right-top",
  "left-middle",
  "right-middle",
  "left-bottom",
  "right-bottom",
] as const
type PosKey = (typeof POSITIONS)[number]

const getPos = (index: number): PosKey => POSITIONS[(index - 1) % POSITIONS.length]

/* ===================== 类型 ===================== */
type CardSnapshot = {
  sub: Subtitle
  charCount: number
  full: boolean
}

interface Props {
  videoRef: RefObject<HTMLVideoElement>
}

/* ===================== 主组件 ===================== */
export default function IntroSubtitleOverlay({ videoRef }: Props) {
  const [, force] = useReducer((x: number) => x + 1, 0)

  // 用 ref 维护实际状态，rAF 中按需调用 force 触发重渲染
  const stateRef = useRef<{
    current: CardSnapshot | null
    previous: CardSnapshot | null
    previousLeaving: boolean
    lastTime: number
  }>({
    current: null,
    previous: null,
    previousLeaving: false,
    lastTime: 0,
  })

  useEffect(() => {
    let raf = 0

    const tick = () => {
      const video = videoRef.current
      if (!video) {
        raf = requestAnimationFrame(tick)
        return
      }

      const t = video.currentTime
      const state = stateRef.current
      let changed = false

      // 1. 检测视频回退 / loop 重播 — 重置全部状态
      if (t < state.lastTime - 0.08) {
        if (state.current || state.previous) {
          state.current = null
          state.previous = null
          state.previousLeaving = false
          changed = true
        }
      }
      state.lastTime = t

      // 2. 找出当前激活的字幕条目
      let activeSub: Subtitle | null = null
      for (let i = subtitles.length - 1; i >= 0; i--) {
        if (t >= subtitles[i].start) {
          activeSub = subtitles[i]
          break
        }
      }

      if (!activeSub) {
        // 视频还没到第一条字幕：清掉一切
        if (state.current || state.previous) {
          state.current = null
          state.previous = null
          state.previousLeaving = false
          changed = true
        }
      } else {
        const sub = activeSub
        const dur = Math.max(0.001, sub.end - sub.start)
        const progress = Math.min(1, Math.max(0, (t - sub.start) / dur))
        const charCount = Math.ceil(progress * sub.text.length)
        const full = charCount >= sub.text.length

        if (!state.current || state.current.sub.index !== sub.index) {
          // 切到新字幕：把当前的挪到 previous（不立即淡出）
          if (state.current) {
            state.previous = state.current
            state.previousLeaving = false
          }
          state.current = { sub, charCount, full }
          changed = true
        } else if (
          state.current.charCount !== charCount ||
          state.current.full !== full
        ) {
          state.current = { ...state.current, charCount, full }
          changed = true
        }

        // 当前条完整显示后，触发上一条淡出
        if (full && state.previous && !state.previousLeaving) {
          state.previousLeaving = true
          changed = true
        }
      }

      if (changed) force()
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [videoRef])

  // 上一条淡出动画结束 → 真正从 DOM 移除
  const handlePrevLeaveEnd = () => {
    const state = stateRef.current
    if (state.previousLeaving) {
      state.previous = null
      state.previousLeaving = false
      force()
    }
  }

  const { current, previous, previousLeaving } = stateRef.current

  return (
    <div className="subtitle-overlay pointer-events-none absolute inset-0 hidden lg:block">
      {previous && (
        <SubtitleCard
          key={`subtitle-${previous.sub.index}`}
          snapshot={previous}
          leaving={previousLeaving}
          onLeaveEnd={handlePrevLeaveEnd}
        />
      )}
      {current && (
        <SubtitleCard
          key={`subtitle-${current.sub.index}`}
          snapshot={current}
          leaving={false}
          onLeaveEnd={() => {}}
        />
      )}

      <style jsx global>{`
        /* 卡片定位 — 围绕视频外侧分布 */
        .subtitle-card {
          position: absolute;
          display: inline-flex;
          align-items: center;
          width: fit-content;
          min-width: 0;
          max-width: 460px;
          height: 52px;
          padding: 0 24px;
          border-radius: 999px;
          background: linear-gradient(
            135deg,
            rgba(98, 106, 168, 0.62),
            rgba(80, 76, 148, 0.48)
          );
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(210, 218, 255, 0.14);
          box-shadow:
            0 10px 26px rgba(21, 22, 72, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          overflow: hidden;
          will-change: transform, opacity;
          transition: width 0.08s ease-out;
          opacity: 0;
          transform: translateY(14px) scale(0.96);
          animation: subtitle-enter 0.45s ease-out forwards;
        }
        .subtitle-card-leave {
          animation: subtitle-leave 0.35s ease-in forwards;
        }

        /* 6 个位置 — 数字人左/右 + 头肩 / 胸口 / 腰部 三档高度 */
        .subtitle-pos-left-top {
          top: 38%;
          left: -2px;
          transform: translateX(-100%) translateY(14px) scale(0.96);
        }
        .subtitle-pos-left-middle {
          top: 48%;
          left: -4px;
          transform: translateX(-100%) translateY(14px) scale(0.96);
        }
        .subtitle-pos-left-bottom {
          bottom: 38%;
          left: -2px;
          transform: translateX(-100%) translateY(14px) scale(0.96);
        }
        .subtitle-pos-right-top {
          top: 38%;
          left: calc(100% + 2px);
        }
        .subtitle-pos-right-middle {
          top: 48%;
          left: calc(100% + 4px);
        }
        .subtitle-pos-right-bottom {
          bottom: 38%;
          left: calc(100% + 2px);
        }

        .subtitle-card-inner {
          display: inline-flex;
          align-items: center;
          min-width: 0;
          overflow: hidden;
          transform: translateY(0);
        }

        /* 正文 */
        .subtitle-text {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: 0.01em;
          word-break: break-word;
          white-space: nowrap;
          overflow: hidden;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
        }

        /* 闪烁光标 */
        .subtitle-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          margin-left: 2px;
          vertical-align: -0.15em;
          background: rgba(0, 212, 255, 0.95);
          border-radius: 1px;
          animation: subtitle-cursor-blink 0.9s steps(1, start) infinite;
        }

        /* keyframes */
        @keyframes subtitle-enter {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes subtitle-leave {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        @keyframes subtitle-cursor-blink {
          0%,
          50% {
            opacity: 1;
          }
          50.01%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

/* ===================== 子组件 ===================== */
function SubtitleCard({
  snapshot,
  leaving,
  onLeaveEnd,
}: {
  snapshot: CardSnapshot
  leaving: boolean
  onLeaveEnd: () => void
}) {
  const { sub, charCount, full } = snapshot
  const visible = sub.text.slice(0, charCount)
  const pos = getPos(sub.index)

  return (
    <div
      className={`subtitle-card subtitle-pos-${pos}${leaving ? " subtitle-card-leave" : ""}`}
      onAnimationEnd={(e) => {
        if (leaving && e.animationName === "subtitle-leave") onLeaveEnd()
      }}
    >
      <div className="subtitle-card-inner">
        <div className="subtitle-text">
          {visible}
          {!full && !leaving && <span className="subtitle-cursor" />}
        </div>
      </div>
    </div>
  )
}
