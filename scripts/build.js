#!/usr/bin/env node

/**
 * Conditional build script that only runs TinaCMS build if credentials are available
 * This allows the site to build on Vercel even without TinaCMS credentials
 */

const { execSync } = require('child_process')

const hasTinaCredentials =
  process.env.NEXT_PUBLIC_TINA_CLIENT_ID && process.env.TINA_TOKEN

if (hasTinaCredentials) {
  console.log('✅ TinaCMS credentials found. Running TinaCMS build...')
  try {
    execSync('tinacms build', { stdio: 'inherit' })
    console.log('✅ TinaCMS build completed successfully')
  } catch (error) {
    console.error('❌ TinaCMS build failed:', error.message)
    process.exit(1)
  }
} else {
  console.log('⚠️  TinaCMS credentials not found. Skipping TinaCMS build.')
  console.log('   The site will build without TinaCMS admin panel.')
  console.log('   To enable TinaCMS, add NEXT_PUBLIC_TINA_CLIENT_ID and TINA_TOKEN environment variables.')
}

