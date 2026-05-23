import { Clock, Cpu } from "lucide-react"

export default function ConsumptionFees() {
  return (
    <section className="bg-[#F8F8FC] pb-16">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Step header */}
        <div className="flex items-baseline gap-3 mb-8">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white text-base font-bold shadow-md"
            style={{
              background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)",
            }}
          >
            二
          </span>
          <div>
            <h3 className="text-[1.25rem] sm:text-[1.5rem] font-bold text-[#1A1A1A]">
              消耗费用
            </h3>
            <p className="text-[0.8125rem] text-[#777] mt-1">
              按实际接通分钟数计费，使用多少付多少
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 1 */}
          <div
            className="rounded-2xl p-6 lg:p-8 border border-[#EEF2FA] shadow-[0_4px_12px_rgba(50,87,142,0.04)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(92,196,241,0.08) 0%, #FFFFFF 100%)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)",
                  }}
                >
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[1rem] font-bold text-[#1A1A1A]">
                    按接通分钟数
                  </div>
                  <div className="text-[0.75rem] text-[#999] mt-0.5">
                    通话计费 · 阶梯单价
                  </div>
                </div>
              </div>
              <span className="text-[0.6875rem] px-2.5 py-1 rounded-full bg-[#EAF3FF] text-[#3374FF] font-medium">
                按需付费
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-[0.75rem] text-[#666]">¥</span>
              <span className="text-[#3374FF] text-[2rem] font-bold leading-none">
                0.20
              </span>
              <span className="text-[0.875rem] text-[#666]">~ 0.50 元/分钟</span>
            </div>

            <ul className="space-y-2 text-[0.8125rem] text-[#666]">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#3374FF] mt-2 flex-shrink-0" />
                按接通后实际通话分钟计费，未接通不计费
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#3374FF] mt-2 flex-shrink-0" />
                量级越大，分钟单价越低
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#3374FF] mt-2 flex-shrink-0" />
                月结账单，明细透明
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-2xl p-6 lg:p-8 border border-[#EEF2FA] shadow-[0_4px_12px_rgba(50,87,142,0.04)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(108,99,240,0.06) 0%, #FFFFFF 100%)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #6C63F0 0%, #8B93E8 100%)",
                  }}
                >
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[1rem] font-bold text-[#1A1A1A]">
                    大模型 Token 用量
                  </div>
                  <div className="text-[0.75rem] text-[#999] mt-0.5">
                    可选 · 按 API 用量计费
                  </div>
                </div>
              </div>
              <span className="text-[0.6875rem] px-2.5 py-1 rounded-full bg-[#F1EFFE] text-[#6C63F0] font-medium">
                非必须
              </span>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-[0.75rem] text-[#666]">¥</span>
              <span className="text-[#6C63F0] text-[2rem] font-bold leading-none">
                20-50
              </span>
              <span className="text-[0.875rem] text-[#666]">元/月/坐席</span>
            </div>

            <ul className="space-y-2 text-[0.8125rem] text-[#666]">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#6C63F0] mt-2 flex-shrink-0" />
                客户可自行购买所需 LLM 用量
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#6C63F0] mt-2 flex-shrink-0" />
                支持私有化模型对接
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#6C63F0] mt-2 flex-shrink-0" />
                可在通话量大时按需扩容
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
