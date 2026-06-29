import Link from "next/link";
import { Metadata } from "next";
import AccountTrustBookHero from '@/components/AccountTrustBook/AccountTrustBookHero';
import LegalAccounting from '@/components/AccountTrustBook/LegalAccounting';
import WhatOurProps from '@/components/AccountTrustBook/WhatOurProps';
import TrustAccounting from '@/components/AccountTrustBook/TrustAccounting';
import RealEstateAccounting from '@/components/AccountTrustBook/RealEstateAccounting';
import ClientExample from '@/components/AccountTrustBook/ClientExample';
import AccountingTimeline from '@/components/AccountTrustBook/AccountingTimeline';
import HumanAIAccounting from '@/components/AccountTrustBook/HumanAIAccounting';



import WhoOurServices from '@/components/AccountTrustBook/WhoOurServices';
import HowOurProcess from '@/components/AccountTrustBook/HowOurProcess';
import HumanLedAI from '@/components/AccountTrustBook/HumanLedAI';
import OperationsSections from '@/components/AccountTrustBook/OperationsSections';
import FaqSection from '@/components/AccountTrustBook/FaqSection';

export const metadata: Metadata = {
  title: "Law Firm Accounting and Trust Bookkeeping Services | AdvanceEdge",
  description:
    "Law firm accounting and trust bookkeeping services for solo attorneys, small firms, and high-volume practices. Operating and trust account bookkeeping, IOLTA compliance, three-way reconciliation, and financial reporting delivered by AI-trained legal accounting teams as an extension of your firm.",
  alternates: {
    canonical: "https://advanceedgellc.com/firm-owners-coos/accounting-trust-bookkeeping",
  },
  openGraph: {
    title: "Law Firm Accounting and Trust Bookkeeping Services | AdvanceEdge",
    description:
      "Law firm accounting and trust bookkeeping services for solo attorneys, small firms, and high-volume practices. Operating and trust account bookkeeping, IOLTA compliance, three-way reconciliation, and financial reporting delivered by AI-trained legal accounting teams as an extension of your firm.",
    url: "https://advanceedgellc.com/firm-owners-coos/accounting-trust-bookkeeping",
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

export default function accountingTrustBookkeeping() {
  return (
    <main>
      {/* Hero Section */}
      
    
      <AccountTrustBookHero />
      <LegalAccounting/>
      <WhatOurProps/>
  <TrustAccounting/>
<RealEstateAccounting/>
<ClientExample/>
<AccountingTimeline/>
<HumanAIAccounting/>


  {/* <WhoOurServices/>
  <HowOurProcess/>
  <HumanLedAI/>
  <OperationsSections/> */}
  <FaqSection/>
    </main>
  );
}
