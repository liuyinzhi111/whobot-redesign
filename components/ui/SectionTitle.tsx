interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "center" | "left"
  highlight?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  highlight,
}: SectionTitleProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left"

  let titleNode: React.ReactNode = title
  if (highlight && title.includes(highlight)) {
    const [before, after] = title.split(highlight)
    titleNode = (
      <>
        {before}
        <span className="text-gradient-hero">{highlight}</span>
        {after}
      </>
    )
  }

  return (
    <div className={`${alignCls} max-w-2xl mb-12`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-blue-50 text-brand-blue border border-blue-100">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-brand-ink mb-3 leading-tight">
        {titleNode}
      </h2>
      {subtitle && (
        <p className="text-brand-body text-[0.95rem] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
