"use client"

import { useEffect, useRef, useState } from "react"

/* ===================== 工具函数 ===================== */
const pad2 = (n: number) => n.toString().padStart(2, "0")
const formatMMSS = (seconds: number) => `${pad2(Math.floor(seconds / 60))}:${pad2(seconds % 60)}`
const formatHMS = (d = new Date()) => `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`

/* ===================== 模块 1：实时通话状态卡 ===================== */
function CallStatusCard() {
  const [seconds, setSeconds] = useState(150) // 初始 02:30

  useEffect(() => {
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="intro-card intro-card-enter" style={{ animationDelay: "0s" }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="relative inline-flex items-center justify-center">
            <span className="led-dot" />
          </span>
          <span className="text-[#00D4AA] text-xs font-semibold tracking-[0.18em]">
            实时通话
          </span>
        </div>
        {/* 右上角声波 SVG */}
        <svg width="36" height="22" viewBox="0 0 36 22" className="opacity-90">
          <rect className="wave-bar wave-bar-1" x="2" y="4" width="4" height="14" rx="2" />
          <rect className="wave-bar wave-bar-2" x="10" y="2" width="4" height="18" rx="2" />
          <rect className="wave-bar wave-bar-3" x="18" y="6" width="4" height="10" rx="2" />
          <rect className="wave-bar wave-bar-2" x="26" y="3" width="4" height="16" rx="2" />
        </svg>
      </div>

      <div className="intro-mono text-white text-[1.75rem] font-bold leading-none mb-3 tabular-nums">
        {formatMMSS(seconds)}
      </div>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300/85">
          <span className="text-slate-400">客户</span>
          <span className="text-white/90">李先生 · 138****5821</span>
        </div>
        <span className="intent-tag">A 级意向</span>
      </div>
    </div>
  )
}

/* ===================== 模块 2：今日战报 ===================== */
type StatDef = { key: string; label: string; target: number; suffix?: string; ring?: boolean }
const STATS: StatDef[] = [
  { key: "calls", label: "拨打通话", target: 1247 },
  { key: "rate", label: "接通率", target: 68, suffix: "%", ring: true },
  { key: "intent", label: "高意向", target: 89 },
  { key: "convert", label: "转化数", target: 23 },
]

type Bubble = { idx: number; n: number; key: number }

function DailyStatsCard() {
  const [values, setValues] = useState<number[]>(STATS.map(() => 0))
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [flashIdx, setFlashIdx] = useState<number | null>(null)

  // 入场计数 0 → target，requestAnimationFrame + easeOutCubic
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const duration = 1500
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValues(STATS.map((s) => Math.round(s.target * eased)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // 每 30s 随机一个数字 +1~3，伴随气泡与颜色闪烁
  useEffect(() => {
    const timers: number[] = []
    const intervalId = window.setInterval(() => {
      const idx = Math.floor(Math.random() * STATS.length)
      const n = 1 + Math.floor(Math.random() * 3)
      const key = Date.now() + Math.random()

      setValues((v) => {
        const next = [...v]
        next[idx] = next[idx] + n
        return next
      })
      setBubbles((b) => [...b, { idx, n, key }])
      setFlashIdx(idx)

      timers.push(window.setTimeout(() => setFlashIdx(null), 500))
      timers.push(window.setTimeout(() => {
        setBubbles((b) => b.filter((x) => x.key !== key))
      }, 1000))
    }, 30000)

    return () => {
      window.clearInterval(intervalId)
      timers.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  // 环形进度（接通率）
  const ringRadius = 22
  const ringCirc = 2 * Math.PI * ringRadius
  const rateIdx = STATS.findIndex((s) => s.ring)
  const rateTarget = STATS[rateIdx].target
  const rateValue = values[rateIdx]
  const ringOffset = ringCirc * (1 - rateValue / Math.max(rateTarget, 1)) // 0 → 目标 % 扫描

  return (
    <div className="intro-card intro-card-enter" style={{ animationDelay: "0.15s" }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#00D4AA] text-xs font-semibold tracking-[0.18em]">
          今日战报
        </span>
        <span className="text-[10px] text-slate-400">实时同步</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {STATS.map((stat, idx) => {
          const isFlashing = flashIdx === idx
          const v = values[idx]
          return (
            <div key={stat.key} className="relative">
              {/* +N 浮起气泡 */}
              {bubbles
                .filter((b) => b.idx === idx)
                .map((b) => (
                  <span key={b.key} className="stat-bubble">
                    +{b.n}
                  </span>
                ))}

              {stat.ring ? (
                <div className="flex items-center gap-3">
                  <div className="relative w-[52px] h-[52px] shrink-0">
                    <svg width="52" height="52" viewBox="0 0 52 52" className="-rotate-90">
                      <circle cx="26" cy="26" r={ringRadius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                      <circle
                        cx="26"
                        cy="26"
                        r={ringRadius}
                        fill="none"
                        stroke="#00D4AA"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={ringCirc}
                        strokeDashoffset={ringOffset}
                        style={{ transition: "stroke-dashoffset 0.1s linear" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] text-slate-300">
                      {v}%
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-400 mb-0.5">{stat.label}</div>
                    <div className={`intro-mono text-white text-[1.05rem] font-bold leading-none tabular-nums ${isFlashing ? "stat-flash" : ""}`}>
                      {v}
                      {stat.suffix}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-[11px] text-slate-400 mb-1">{stat.label}</div>
                  <div className={`intro-mono text-white text-[1.35rem] font-bold leading-none tabular-nums ${isFlashing ? "stat-flash" : ""}`}>
                    {v.toLocaleString()}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ===================== 模块 3：最新动态滚动列表 ===================== */
type FeedItem = {
  id: number
  text: string
  time: string
  removing?: boolean
  fresh?: boolean
}
const FEED_TEMPLATES = [
  "AI 接通新通话",
  "客户已添加微信",
  "通话摘要已生成",
  "意向客户转人工",
  "高意向客户已标记",
  "客户预约回访",
  "已分配销售跟进",
  "通话录音已存档",
  "意向等级提升至 A",
  "AI 自动发送资料",
]
const MAX_FEED = 4

function ActivityFeedCard() {
  const initial = useRef<FeedItem[]>([
    { id: 1, text: "AI 接通新通话", time: formatHMS() },
    { id: 2, text: "通话摘要已生成", time: formatHMS() },
    { id: 3, text: "高意向客户已标记", time: formatHMS() },
  ])
  const [items, setItems] = useState<FeedItem[]>(initial.current)
  const idSeq = useRef(100)

  useEffect(() => {
    const timers: number[] = []
    const insertId = window.setInterval(() => {
      const text = FEED_TEMPLATES[Math.floor(Math.random() * FEED_TEMPLATES.length)]
      const id = idSeq.current++
      const newItem: FeedItem = { id, text, time: formatHMS(), fresh: true }

      setItems((prev) => {
        const merged = [newItem, ...prev]
        if (merged.length > MAX_FEED) {
          const last = merged[merged.length - 1]
          merged[merged.length - 1] = { ...last, removing: true }
          timers.push(
            window.setTimeout(() => {
              setItems((curr) => curr.filter((it) => !it.removing))
            }, 320)
          )
        }
        return merged
      })

      // 闪烁两次（共 ~0.8s）后取消 fresh
      timers.push(
        window.setTimeout(() => {
          setItems((curr) =>
            curr.map((it) => (it.id === id ? { ...it, fresh: false } : it))
          )
        }, 900)
      )
    }, 2500)

    return () => {
      window.clearInterval(insertId)
      timers.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  return (
    <div className="intro-card intro-card-enter" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#00D4AA] text-xs font-semibold tracking-[0.18em]">
          最新动态
        </span>
        <span className="text-[10px] text-slate-400">自动滚动</span>
      </div>

      <ul className="feed-list">
        {items.map((it) => (
          <li
            key={it.id}
            className={`feed-item ${it.removing ? "feed-item-leave" : "feed-item-enter"}`}
          >
            <span className={`feed-dot ${it.fresh ? "feed-dot-blink" : ""}`} />
            <div className="flex-1 min-w-0 flex items-baseline justify-between gap-3">
              <span className="truncate text-[0.8125rem] text-white/90">{it.text}</span>
              <span suppressHydrationWarning className="intro-mono text-[10px] text-slate-400 tabular-nums shrink-0">
                {it.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ===================== 主组件 ===================== */
export default function IntroSideCards() {
  return (
    <div className="pointer-events-none hidden lg:flex absolute left-[4vw] xl:left-[5vw] top-1/2 -translate-y-1/2 flex-col gap-4 w-[22rem] z-10">
      <CallStatusCard />
      <DailyStatsCard />
      <ActivityFeedCard />

      <style jsx global>{`
        /* ========= 通用卡片 ========= */
        .intro-card {
          position: relative;
          padding: 1rem 1.1rem;
          border-radius: 1rem;
          background: rgba(8, 18, 36, 0.62);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 212, 170, 0.12);
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.28);
          overflow: hidden;
          pointer-events: auto;
        }
        /* shimmer 扫光 */
        .intro-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.06) 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 220% 100%;
          background-position: -120% 0;
          animation: intro-shimmer 8s linear infinite;
          pointer-events: none;
        }
        @keyframes intro-shimmer {
          0% { background-position: -120% 0; }
          100% { background-position: 220% 0; }
        }

        /* ========= 入场动画 ========= */
        .intro-card-enter {
          opacity: 0;
          transform: translateX(-30px);
          animation: intro-slide-in 0.6s ease-out forwards;
        }
        @keyframes intro-slide-in {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ========= 等宽数字 ========= */
        .intro-mono {
          font-family: ui-monospace, "SF Mono", "Menlo", "Consolas", monospace;
          font-variant-numeric: tabular-nums;
        }

        /* ========= 模块 1：状态灯 ========= */
        .led-dot {
          position: relative;
          width: 9px;
          height: 9px;
          border-radius: 9999px;
          background: #00D4AA;
          box-shadow: 0 0 12px rgba(0, 212, 170, 0.7);
          animation: led-pulse 1.5s ease-in-out infinite;
        }
        .led-dot::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: rgba(0, 212, 170, 0.55);
          animation: led-ripple 1.5s ease-out infinite;
        }
        @keyframes led-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.4); opacity: 0.4; }
        }
        @keyframes led-ripple {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0;   }
        }

        /* 声波竖条 */
        .wave-bar {
          fill: #00D4AA;
          transform-origin: center;
          animation: wave-bounce 1s ease-in-out infinite;
        }
        .wave-bar-1 { animation-delay: 0s; }
        .wave-bar-2 { animation-delay: 0.18s; }
        .wave-bar-3 { animation-delay: 0.36s; }
        @keyframes wave-bounce {
          0%, 100% { transform: scaleY(0.45); }
          50%      { transform: scaleY(1); }
        }

        /* 意向等级标签呼吸光晕（橙色） */
        .intent-tag {
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0.65rem;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 600;
          color: #ffb070;
          background: rgba(255, 140, 0, 0.12);
          border: 1px solid rgba(255, 140, 0, 0.35);
          animation: intent-glow 2s ease-in-out infinite;
        }
        @keyframes intent-glow {
          0%, 100% { box-shadow: 0 0 0   rgba(255, 140, 0, 0.0); }
          50%      { box-shadow: 0 0 16px rgba(255, 140, 0, 0.6); }
        }

        /* ========= 模块 2：数字闪烁 + 浮起气泡 ========= */
        .stat-flash { animation: stat-flash 0.5s ease-out; }
        @keyframes stat-flash {
          0%   { color: #ffffff; }
          50%  { color: #00D4AA; }
          100% { color: #ffffff; }
        }
        .stat-bubble {
          position: absolute;
          top: -4px;
          left: 0;
          font-size: 11px;
          font-weight: 700;
          color: #00D4AA;
          pointer-events: none;
          animation: stat-bubble 1s ease-out forwards;
        }
        @keyframes stat-bubble {
          0%   { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-30px); }
        }

        /* ========= 模块 3：列表 + 时间轴 ========= */
        .feed-list {
          position: relative;
          list-style: none;
          margin: 0;
          padding: 0 0 0 0.75rem;
          border-left: 1px solid transparent;
          background:
            linear-gradient(rgba(8,18,36,0), rgba(8,18,36,0)) padding-box,
            linear-gradient(to bottom, rgba(0,212,170,0.55), rgba(0,212,170,0.05)) border-box;
        }
        .feed-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.45rem 0;
          overflow: hidden;
        }
        .feed-item-enter { animation: feed-enter 0.4s ease-out forwards; }
        .feed-item-leave { animation: feed-leave 0.3s ease-in forwards; }
        @keyframes feed-enter {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes feed-leave {
          0%   { opacity: 1; max-height: 60px; padding-top: 0.45rem; padding-bottom: 0.45rem; }
          100% { opacity: 0; max-height: 0;    padding-top: 0;       padding-bottom: 0;       }
        }
        .feed-dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #00D4AA;
          box-shadow: 0 0 8px rgba(0, 212, 170, 0.55);
          flex-shrink: 0;
        }
        .feed-dot-blink { animation: feed-dot-blink 0.4s ease-in-out 2; }
        @keyframes feed-dot-blink {
          0%, 100% { opacity: 1;   }
          50%      { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}
