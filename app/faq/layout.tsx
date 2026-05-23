import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "常见问答 · 呼波特 WhoBot",
  description: "覆盖产品体验、合作渠道、技术集成、功能细节等核心问题，快速找到您所需的答案。",
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
