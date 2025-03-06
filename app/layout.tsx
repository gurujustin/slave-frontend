import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./fonts.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Include regular, bold, and black weights
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Fast Cotton Picker - SLAVE Token",
  description: "Hold $SLAVE and earn rewards every 30 seconds",
    generator: 'gurujustin'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="font-glacial">{children}</body>
    </html>
  )
}



import './globals.css'