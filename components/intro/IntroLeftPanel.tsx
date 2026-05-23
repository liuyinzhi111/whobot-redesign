"use client"

import { useEffect, useRef, useState } from "react"
import styles from "./IntroLeftPanel.module.css"

/* ===================== 工具 ===================== */
const pad2 = (n: number) => n.toString().padStart(2, "0")
const formatMMSS = (seconds: number) =>
  `${pad2(Math.floor(seconds / 60))}:${pad2(seconds % 60)}`
const formatHMS = (d = new Date()) =>
  `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`

/* ===================== 正在通话卡片 ===================== */
function CallCard() {
  const [seconds, setSeconds] = useState(230) // 初始 03:50

  useEffect(() => {
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className={styles.callCard}>
      <div className={styles.callHeader}>
        <div className={styles.callStatus}>
          <span className={styles.statusDot} />
          <span className={styles.statusLabel}>正在通话</span>
        </div>
        <span className={styles.callTimer}>{formatMMSS(seconds)}</span>
      </div>
      <div className={styles.callCustomer}>客户 · 138****5821</div>
      <div className={styles.waveRow}>
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
      </div>
    </div>
  )
}

/* ===================== AI 工作流时间线 ===================== */
type TimelineItem = {
  id: number
  text: string
  time: string
  state: "enter" | "stable" | "leave"
}

const INITIAL_ITEMS: Omit<TimelineItem, "id">[] = [
  { text: "AI 接通新通话", time: "16:29:55", state: "stable" },
  { text: "正在生成通话摘要 …", time: "16:29:58", state: "stable" },
  { text: "已分配销售跟进", time: "16:30:00", state: "stable" },
  { text: "通话摘要已存档", time: "16:30:03", state: "stable" },
]

const FEED_POOL = [
  "AI 接通新通话",
  "正在生成通话摘要 …",
  "已分配销售跟进",
  "通话摘要已存档",
  "客户已添加微信",
  "意向客户转人工",
  "高意向客户已标记",
]

const MAX_ITEMS = 4

function WorkflowTimeline() {
  const idSeq = useRef(100)
  const [items, setItems] = useState<TimelineItem[]>(() =>
    INITIAL_ITEMS.map((it, i) => ({ ...it, id: i }))
  )

  useEffect(() => {
    const timers: number[] = []
    const intervalId = window.setInterval(() => {
      const text = FEED_POOL[Math.floor(Math.random() * FEED_POOL.length)]
      const id = idSeq.current++
      const newItem: TimelineItem = {
        id,
        text,
        time: formatHMS(),
        state: "enter",
      }

      setItems((prev) => {
        let next = [newItem, ...prev]
        // 超过 MAX_ITEMS 的标记为 leave
        if (next.length > MAX_ITEMS) {
          next = next.slice(0, MAX_ITEMS + 1)
          next[next.length - 1] = { ...next[next.length - 1], state: "leave" }
        }
        return next
      })

      // 入场完毕 → stable
      timers.push(
        window.setTimeout(() => {
          setItems((curr) =>
            curr.map((it) => (it.id === id ? { ...it, state: "stable" } : it))
          )
        }, 650)
      )

      // 移除 leave 项
      timers.push(
        window.setTimeout(() => {
          setItems((curr) => curr.filter((it) => it.state !== "leave"))
        }, 500)
      )
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
      timers.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineTitle}>AI 工作流</div>
      <ul className={styles.timelineList}>
        {items.map((it, idx) => (
          <li
            key={it.id}
            className={`${styles.timelineItem} ${
              it.state === "enter"
                ? styles.timelineItemEnter
                : it.state === "leave"
                ? styles.timelineItemLeave
                : ""
            }`}
          >
            <span
              className={`${styles.timelineDot} ${
                idx === 0 ? styles.timelineDotActive : ""
              }`}
            />
            <span className={styles.timelineItemText}>{it.text}</span>
            <span suppressHydrationWarning className={styles.timelineItemTime}>
              {it.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ===================== 主组件 ===================== */
export default function IntroLeftPanel() {
  return (
    <div className={`hidden lg:block ${styles.column}`}>
      <div className={styles.topSlot}>
        <CallCard />
      </div>
      <div className={styles.bottomSlot}>
        <WorkflowTimeline />
      </div>
    </div>
  )
}
