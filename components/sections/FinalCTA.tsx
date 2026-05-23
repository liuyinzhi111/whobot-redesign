import { Cpu, BookOpen, Award, ArrowRight, Phone } from "lucide-react"

const pillars = [
  {
    icon: Cpu,
    title: "技术壁垒",
    desc: "核心语音系统自研、多模型架构、毫秒级响应、打断识别等核心技术。",
  },
  {
    icon: BookOpen,
    title: "行业 Know-how",
    desc: "30+ 行业的话术库、最佳实践、标杆案例积累。",
  },
  {
    icon: Award,
    title: "客户信任",
    desc: "300+ 企业、100% 续约率背书，新进入者短期内难以复制。",
  },
]

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b1230] via-[#1b2a6b] to-[#3a2a8a]" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(92,196,241,0.5),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(108,99,240,0.5),transparent_60%)]" />

      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: brand intro */}
          <div className="text-white">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90">
              关于我们
            </span>
            <h2 className="text-3xl lg:text-[2.75rem] font-bold leading-tight mb-5">
              让每一通电话都更智能、
              <br />
              <span className="text-gradient-hero">更高效、更有温度</span>
            </h2>
            <p className="text-white/75 text-[0.95rem] leading-relaxed mb-8 max-w-xl">
              WhoBot（呼波特）是北京呼波特人工智能科技有限公司旗下的 AI 电话数字员工平台。
              我们致力于用人工智能技术重新定义企业外呼场景，为企业带来 10 倍效率提升。
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:01052107595"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-ink text-[0.95rem] font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                立即体验
              </a>
              <a
                href="#employee-showcase"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-[0.95rem] font-medium hover:bg-white/20 transition-colors"
              >
                浏览数字员工库
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: pillars */}
          <div className="space-y-4">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <div
                  key={p.title}
                  className="flex items-start gap-4 p-5 lg:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-white/70 text-[0.9rem] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
