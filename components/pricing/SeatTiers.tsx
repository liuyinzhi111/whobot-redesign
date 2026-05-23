"use client"

import { useState } from "react"
import {
  PhoneOutgoing,
  Filter,
  UserPlus,
  PhoneForwarded,
  Target,
  Check,
} from "lucide-react"

const seats = [
  {
    id: "callback",
    icon: PhoneOutgoing,
    name: "回访型",
    price: "750",
    badge: "基础",
    desc: "回访、通知、信息收集",
    features: [
      "回访、通知、信息收集",
      "适合标准化、流程化任务",
      "单数字员工每日最高外呼 800 次",
      "一个坐席同一时间仅支持单通电话",
    ],
  },
  {
    id: "filter",
    icon: Filter,
    name: "筛选型",
    price: "750",
    badge: "基础",
    desc: "对初步意向进行甄别与过滤",
    features: [
      "对初步意向进行甄别与过滤",
      "筛选出符合标准的目标",
      "单数字员工每日最高外呼 800 次",
      "接听次数不限",
    ],
  },
  {
    id: "wechat",
    icon: UserPlus,
    name: "加微型",
    price: "950",
    badge: "进阶",
    desc: "沟通过程中实时加微",
    features: [
      "沟通过程中实时加微",
      "交付加微结果",
      "单数字员工每日最高外呼 800 次",
      "支持自动建立社群标签",
    ],
  },
  {
    id: "transfer",
    icon: PhoneForwarded,
    name: "转接型",
    price: "950",
    badge: "进阶",
    desc: "实时转人工",
    features: [
      "不管拨打还是接听，均可实时转人工",
      "可设置转接规则与白名单",
      "单数字员工每日最高外呼 800 次",
      "无缝衔接坐席座席",
    ],
  },
  {
    id: "sales",
    icon: Target,
    name: "销售型",
    price: "1350",
    badge: "高级",
    desc: "推荐产品、达成交易",
    features: [
      "向目标用户推荐产品",
      "引导决策并最终达成交易",
      "支持复杂话术分支与异议处理",
      "单数字员工每日最高外呼 800 次",
    ],
  },
]

export default function SeatTiers() {
  const [active, setActive] = useState("wechat")
  const current = seats.find((s) => s.id === active) || seats[0]
  const Icon = current.icon

  return (
    <section className="bg-[#F8F8FC] pb-16">
      <div className="max-w-[75rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Step header */}
        <div className="flex items-baseline gap-3 mb-8">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-white text-base font-bold shadow-md"
            style={{
              background: "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)",
            }}
          >
            一
          </span>
          <div>
            <h3 className="text-[1.25rem] sm:text-[1.5rem] font-bold text-[#1A1A1A]">
              坐席费用
              <span className="ml-2 text-[0.875rem] font-medium text-[#999]">
                （五选一）
              </span>
            </h3>
            <p className="text-[0.8125rem] text-[#777] mt-1">
              按业务场景选择最合适的数字员工类型
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-6">
          {seats.map((s) => {
            const SIcon = s.icon
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`relative rounded-2xl p-3 sm:p-4 border text-left transition-all ${
                  isActive
                    ? "border-transparent text-white shadow-[0_10px_24px_rgba(108,99,240,0.25)]"
                    : "bg-white border-[#EEF2FA] hover:border-[#6C63F0]/30 hover:-translate-y-0.5"
                }`}
                style={
                  isActive
                    ? {
                        background:
                          "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)",
                      }
                    : undefined
                }
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-white/20" : "bg-blue-50"
                    }`}
                  >
                    <SIcon
                      className={`w-4 h-4 ${
                        isActive ? "text-white" : "text-[#3374FF]"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-[0.625rem] px-2 py-0.5 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-blue-50 text-[#3374FF]"
                    }`}
                  >
                    {s.badge}
                  </span>
                </div>
                <div
                  className={`text-[0.95rem] font-bold mb-0.5 ${
                    isActive ? "text-white" : "text-[#1A1A1A]"
                  }`}
                >
                  {s.name}
                </div>
                <div
                  className={`text-[0.7rem] ${
                    isActive ? "text-white/85" : "text-[#999]"
                  }`}
                >
                  ¥ {s.price} 元/月
                </div>
              </button>
            )
          })}
        </div>

        {/* Detail card */}
        <div className="rounded-3xl bg-white border border-[#EEF2FA] shadow-[0_6px_20px_rgba(50,87,142,0.05)] p-6 sm:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-start">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_8px_18px_rgba(108,99,240,0.25)] mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)",
                }}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                {current.name}数字员工
              </h4>
              <p className="text-[0.9rem] text-[#666] mb-6">{current.desc}</p>

              <div className="flex items-baseline gap-1">
                <span className="text-[0.875rem] text-[#666]">¥</span>
                <span className="text-[2.75rem] font-black text-[#3374FF] leading-none">
                  {current.price}
                </span>
                <span className="text-[0.875rem] text-[#666]">元/月/坐席</span>
              </div>
              <p className="text-[0.75rem] text-[#999] mt-2">
                单次外呼约 ¥
                {(parseFloat(current.price) / 30 / 800).toFixed(3)} 元
              </p>

              <button
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium shadow-btn-blue hover:-translate-y-0.5 transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)",
                }}
              >
                立即雇佣
              </button>
            </div>

            <div className="lg:col-span-8">
              <div className="text-[0.875rem] font-semibold text-[#1A1A1A] mb-4">
                能力清单
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {current.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFE] border border-[#EEF2FA]"
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, #5CC4F1 0%, #6C63F0 100%)",
                      }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span className="text-[0.875rem] text-[#444] leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
