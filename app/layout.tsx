import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Include regular, bold, and black weights
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lightning Fast Gains - LFG Token",
  description: "Hold LFG and earn rewards every minute",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="font-sans bg-black">{children}</body>
    </html>
  )
}



import './globals.css'