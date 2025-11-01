'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import config from '@/tina/config'

// Dynamically import TinaAdmin only on client side
const TinaAdmin = dynamic(() => import('tinacms').then((mod) => mod.TinaAdmin), {
  ssr: false,
})

export default function AdminPage() {
  const [hasCredentials, setHasCredentials] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if TinaCMS credentials are configured
    const clientId = process.env.NEXT_PUBLIC_TINA_CLIENT_ID
    setHasCredentials(!!clientId)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-primary">Loading...</div>
      </div>
    )
  }

  if (!hasCredentials) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8 bg-background">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-primary mb-4">TinaCMS Not Configured</h1>
          <p className="text-text/70 mb-4">
            To access the TinaCMS admin panel, please configure the following environment variables
            in Vercel:
          </p>
          <ul className="text-left text-sm text-text/70 space-y-2 mb-4 bg-primary/5 p-4 rounded">
            <li>• NEXT_PUBLIC_TINA_CLIENT_ID</li>
            <li>• TINA_TOKEN</li>
          </ul>
          <p className="text-sm text-text/60">
            Visit{' '}
            <a
              href="https://tina.io/docs/r/what-is-tinacloud"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              tina.io/docs
            </a>{' '}
            for setup instructions.
          </p>
        </div>
      </div>
    )
  }

  return <TinaAdmin config={config} />
}

