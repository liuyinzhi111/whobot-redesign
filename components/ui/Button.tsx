import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  children: ReactNode
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-[0.9375rem]",
    lg: "px-6 py-3 text-base",
  }
  const variants = {
    primary:
      "bg-brand-gradient text-white shadow-btn-blue hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(74,144,226,0.45)]",
    ghost:
      "bg-white/80 backdrop-blur-sm border border-blue-100 text-brand-body hover:text-brand-blue hover:border-brand-blue",
    outline:
      "bg-white border border-blue-100 text-brand-ink hover:border-brand-blue hover:text-brand-blue",
  }

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
