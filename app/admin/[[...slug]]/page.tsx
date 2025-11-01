'use client'

import dynamic from 'next/dynamic'

// Conditionally load TinaAdmin only if credentials are available
const TinaAdmin = dynamic(
  () =>
    process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN
      ? import('tinacms').then((mod) => mod.TinaAdmin)
      : Promise.resolve(() => (
          <div className="flex items-center justify-center min-h-screen p-8">
            <div className="text-center max-w-md">
              <h1 className="text-2xl font-bold text-primary mb-4">TinaCMS Not Configured</h1>
              <p className="text-text/70 mb-4">
                To access the TinaCMS admin panel, please configure the following environment
                variables:
              </p>
              <ul className="text-left text-sm text-text/70 space-y-2 mb-4">
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
        )),
  { ssr: false }
)

export default function AdminPage() {
  return <TinaAdmin />
}

