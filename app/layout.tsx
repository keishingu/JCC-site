import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JCC — 日本クライマースクラブ',
  description: '1958年創立。アルパインクライミング・冬季登攀・岩登り・アイスクライミングを中心とした山岳会。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
