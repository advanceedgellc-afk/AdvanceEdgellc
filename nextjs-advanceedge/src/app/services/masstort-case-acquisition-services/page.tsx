import Link from "next/link";
import { FaGavel, FaChartLine, FaUsers, FaCheckCircle } from "react-icons/fa";
import HeroSection from '@/components/caseAquation/HeroSection';
import WhyChooseSection from '@/components/caseAquation/WhyChooseSection';
import CaseAcquisitionProcess from '@/components/caseAquation/CaseAcquisitionProcess';
import WhoWeServe from '@/components/caseAquation/WhoWeServe';
import TypesOfCases from '@/components/caseAquation/TypesOfCases';
import WhyWorkWithUs from '@/components/caseAquation/WhyWorkWithUs';
import FAQSection from "@/components/caseAquation/FAQSection";
import CaseAcquisitionHero from "@/components/caseAquation/CaseAcquisitionHero";
import { Metadata } from "next";

export const metadata: Metadata = {
      title: "Masstort Case Acquisition Services | AdvanceEdge Legal Growth Solutions",
      description:
        "AdvanceEdge delivers qualified mass tort and personal injury case acquisition services, helping law firms grow high-value dockets with compliant intake and pre-vetted leads.",
        alternates: {
          canonical: "https://advanceedgellc.com/masstort-case-acquisition-services",
        },
        
      openGraph: {
        title: "Masstort Case Acquisition Services | AdvanceEdge Legal Growth Solutions",
        description:
          "AdvanceEdge delivers qualified mass tort and personal injury case acquisition services, helping law firms grow high-value dockets with compliant intake and pre-vetted leads.",
        url: "https://advanceedgellc.com/masstort-case-acquisition-services",
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
            text: "We offer fully exclusive or limited-share leads to prevent oversaturation. Our market analysis ensures claim viability, protecting your firm’s competitive advantage.",
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
      <HeroSection />
          {/* CaseAcquisitionHero Section */}
          <CaseAcquisitionHero />
   {/* WhyChooseSection */}
      <WhyChooseSection />
{/* CaseAcquisitionProcess */}
      <CaseAcquisitionProcess />
{/* WhoWeServe Section */}
      <WhoWeServe/>
{/* TypesOfCases Section */}
      <TypesOfCases/>   

{/* WhyWorkWithUs Section */}
     <FAQSection/>     
     {/* WhyWorkWithUs Section */}
     <WhyWorkWithUs/>   

    </main>
  );
}
