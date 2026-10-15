import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withBA = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * Old URLs (previous site, old sitemap, old links) mapped to the pages that
 * replaced them. Every entry is a permanent redirect.
 */
const legacyRedirects: Array<[source: string, destination: string]> = [
  // Blog moved from /blog to /resources/blog
  ["/blog", "/resources/blog"],
  ["/blog/:slug", "/resources/blog/:slug"],

  // Old service URLs
  ["/services/masstort-case-acquisition-services", "/services/firm-owners-coos/case-acquisition"],
  ["/masstort-case-acquisition-services", "/services/firm-owners-coos/case-acquisition"],
  ["/services/virtual-legal-agents-services/intake-specialists", "/services/intake-leaders/contact-center-intake-specialists"],
  ["/services/virtual-legal-agents-services", "/services/firm-owners-coos/virtual-legal-agents"],
  ["/services/legal-digital-marketing-solutions", "/services/firm-owners-coos/digital-marketing"],
  ["/legal-digital-marketing-solutions", "/services/firm-owners-coos/digital-marketing"],
  ["/case-qualification-services", "/services/intake-leaders/case-qualification"],
  ["/medical-record-retrieval", "/services/litigation-teams/medical-record-retrieval"],
  ["/firm-owners-coos/accounting-trust-bookkeeping", "/services/firm-owners-coos/accounting-trust-bookkeeping"],
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    qualities: [60, 75],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/**" },
    ],
    unoptimized: false,
  },

  productionBrowserSourceMaps: false,
  compress: true,

  experimental: {
    cssChunking: false,
  },

  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },

  async headers() {
    return [
      {
        source: "/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default withBA(nextConfig);