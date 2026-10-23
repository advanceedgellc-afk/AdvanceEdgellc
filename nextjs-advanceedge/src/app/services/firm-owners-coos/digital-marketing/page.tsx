import type { Metadata } from "next";
import HeroSection from "@/components/digitalSolutions/HeroSection";
import ScaleYourFirmSection from "@/components/digitalSolutions/ScaleYourFirmSection";
import WebDevelopmentSection from "@/components/digitalSolutions/WebDevelopmentSection";
import DigitalMarketingSection from "@/components/digitalSolutions/DigitalMarketingSection";
import WhyDigitalSolutions from "@/components/digitalSolutions/WhyDigitalSolutions";
import HowItWorks from "@/components/digitalSolutions/HowItWorks";
import WhyChooseAdvanceEdge from "@/components/digitalSolutions/WhyChooseAdvanceEdge";
import FAQSection from "@/components/digitalSolutions/FAQSection";
import { faqItems } from "@/components/digitalSolutions/faqItems";

const PAGE_PATH = "/services/firm-owners-coos/digital-marketing";
const TITLE = "Law Firm Digital Marketing, SEO & Websites | AdvanceEdge";
const DESCRIPTION =
  "Law firm web development, SEO and paid ads built around intake, so the leads your marketing pays for turn into signed cases.";

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
// Bullet emoji are swapped for plain bullets in the data Google reads.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/🔹\s*/g, "• "),
    },
  })),
};

export default function DigitalMarketingPage() {
  return (
    <main>
      <HeroSection />
      <ScaleYourFirmSection />
      <WebDevelopmentSection />
      <DigitalMarketingSection />
      <WhyDigitalSolutions />
      <HowItWorks />
      <FAQSection />
      <WhyChooseAdvanceEdge />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}