import type { Metadata } from "next";
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
    canonical:
      "https://advanceedgellc.com/services/virtual-legal-agents-services/intake-specialists",
  },
};

export default function IntakeSpecialists() {
  return (
    <>
      <main className="bg-slate-950 text-slate-50">
        {/* HERO */}
        <IntakeSpecialistsHero />

        <WhyChooseSection />
        <TrustedBySection />
        <IntakeSpecialistsSectionOne />
        <IntakeSpecialistsProp />
        <IntakeNaturalExtensionSection />
        <HowItWorks />
        <Compliance />
        <CoverageSection />
        <FAQSection />
        <StopLosingCasesSection />
      </main>
    </>
  );
}
