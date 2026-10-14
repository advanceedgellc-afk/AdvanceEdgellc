// Shared by the FAQ section (what visitors see) and the page's FAQ data for Google,
// so the two always match. Kept outside the "use client" component so the
// server-rendered page can read it.
export const faqItems = [
  {
    id: 1,
    question: "What types of cases benefit most from medical record review?",
    answer:
      "Any matter where medical evidence drives value benefits: Mass Tort, PI, MVA, malpractice, workers’ comp, disability, and other complex injury or illness cases. The higher the medical complexity and potential damages, the more critical the structured review becomes.",
  },
  {
    id: 2,
    question: "Can you handle both minimal proof‑of‑use/proof‑of‑injury reviews and full litigation‑ready reviews?",
    answer:
      "Yes. We routinely perform minimal reviews for case acquisition (focused on proof of use and proof of injury) and deeper, full‑scope reviews for litigation, settlement, and trial preparation. The level of review is matched to the stage of the case and your goals.",
  },
  {
    id: 3,
    question: "Who actually reviews the records?",
    answer:
      "Records are reviewed by a combination of clinicians (physicians, pharmacists, nurses, dentists, and other specialists) and legal‑trained analysts. Clinicians focus on accuracy and medical coherence; analysts focus on how those facts map to liability, causation, and damages.",
  },
  {
    id: 4,
    question: "How does medical record review work with your retrieval service?",
    answer:
      "Medical Record Retrieval obtains complete records from facilities, pharmacies, and copy services. Those records then flow directly into the review workflow, with no extra handling or manual uploads on your side.",
  },
  {
    id: 5,
    question: "Does AI replace human reviewers in your process?",
    answer:
      "No. AI is used to support human reviewers by handling repetitive tasks and highlighting potential patterns. All clinical and legal relevance decisions are made by experienced human reviewers.",
  },
  {
    id: 6,
    question: "How do you keep PHI secure during the review process?",
    answer:
      "Records are handled in encrypted environments with role‑based access and audit logging. Only assigned team members can access PHI for specific matters, and outputs are limited to what your team actually needs for litigation and decision‑making.",
  },
];