import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'goOrganic - Make the Shift to Organic Living',
  description:
    'Practical guides, honest reviews, and curated products for a healthier home. Your complete guide to organic living.',
  keywords: [
    'organic living',
    'organic products',
    'non-toxic home',
    'organic food',
    'clean beauty',
    'natural products',
  ],
  openGraph: {
    title: 'goOrganic - Make the Shift to Organic Living',
    description: 'Practical guides, honest reviews, and curated products for a healthier home.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

