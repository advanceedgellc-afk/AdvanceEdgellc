import type { Metadata } from "next";
import VirtualAgentsClient from "./VirtualAgentsClient";

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
        text:
          "Virtual Agents are legal support professionals who handle tasks like case research, client intake, document review, and marketing. They help law firms save time, reduce costs, and improve efficiency without hiring full-time staff.",
      },
    },
    {
      "@type": "Question",
      name: "What types of Virtual Agents do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We provide Virtual Attorneys for case review and legal research, Super Paralegals for document preparation and e-filing, Marketing Experts for SEO and PPC, and Web Developers for legal websites and CRM integration.",
      },
    },
    {
      "@type": "Question",
      name: "How can a Virtual Attorney assist my law firm?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A Virtual Attorney provides legal research, case law analysis, demand letter drafting, and document review, ensuring firms stay productive without hiring full-time lawyers.",
      },
    },
    {
      "@type": "Question",
      name: "How does hiring a Virtual Agent save law firms money?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Virtual Agents reduce overhead costs by handling legal tasks remotely without requiring office space, benefits, or full-time salaries—allowing law firms to scale operations efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "What are the key benefits of hiring Virtual Agents for legal support?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Cost savings, scalability, specialized expertise, and faster case processing. Virtual Agents streamline law firm operations and increase productivity.",
      },
    },
    {
      "@type": "Question",
      name: "How do Virtual Agents improve client intake for law firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Virtual Agents handle inquiries, pre-screen potential clients, manage scheduling, and follow up—ensuring qualified leads and smooth onboarding.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <VirtualAgentsClient />

      {/* ✅ FAQ Schema stays server-side (best SEO practice) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
