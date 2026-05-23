import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Cpu, Phone, MessageCircle, Clock, Workflow, ArrowRight, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "核心优势 · 呼波特 WhoBot",
  description: "AI数字员工替代整个岗位，不只是拨号工具。95%用户误认为真人客服，支持边说边做、7x24小时在线。",
}

const steps = [
  "线索获取", "智能外呼", "意向筛选", "加微建联", "派单跟进", "转化成交", "数据沉淀",
]

export default function AdvantagesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 lg:pt-[4.5rem] bg-[#F8F8FC]">
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
          <div className="absolute top-0 left-0 right-0 h-[45rem] overflow-hidden z-0">
            <div className="absolute inset-0 bg-[#f0f4fb]" />
            <div
              className="absolute blur-[280px] opacity-45"
              style={{
                background: "linear-gradient(145deg, #79e9ff 0%, #a8d4ff 35%, #cdebff 70%)",
                left: "-10%", top: "-25%", width: "120%", height: "120%",
                borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
                transform: "rotate(-15deg)",
              }}
            />
            <div
              className="absolute blur-[240px] opacity-25"
              style={{
                background: "linear-gradient(160deg, #b8a5ff 0%, #c9b8ff 40%, #e0d6ff 100%)",
                left: "10%", top: "-10%", width: "85%", height: "90%",
                borderRadius: "55% 45% 50% 50% / 45% 55% 45% 55%",
                transform: "rotate(10deg)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, rgba(240,244,251,0) 0%, rgba(248,248,252,0.3) 60%, rgba(248,248,252,0.85) 80%, rgba(248,248,252,1) 95%)",
              }}
            />
          </div>

          <div className="relative z-10 max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center">
            <h1 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold text-[#1A1A1A] leading-tight mb-6">
              95%用户误认为真人客服
            </h1>
            <p className="text-[1rem] sm:text-[1.125rem] text-[#555] max-w-2xl mx-auto leading-relaxed mb-10">
              <span className="text-[#3374FF] font-medium">AI数字员工替代整个岗位，不只是拨号工具</span>
            </p>
            <div className="max-w-3xl mx-auto rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100 p-6 sm:p-8 shadow-[0_8px_30px_rgba(50,87,142,0.06)]">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                >
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="text-[1.05rem] font-bold text-[#1A1A1A]">不是「AI外呼」，而是「AI电话数字员工」</span>
              </div>
              <p className="text-[0.875rem] text-[#555] leading-relaxed text-left">
                从自动获取线索到完成转化，替代的是一个完整岗位而非单一动作。不只是拨号工具，而是帮你把事办了的可靠员工。
              </p>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="pb-20">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1: 极致拟人化 */}
              <div className="rounded-3xl bg-white border border-[#EEF2FA] p-6 sm:p-10 shadow-[0_6px_24px_rgba(50,87,142,0.05)] hover:shadow-[0_12px_36px_rgba(50,87,142,0.08)] transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[1.25rem] font-bold text-[#1A1A1A]">极致拟人化</h3>
                </div>
                <p className="text-[0.875rem] text-[#555] leading-relaxed mb-5">
                  95%用户误认为真人客服。支持主动引导对话、适时停顿、添加语气词、模拟真人语调。拥有情境记忆能力，客户说「我在开会」，AI会一小时后回拨。
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "用户误认为真人客服", value: "95%" },
                    { label: "语义理解准确率", value: "超高" },
                    { label: "超长连续对话支持", value: "√" },
                    { label: "支持定制专属音色", value: "√" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-[#F8FAFE] border border-[#EEF2FA] p-3 text-center">
                      <div className="text-[#3374FF] text-[1.125rem] font-bold">{item.value}</div>
                      <div className="text-[0.6875rem] text-[#999] mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[0.75rem] text-[#999] mt-4 italic">
                  需定制专属音色，可联系在线客服获取方案
                </p>
              </div>

              {/* Card 2: 边说边做 */}
              <div className="rounded-3xl bg-white border border-[#EEF2FA] p-6 sm:p-10 shadow-[0_6px_24px_rgba(50,87,142,0.05)] hover:shadow-[0_12px_36px_rgba(50,87,142,0.08)] transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                  >
                    <Workflow className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[1.25rem] font-bold text-[#1A1A1A]">边说边做（跨系统操作）</h3>
                </div>
                <p className="text-[0.875rem] text-[#555] leading-relaxed mb-5">
                  通话中实时完成跨系统操作：加微信、派单、录入CRM、发送资料。把「1次触达」真正做成「1次转化动作」，不只是找到人，而是帮你把事办了。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["加微信", "派单", "录入CRM", "发送资料"].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full text-[0.8125rem] font-medium bg-[#EAF3FF] text-[#3374FF]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 3: 7x24小时在线 */}
              <div className="rounded-3xl bg-white border border-[#EEF2FA] p-6 sm:p-10 shadow-[0_6px_24px_rgba(50,87,142,0.05)] hover:shadow-[0_12px_36px_rgba(50,87,142,0.08)] transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                  >
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[1.25rem] font-bold text-[#1A1A1A]">7x24 小时在线</h3>
                </div>
                <p className="text-[0.875rem] text-[#555] leading-relaxed mb-5">
                  单个AI坐席日处理800通电话，高并发支持活动期咨询量暴增5倍也能全接听。1个坐席750元/月，相当于1天不到30元，成本是真人的1/10。
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "日处理通话", value: "800+" },
                    { label: "高并发支持", value: "5x" },
                    { label: "成本 vs 真人", value: "1/10" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-[#F8FAFE] border border-[#EEF2FA] p-3 text-center">
                      <div className="text-[#3374FF] text-[1.125rem] font-bold">{item.value}</div>
                      <div className="text-[0.6875rem] text-[#999] mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 4: 真人般对话能力 */}
              <div className="rounded-3xl bg-white border border-[#EEF2FA] p-6 sm:p-10 shadow-[0_6px_24px_rgba(50,87,142,0.05)] hover:shadow-[0_12px_36px_rgba(50,87,142,0.08)] transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
                    style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[1.25rem] font-bold text-[#1A1A1A]">听起来像真人 说起来有情绪</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["情绪饱满", "气息自然", "声音细腻", "拟人度高"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-[0.8125rem] bg-[#F1EFFE] text-[#6C63F0] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-[0.875rem] text-[#555] leading-relaxed">
                  当用户出现突然打断或思考暂停时，能识别对方表达不完整，不会出现「抢话」「自顾自陈述」「断章取义」等AI显著特征。提升300%的长对话处理能力。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 steps automation */}
        <section className="pb-20">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-[1.5rem] sm:text-[2rem] font-bold text-[#1A1A1A] mb-3">
                全流程自动化闭环
              </h2>
              <p className="text-[0.9375rem] text-[#777]">
                从线索获取到转化完成，7步自动执行。不只是「帮你找到人」，而是「帮你把事办了」。
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#EEF2FA] p-8 sm:p-12 shadow-[0_6px_24px_rgba(50,87,142,0.05)]">
              <div className="flex flex-col lg:flex-row items-stretch gap-3">
                {steps.map((step, i) => (
                  <div key={step} className="flex-1 flex flex-col items-center text-center">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-[1.125rem] shadow-md mb-3"
                      style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-[0.875rem] font-semibold text-[#1A1A1A]">{step}</span>
                    {i < steps.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center mt-3">
                        <ArrowRight className="w-4 h-4 text-[#ccc]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-[#EEF2FA] p-6 shadow-[0_4px_16px_rgba(50,87,142,0.04)]">
                <h4 className="text-[1.05rem] font-bold text-[#1A1A1A] mb-4">核心技术体系</h4>
                <ul className="space-y-3">
                  {[
                    "自主研发智能语言大模型",
                    "语音交互系统",
                    "实时操作系统",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-[#555]">
                      <Check className="w-4 h-4 text-[#3374FF] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-[#EEF2FA] p-6 shadow-[0_4px_16px_rgba(50,87,142,0.04)]">
                <h4 className="text-[1.05rem] font-bold text-[#1A1A1A] mb-4">核心产品体系</h4>
                <ul className="space-y-3">
                  {[
                    "意向挖掘 · 快速精准筛选高意向客户",
                    "线索加微 · 通话中实时加微信",
                    "产品销售 · 推荐产品、引导决策",
                    "热线接听 · 7x24小时智能接听",
                    "服务沟通 · 回访、通知、信息收集",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.875rem] text-[#555]">
                      <Check className="w-4 h-4 text-[#3374FF] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
