
import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import ModalProvider from "@/components/modal-provider"
import MobileNav from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Israel Eduviere | Fullstack Developer",
  description: "Portfolio of Israel Eduviere, a Fullstack Developer with over 6 years of experience.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ModalProvider />
          <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-neutral-200">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <Link href="/" className="font-medium text-lg">
                  Israel Eduviere
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                  <Link href="/" className="text-neutral-800 hover:text-neutral-600">
                    Home
                  </Link>
                  <Link href="#about" className="text-neutral-800 hover:text-neutral-600">
                    About
                  </Link>
                  <Link href="#projects" className="text-neutral-800 hover:text-neutral-600">
                    Projects
                  </Link>
                  <Link href="#contact" className="text-neutral-800 hover:text-neutral-600">
                    Contact
                  </Link>
                </nav>
                <MobileNav />
              </div>
            </div>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )

}
