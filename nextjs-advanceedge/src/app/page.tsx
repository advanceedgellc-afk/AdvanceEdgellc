// app/page.tsx
import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import Hero from "@/components/hero/Hero"
import AboutSection from "@/components/AboutSection"
import WhoWeHelpSlider from "@/components/WhoWeHelpSlider"
import ServicesSection from "@/components/ServicesSection"
import WhyChooseUsSection from "@/components/WhyChooseUsSection"
import FAQSection from "@/components/FAQSection"
import { FaGavel, FaArrowRight } from "react-icons/fa"
import { client } from "@/sanity/client"
import { urlFor } from "@/lib/sanity"
import type { Post } from "@/types/post"
import ScrollDownArrow from "@/components/ScrollDownArrow";
import BlogPostsSection from "@/components/BlogPostsSection";
import TrustIndicators from "@/components/TrustIndicators";


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
  title: 'AdvanceEdge Legal Support Services | Case Acquisition, Virtual Agents & Digital Marketing',
  description: 'AdvanceEdge empowers legal professionals with expert case acquisition, virtual legal agents, and digital marketing solutions tailored for law firms across the United States.',
  openGraph: {
    title: 'AdvanceEdge | Legal Marketing & Virtual Intake Solutions',
    description: 'Boost your law firm\'s growth with innovative digital solutions, virtual intake specialists, and data-driven marketing strategies.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/',
    siteName: 'AdvanceEdge',
    locale: 'en_US',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/'}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: 'AdvanceEdge - Legal Marketing Solutions for Law Firms',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdvanceEdge | Legal Marketing & Virtual Intake Solutions',
    description: 'Transform your law firm with expert digital marketing and virtual intake solutions.',
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
      <TrustIndicators/>
      <AboutSection />
      <WhoWeHelpSlider />
      <WhyChooseUsSection />
      <ServicesSection />
      <FAQSection />


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
            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/',
            logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/'}/logo.png`,
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
              email: 'info@advancedgellc.com',
              availableLanguage: 'en',
            },
            potentialAction: {
              '@type': 'TradeAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/'}/contact`,
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
    </main>
  )
}
