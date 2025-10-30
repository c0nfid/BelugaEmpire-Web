import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BelugaEmpire — Море безграничных возможностей",
  description:
    "Кроссплатформенный Minecraft-сервер с уникальными боссами, кланами, сотнями доп. зачарований и эпическими ивентами. Версии 1.20–1.21.X",
  keywords: ["minecraft", "сервер", "beluga", "empire", "pvp", "pve", "кланы", "боссы"],
  openGraph: {
    title: "BelugaEmpire — Море безграничных возможностей",
    description: "Кроссплатформенный Minecraft-сервер с уникальными боссами и кланами",
    type: "website",
    locale: "ru_RU",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
