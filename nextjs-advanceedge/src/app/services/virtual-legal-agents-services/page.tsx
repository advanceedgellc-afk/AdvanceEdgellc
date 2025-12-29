import Link from "next/link";
import { FaUserTie, FaClock, FaHeadset, FaTasks } from "react-icons/fa";
import HeroSection from '@/components/virtualAgents/HeroSection';
import ScaleYourFirmSection from '@/components/virtualAgents/ScaleYourFirmSection';
import VirtualAgentServiceSection from '@/components/virtualAgents/VirtualAgentServiceSection';
import MeetVirtualTeamSection from '@/components/virtualAgents/MeetVirtualTeamSection';
import WhyVaasSmarterSection from '@/components/virtualAgents/WhyVaasSmarterSection';
import VaasOnboardingSection from '@/components/virtualAgents/VaasOnboardingSection';
import WhyAdvanceEdgeSection from '@/components/virtualAgents/WhyAdvanceEdgeSection';
import FAQSection from '@/components/virtualAgents/FAQSection';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Legal Agents for Law Firms | AdvanceEdge",
  description:
    "Streamline intake, client communication, and case management with AdvanceEdge virtual legal agents. Get trained remote legal teams that help your law firm operate efficiently and scale 24/7.",
    alternates: {
      canonical: "https://advanceedgellc.com/virtual-legal-agents-services/",
    },
    
  openGraph: {
    title: "Virtual Legal Agents for Law Firms | AdvanceEdge",
    description:
      "Streamline intake, client communication, and case management with AdvanceEdge virtual legal agents. Get trained remote legal teams that help your law firm operate efficiently and scale 24/7.",
    url: "https://advanceedgellc.com/virtual-legal-agents-services/",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Virtual Agents, and how can they help law firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual Agents are legal support professionals who handle tasks like case research, client intake, document review, and marketing. They help law firms save time, reduce costs, and improve efficiency without hiring full-time staff.",
      },
    },
    {
      "@type": "Question",
      name: "What types of Virtual Agents do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `We provide:
        Virtual Attorneys – Case review & legal research
         Super Paralegals – Document preparation & e-filing
        Marketing Experts – SEO, PPC & lead generation
        Web Developers – Legal website & CRM integration
        
        Each agent is skilled, experienced, and trained for law firm needs.,`
      },
    },
    {
      "@type": "Question",
      name: "How can a Virtual Attorney assist my law firm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Virtual Attorney provides legal research, case law analysis, demand letter drafting, and document review, ensuring firms stay productive without hiring full-time lawyers.",
      },
    },
    {
      "@type": "Question",
      name: "How does hiring a Virtual Agent save law firms money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Virtual Agents reduce overhead costs by handling legal tasks remotely without requiring office space, benefits, or full-time salaries—allowing law firms to scale operations efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "AEO: What are the key benefits of hiring Virtual Agents for legal support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `🔹 Cost savings – No in-house hiring expenses
        🔹 Scalability – Hire agents as needed
        🔹 Expertise – Specialized legal professionals
        🔹 Efficiency – Faster case processing & lead handling
        
        Virtual Agents streamline law firm operations and increase productivity.,`
      },
    },
    {
      "@type": "Question",
      name: "AEO: How do Virtual Agents improve client intake for law firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Virtual Agents optimize client intake by:
        ✔️ Handling inquiries via phone, chat, and email
        ✔️ Pre-screening potential clients based on case criteria
        ✔️ Managing appointment scheduling & follow-ups
        
        This ensures qualified leads and a smooth client onboarding process.,`
      },
    },
  ],
};

export default function VirtualAgents() {
  return (
    <main>

        {/* Hero Section */}
        <HeroSection />;
  {/* ScaleYourFirmSection */}
        <ScaleYourFirmSection/>
        {/* VirtualAgentServiceSection */}
        <VirtualAgentServiceSection/>
      {/* MeetVirtualTeamSection Section */}
      <MeetVirtualTeamSection/>
 {/* WhyVaasSmarterSection Section */}
 <WhyVaasSmarterSection/>
 {/* WhyVaasSmarterSection Section */}
 <VaasOnboardingSection/>
 {/* FAQSection Section */}
 <FAQSection/>
  {/* WhyAdvanceEdgeSection Section */}
  <WhyAdvanceEdgeSection/>

     
      
    </main>
  );
}
