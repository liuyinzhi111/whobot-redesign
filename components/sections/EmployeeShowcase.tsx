"use client"

import Image from "next/image"
import { useState } from "react"
import styles from "./EmployeeShowcase.module.css"

const employees = [
  {
    id: "customer-service",
    name: "智能客服 · 小波",
    industry: "客户服务",
    desc: "7×24 小时在线接听，自动分类工单、智能转人工。",
    skills: ["7×24 接听", "工单分类", "智能转人工"],
    image: "/images/1.png",
  },
  {
    id: "ecommerce-sales",
    name: "电商销售 · 小特",
    industry: "零售电商",
    desc: "新品促销、会员激活、复购召回，全链路触达。",
    skills: ["会员激活", "复购召回", "促销转化"],
    image: "/images/2.png",
  },
  {
    id: "hr-assistant",
    name: "招聘助理 · 小招",
    industry: "人力招聘",
    desc: "海量简历初筛、自动邀约、面试提醒一站式完成。",
    skills: ["简历初筛", "自动邀约", "面试提醒"],
    image: "/images/3.png",
  },
  {
    id: "education-advisor",
    name: "课程顾问 · 小学",
    industry: "教育培训",
    desc: "试听邀约、续费提醒、家长沟通话术专精。",
    skills: ["试听邀约", "续费提醒", "家长沟通"],
    image: "/images/4.png",
  },
  {
    id: "medical-followup",
    name: "随访医生 · 小诊",
    industry: "医疗健康",
    desc: "术后随访、复诊提醒、用药指导，温柔且专业。",
    skills: ["术后随访", "复诊提醒", "用药指导"],
    image: "/images/5.png",
  },
  {
    id: "insurance-advisor",
    name: "保险顾问 · 小保",
    industry: "金融保险",
    desc: "续保提醒、保单升级、理赔进度同步专业话术。",
    skills: ["续保提醒", "保单升级", "理赔同步"],
    image: "/images/6.png",
  },
]

function EmployeePhotoCard({
  employee,
  index,
  activeIndex,
  isActive,
  onActivate,
  onClear,
}: {
  employee: (typeof employees)[number]
  index: number
  activeIndex: number
  isActive: boolean
  onActivate: () => void
  onClear: () => void
}) {
  const hasActive = activeIndex >= 0
  const shiftClass = hasActive && !isActive
    ? index < activeIndex
      ? styles.shiftLeft
      : styles.shiftRight
    : ""

  return (
    <article
      className={`${styles.card} ${styles[`pos${index}`]} ${
        isActive ? styles.hovered : ""
      } ${hasActive && !isActive ? styles.dimmed : ""} ${shiftClass}`}
      onMouseEnter={onActivate}
      onMouseLeave={onClear}
      onTouchStart={onActivate}
    >
      <Image
        src={employee.image}
        alt={employee.name}
        fill
        sizes="(max-width: 599px) 100vw, (max-width: 959px) 180px, 220px"
        priority={index < 3}
        className={styles.image}
      />

      <div className={styles.defaultLabel}>
        <div className={styles.defaultName}>{employee.name}</div>
        <div className={styles.defaultIndustry}>{employee.industry}</div>
      </div>

      <div className={styles.info}>
        <span className={styles.industryPill}>{employee.industry}</span>
        <div className={styles.name}>{employee.name}</div>
        <div className={styles.desc}>{employee.desc}</div>
        <div className={styles.skills}>
          {employee.skills.map((skill) => (
            <span key={skill} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
        <button type="button" className={styles.hireButton}>
          立即雇佣 →
        </button>
      </div>
    </article>
  )
}

export default function EmployeeShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const activeIndex = employees.findIndex((employee) => employee.id === hoveredId)

  return (
    <section id="employee-showcase" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>数字员工精选</span>
          <h2 className={styles.title}>多行业数字员工，随时就绪</h2>
          <p className={styles.subtitle}>
            从客服、销售到招聘、随访，选择最适合你业务场景的 AI 数字员工。
          </p>
        </div>

        <div className={styles.wall} onMouseLeave={() => setHoveredId(null)}>
          {employees.map((employee, index) => (
            <EmployeePhotoCard
              key={employee.id}
              employee={employee}
              index={index}
              activeIndex={activeIndex}
              isActive={hoveredId === employee.id}
              onActivate={() =>
                setHoveredId((current) =>
                  current === employee.id ? null : employee.id
                )
              }
              onClear={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
