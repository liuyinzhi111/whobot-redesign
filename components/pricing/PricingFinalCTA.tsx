import { Phone, ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  "0 元定制费雇佣官网员工",
  "按月计费 + 按需消耗，灵活组合",
  "支持按月、按季度、按年付费",
  "专属客户成功经理 1v1 服务",
]

export default function PricingFinalCTA() {
  return (
    <section className="relative pb-24 bg-[#F8F8FC]">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-white"
          style={{
            background:
              "linear-gradient(135deg, #1B2A6B 0%, #3A2A8A 60%, #6C63F0 100%)",
          }}
        >
          {/* Decorative orbs */}
          <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-[#5CC4F1]/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#6C63F0]/40 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-white/15 backdrop-blur-md border border-white/20">
                定价透明 · 按需付费
              </span>
              <h2 className="text-3xl lg:text-[2.5rem] font-bold leading-tight mb-4">
                不囤坐席、不藏价格
                <br />
                让每一分预算都花在刀刃上
              </h2>
              <p className="text-white/80 text-[0.95rem] leading-relaxed mb-8 max-w-xl">
                想了解更精准的报价方案？告诉我们您的业务场景与并发预期，
                我们将为您量身定制专属组合。
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:01052107595"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1A1A1A] text-[0.95rem] font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  立即咨询：010-52107595
                </a>
                <a
                  href="/employees"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-[0.95rem] font-medium hover:bg-white/20 transition-colors"
                >
                  浏览数字员工库
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <ul className="space-y-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#5CC4F1] mt-0.5 flex-shrink-0" />
                  <span className="text-[0.95rem] text-white/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
