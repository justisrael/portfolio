import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import ModalProvider from "@/components/modal-provider"

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
                <div className="md:hidden">
                  {/* Mobile menu button would go here */}
                  <button className="p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
