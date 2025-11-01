import Link from 'next/link'
import { Leaf, Mail, Twitter, Facebook, Instagram } from 'lucide-react'

const footerNavigation = {
  main: [
    { name: 'Start Here', href: '/start-here' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
  ],
  resources: [
    { name: 'Certifications Guide', href: '/resources/certifications' },
    { name: 'Brand Directory', href: '/resources/brand-directory' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">goOrganic</span>
            </Link>
            <p className="text-white/90 mb-4 max-w-md text-base">
              Practical guides, honest reviews, and curated products for a healthier home.
              Make the shift to organic living—one choice at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Navigation</h3>
            <ul className="space-y-2">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded underline-offset-4 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Resources</h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded underline-offset-4 hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/90 text-sm">
          <p>&copy; {new Date().getFullYear()} goOrganic. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link 
              href="/privacy" 
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-white/70" aria-hidden="true">|</span>
            <Link 
              href="/terms" 
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded underline-offset-4 hover:underline"
            >
              Terms of Service
            </Link>
            <span className="text-white/70" aria-hidden="true">|</span>
            <Link 
              href="/disclosure" 
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded underline-offset-4 hover:underline"
            >
              Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

