import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/virtualAgents/HeroSection";
import { faqItems, faqAnswerText } from "@/components/virtualAgents/faqItems";

const PAGE_PATH = "/services/firm-owners-coos/virtual-legal-agents";
const TITLE = "Virtual Legal Agents & Remote Legal Staff | AdvanceEdge";
const DESCRIPTION =
  "Dedicated remote intake specialists, paralegals, records staff and bookkeepers for law firms, from $12/hour, without full-time overhead.";

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
    acceptedAnswer: { "@type": "Answer", text: faqAnswerText(item.answer) },
  })),
};

// Placeholder shown while a below-the-fold section's code loads.
function SectionPlaceholder({ height }: { height: string }) {
  return (
    <div
      className={`${height} bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse`}
      aria-hidden="true"
    />
  );
}

// Split the code for sections below the fold so the hero loads first.
// They are still rendered on the server, so their text stays in the HTML for Google.
const ScaleYourFirmSection = dynamic(
  () => import("@/components/virtualAgents/ScaleYourFirmSection"),
  { loading: () => <SectionPlaceholder height="h-96" /> }
);
const VirtualAgentServiceSection = dynamic(
  () => import("@/components/virtualAgents/VirtualAgentServiceSection"),
  { loading: () => <SectionPlaceholder height="h-96" /> }
);
const MeetVirtualTeamSection = dynamic(
  () => import("@/components/virtualAgents/MeetVirtualTeamSection"),
  { loading: () => <SectionPlaceholder height="h-96" /> }
);
const WhyVaasSmarterSection = dynamic(
  () => import("@/components/virtualAgents/WhyVaasSmarterSection"),
  { loading: () => <SectionPlaceholder height="h-96" /> }
);
const VaasOnboardingSection = dynamic(
  () => import("@/components/virtualAgents/VaasOnboardingSection"),
  { loading: () => <SectionPlaceholder height="h-80" /> }
);
const WhyAdvanceEdgeSection = dynamic(
  () => import("@/components/virtualAgents/WhyAdvanceEdgeSection"),
  { loading: () => <SectionPlaceholder height="h-80" /> }
);
const FAQSection = dynamic(
  () => import("@/components/virtualAgents/FAQSection"),
  { loading: () => <SectionPlaceholder height="h-72" /> }
);

export default function VirtualLegalAgentsPage() {
  return (
    <main>
      <HeroSection />
      <ScaleYourFirmSection />
      <VirtualAgentServiceSection />
      <MeetVirtualTeamSection />
      <WhyVaasSmarterSection />
      <VaasOnboardingSection />
      <WhyAdvanceEdgeSection />
      <FAQSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}