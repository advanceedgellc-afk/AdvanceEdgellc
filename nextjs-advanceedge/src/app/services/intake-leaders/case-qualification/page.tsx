import type { Metadata } from "next";
import CaseQualificationHero from "@/components/CaseQualification/CaseQualificationHero";
import WhyBottleneck from "@/components/CaseQualification/Whybottleneck";
import FourLayerFramework from "@/components/CaseQualification/Fourlayerframework";
import DailyOperations from "@/components/CaseQualification/Dailyoperations";
import WhoItsFor from "@/components/CaseQualification/Whoitsfor";
import DataReporting from "@/components/CaseQualification/Datareporting";
import ComplianceAndResults from "@/components/CaseQualification/Complianceandresults";
import CaseQualificationFAQ from "@/components/CaseQualification/Casequalificationfaq";
import { faqItems } from "@/components/CaseQualification/faqItems";

const PAGE_PATH = "/services/intake-leaders/case-qualification";
const TITLE = "Case Qualification for Law Firms & Legal Marketers | AdvanceEdge";
const DESCRIPTION =
  "Four-layer case qualification: primary screening, post-retainer QC, docket health reviews and campaign intelligence that turn raw leads into qualified cases.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_PATH,
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

export default function CaseQualificationPage() {
  return (
    <main>
      <CaseQualificationHero />
      <WhyBottleneck />
      <FourLayerFramework />
      <DailyOperations />
      <WhoItsFor />
      <DataReporting />
      <ComplianceAndResults />
      <CaseQualificationFAQ />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}