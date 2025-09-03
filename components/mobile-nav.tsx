"use client"

import React from "react"
import Link from "next/link"

export default function MobileNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="md:hidden relative">
      <button className="p-2" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Open mobile menu">
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
      {mobileMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg border z-50 flex flex-col">
          <Link href="/" className="px-4 py-2 text-neutral-800 hover:bg-neutral-100" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="#about" className="px-4 py-2 text-neutral-800 hover:bg-neutral-100" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="#projects" className="px-4 py-2 text-neutral-800 hover:bg-neutral-100" onClick={() => setMobileMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#contact" className="px-4 py-2 text-neutral-800 hover:bg-neutral-100" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
