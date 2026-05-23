"use client"

import { useEffect, useRef, useState } from "react"

const metrics = [
  { value: "30+", label: "深耕行业", desc: "话术库与最佳实践" },
  { value: "300+", label: "服务企业", desc: "覆盖各类行业头部客户" },
  { value: "100%", label: "续约背书", desc: "稳定服务、持续陪伴" },
  { value: "<500ms", label: "端到端延迟", desc: "毫秒级响应不卡顿" },
]

export default function MetricsSection() {
  return (
    <section id="metrics" className="py-12 lg:py-16 bg-white">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="text-center lg:text-left">
              <CountUp
                value={m.value}
                className="text-[3.5rem] lg:text-[4rem] font-extrabold leading-[1] tracking-tight mb-3"
                style={{ color: "#1A1040", fontWeight: 800 }}
              />
              <div className="text-[0.95rem] font-semibold" style={{ color: "#1A1040" }}>
                {m.label}
              </div>
              <div className="text-[14px] mt-1" style={{ color: "#6B7280" }}>
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ========= 数字 0→目标值 滚动 进入视口后 1.5s easeOut ========= */
function parseValue(value: string) {
  const m = value.match(/^([^\d]*)(\d+)(.*)$/)
  if (!m) return { prefix: "", target: 0, suffix: value }
  return { prefix: m[1] ?? "", target: parseInt(m[2], 10), suffix: m[3] ?? "" }
}

function CountUp({
  value,
  className,
  style,
}: {
  value: string
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)
  const { prefix, target, suffix } = parseValue(value)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    // 客户端初始化：先重置为 0，等进入视口再滚动
    setDisplay(`${prefix}0${suffix}`)
    const el = ref.current
    if (!el) return

    let raf = 0
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const start = performance.now()
            const duration = 1500
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3) // easeOut cubic
              const v = Math.round(target * eased)
              setDisplay(`${prefix}${v}${suffix}`)
              if (t < 1) raf = requestAnimationFrame(tick)
            }
            raf = requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [prefix, target, suffix])

  return (
    <div ref={ref} className={className} style={style} suppressHydrationWarning>
      {display}
    </div>
  )
}
