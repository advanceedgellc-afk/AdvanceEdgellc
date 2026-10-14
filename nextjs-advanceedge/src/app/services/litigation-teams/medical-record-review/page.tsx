import type { Metadata } from "next";
import RecordReviewHero from "@/components/RecordReview/RecordReviewHero";
import MedicalRecordReviewAppOne from "@/components/RecordReview/MedicalRecordReviewAppOne";
import MedicalRecordReviewAppTwo from "@/components/RecordReview/MedicalRecordReviewAppTwo";
import MedicalRecordReviewAppThree from "@/components/RecordReview/MedicalRecordReviewAppThree";
import RecordReviewFaqs from "@/components/RecordReview/RecordReviewFaqs";
import { faqItems } from "@/components/RecordReview/faqItems";

const PAGE_PATH = "/services/litigation-teams/medical-record-review";
const TITLE = "Medical Record Review for Law Firms | AdvanceEdge";
const DESCRIPTION =
  "Clinician-led medical record review for Mass Tort and PI: proof-of-use screens, chronologies, issue lists and settlement packets.";

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

export default function MedicalRecordReviewPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-[#FF9A28]/30">
      <RecordReviewHero />
      <MedicalRecordReviewAppOne />
      <MedicalRecordReviewAppTwo />
      <MedicalRecordReviewAppThree />
      <RecordReviewFaqs />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}