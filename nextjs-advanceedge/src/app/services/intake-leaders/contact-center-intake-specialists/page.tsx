import type { Metadata } from "next";
import ContactIntakehero from "@/components/ContactIntakespecialists/ContactIntakehero";
import WhyTrustUs from "@/components/ContactIntakespecialists/WhyTrustUs";
import FromFirstContact from "@/components/ContactIntakespecialists/FromFirstContact";
import WhoBenefits from "@/components/ContactIntakespecialists/WhoBenefits";
import HowItWorks from "@/components/ContactIntakespecialists/HowItWorks";
import Compliance from "@/components/ContactIntakespecialists/Compliance";
import Scalability from "@/components/ContactIntakespecialists/Scalability";
import Results from "@/components/ContactIntakespecialists/Results";
import FAQSection from "@/components/ContactIntakespecialists/FAQSection";
import { faqItems } from "@/components/ContactIntakespecialists/faqItems";

const PAGE_PATH = "/services/intake-leaders/contact-center-intake-specialists";
const TITLE = "24/7 Legal Intake & Contact Center Specialists | AdvanceEdge";
const DESCRIPTION =
  "Legal-trained intake specialists answer, qualify and sign cases 24/7 for Mass Tort, PI and other practices, in your CRM, with no weekend premiums.";

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

export default function ContactCenterIntakePage() {
  return (
    <main>
      <ContactIntakehero />
      <WhyTrustUs />
      <FromFirstContact />
      <WhoBenefits />
      <HowItWorks />
      <Compliance />
      <Scalability />
      <Results />
      <FAQSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}