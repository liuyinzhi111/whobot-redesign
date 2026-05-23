import {
  MessageSquareHeart,
  Clock,
  Settings2,
  Zap,
  ChartColumn,
  ShieldCheck,
  Bot,
} from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"

const leftAdvantages = [
  {
    icon: MessageSquareHeart,
    title: "真人级语音交互",
    desc: "基于大语言模型的自然对话能力，支持多轮对话、情感识别，让客户感受不到是在与AI通话。",
  },
  {
    icon: Clock,
    title: "7×24小时不间断",
    desc: "数字员工全年无休，节假日、深夜都能高效工作，不请假、不离职、永远在线。",
  },
  {
    icon: Settings2,
    title: "行业话术定制",
    desc: "支持各行业专属话术模板，可根据业务场景灵活调整，打造专属数字员工。",
  },
]

const rightAdvantages = [
  {
    icon: Zap,
    title: "毫秒级响应",
    desc: "端到端延迟低于 500ms，实现流畅自然的对话体验，告别尴尬的等待沉默。",
  },
  {
    icon: ChartColumn,
    title: "智能数据分析",
    desc: "通话全程录音，自动生成分析报告，客户意向标签化，助力精准营销决策。",
  },
  {
    icon: ShieldCheck,
    title: "企业级安全",
    desc: "数据本地化存储，通话加密传输，符合等保三级要求，保障企业数据安全。",
  },
]

export default function AdvantageSection() {
  return (
    <section id="advantage" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl" />
      </div>

      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <SectionTitle
          eyebrow="核心优势"
          title="为什么选择 WhoBot"
          subtitle="专业的 AI 电话客服解决方案，助力企业数字化转型"
          highlight="WhoBot"
        />

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-10 items-center">
          {/* Left cards */}
          <div className="space-y-5 lg:space-y-6">
            {leftAdvantages.map((a, i) => {
              const Icon = a.icon
              return (
                <div
                  key={a.title}
                  className={`bg-blue-50/50 backdrop-blur-md border border-white/60 rounded-2xl p-4 lg:p-6 shadow-soft hover:shadow-brand transition-all duration-300 group ${
                    i % 2 === 0 ? "lg:translate-x-12" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blueMid to-brand-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-ink mb-2 group-hover:text-brand-blue transition-colors">
                        {a.title}
                      </h3>
                      <p className="text-[0.9375rem] text-brand-body leading-relaxed">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center pulse circle */}
          <div className="relative w-full flex justify-center py-4 lg:py-0 order-first lg:order-none">
            <div className="relative w-44 h-44 lg:w-64 lg:h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-brand-blue/20 animate-pulse-ring" />
              <div className="absolute inset-4 rounded-full bg-brand-purple/30 animate-pulse-ring-inner" />
              <div className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-xl border border-white/60 shadow-glow" />
              <div className="relative z-10 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-[#5CC4F1] via-brand-blue to-brand-purple flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(37,99,235,0.5)] overflow-hidden border-4 border-white/20 group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_60%)]" />
                <Bot className="w-10 h-10 lg:w-14 lg:h-14 text-white relative z-10 drop-shadow" />
                <span className="relative z-10 mt-2 text-white font-bold text-sm lg:text-base">
                  WhoBot
                </span>
                <span className="relative z-10 text-[10px] lg:text-xs text-white/85">
                  让每通电话更智能
                </span>
              </div>
            </div>
          </div>

          {/* Right cards */}
          <div className="space-y-5 lg:space-y-6">
            {rightAdvantages.map((a, i) => {
              const Icon = a.icon
              return (
                <div
                  key={a.title}
                  className={`bg-blue-50/50 backdrop-blur-md border border-white/60 rounded-2xl p-4 lg:p-6 shadow-soft hover:shadow-brand transition-all duration-300 group ${
                    i % 2 === 0 ? "lg:-translate-x-12" : ""
                  }`}
                >
                  <div className="flex items-start gap-4 lg:flex-row-reverse">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blueMid to-brand-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="lg:text-right">
                      <h3 className="text-lg font-bold text-brand-ink mb-2 group-hover:text-brand-blue transition-colors">
                        {a.title}
                      </h3>
                      <p className="text-[0.9375rem] text-brand-body leading-relaxed">
                        {a.desc}
                      </p>
                    </div>
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
