import type { Metadata } from "next";
import AccountTrustBookHero from "@/components/AccountTrustBook/AccountTrustBookHero";
import LegalAccounting from "@/components/AccountTrustBook/LegalAccounting";
import WhatOurProps from "@/components/AccountTrustBook/WhatOurProps";
import TrustAccounting from "@/components/AccountTrustBook/TrustAccounting";
import RealEstateAccounting from "@/components/AccountTrustBook/RealEstateAccounting";
import ClientExample from "@/components/AccountTrustBook/ClientExample";
import AccountingTimeline from "@/components/AccountTrustBook/AccountingTimeline";
import HumanAIAccounting from "@/components/AccountTrustBook/HumanAIAccounting";
import FaqSection from "@/components/AccountTrustBook/FaqSection";
import { faqItems } from "@/components/AccountTrustBook/faqItems";

const PAGE_PATH = "/services/firm-owners-coos/accounting-trust-bookkeeping";
const TITLE = "Law Firm Accounting & Trust Bookkeeping | AdvanceEdge";
const DESCRIPTION =
  "Trust and IOLTA bookkeeping, monthly three-way reconciliation and financial reporting for law firms, run by human-led, AI-assisted accounting teams.";

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

export default function AccountingTrustBookkeepingPage() {
  return (
    <main>
      <AccountTrustBookHero />
      <LegalAccounting />
      <WhatOurProps />
      <TrustAccounting />
      <RealEstateAccounting />
      <ClientExample />
      <AccountingTimeline />
      <HumanAIAccounting />
      <FaqSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}