import styles from "./HeroVoicePanel.module.css"

const tags = [
  { text: "正在对话", dotClass: styles.dotGreen, posClass: styles.tag1 },
  { text: "意向：A 级", dotClass: styles.dotGold, posClass: styles.tag2 },
  { text: "已生成通话摘要", dotClass: styles.dotCyan, posClass: styles.tag3 },
  { text: "推送给销售跟进", dotClass: styles.dotCyan, posClass: styles.tag4 },
]

export default function HeroVoicePanel() {
  return (
    <div className={styles.container}>
      {/* 呼吸光晕 */}
      <div className={`${styles.halo} ${styles.halo2}`} />
      <div className={`${styles.halo} ${styles.halo1}`} />

      {/* 声波圆形分布 */}
      <div className={styles.waveRing}>
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
        <span className={styles.waveBar} />
      </div>

      {/* 中央头像 */}
      <div className={styles.avatarWrap}>
        <div className={styles.avatar}>
          <img src="/images/avatar-bot.svg" alt="呼波特" />
        </div>
        <span className={styles.avatarName}>呼波特 · 超级销冠</span>
        <span className={styles.avatarSub}>AI 电话数字员工 · 在线</span>
      </div>

      {/* 浮动标签 */}
      {tags.map((tag) => (
        <div key={tag.text} className={`${styles.tag} ${tag.posClass}`}>
          <span className={`${styles.tagDot} ${tag.dotClass}`} />
          {tag.text}
        </div>
      ))}
    </div>
  )
}
