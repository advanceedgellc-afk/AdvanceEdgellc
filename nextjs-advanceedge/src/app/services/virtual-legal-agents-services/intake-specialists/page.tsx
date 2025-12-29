import type { Metadata } from "next";
import Link from "next/link";
import IntakeSpecialistsHero from "@/components/intakeSpecialists/IntakeSpecialistsHero";
import WhyChooseSection from "@/components/intakeSpecialists/WhyChooseSection";
import TrustedBySection from "@/components/intakeSpecialists/TrustedBySection";
import IntakeSpecialistsProp from "@/components/intakeSpecialists/IntakeSpecialistsProp";
import IntakeSpecialistsSectionOne from "@/components/intakeSpecialists/IntakeSpecialistsSectionOne";
import IntakeNaturalExtensionSection from "@/components/intakeSpecialists/IntakeNaturalExtensionSection";
import HowItWorks from "@/components/intakeSpecialists/HowItWorks";
import Compliance from "@/components/intakeSpecialists/Compliance";
import CoverageSection from "@/components/intakeSpecialists/CoverageSection";
import StopLosingCasesSection from "@/components/intakeSpecialists/StopLosingCasesSection";
import FAQSection from "@/components/intakeSpecialists/FAQSection";




export const metadata: Metadata = {
  title: "Intake Specialists for Law Firms | Remote Case Intake Services | AdvanceEdge",
  description:
    "Expert intake specialists for law firms. Remote case intake, lead qualification, and client management services that convert inquiries into signed cases.",
    alternates: {
      canonical: "https://advanceedgellc.com/services/virtual-legal-agents-services/intake-specialists",
    },
    
  openGraph: {
    title: "Intake Specialists for Law Firms | AdvanceEdge",
    description:
      "Dedicated intake specialists who handle calls, qualify leads, and manage client intake for your law firm 24/7.",
    url: "https://advanceedgellc.com/intake-specialists",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do intake specialists do for law firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Intake specialists handle incoming client calls, qualify leads based on your criteria, gather case details, schedule consultations, and follow up with prospects to maximize conversion rates.",
      },
    },
    {
      "@type": "Question",
      name: "Are your intake specialists available 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer flexible intake coverage including after-hours, weekends, and holidays to ensure no lead falls through the cracks.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure quality and compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All intake specialists are trained on your specific practice areas, client requirements, and compliance standards. We conduct regular quality reviews and provide detailed reporting.",
      },
    },
    {
      "@type": "Question",
      name: "Can intake specialists handle multiple practice areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our specialists can be trained on your specific practice areas—mass torts, personal injury, workers' compensation, family law, and more.",
      },
    },
  ],
};

export default function IntakeSpecialists() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-slate-950 text-slate-50">
        {/* HERO */}
        // In your component:
<IntakeSpecialistsHero/>
<WhyChooseSection/>
<TrustedBySection/>
<IntakeSpecialistsSectionOne/>
<IntakeSpecialistsProp/>
<IntakeNaturalExtensionSection/>
<HowItWorks/>
<Compliance/>
<CoverageSection/>
<FAQSection/>
<StopLosingCasesSection/>

       
      </main>
    </>
  );
}
