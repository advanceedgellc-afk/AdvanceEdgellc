// Home page FAQ. Shared by the FAQ section (what visitors see) and the home
// page's FAQ data for Google, so the two always match. Kept outside the
// "use client" component so the server-rendered page can read it.
export const faqItems = [
  {
    id: 1,
    question: "What does a legal intake and operations partner do for a law firm?",
    answer:
      "A legal intake and operations partner sits between your marketing, attorneys, and case management system. They handle intake calls/forms, case qualification, medical record retrieval/review, and back-office tasks so your team focuses on legal strategy and client relationships instead of chasing paperwork or missed calls.",
  },
  {
    id: 2,
    question: "How can a legal intake partner improve my law firm’s intake process?",
    answer:
      "A specialized legal intake partner provides trained specialists who answer calls, web inquiries, and campaign leads using your qualification criteria. They capture complete information, qualify cases, schedule consults, and provide performance visibility to reduce lead leakage and improve inquiry‑to‑signed‑client conversion.",
  },
  {
    id: 3,
    question: "Should law firms outsource all intake and operations or start small?",
    answer:
      "Most firms start with one bottleneck—after‑hours coverage, medical record retrieval, or litigation support—then expand once results prove out. A good partner augments in-house teams rather than forcing an all‑or‑nothing outsourcing decision.",
  },
  {
    id: 4,
    question: "How is a specialized legal intake service different from a generic call center?",
    answer:
      "Specialized legal intake uses teams trained specifically for Mass Tort, PI, MVA, and other practice areas, with clinicians for medical records. You get domain knowledge, elastic capacity, 24/7 coverage without weekend premiums, and AI‑assisted workflows with human quality control—not generic agents reading scripts.",
  },
  {
    id: 5,
    question: "Can outsourced intake work with my existing legal marketing agency?",
    answer:
      "Yes—many agencies like CAMG and Bridge Legal handle campaigns and intake tech while outsourcing the human work (calls, qualification, records) to specialized partners. This setup ensures marketing spend converts to signed cases instead of exposing intake gaps.",
  },
  {
    id: 6,
    question: "How quickly can a law firm launch outsourced intake and operations support?",
    answer:
      "Simple programs launch in weeks after aligning scripts, criteria, and system access. Complex Mass Tort or multi‑practice rollouts phase in to protect existing workflows while adding capacity where needed most.",
  },
];