"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useState } from "react"
import { ChevronDown, HelpCircle, Phone } from "lucide-react"

const faqs = [
  {
    q: "WhoBot AI数字员工的价格介绍？",
    a: "官网成熟的数字员工产品。坐席费用 750~1350 元/月/坐席，按月计费 + 按需消耗，灵活组合。官网雇佣的员工 0 元定制费，其它定制需求收取 2000-5000 元不等。",
  },
  {
    q: "上线需要多久？",
    a: "官网成熟的数字员工产品，最快 1-3 个工作日即可上线。若有个性化定制需求，视复杂度通常在 1-2 周内完成交付。",
  },
  {
    q: "一天能打多少通电话？",
    a: "单个数字员工一天最高外呼 800 通。如果需要更大量，可以增加坐席数量，支持弹性扩容。比如做活动邀约时临时加坐席，活动结束后减少。10万通/月的任务大约 5 个坐席。计算方式：10万/30日/800通=4.1（5个坐席）；接听类的按照并发收费，就跟人一样，同一时间需要几个人接电话就买几个坐席，不限制通话数量，一个坐席只支持同一时间一个电话进线量。",
  },
  {
    q: "AI 能加微信吗？怎么加？",
    a: "支持多种加微方式，加微成功率与人工团队基本一致：\n1. 通话中即时发短信，短信含二维码链接，用户扫码即加\n2. RPA 直接操作企业微信，自动发送好友申请\n3. 通话中报号码，引导对方主动添加\n目前仅支持企业微信（企微），暂不支持个人微信。",
  },
  {
    q: "能对接我们的 CRM 系统吗？",
    a: `可以，提供标准 API 接口文档，对接后实现完整数据闭环：\n- 带客户信息外呼（如"张姐您好，小王老师说您二胡学得不错"）\n- 通话结果自动回写 CRM，无需人工录入\n- 根据自定义条件自动触发呼叫任务\n支持实时双向数据同步，接入后 CRM 与 AI 系统保持数据一致。`,
  },
  {
    q: "AI 的声音可以定制吗？",
    a: "可根据业务场景选择最匹配的声音风格，也可上传录音进行专属声音复刻，打造品牌专属 AI 形象。需定制专属音色，可联系在线客服获取方案。",
  },
  {
    q: "AI 的知识库容量有限制吗？",
    a: "没有硬性限制（单次最多上传 5 个文件，最大 50M）。可根据业务需求灵活加载以下内容：\n- 产品手册、价格表\n- FAQ 常见问题库\n- 话术脚本与销售逻辑库\n- 行业专属知识与政策文档",
  },
  {
    q: "数据安全怎么保障？客户数据会泄露吗？",
    a: "提供三级数据安全方案，可按需选择。支持私有化部署，符合等保三级要求。所有数据传输均采用加密通道，客户数据严格隔离存储，确保不泄露、不滥用。",
  },
  {
    q: "接通率一般能达到多少？",
    a: "接通率并非由 AI 单方面决定，核心取决于行业属性、线索质量与话术逻辑。同等条件下，AI 效果可达人工团队水平，且成本更低、执行更稳定。建议优先使用实名卡线路，在工作日黄金时段外呼，并持续更新线索库，以获得最佳接通效果。",
  },
  {
    q: "为什么企业微信响应不及时？",
    a: "咨询量较大，暂无专职销售，建议直接提出需求以便快速响应。您也可以拨打客服电话 010-52107595 或 134-2619-6685，我们会尽快为您安排专业顾问对接。",
  },
  {
    q: "是否有渠道政策？",
    a: "有渠道政策，具体由商务同事详细介绍合作模式和分润方案。欢迎有客户资源的企业或个人申请成为 WhoBot 渠道合作伙伴。",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl bg-white border border-[#EEF2FA] shadow-[0_2px_8px_rgba(50,87,142,0.04)] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
      >
        <span className="text-[0.9375rem] sm:text-[1rem] font-semibold text-[#1A1A1A] leading-snug">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#999] flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
          <div className="pt-2 border-t border-dashed border-[#E8ECF3]">
            <p className="text-[0.875rem] sm:text-[0.9375rem] text-[#555] leading-relaxed whitespace-pre-line">
              {a}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="pt-14 lg:pt-[4.5rem] bg-[#F8F8FC]">
        {/* Hero */}
        <section className="relative overflow-hidden pb-12 pt-16 sm:pt-24">
          <div className="absolute top-0 left-0 right-0 h-[35rem] overflow-hidden z-0">
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
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-md mb-5"
              style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
            >
              <HelpCircle className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-[#1A1A1A] leading-tight mb-4">
              呼波特 AI 常见问题
            </h1>
            <p className="text-[0.9375rem] sm:text-[1rem] text-[#777] max-w-2xl mx-auto leading-relaxed">
              覆盖产品体验、合作渠道、技术集成、功能细节等核心问题，快速找到您所需的答案
            </p>
          </div>
        </section>

        {/* FAQ list */}
        <section className="pb-20">
          <div className="max-w-[52rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="flex flex-col gap-4">
              {faqs.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>

            {/* Contact */}
            <div className="mt-12 rounded-2xl bg-white border border-[#EEF2FA] p-6 sm:p-8 shadow-[0_4px_16px_rgba(50,87,142,0.04)] text-center">
              <h3 className="text-[1.1rem] font-bold text-[#1A1A1A] mb-2">
                没有找到您想要的答案？
              </h3>
              <p className="text-[0.875rem] text-[#777] mb-5">
                欢迎直接联系我们，专业顾问将为您解答
              </p>
              <a
                href="tel:01052107595"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-[0.9375rem] font-medium shadow-btn-blue hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)" }}
              >
                <Phone className="w-4 h-4" />
                立即咨询：010-52107595
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
