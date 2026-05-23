"use client"

import { useState } from "react"
import { Phone, Clock } from "lucide-react"

export default function CostBreakdown() {
  const [mode, setMode] = useState<"month" | "minute">("month")

  const tiers = [
    { label: "基础版", price: "750", per: "0.031" },
    { label: "标准版", price: "950", per: "0.039", recommended: true },
    { label: "高级版", price: "1350", per: "0.056" },
  ]

  return (
    <section className="relative -mt-2 sm:-mt-4 pb-12 sm:pb-16 bg-[#F8F8FC]">
      <div className="relative z-10 max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div
          className="rounded-3xl px-4 sm:px-14 py-8 sm:py-14 bg-white shadow-[0_10px_40px_rgba(50,87,142,0.08)] border border-white"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 0%, rgba(92,196,241,0.08), transparent 40%), radial-gradient(circle at 100% 100%, rgba(108,99,240,0.08), transparent 45%)",
          }}
        >
          <h2 className="text-[1.375rem] sm:text-[1.75rem] font-bold text-[#1A1A1A] text-center mb-2">
            AI 数字员工每通电话的成本结构
          </h2>
          <p className="text-[0.8125rem] sm:text-[0.9375rem] text-[#999999] text-center mb-8">
            费用构成透明清晰，按实际使用量计费
          </p>

          {/* Tabs */}
          <div className="flex flex-col items-center mb-10">
            <div
              className="relative w-full max-w-[26.25rem] h-[3.25rem] rounded-[1.625rem] p-1 shadow-[0_2px_12px_rgba(50,87,142,0.08)]"
              style={{
                background:
                  "linear-gradient(180deg, #F6FAFF 0%, #FFFFFF 100%)",
              }}
            >
              <div className="relative h-full flex rounded-[1.5rem] overflow-hidden bg-white/80">
                <button
                  onClick={() => setMode("month")}
                  className={`relative flex-1 flex items-center justify-center gap-2 rounded-[1.5rem] text-[0.875rem] sm:text-[0.9375rem] font-medium transition-colors min-w-0 ${
                    mode === "month" ? "text-white" : "text-[#666]"
                  }`}
                  style={
                    mode === "month"
                      ? {
                          background:
                            "linear-gradient(90deg, #5CC4F1 0%, #6C63F0 100%)",
                        }
                      : undefined
                  }
                >
                  <Phone className="w-4 h-4" />
                  按月发付费
                </button>
                <button
                  onClick={() => setMode("minute")}
                  className={`relative flex-1 flex items-center justify-center gap-2 rounded-[1.5rem] text-[0.875rem] sm:text-[0.9375rem] font-medium transition-colors min-w-0 ${
                    mode === "minute" ? "text-white" : "text-[#666]"
                  }`}
                  style={
                    mode === "minute"
                      ? {
                          background:
                            "linear-gradient(90deg, #5CC4F1 0%, #6C63F0 100%)",
                        }
                      : undefined
                  }
                >
                  <Clock className="w-4 h-4" />
                  按分钟付费
                </button>
              </div>
            </div>
          </div>

          {/* Tier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {tiers.map((t) => (
              <div
                key={t.label}
                className={`relative rounded-2xl p-5 lg:p-6 bg-white border transition-all ${
                  t.recommended
                    ? "border-transparent shadow-[0_12px_30px_rgba(108,99,240,0.18)] ring-2 ring-[#6C63F0]/40"
                    : "border-[#EEF2FA] shadow-[0_4px_12px_rgba(50,87,142,0.04)]"
                }`}
              >
                {t.recommended && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[0.6875rem] font-medium text-white"
                    style={{
                      background:
                        "linear-gradient(90deg, #5CC4F1 0%, #6C63F0 100%)",
                    }}
                  >
                    推荐
                  </span>
                )}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[0.8125rem] font-semibold text-[#1A1A1A]">
                    {t.label}
                  </span>
                  <span className="text-[0.6875rem] text-[#999]">坐席</span>
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-[0.75rem] text-[#666]">¥</span>
                  <span className="text-[2rem] font-bold text-[#3374FF] leading-none">
                    {t.price}
                  </span>
                  <span className="text-[0.75rem] text-[#666]">元/月/坐席</span>
                </div>
                <div className="mt-3 pt-3 border-t border-dashed border-[#E8ECF3]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[0.6875rem] text-[#999]">单次约</span>
                    <span className="text-[0.8125rem] text-[#999]">¥</span>
                    <span className="text-[#3374FF] text-[1.125rem] font-bold leading-none">
                      {t.per}
                    </span>
                    <span className="text-[0.6875rem] text-[#666]">元/次</span>
                  </div>
                  <p className="text-[0.6875rem] text-[#999] italic leading-relaxed mt-2">
                    {t.price} 元/月 ÷ 30 天 ÷ 800 次 ≈ {t.per} 元
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[0.75rem] text-[#999] text-center mt-6">
            * 一个坐席一天最高外呼 800 次
          </p>
        </div>
      </div>
    </section>
  )
}
