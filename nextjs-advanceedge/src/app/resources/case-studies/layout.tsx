import type { Metadata } from "next";

// The case studies page is a "coming soon" placeholder (and a client component,
// so its metadata lives here). Kept out of Google's index until it has content.
export const metadata: Metadata = {
  title: "Case Studies | AdvanceEdge Legal Intake & Operations",
  description:
    "Client results from AdvanceEdge legal intake, case qualification and medical records programs. Case studies coming soon.",
  alternates: { canonical: "/resources/case-studies" },
  robots: { index: false, follow: true },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
