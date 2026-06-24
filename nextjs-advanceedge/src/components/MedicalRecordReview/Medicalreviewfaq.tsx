"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What types of cases benefit most from medical record review?",
    answer:
      "Any matter where medical evidence drives value benefits: Mass Tort, PI, MVA, malpractice, workers' comp, disability, and other complex injury or illness cases. The higher the medical complexity and potential damages, the more critical structured review becomes.",
  },
  {
    question: "Can you handle both minimal proof-of-use/proof-of-injury reviews and full litigation-ready reviews?",
    answer:
      "Yes. We routinely perform minimal reviews for case acquisition — focused on proof of use and proof of injury — and deeper, full-scope reviews for litigation, settlement, and trial preparation. The level of review is matched to the stage of the case and your goals.",
  },
  {
    question: "Who actually reviews the records — nurses, doctors, or non-clinical staff?",
    answer:
      "Records are reviewed by a combination of clinicians (physicians, pharmacists, nurses, dentists, and other specialists) and legal-trained analysts. Clinicians focus on accuracy and medical coherence; analysts focus on how those facts map to liability, causation, and damages.",
  },
  {
    question: "How does medical record review work with your retrieval service?",
    answer:
      "Medical Record Retrieval obtains complete records from facilities, pharmacies, and copy services. Those records then flow directly into the review workflow — no extra handling or manual uploads on your side.",
  },
  {
    question: "Does AI replace human reviewers in your process?",
    answer:
      "No. AI is used to support human reviewers by handling repetitive tasks and highlighting potential patterns. All clinical and legal relevance decisions are made by experienced human reviewers.",
  },
  {
    question: "How do you keep PHI secure during the review process?",
    answer:
      "Records are handled in encrypted environments with role-based access and audit logging. Only assigned team members can access PHI for specific matters, and outputs are limited to what your team actually needs for litigation and decision-making.",
  },
];

export default function MedicalReviewFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{ display: "block", width: "28px", height: "2px", background: "#ff3600" }} />
          <span
            style={{
              color: "#ff3600",
              fontWeight: "900",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            FAQs
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 400,
            color: "#0f1923",
            lineHeight: 1.2,
            marginBottom: "56px",
          }}
        >
          Medical Record Review{" "}
          <span style={{ color: "#ff9a28" }}>FAQs</span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderTop: "1px solid rgba(15,25,35,0.1)",
                borderBottom: i === faqs.length - 1 ? "1px solid rgba(15,25,35,0.1)" : "none",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "24px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Marcellus', serif",
                    fontSize: "17px",
                    fontWeight: 400,
                    color: open === i ? "#ff9a28" : "#0f1923",
                    lineHeight: 1.35,
                    transition: "color 0.2s",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    background: open === i ? "#ff9a28" : "#f0ece4",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: open === i ? "#0f1923" : "#666",
                    fontSize: "16px",
                    fontWeight: 300,
                    transition: "background 0.2s, transform 0.2s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    color: "#555",
                    lineHeight: 1.8,
                    margin: "0 0 28px 0",
                    paddingRight: "48px",
                  }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}