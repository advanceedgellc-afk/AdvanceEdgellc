// app/contact/page.tsx
import type { Metadata } from 'next'
import ContactPageClient from './client'

export const metadata: Metadata = {
  title: 'Contact AdvanceEdge | Legal Support, Case Acquisition & Virtual Agents',
  description: 'Get in touch with AdvanceEdge to learn how expert legal support, case acquisition, and virtual legal agents can help your firm scale operations and mass tort campaigns.',
  openGraph: {
    title: 'Contact AdvanceEdge | Legal Marketing Solutions',
    description: 'Reach out to AdvanceEdge today. We\'re here to help your law firm grow with cutting-edge marketing and intake solutions.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/'}/contact`,
    siteName: 'AdvanceEdge',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/'}/og-contact.jpg`,
        width: 1200,
        height: 630,
        alt: 'Contact AdvanceEdge - Legal Marketing Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AdvanceEdge | Legal Marketing Solutions',
    description: 'Get in touch with AdvanceEdge. Let\'s discuss how to transform your legal practice.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/'}/og-contact.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com/'}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'contact law firm marketing',
    'legal solutions inquiry',
    'intake specialists',
    'virtual agents for law firms',
    'legal marketing consultation',
    'law firm growth strategy',
    'digital solutions for attorneys',
  ],
}

export default function ContactPage() {
  return <ContactPageClient />
}
