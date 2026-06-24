"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/virtualAgents/HeroSection";

// ✅ Code-split all heavy sections
const ScaleYourFirmSection = dynamic(
  () => import("@/components/virtualAgents/ScaleYourFirmSection"),
  { loading: () => <div className="h-96 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" /> }
);

const VirtualAgentServiceSection = dynamic(
  () => import("@/components/virtualAgents/VirtualAgentServiceSection"),
  { loading: () => <div className="h-96 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" /> }
);

const MeetVirtualTeamSection = dynamic(
  () => import("@/components/virtualAgents/MeetVirtualTeamSection"),
  { loading: () => <div className="h-96 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" /> }
);

const WhyVaasSmarterSection = dynamic(
  () => import("@/components/virtualAgents/WhyVaasSmarterSection"),
  { loading: () => <div className="h-96 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" /> }
);

const VaasOnboardingSection = dynamic(
  () => import("@/components/virtualAgents/VaasOnboardingSection"),
  { loading: () => <div className="h-80 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" /> }
);

const WhyAdvanceEdgeSection = dynamic(
  () => import("@/components/virtualAgents/WhyAdvanceEdgeSection"),
  { loading: () => <div className="h-80 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" /> }
);

const FAQSection = dynamic(
  () => import("@/components/virtualAgents/FAQSection"),
  { loading: () => <div className="h-72 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" /> }
);

export default function VirtualAgentsClient() {
  return (
    <main>
      {/* Hero Section - Loads immediately */}
      <HeroSection />

      {/* Lazy-loaded sections */}
      <ScaleYourFirmSection />
      <VirtualAgentServiceSection />
      <MeetVirtualTeamSection />
      <WhyVaasSmarterSection />
      <VaasOnboardingSection />
      <WhyAdvanceEdgeSection />
      <FAQSection />
    </main>
  );
}
