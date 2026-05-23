"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "library", label: "数字员工库", href: "/" },
  { id: "pricing", label: "价格说明", href: "/pricing" },
  { id: "advantages", label: "核心优势", href: "/advantages" },
  { id: "cases", label: "客户案例", href: "/cases" },
  { id: "faq", label: "常见问答", href: "/faq" },
  { id: "about", label: "关于我们", href: "/about" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname() || "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-card/80 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="max-w-[100rem] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center h-14 lg:h-[4.5rem]">
          {/* Logo */}
          <div className="flex items-center flex-1 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-3 cursor-pointer flex-shrink-0 outline-none"
              aria-label="呼波特首页"
            >
              <div className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-brand-gradient flex items-center justify-center shadow-glow">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-textOnDark"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="absolute -right-0.5 -top-0.5 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-card" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[1.05rem] font-bold text-brand-ink tracking-wide">
                  呼波特 WhoBot
                </span>
                <span className="hidden sm:inline text-[11px] text-brand-body">
                  AI电话数字员工 · 24小时在岗
                </span>
              </div>
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden ml-auto p-2 rounded-lg hover:bg-primaryLight transition-colors"
              aria-label="打开菜单"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-textPrimary" />
              ) : (
                <Menu className="w-6 h-6 text-textPrimary" />
              )}
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 flex-shrink-0">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="relative text-[0.9375rem] transition-colors font-medium py-2"
                >
                  <span
                    className={
                      isActive
                        ? "text-brand-blue font-semibold"
                        : "text-textPrimary hover:text-brand-blue transition-colors"
                    }
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right action */}
          <div className="hidden lg:flex items-center justify-end gap-3 xl:gap-6 flex-1 min-w-0">
            <button className="text-[0.9375rem] text-textPrimary hover:text-brand-blue font-medium transition-colors">
              登录
            </button>
            <button className="px-5 py-2 rounded-full text-textOnDark text-[0.9375rem] font-medium bg-brand-gradient shadow-btn-blue hover:shadow-glow hover:-translate-y-0.5 transition-all">
              免费试用
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-soft p-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-[0.95rem] font-medium transition-colors ${
                    pathname === item.href
                      ? "bg-primaryLight text-brand-blue"
                      : "text-textPrimary hover:bg-primaryLight"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 py-2.5 rounded-full border border-border text-textPrimary text-sm font-medium">
                  登录
                </button>
                <button className="flex-1 py-2.5 rounded-full text-textOnDark text-sm font-medium bg-brand-gradient shadow-btn-blue">
                  免费试用
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
