// Shared by the FAQ section (what visitors see) and the page's FAQ data for Google,
// so the two always match. Kept outside the "use client" component so the
// server-rendered page can read it.
export const faqItems = [
  {
    id: 1,
    question: "What types of medical records can AdvanceEdge retrieve for law firms?",
    answer:
      "We retrieve hospital records, clinic notes, PCP and specialist records, imaging (radiology) reports, lab results, pharmacy histories, therapy/rehab notes, and billing records, depending on what your authorizations and case strategy require.",
  },
  {
    id: 2,
    question: "Is your medical record retrieval process HIPAA‑aware and secure?",
    answer:
      "Yes. Requests are built around complete HIPAA‑compliant authorizations, scoped to what is necessary for the matter, and transmitted via encrypted channels with access controls and audit logs aligned to law‑firm standards.",
  },
  {
    id: 3,
    question: "Do you work with digital medical record retrieval platforms like SettLiT and ConnectMD?",
    answer:
      "Yes. For appropriate dockets and clients, we incorporate modern retrieval platforms such as SettLiT, ConnectMD, YourCaseWorks, and similar tools into the workflow, combining instant EMR/pharmacy/claims data with traditional facility‑level retrieval where needed.",
  },
  {
    id: 4,
    question: "How does medical record retrieval integrate with your medical record review service?",
    answer:
      "Retrieval and Medical Record Review are designed to work together. Once records arrive, they can flow directly into clinician‑led review workflows that produce timelines, summaries, and issue lists, so your litigators don’t have to parse raw PDFs themselves.",
  },
  {
    id: 5,
    question: "Do you replace our paralegals, or support them?",
    answer:
      "Typically, we support existing teams. Your staff stays focused on client communication, discovery, and case strategy while we handle high‑volume, repetitive retrieval and follow‑up work. In some firms, we manage retrieval for specific dockets; in others, we take on the entire records function.",
  },
  {
    id: 6,
    question: "How long does it usually take to get records back?",
    answer:
      "Turnaround depends on provider type and record age, but our structured tracking and follow‑up process is designed to reduce cycle times compared to ad‑hoc, in‑house approaches. You see status by provider and matter, so there’s less guessing and fewer “black box” delays.",
  },
];