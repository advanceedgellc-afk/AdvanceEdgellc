import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', port: '', pathname: '/**' },
    ],
  },
  // ✅ cssChunking: false merges ALL CSS into single inline block
  experimental: {
    cssChunking: false,
  },
  // Remove broken optimizeCss - causes conflicts
};

export default nextConfig;
