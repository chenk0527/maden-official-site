import type { NextConfig } from 'next'

const isGhPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGhPages ? '/maden-official-site' : '',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
    remotePatterns: [],
  },
}

export default nextConfig
