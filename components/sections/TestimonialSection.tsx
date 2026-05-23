import { Quote, TrendingUp, Users, Phone } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"

const cases = [
  {
    industry: "电商零售",
    client: "某头部连锁品牌",
    metric: "+38%",
    metricLabel: "订单转化率",
    icon: TrendingUp,
    quote:
      "用 WhoBot 替代了 60% 的外呼坐席，线索转化提升了一个量级，团队再也不用为夜间排班发愁。",
    author: "市场总监 · 王女士",
  },
  {
    industry: "教育培训",
    client: "全国 K12 教育机构",
    metric: "10×",
    metricLabel: "外呼效率",
    icon: Phone,
    quote:
      "试听课邀约从一人一天 80 通到 800 通，转化率不降反升，家长普遍以为是真人在沟通。",
    author: "招生负责人 · 李老师",
  },
  {
    industry: "金融保险",
    client: "上市保险公司",
    metric: "100%",
    metricLabel: "续保提醒覆盖",
    icon: Users,
    quote:
      "续保提醒、保单升级、理赔进度全自动闭环，客户满意度评分稳定在 4.8 分以上。",
    author: "运营总监 · 张先生",
  },
]

const partnerLogos = [
  "新东方", "京东", "美团", "携程", "平安", "招商银行",
  "OPPO", "vivo", "顺丰", "中通", "蔚来", "理想",
]

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="py-16 lg:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <SectionTitle
          eyebrow="客户成功案例"
          title="300+ 企业的共同选择"
          subtitle="了解 WhoBot 的最新技术与应用案例"
          highlight="共同选择"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.client}
                className="relative rounded-2xl bg-white border border-blue-50 p-6 lg:p-7 shadow-soft hover:shadow-brand hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-blue-50 text-brand-blue font-medium">
                    {c.industry}
                  </span>
                  <Quote className="w-7 h-7 text-brand-blue/15" />
                </div>

                <div className="flex items-end gap-3 mb-4">
                  <div className="text-[2rem] font-black text-gradient-hero leading-none">
                    {c.metric}
                  </div>
                  <div className="text-xs text-brand-body pb-1.5">
                    {c.metricLabel}
                  </div>
                </div>

                <p className="text-[0.9375rem] text-brand-body leading-relaxed mb-6 min-h-[5rem]">
                  &ldquo;{c.quote}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-blue-50">
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">
                      {c.client}
                    </div>
                    <div className="text-xs text-brand-muted mt-0.5">
                      {c.author}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blueMid to-brand-blue flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Partner logos marquee */}
        <div className="mt-16 lg:mt-20">
          <p className="text-center text-xs text-brand-muted mb-6 tracking-wider">
            合作伙伴遍布各行各业
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex gap-4 animate-marquee" style={{ width: "max-content" }}>
              {[...partnerLogos, ...partnerLogos].map((p, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-6 py-3 rounded-xl bg-white border border-blue-50 shadow-soft text-brand-ink font-semibold text-sm whitespace-nowrap"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
