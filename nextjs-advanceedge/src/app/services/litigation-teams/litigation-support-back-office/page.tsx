import type { Metadata } from "next";
import LitigationHero from "@/components/litigationTeams/LitigationHero";
import WhyWorkBreaks from "@/components/litigationTeams/WhyWorkBreaks";
import DayToDayServices from "@/components/litigationTeams/DayToDayServices";
import HowFirmsUseUs from "@/components/litigationTeams/HowFirmsUseUs";
import LitigationProcess from "@/components/litigationTeams/LitigationProcess";
import HumanLed from "@/components/litigationTeams/HumanLed";
import LitigationOperationsFeatures from "@/components/litigationTeams/LitigationOperationsFeatures";
import LitigationFaq from "@/components/litigationTeams/LitigationFaq";
import { faqItems } from "@/components/litigationTeams/faqItems";

const PAGE_PATH = "/services/litigation-teams/litigation-support-back-office";
const TITLE = "Litigation Support & Legal Back-Office Services | AdvanceEdge";
const DESCRIPTION =
  "Litigation support and back-office teams for high-volume firms: lead cleanup, contract packets, call QA, data entry and reporting inside your systems.";

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

export default function LitigationSupportPage() {
  return (
    <main className="bg-white min-h-screen text-slate-800">
      <LitigationHero />
      <WhyWorkBreaks />
      <DayToDayServices />
      <HowFirmsUseUs />
      <LitigationProcess />
      <HumanLed />
      <LitigationOperationsFeatures />
      <LitigationFaq />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}