'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Start Here', href: '/start-here' },
  { name: 'Kitchen & Food', href: '/kitchen-food' },
  { name: 'Home & Cleaning', href: '/home-cleaning' },
  { name: 'Beauty & Personal Care', href: '/beauty-personal-care' },
  { name: 'Bedroom & Sleep', href: '/bedroom-sleep' },
  { name: 'Family & Baby', href: '/family-baby' },
  { name: 'Wellness & Supplements', href: '/wellness-supplements' },
  { name: 'Resources', href: '/resources' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background border-b border-primary/10 sticky top-0 z-50">
      <nav className="container-custom" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Leaf className="h-6 w-6 text-primary group-hover:text-highlight transition-colors" />
              <span className="text-xl font-bold text-primary">goOrganic</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium text-text hover:text-primary transition-colors rounded-md hover:bg-primary/5'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 text-text hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-primary/10 py-4">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-base font-medium text-text hover:text-primary hover:bg-primary/5 transition-colors rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

