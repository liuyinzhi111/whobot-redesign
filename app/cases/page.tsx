import type { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Building2, TrendingUp, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "客户案例 · 呼波特 WhoBot",
  description: "已有数百家企业通过WhoBot提升业务效率，覆盖教育、汽车、客服、运营商SP等多个行业。",
}

const stats = [
  { label: "服务企业", value: "300+", icon: Building2 },
  { label: "通话总量", value: "3亿+", icon: TrendingUp },
  { label: "覆盖行业", value: "30+", icon: Users },
  { label: "客户续约率", value: "100%", icon: Award },
]

const cases = [
  {
    industry: "教育培训",
    title: "在线教育招生效率提升 5 倍",
    desc: "通过AI意向挖掘数字员工，日均外呼800+通，精准筛选高意向学员，销售转化率提升40%，人力成本降低70%。",
    tags: ["意向挖掘", "回访通知", "数据回写"],
  },
  {
    industry: "汽车销售",
    title: "4S店客户到店率提升 35%",
    desc: "AI销售型数字员工主动邀约潜在客户，智能应答车型咨询，实时转接人工坐席，月均触达线索10万+。",
    tags: ["主动邀约", "车型咨询", "实时转接"],
  },
  {
    industry: "餐饮加盟",
    title: "加盟线索跟进转化率翻倍",
    desc: "AI回访型数字员工自动跟进加盟意向客户，24小时在线答疑，智能记录沟通要点并同步CRM，销售跟进效率提升2倍。",
    tags: ["线索跟进", "智能答疑", "CRM同步"],
  },
  {
    industry: "运营商SP",
    title: "SP业务续约提醒自动化",
    desc: "AI通知型数字员工自动进行套餐到期提醒与续约引导，减少人工坐席50%，续约成功率保持95%以上。",
    tags: ["到期提醒", "续约引导", "数据闭环"],
  },
  {
    industry: "企业服务",
    title: "SaaS产品试用激活提升 60%",
    desc: "AI加微型数字员工在用户注册后主动触达，引导完成产品试用，实时添加企业微信，建立专属客户服务群。",
    tags: ["试用引导", "加微建联", "社群运营"],
  },
  {
    industry: "医疗健康",
    title: "患者复诊提醒触达率 90%+",
    desc: "AI回访型数字员工定时提醒患者复诊，收集健康反馈，自动预约排期，显著降低漏诊率和失访率。",
    tags: ["复诊提醒", "健康回访", "自动预约"],
  },
]

const industries = [
  "教育", "汽车", "餐饮", "运营商", "企业服务", "医疗", "金融", "房产", "电商", "制造",
]

export default function CasesPage() {
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
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-[#1A1A1A] leading-tight mb-4">
              AI数字员工重塑劳动力
              <br />
              <span className="text-[#3374FF]">赋能企业降本增效</span>
            </h1>
            <p className="text-[0.9375rem] sm:text-[1rem] text-[#777] max-w-2xl mx-auto leading-relaxed">
              10年以上的智能语音技术团队，确保系统更符合业务需求。已有数百家企业通过WhoBot提升业务效率。
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-16">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-white border border-[#EEF2FA] p-5 sm:p-6 text-center shadow-[0_4px_16px_rgba(50,87,142,0.04)]"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-[1.75rem] font-bold text-[#1A1A1A] mb-1">{s.value}</div>
                    <div className="text-[0.8125rem] text-[#999]">{s.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="pb-20">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-[1.5rem] sm:text-[2rem] font-bold text-[#1A1A1A] mb-3">
                客户成功案例
              </h2>
              <p className="text-[0.9375rem] text-[#777]">
                覆盖教育、汽车、客服、运营商SP等多个行业
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl bg-white border border-[#EEF2FA] p-6 sm:p-8 shadow-[0_4px_16px_rgba(50,87,142,0.04)] hover:shadow-[0_12px_36px_rgba(50,87,142,0.08)] transition-all group"
                >
                  <div className="inline-block px-3 py-1 rounded-full text-[0.75rem] font-medium bg-[#EAF3FF] text-[#3374FF] mb-4">
                    {c.industry}
                  </div>
                  <h3 className="text-[1.1rem] font-bold text-[#1A1A1A] mb-3 group-hover:text-[#3374FF] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-[0.875rem] text-[#555] leading-relaxed mb-5">
                    {c.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[0.75rem] bg-[#F8FAFE] text-[#666] border border-[#EEF2FA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand partners */}
        <section className="pb-20">
          <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center mb-10">
              <h2 className="text-[1.5rem] sm:text-[2rem] font-bold text-[#1A1A1A] mb-3">
                品牌合作客户
              </h2>
              <p className="text-[0.9375rem] text-[#777]">
                国内知名企业都在呼波特定制AI电话数字员工
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-[#EEF2FA] p-8 sm:p-12 shadow-[0_4px_16px_rgba(50,87,142,0.04)]">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                {industries.map((ind) => (
                  <div
                    key={ind}
                    className="flex items-center justify-center h-16 rounded-xl bg-[#F8FAFE] border border-[#EEF2FA] text-[0.875rem] text-[#888] font-medium hover:border-[#3374FF]/30 hover:text-[#3374FF] transition-colors"
                  >
                    {ind} · · ·
                  </div>
                ))}
              </div>
              <p className="text-center text-[0.8125rem] text-[#bbb] mt-8">
                更多行业客户持续接入中……
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
