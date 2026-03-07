import type { NextConfig } from 'next'

const isGhPages = process.env.GITHUB_ACTIONS === 'true'
const basePath = isGhPages ? '/maden-official-site' : ''

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
    remotePatterns: [],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
