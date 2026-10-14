import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import Hero from "@/components/hero/Hero"
import Statssection from '@/components/Statssection'
import AboutSection from "@/components/AboutSection"


import FAQSection from "@/components/FAQSection"
import { client } from "@/sanity/client"
import { urlFor } from "@/lib/sanity"
import type { Post } from "@/types/post"
import ScrollDownArrow from "@/components/ScrollDownArrow"
import BlogPostsSection from "@/components/BlogPostsSection"
import Whoweworkwith from "@/components/Whoweworkwith"
import Whatwedo from "@/components/Whatwedo"

// import LeadForm from "@/components/LeadForm"

const POSTS_QUERY = `
*[
  _type == "post"
  && defined(slug.current)
  && defined(publishedAt)
]
| order(publishedAt desc)
[0...2]{
  _id,
  title,
  slug,
  image,
  publishedAt
}
`

// ✅ SEO Meta tags for homepage (viewport and themeColor removed - moved to layout.tsx)
export const metadata: Metadata = {
  title: 'Legal Intake & Operations Partner for Law Firms | AdvanceEdge',
  description: 'Human-led, AI-accelerated legal intake, case qualification & medical record retrieval for Mass Tort and PI firms. 24/7 coverage. Book a call today.',
  openGraph: {
    title: 'Legal Intake & Operations Partner for Law Firms | AdvanceEdge',
    description: 'Human-led, AI-accelerated legal intake, case qualification & medical record retrieval for Mass Tort and PI firms. 24/7 coverage. Book a call today.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/',
    siteName: 'AdvanceEdge',
    locale: 'en_US',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/'}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: 'AdvanceEdge legal intake and operations',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Intake & Operations Partner for Law Firms | AdvanceEdge',
    description: 'Human-led, AI-accelerated legal intake, case qualification & medical record retrieval for Mass Tort and PI firms. 24/7 coverage. Book a call today.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/'}/og-home.jpg`],
    creator: '@AdvanceEdge',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'law firm marketing',
    'legal marketing agency',
    'virtual intake specialists',
    'law firm intake software',
    'digital marketing for attorneys',
    'client acquisition for law firms',
    'legal intake automation',
    'law firm growth strategies',
    'virtual agents for lawyers',
    'case intake management',
    'law firm digital solutions',
    'legal practice growth',
  ],
  applicationName: 'AdvanceEdge',
  authors: [{ name: 'AdvanceEdge Team', url: 'https://advanceedgellc.com' }],
  creator: 'AdvanceEdge',
  publisher: 'AdvanceEdge',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
}

export default async function Home() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, { next: { revalidate: 30 } })

  return (
    <main>
      <Hero />
      <Statssection/>
      <AboutSection />
      <Whoweworkwith/>
      <Whatwedo/>
    
    
      <FAQSection />
{/* <LeadForm/> */}
      {/* ✅ Related Articles */}
      <section className="my-20">
        <BlogPostsSection posts={posts} />
      </section>

      {/* ✅ PERFECT: ScrollDownArrow BEFORE closing </main> */}
      <ScrollDownArrow />

      {/* ✅ SINGLE JSON-LD - NO DUPLICATES */}
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AdvanceEdge LLC",
            url: "https://www.advanceedgellc.com",
            logo: "https://www.advanceedgellc.com/Logo-ae.webp",
            image: "https://www.advanceedgellc.com/og-home.jpg",
            description:
              "Legal intake and operations partner for law firms and legal marketing agencies.",
            foundingDate: "2011",
            telephone: "+1-832-937-7738",
            email: "info@advanceedgellc.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1008 Hamilton St",
              addressLocality: "Immokalee",
              addressRegion: "FL",
              postalCode: "34142",
              addressCountry: "US",
            },
            areaServed: "US",
            sameAs: [
              "https://www.linkedin.com/company/advanceedge-solutions/",
              "https://www.facebook.com/advanceedgellc",
              "https://www.instagram.com/advanceedge_/",
              "https://www.tiktok.com/@advanceedge",
            ],
          }),
        }}
      />
    </main>
  )
}