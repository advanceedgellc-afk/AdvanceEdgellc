import type { Metadata } from "next";
import RecordReviewHero from "@/components/RecordReview/RecordReviewHero";
import MedicalRecordReviewAppOne from "@/components/RecordReview/MedicalRecordReviewAppOne";
import MedicalRecordReviewAppTwo from "@/components/RecordReview/MedicalRecordReviewAppTwo";
import MedicalRecordReviewAppThree from "@/components/RecordReview/MedicalRecordReviewAppThree";
import RecordReviewFaqs from "@/components/RecordReview/RecordReviewFaqs";

export const metadata: Metadata = {
  title: "Medical Record Review for Law Firms | AdvanceEdge",
  description:
    "Clinician-led medical record review for Mass Tort and PI: proof-of-use screens, chronologies, issue lists and settlement packets.",
  alternates: { canonical: "/services/litigation-teams/medical-record-review" },
};

export default function MedicalRecordReviewPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-[#FF9A28]/30">
      <RecordReviewHero />
      <MedicalRecordReviewAppOne />
      <MedicalRecordReviewAppTwo />
      <MedicalRecordReviewAppThree />
      <RecordReviewFaqs />
    </div>
  );
}