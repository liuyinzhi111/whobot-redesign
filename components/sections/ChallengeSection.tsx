import { Phone, Mic, Zap } from "lucide-react"

const checks = [
  { icon: Mic, text: "尽情试探、调侃、刁难" },
  { icon: Zap, text: "毫秒级响应不卡顿" },
  { icon: Phone, text: "全天候在线随叫随到" },
]

export default function ChallengeSection() {
  return (
    <section id="challenge" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/40 to-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-cyan/10 blur-3xl" />
      </div>

      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-soft p-8 lg:p-14 text-center relative overflow-hidden">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-blue-50 text-brand-blue border border-blue-100">
            AI电话数字员工体验中心
          </span>
          <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-brand-ink mb-3 leading-tight">
            来一通电话，<span className="text-gradient-hero">亲耳听听</span>
          </h2>
          <p className="text-brand-body text-[0.95rem] max-w-xl mx-auto mb-8">
            拨打下方电话，体验像人一样对话的呼波特超级销冠。
            看看这位永不知疲倦的数字员工能不能接得住您的招。
          </p>

          <a
            href="tel:01052107595"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-gradient text-white text-lg font-semibold shadow-btn-blue hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(74,144,226,0.5)] transition-all"
          >
            <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
              <Phone className="w-4 h-4" />
              <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
            </span>
            010-52107595
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:gap-6">
            {checks.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.text}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-sm text-brand-body shadow-sm"
                >
                  <Icon className="w-4 h-4 text-brand-blue" />
                  {c.text}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
