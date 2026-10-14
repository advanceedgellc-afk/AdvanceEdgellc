import type { Metadata } from "next";
import MedicalRecordHero from "@/components/MedicalRecordRetrieval/MedicalRecordHero";
import WhyBottleneck from "@/components/MedicalRecordRetrieval/Whybottleneck";
import WhatWeDo from "@/components/MedicalRecordRetrieval/Whatwedo";
import WhoItsFor from "@/components/MedicalRecordRetrieval/Whoitsfor";
import HowItWorks from "@/components/MedicalRecordRetrieval/Howitworks";
import ComplianceAndScale from "@/components/MedicalRecordRetrieval/Complianceandscale";
import IntegratedStack from "@/components/MedicalRecordRetrieval/Integratedstack";
import MedicalRecordFAQ from "@/components/MedicalRecordRetrieval/Medicalrecordfaq";
import { faqItems } from "@/components/MedicalRecordRetrieval/faqItems";

const PAGE_PATH = "/services/litigation-teams/medical-record-retrieval";
const TITLE = "Medical Record Retrieval for Law Firms | AdvanceEdge";
const DESCRIPTION =
  "HIPAA-aware medical record retrieval for law firms and legal marketers: a 90k+ facility database, SettLiT and ConnectMD workflows, and tracked follow-ups.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_PATH,
    siteName: "AdvanceEdge",
    type: "website",
  },
};

// Built from the same questions the page shows, so Google sees exactly what visitors see.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function MedicalRecordRetrievalPage() {
  return (
    <main>
      <MedicalRecordHero />
      <WhyBottleneck />
      <WhatWeDo />
      <WhoItsFor />
      <HowItWorks />
      <ComplianceAndScale />
      <IntegratedStack />
      <MedicalRecordFAQ />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}