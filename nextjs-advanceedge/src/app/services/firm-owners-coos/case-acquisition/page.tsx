import type { Metadata } from "next";
import CaseAcquisitionHero from "@/components/caseAquation/CaseAcquisitionHero";
import WhyChooseSection from "@/components/caseAquation/WhyChooseSection";
import CaseAcquisitionProcess from "@/components/caseAquation/CaseAcquisitionProcess";
import WhoWeServe from "@/components/caseAquation/WhoWeServe";
import TypesOfCases from "@/components/caseAquation/TypesOfCases";
import FAQSection from "@/components/caseAquation/FAQSection";
import WhyWorkWithUs from "@/components/caseAquation/WhyWorkWithUs";
import { faqItems } from "@/components/caseAquation/faqItems";

const PAGE_PATH = "/services/firm-owners-coos/case-acquisition";
const TITLE = "Mass Tort & PI Case Acquisition for Law Firms | AdvanceEdge";
const DESCRIPTION =
  "Pre-qualified Mass Tort and personal injury cases for law firms: compliant intake, medical and legal verification, and exclusive or limited-share leads.";

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

export default function CaseAcquisitionPage() {
  return (
    <main>
      <CaseAcquisitionHero />
      <WhyChooseSection />
      <CaseAcquisitionProcess />
      <WhoWeServe />
      <TypesOfCases />
      <FAQSection />
      <WhyWorkWithUs />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}