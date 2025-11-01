'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Leaf, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteNavigation } from '@/types/navigation'

const navigation = siteNavigation.map(item => ({
  name: item.name,
  href: item.href,
  submenu: item.submenu.map(sub => ({
    name: sub.name,
    href: sub.href
  }))
}))

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

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
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu.length > 0 && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-[15px] md:text-base font-medium text-text hover:text-primary transition-colors rounded-md hover:bg-primary/5 nav-link flex items-center'
                  )}
                >
                  {item.name}
                  {item.submenu.length > 0 && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu.length > 0 && openDropdown === item.name && (
                  <div className="absolute left-0 mt-1 w-64 bg-background border border-primary/10 rounded-lg shadow-lg py-2 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-text hover:text-primary hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 text-text hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
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
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex-1 px-3 py-2 text-base font-medium text-text hover:text-primary hover:bg-primary/5 transition-colors rounded-md nav-link focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      onClick={() => item.submenu.length === 0 && setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu.length > 0 && (
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="px-3 py-2 text-text hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                        aria-label={`Toggle ${item.name} submenu`}
                        aria-expanded={openDropdown === item.name}
                      >
                        <ChevronDown className={cn(
                          "h-5 w-5 transition-transform",
                          openDropdown === item.name && "rotate-180"
                        )} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Submenu */}
                  {item.submenu.length > 0 && openDropdown === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-text/80 hover:text-primary hover:bg-primary/5 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
