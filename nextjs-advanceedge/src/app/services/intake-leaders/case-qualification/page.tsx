import { Metadata } from "next";
import Hero from "@/components/CaseQualification/Hero";
import WhyBottleneck from "@/components/CaseQualification/Whybottleneck";
import FourLayerFramework from "@/components/CaseQualification/Fourlayerframework";
import DailyOperations from "@/components/CaseQualification/Dailyoperations";
import WhoItsFor from "@/components/CaseQualification/Whoitsfor";
import DataReporting from "@/components/CaseQualification/Datareporting";
import ComplianceAndResults from "@/components/CaseQualification/Complianceandresults";
import CaseQualificationFAQ from "@/components/CaseQualification/Casequalificationfaq";
import CaseQualificationHero from "@/components/CaseQualification/CaseQualificationHero";
export const metadata: Metadata = {
  title:
    "Case Qualification for Law Firms & Legal Marketing Agencies | AdvanceEdge",
  description:
    "Case qualification services for law firms and legal marketing agencies. Primary screening, secondary QC, docket health reviews, and campaign/vendor intelligence that turn raw leads into clean, qualified cases.",
  alternates: {
    canonical: "https://advanceedgellc.com/case-qualification-services",
  },
  openGraph: {
    title:
      "Case Qualification for Law Firms & Legal Marketing Agencies | AdvanceEdge",
    description:
      "Case qualification services for law firms and legal marketing agencies. Primary screening, secondary QC, docket health reviews, and campaign/vendor intelligence that turn raw leads into clean, qualified cases.",
    url: "https://advanceedgellc.com/case-qualification-services",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between intake and case qualification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Intake is about capturing information about who called, what happened, and basic facts. Case qualification is about deciding whether that matter fits your firm's criteria and deserves attorney attention. In practice, that means adding structured filters, checks, and decision rules on top of raw intake data so you're not treating every inquiry like it's equal.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need case qualification if we already have an internal intake team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, especially if attorneys are still reviewing a large volume of marginal files. Case qualification can sit behind your internal intake team, handling secondary QC, docket health reviews, and campaign/vendor reporting while your staff continues to answer calls and build relationships with clients.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle case qualification across multiple practice areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Criteria, scripts, and workflows are customized for each area you run — Mass Tort, PI, MVA, family, estate, immigration, and more. The same qualification engine can support all of them.",
      },
    },
    {
      "@type": "Question",
      name: "How does case qualification help legal marketing agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A third-party case qualification program gives agencies and their law-firm clients a shared, objective layer that shows exactly how many leads became qualified opportunities, how many signed, and why some didn't.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to implement a case qualification program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For a single practice area with clear criteria, you can usually define rules, scripts, and workflows in a couple of weeks and start live qualification shortly after.",
      },
    },
    {
      "@type": "Question",
      name: "What if our criteria change over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The program is built for that. When your risk tolerance, damage thresholds, or focus areas shift, the qualification rules are updated and tested. Reporting then shows you how those changes impact lead volume, case quality, and signed retainers over time.",
      },
    },
  ],
};

export default function CaseQualificationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <CaseQualificationHero/>
      <WhyBottleneck />
      <FourLayerFramework />
      <DailyOperations />
      <WhoItsFor />
      <DataReporting />
      <ComplianceAndResults />
      <CaseQualificationFAQ />
    </main>
  );
}