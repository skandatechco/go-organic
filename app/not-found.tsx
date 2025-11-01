import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="bg-background min-h-[60vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-text mb-4">
          Page Not Found
        </h2>
        <p className="text-text/70 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button size="lg" asChild>
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  )
}

