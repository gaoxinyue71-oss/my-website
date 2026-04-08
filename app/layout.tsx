import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '高新越 — 采销经理 · 时装买手',
  description: '高新越个人主页，10年+时装买手经验，互联网电商运营背景，深耕品类增长与供应链管理。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
