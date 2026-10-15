import type { Metadata } from 'next'
import Hero from "@/components/hero/Hero"
import Statssection from '@/components/Statssection'
import AboutSection from "@/components/AboutSection"


import FAQSection from "@/components/FAQSection"
import { faqItems } from "@/components/faqItems"
import { client } from "@/sanity/client"
import type { Post } from "@/types/post"
import ScrollDownArrow from "@/components/ScrollDownArrow"
import BlogPostsSection from "@/components/BlogPostsSection"
import Whoweworkwith from "@/components/Whoweworkwith"
import Whatwedo from "@/components/Whatwedo"
import { SITE_URL } from "@/lib/site";

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
    url: SITE_URL,
    siteName: 'AdvanceEdge',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/og-home.jpg`,
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
    images: [`${SITE_URL}/og-home.jpg`],
    creator: '@AdvanceEdge',
  },
  alternates: {
    canonical: SITE_URL,
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
  authors: [{ name: 'AdvanceEdge Team', url: SITE_URL }],
  creator: 'AdvanceEdge',
  publisher: 'AdvanceEdge',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
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
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'AdvanceEdge',
            url: SITE_URL,
            logo: `${SITE_URL}/Logo-ae.webp`,
            description: 'AdvanceEdge provides digital marketing and virtual intake solutions for law firms.',
            sameAs: [
              'https://www.linkedin.com/company/advanceedge',
              'https://www.facebook.com/advanceedge',
              'https://twitter.com/advanceedge',
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1008 Hamilton St',
              addressLocality: 'Immokalee',
              addressRegion: 'FL',
              postalCode: '34142',
              addressCountry: 'US',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              telephone: '832.937.7738',
              email: 'info@advanceedgellc.com',
              availableLanguage: 'en',
            },
            potentialAction: {
              '@type': 'TradeAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/contact`,
                actionPlatform: ['DesktopWebPlatform', 'MobileWebPlatform'],
              },
              result: {
                '@type': 'Thing',
                name: 'Legal Marketing Consultation',
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  )
}