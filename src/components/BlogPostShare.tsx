'use client'

import { Facebook, Linkedin, Instagram } from 'lucide-react'

interface BlogPostShareProps {
  title: string
  slug: string
}

/* ✅ Stable TikTok SVG Icon (no lucide, no hydration issues) */
function TikTokIcon({
  className,
  size = 16,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 8.5a6.5 6.5 0 0 1-4.3-1.6v8.6a5.5 5.5 0 1 1-5.5-5.5c.4 0 .8 0 1.2.1v2.9a2.5 2.5 0 1 0 1.8 2.4V2h2.8c.2 1.3.9 2.6 2 3.5a6.4 6.4 0 0 0 2 1z" />
    </svg>
  )
}

export default function BlogPostShare({ title, slug }: BlogPostShareProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'
  const postUrl = `${baseUrl}/blog/${slug}`

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        postUrl
      )}&title=${encodeURIComponent(title)}`,
      color: 'hover:bg-[#0A66C2]',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        postUrl
      )}`,
      color: 'hover:bg-[#4267B2]',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: `https://www.instagram.com/advanceedge_/#`,
      color: 'hover:bg-[#E4405F]',
    },
    {
      name: 'TikTok',
      icon: TikTokIcon,
      url: `https://www.tiktok.com/@advanceedge`,
      color: 'hover:bg-black',
    },
  ] as const

  return (
    <div className="flex gap-2 text-xs text-slate-200">
      {socialLinks.map((social) => {
        const Icon = social.icon

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/80 ${social.color} transition-colors`}
            aria-label={`Share on ${social.name}`}
            title={`Share on ${social.name}`}
          >
            <Icon className="text-white" size={16} />
          </a>
        )
      })}
    </div>
  )
}
