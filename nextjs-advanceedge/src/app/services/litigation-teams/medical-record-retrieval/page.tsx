import type { Metadata } from "next";
import Hero from "@/components/MedicalRecordRetrieval/Hero";
import MedicalRecordHero from "@/components/MedicalRecordRetrieval/MedicalRecordHero";
import WhyBottleneck from "@/components/MedicalRecordRetrieval/Whybottleneck";
import WhatWeDo from "@/components/MedicalRecordRetrieval/Whatwedo";
import WhoItsFor from "@/components/MedicalRecordRetrieval/Whoitsfor";
import HowItWorks from "@/components/MedicalRecordRetrieval/Howitworks";
import ComplianceAndScale from "@/components/MedicalRecordRetrieval/Complianceandscale";
import IntegratedStack from "@/components/MedicalRecordRetrieval/Integratedstack";
import MedicalRecordFAQ from "@/components/MedicalRecordRetrieval/Medicalrecordfaq";

export const metadata: Metadata = {
  title: "Medical Record Retrieval Services for Law Firms & Legal Marketing Agencies | AdvanceEdge",
  description:
    "Medical record retrieval services for law firms of all sizes and legal marketing agencies. HIPAA-aware requests, 90k+ facility database, SettLiT/ConnectMD workflows, and AI-assisted tracking integrated with intake, case qualification, and medical record review.",
  keywords: [
    "medical record retrieval services",
    "law firm medical records",
    "legal medical record retrieval",
    "HIPAA medical records law firm",
    "mass tort record retrieval",
    "SettLiT ConnectMD legal",
    "medical record review integration",
  ],
  alternates: {
    canonical: "https://www.advanceedge.com/medical-record-retrieval",
  },
  openGraph: {
    title: "Medical Record Retrieval Services for Law Firms & Legal Marketing Agencies | AdvanceEdge",
    description:
      "Structured, HIPAA-aware medical record retrieval powered by a verified 90k+ facility database, digital retrieval platforms, and AI-assisted workflows.",
    url: "https://www.advanceedge.com/medical-record-retrieval",
    siteName: "AdvanceEdge",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of medical records can AdvanceEdge retrieve for law firms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We retrieve hospital records, clinic notes, PCP and specialist records, imaging (radiology) reports, lab results, pharmacy histories, therapy/rehab notes, and billing records, depending on what your authorizations and case strategy require.",
      },
    },
    {
      "@type": "Question",
      name: "Is your medical record retrieval process HIPAA-aware and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Requests are built around complete HIPAA-compliant authorizations, scoped to what is necessary for the matter, and transmitted via encrypted channels with access controls and audit logs aligned to law-firm standards.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with digital medical record retrieval platforms like SettLiT and ConnectMD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For appropriate dockets and clients, we incorporate modern retrieval platforms such as SettLiT, ConnectMD, YourCaseWorks, and similar tools into the workflow, combining instant EMR/pharmacy/claims data with traditional facility-level retrieval where needed.",
      },
    },
    {
      "@type": "Question",
      name: "How does medical record retrieval integrate with your medical record review service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Retrieval and Medical Record Review are designed to work together. Once records arrive, they can flow directly into clinician-led review workflows that produce timelines, summaries, and issue lists.",
      },
    },
    {
      "@type": "Question",
      name: "Do you replace our paralegals, or support them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically, we support existing teams. Your staff stays focused on client communication, discovery, and case strategy while we handle high-volume, repetitive retrieval and follow-up work.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it usually take to get records back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turnaround depends on provider type and record age, but our structured tracking and follow-up process is designed to reduce cycle times compared to ad-hoc, in-house approaches.",
      },
    },
  ],
};

export default function MedicalRecordRetrievalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Hero />
        <MedicalRecordHero/>
        <WhyBottleneck />
        <WhatWeDo />
        <WhoItsFor />
        <HowItWorks />
        <ComplianceAndScale />
        <IntegratedStack />
        <MedicalRecordFAQ />
      </main>
    </>
  );
}