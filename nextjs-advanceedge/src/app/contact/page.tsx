// app/contact/page.tsx
import type { Metadata } from 'next'
import ContactPageClient from './client'

export const metadata: Metadata = {
  title: 'Contact AdvanceEdge | Legal Intake & Operations Support',
  description: 'Talk to AdvanceEdge about 24/7 legal intake, case qualification, medical record retrieval and review, and virtual legal staff.',
  openGraph: {
    title: 'Contact AdvanceEdge | Legal Intake & Operations Support',
    description: 'Talk to AdvanceEdge about 24/7 legal intake, case qualification, medical record retrieval and review, and virtual legal staff.',
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
    title: 'Contact AdvanceEdge | Legal Intake & Operations Support',
    description: 'Talk to AdvanceEdge about 24/7 legal intake, case qualification, medical record retrieval and review, and virtual legal staff.',
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
