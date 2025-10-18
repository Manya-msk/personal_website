import Link from 'next/link' // gets the linking for the pages
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: 'My Personal Website',
  description: 'Portfolio built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {/* NAV BAR */}
        <nav className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
          <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
            {/* Logo or Site Name */}
            <Link href="/" className="text-xl font-semibold hover:text-blue-600">
              Manya Sinvhal
            </Link>

            {/* Navigation Links */}
            <div className="flex gap-6">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <Link href="/projects" className="hover:text-blue-500">Projects</Link>
              <Link href="/research" className="hover:text-blue-500">Research</Link>
              <Link href="/contact" className="hover:text-blue-500">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="pt-20 flex justify-center items-center min-h-screen px-4">
          {children}
        </main>
      </body>
    </html>
  )
}
