import { Headphones, ShieldCheck, Wrench } from "lucide-react"

const items = [
  {
    icon: Headphones,
    title: "硬件设备",
    price: "500",
    unit: "元左右",
    note: "非必须，客户自行购买",
    desc: "可选配呼叫中心专用耳机、声卡等外设。",
  },
  {
    icon: ShieldCheck,
    title: "私有化部署",
    price: "面议",
    unit: "",
    note: "可选",
    desc: "支持本地化部署，符合等保三级要求。",
  },
  {
    icon: Wrench,
    title: "定制开发",
    price: "2000-5000",
    unit: "元/项",
    note: "可选",
    desc: "复杂话术、对接业务系统等需求按项目报价。",
  },
]

export default function OtherFees() {
  return (
    <section className="bg-[#F8F8FC] pb-20">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Step header */}
        <div className="flex items-baseline gap-3 mb-8">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white text-base font-bold shadow-md"
            style={{
              background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)",
            }}
          >
            三
          </span>
          <div>
            <h3 className="text-[1.25rem] sm:text-[1.5rem] font-bold text-[#1A1A1A]">
              其他费用
              <span className="ml-2 text-[0.875rem] font-medium text-[#999]">
                （选用）
              </span>
            </h3>
            <p className="text-[0.8125rem] text-[#777] mt-1">
              全部为可选项，按需付费，无强制绑定
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <div
                key={it.title}
                className="rounded-2xl bg-white p-6 border border-[#EEF2FA] shadow-[0_4px_12px_rgba(50,87,142,0.04)] hover:shadow-[0_10px_28px_rgba(50,87,142,0.08)] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F1F4FE] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#3374FF]" />
                  </div>
                  <span className="text-[0.6875rem] px-2.5 py-1 rounded-full bg-[#FFF3E5] text-[#D08A2C] font-medium">
                    {it.note}
                  </span>
                </div>
                <h4 className="text-[1.05rem] font-bold text-[#1A1A1A] mb-2">
                  {it.title}
                </h4>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-[0.75rem] text-[#666]">¥</span>
                  <span className="text-[#3374FF] text-[1.5rem] font-bold leading-none">
                    {it.price}
                  </span>
                  <span className="text-[0.75rem] text-[#666]">{it.unit}</span>
                </div>
                <p className="text-[0.8125rem] text-[#777] leading-relaxed">
                  {it.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
