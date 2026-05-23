import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Building2, Cpu, Award, Check, Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "关于我们 · 呼波特 WhoBot",
  description: "北京呼波特人工智能科技有限公司，专注开发基于大模型的AI电话数字员工，致力于用AI替代人工为企业带来10倍效率提升。",
}

const milestones = [
  { year: "2023年", title: "公司成立", desc: "北京呼波特人工智能科技有限公司成立，聚焦AI电话数字员工赛道" },
  { year: "2024年", title: "产品上线", desc: "产品正式上线，首年签约百余家企业客户，覆盖教育、汽车、电信餐饮等多行业" },
  { year: "2024年", title: "标杆案例", desc: "在教育、电信SP、餐饮加盟等场景交付标杆案例，验证产品商业模式" },
  { year: "2025年6月", title: "A轮融资", desc: "完成数千万元A轮融资，金沙江创投领投，36氪等主流科技媒体广泛报道" },
  { year: "2025年", title: "规模扩张", desc: "团队扩展至40人，研发比例超80%，累计服务客户300家，中大型客户续约率100%" },
  { year: "2026年1月", title: "品牌升级", desc: "AI合伙人云中江树受邀出席北京ACDC2026第五届AIGC开发者大会，品牌影响力持续提升" },
  { year: "2026年", title: "行业领先", desc: "行业数据显示累计服务企业突破300家，累计通话量超3亿通，覆盖30+行业" },
]

const team = [
  {
    name: "董连平",
    title: "创始人 & CEO",
    desc: "14年互联网老兵\n百度大搜高级技术经理\n作业帮高管",
  },
  {
    name: "梁斌",
    title: "CTO",
    desc: "近20年技术经验\n阿里云P8高级技术专家\n百度T7资深研发工程师",
  },
  {
    name: "云中江树",
    title: "AI合伙人",
    desc: "微软 MVP\nLangGPT 创始人\n《智能体设计指南》作者",
  },
  {
    name: "黄天文",
    title: "增长顾问",
    desc: "《引爆用户增长》作者\n夸父炸串COO\n(100+到3000店增长经验)",
  },
]

const coreTech = [
  "自主研发智能语言大模型",
  "语音交互系统",
  "实时操作系统",
]

const products = [
  "意向挖掘 · 快速精准筛选高意向客户",
  "线索加微 · 通话中实时加微信",
  "产品销售 · 推荐产品、引导决策",
  "热线接听 · 7x24小时智能接听",
  "服务沟通 · 回访、通知、信息收集",
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 lg:pt-[4.5rem] bg-[#F8F8FC]">
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
          <div className="absolute top-0 left-0 right-0 h-[40rem] overflow-hidden z-0">
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
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-[#1A1A1A] leading-tight mb-5">
              关于我们
            </h1>
            <p className="text-[0.9375rem] sm:text-[1.05rem] text-[#555] max-w-3xl mx-auto leading-relaxed mb-10">
              北京呼波特 (WhoBot) 人工智能科技有限公司专注于开发基于大模型的AI电话数字员工，致力于用AI替代人工为企业带来10倍效率提升。
            </p>
          </div>
        </section>

        {/* Company intro */}
        <section className="pb-16">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="rounded-3xl bg-white border border-[#EEF2FA] p-6 sm:p-10 lg:p-12 shadow-[0_6px_24px_rgba(50,87,142,0.05)]">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                >
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-[1.25rem] font-bold text-[#1A1A1A]">企业简介</h2>
              </div>
              <p className="text-[0.9375rem] text-[#555] leading-[1.8] mb-6">
                呼波特(WHOBOT)全称为北京呼波特人工智能科技有限公司，成立于2023年4月，是一家专注于通信场景的高科技企业。核心定位是为企业提供智能化一站式数字员工解决方案，用AI迭代人工，打破对话与执行的壁垒，助力企业提升转化效率。
              </p>
              <p className="text-[0.9375rem] text-[#555] leading-[1.8] mb-6">
                公司依托自主研发的智能语言大模型、语音交互系统和实时操作系统三大核心技术，打造具备贴近真人对话交互能力的AI数字员工，可不受人类作息限制，高效完成各类通信场景业务，显著降低企业人工电话成本。产品正式上线仅一年，已签约百余个客户，正式客户续约率达100%，服务覆盖教育、汽车、客服、运营商SP等多个行业。
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-8">
                {[
                  { label: "成立时间", value: "2023年4月" },
                  { label: "核心定位", value: "AI电话数字员工" },
                  { label: "客户续约率", value: "100%" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-[#F8FAFE] border border-[#EEF2FA] p-4 text-center">
                    <div className="text-[0.75rem] text-[#999] mb-1">{item.label}</div>
                    <div className="text-[1.05rem] font-bold text-[#1A1A1A]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core advantages */}
        <section className="pb-16">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white border border-[#EEF2FA] p-6 sm:p-10 shadow-[0_6px_24px_rgba(50,87,142,0.05)]">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                  >
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-[1.25rem] font-bold text-[#1A1A1A]">核心技术优势</h2>
                </div>
                <p className="text-[0.875rem] text-[#555] leading-relaxed mb-6">
                  通过大模型对话引擎和多模态决策系统，可处理提升300%的长对话，同时具备人类对话的习惯或技巧，例如主动引导对话、适时停顿、添加语气词、模拟真人语调等。当用户出现突然打断或思考暂停时，能识别对方表达不完整，不会出现「抢话」「自顾自陈述」「断章取义」等AI显著特征。
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl bg-white border border-[#EEF2FA] p-6 shadow-[0_4px_16px_rgba(50,87,142,0.04)]">
                  <h4 className="text-[1rem] font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#3374FF]" />
                    核心技术体系
                  </h4>
                  <ul className="space-y-2">
                    {coreTech.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[0.875rem] text-[#555]">
                        <Check className="w-4 h-4 text-[#3374FF] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-white border border-[#EEF2FA] p-6 shadow-[0_4px_16px_rgba(50,87,142,0.04)]">
                  <h4 className="text-[1rem] font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#3374FF]" />
                    核心产品体系
                  </h4>
                  <ul className="space-y-2">
                    {products.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[0.875rem] text-[#555]">
                        <Check className="w-4 h-4 text-[#3374FF] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="pb-16">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-[1.5rem] sm:text-[2rem] font-bold text-[#1A1A1A] mb-3">发展里程碑</h2>
              <p className="text-[0.9375rem] text-[#777]">从创立到行业领先的每一步</p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5CC4F1] to-[#6C63F0] sm:-translate-x-1/2" />

              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={m.year + m.title} className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-white border-[3px] border-[#6C63F0] sm:-translate-x-1/2 z-10 mt-1.5" />

                    {/* Content */}
                    <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                      <div className="rounded-2xl bg-white border border-[#EEF2FA] p-5 shadow-[0_4px_12px_rgba(50,87,142,0.04)] inline-block w-full sm:w-auto">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-[0.6875rem] font-medium text-white mb-2"
                          style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                        >
                          {m.year}
                        </span>
                        <h4 className="text-[1rem] font-bold text-[#1A1A1A] mb-1">{m.title}</h4>
                        <p className="text-[0.8125rem] text-[#555] leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="pb-16">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-[1.5rem] sm:text-[2rem] font-bold text-[#1A1A1A] mb-3">核心团队</h2>
              <p className="text-[0.9375rem] text-[#777]">产品 + 技术 + AI应用 + 运营增长</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((t) => (
                <div
                  key={t.name}
                  className="rounded-3xl bg-white border border-[#EEF2FA] p-6 text-center shadow-[0_4px_16px_rgba(50,87,142,0.04)] hover:shadow-[0_12px_36px_rgba(50,87,142,0.08)] transition-all"
                >
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-[1.25rem] font-bold"
                    style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                  >
                    {t.name[0]}
                  </div>
                  <h4 className="text-[1.05rem] font-bold text-[#1A1A1A] mb-1">{t.name}</h4>
                  <p className="text-[0.8125rem] text-[#3374FF] font-medium mb-3">{t.title}</p>
                  <p className="text-[0.8125rem] text-[#777] leading-relaxed whitespace-pre-line">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="pb-20">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="rounded-3xl overflow-hidden text-white p-8 sm:p-12 lg:p-16 relative"
              style={{ background: "linear-gradient(135deg, #1B2A6B 0%, #3A2A8A 60%, #6C63F0 100%)" }}
            >
              <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-[#5CC4F1]/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#6C63F0]/40 blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-[1.5rem] sm:text-[2rem] font-bold mb-8 text-center">公司资质与联系方式</h2>
                <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4">
                    <Mail className="w-5 h-5 text-[#5CC4F1] flex-shrink-0" />
                    <div>
                      <div className="text-[0.75rem] text-white/70">邮箱</div>
                      <div className="text-[0.875rem] font-medium">donglianping@whobot.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4">
                    <Phone className="w-5 h-5 text-[#5CC4F1] flex-shrink-0" />
                    <div>
                      <div className="text-[0.75rem] text-white/70">电话</div>
                      <div className="text-[0.875rem] font-medium">134-2619-6685</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4">
                    <MapPin className="w-5 h-5 text-[#5CC4F1] flex-shrink-0" />
                    <div>
                      <div className="text-[0.75rem] text-white/70">地址</div>
                      <div className="text-[0.875rem] font-medium">北京市朝阳区君子科技大厦6层</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
