import Link from "next/link";
import { Metadata } from "next";
import ContactIntakehero from '@/components/ContactIntakespecialists/ContactIntakehero';
import WhyTrustUs from '@/components/ContactIntakespecialists/WhyTrustUs';
import FromFirstContact from '@/components/ContactIntakespecialists/FromFirstContact';
import WhoBenefits from '@/components/ContactIntakespecialists/WhoBenefits';
import HowItWorks from '@/components/ContactIntakespecialists/HowItWorks';
import Compliance from '@/components/ContactIntakespecialists/Compliance';
import Scalability from '@/components/ContactIntakespecialists/Scalability';
import Results from '@/components/ContactIntakespecialists/Results';

import Legalintakespecialists from '@/components/ContactIntakespecialists/Legalintakespecialists';
import FAQSection from '@/components/ContactIntakespecialists/FAQSection';

export const metadata: Metadata = {
  title: "24/7 Legal Intake & Contact Center Specialists | AdvanceEdge",
  description:
    "Legal-trained intake specialists answer, qualify and sign cases 24/7 for Mass Tort, PI and other practices, in your CRM, with no weekend premiums.",
  alternates: {
    canonical: "https://www.advanceedgellc.com/services/intake-leaders/contact-center-intake-specialists",
  },
  openGraph: {
    title: "24/7 Legal Intake & Contact Center Specialists | AdvanceEdge",
    description:
      "Legal-trained intake specialists answer, qualify and sign cases 24/7 for Mass Tort, PI and other practices, in your CRM, with no weekend premiums.",
    url: "https://www.advanceedgellc.com/services/intake-leaders/contact-center-intake-specialists",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you source and qualify potential claimants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use targeted marketing, data analytics, and AI-driven screening to identify and pre-qualify claimants. Leads undergo medical and legal verification, compliance checks, and eligibility screening to ensure high conversion potential.",
      },
    },
    {
      "@type": "Question",
      name: "How do you differentiate from other case acquisition providers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We focus on quality, compliance, and performance. Our rigorous pre-qualification, exclusive lead options, and customized acquisition strategies ensure higher conversion rates and better ROI for your firm.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure lead exclusivity and prevent saturation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer fully exclusive or limited-share leads to prevent oversaturation. Our market analysis ensures claim viability, protecting your firm's competitive advantage.",
      },
    },
    {
      "@type": "Question",
      name: "What pricing models do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide performance-based, flat-rate, and hybrid pricing to match your firm's needs. You pay only for pre-qualified leads, ensuring maximum ROI and predictable costs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you accommodate firms with fluctuating case intake needs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our services are fully scalable, allowing firms to increase or decrease lead volume on demand with no long-term commitments.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure compliance with legal advertising rules?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We strictly follow ABA, TCPA, HIPAA, and CAN-SPAM regulations. Our ethical marketing ensures full compliance, minimizing risk while maximizing lead quality.",
      },
    },
  ],
};

export default function CaseAcquisition() {
  return (
    <main>
      {/* Hero Section */}
     
      <ContactIntakehero/>
      <WhyTrustUs/>
      <FromFirstContact/>
    <WhoBenefits/>
    <HowItWorks/>
<Compliance/>
<Scalability/>
<Results/>
     
      <FAQSection/>
      

    </main>
  );
}
