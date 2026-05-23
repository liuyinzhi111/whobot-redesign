import { Mail, Phone, MapPin, Send, Globe, MessageCircle } from "lucide-react"

const linkGroups = [
  {
    title: "产品",
    links: ["数字员工库", "价格说明", "核心优势", "客户案例"],
  },
  {
    title: "解决方案",
    links: ["销售外呼", "客户回访", "招聘助理", "行业定制"],
  },
  {
    title: "支持",
    links: ["常见问答", "帮助中心", "API 文档", "服务协议"],
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0a0f24] text-white/80">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center shadow-[0_6px_18px_rgba(108,99,240,0.5)]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg">呼波特 WhoBot</div>
                <div className="text-xs text-white/60">AI 电话数字员工</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/65 max-w-sm">
              北京呼波特（WhoBot）人工智能科技有限公司专注于开发基于大模型的 AI
              电话数字员工，致力于用 AI 替代人工为企业带来 10 倍效率提升。
            </p>

            <div className="flex items-center gap-3 mt-6">
              {[Send, Globe, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            {linkGroups.map((g) => (
              <div key={g.title}>
                <h4 className="text-white font-semibold mb-4 text-[0.95rem]">
                  {g.title}
                </h4>
                <ul className="space-y-3">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-[0.95rem]">
              联系我们
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-cyan" />
                <a
                  href="mailto:donglianping@whobot.com"
                  className="text-white/70 hover:text-white transition-colors break-all"
                >
                  donglianping@whobot.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-cyan" />
                <a
                  href="tel:13426196685"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  134-2619-6685
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-cyan" />
                <span className="text-white/70 leading-relaxed">
                  北京市朝阳区君子科技大厦 6 层
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>
            Copyright © 2026 Beijing WhoBot AI Technology Co., Ltd. All Rights
            Reserved.
          </span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/80 transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              服务条款
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              京ICP备 xxxxxxxx 号
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
