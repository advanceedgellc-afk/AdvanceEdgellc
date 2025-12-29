// app/about/page.tsx
import type { Metadata } from 'next'
import { FaCheckCircle } from "react-icons/fa";
import HeroSection from "@/components/About/HeroSection";
import AboutAdvanceEdge from "@/components/About/AboutAdvanceEdge";
import PartnerInGrowthCTA from "@/components/About/PartnerInGrowthCTA";
import IndustryExpertiseSection from "@/components/About/IndustryExpertiseSection";
import CommitmentSection from "@/components/About/CommitmentSection";
import OurApproachSection from "@/components/About/OurApproachSection";

// ✅ NEW: SEO Meta tags for About page
export const metadata: Metadata = {
  title: 'About AdvanceEdge | Virtual Legal Support & Mass Tort Experts',
  description: 'Learn about AdvanceEdge, a virtual legal support and digital solutions partner specializing in mass tort litigation, legal operations, and digital transformation for law firms.',
  openGraph: {
    title: 'About AdvanceEdge | Legal Marketing & Intake Solutions',
    description: 'Discover how AdvanceEdge empowers law firms with innovative digital solutions and proven growth strategies to increase client acquisition.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'}/about`,
    siteName: 'AdvanceEdge',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'}/og-about.jpg`,
        width: 1200,
        height: 630,
        alt: 'About AdvanceEdge - Legal Marketing Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AdvanceEdge | Legal Marketing & Intake Solutions',
    description: 'Learn how AdvanceEdge helps law firms grow with digital solutions and innovative intake strategies.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'}/og-about.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'}/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'legal marketing company',
    'law firm marketing solutions',
    'legal intake software',
    'virtual intake agents',
    'law firm growth',
    'legal digital solutions',
    'client acquisition for law firms',
  ],
}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      
      {/* AboutAdvanceEdge Section */}
      <AboutAdvanceEdge />
      
      {/* PartnerInGrowthCTA Section */}
      <PartnerInGrowthCTA />
      
      {/* IndustryExpertiseSection Section */}
      <IndustryExpertiseSection />
      
      {/* CommitmentSection Section */}
      <CommitmentSection />
      
      {/* OurApproachSection Section */}
      <OurApproachSection />
    </main>
  );
}
