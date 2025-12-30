'use client'

import { FaFacebook, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa6'

interface BlogPostShareProps {
  title: string
  slug: string
}

export default function BlogPostShare({ title, slug }: BlogPostShareProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'
  const postUrl = `${baseUrl}/blog/${slug}`

  const socialLinks = [
    {
        name: 'LinkedIn',
        icon: FaLinkedin,
        url: `https://www.linkedin.com/company/advanceedge-solutions/${encodeURIComponent(postUrl)}`,
        color: 'hover:bg-[#0A66C2]',
      },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: `https://www.facebook.com/advanceedgellc${encodeURIComponent(postUrl)}`,
      color: 'hover:bg-[#4267B2]',
    },
    
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: `https://www.instagram.com/advanceedge_/#`,
      color: 'hover:bg-[#E4405F]',
    },
    {
      name: 'TikTok',
      icon: FaTiktok,
      url: `https://www.tiktok.com/@advanceedge`,
      color: 'hover:bg-[#000000]',
    },
  ]

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
