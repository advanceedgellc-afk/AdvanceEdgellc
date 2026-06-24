"use client";

const deliverables = [
  {
    icon: "📅",
    title: "Chronological Medical Timelines",
    body: "Visit-by-visit summaries showing dates, providers, diagnoses, procedures, medications, and key findings in order.",
  },
  {
    icon: "🎯",
    title: "Case-Specific Issue Lists",
    body: "Clear identification of facts relevant to liability, causation, and damages: first exposure/use dates, onset of symptoms, aggravating or mitigating factors, co-morbidities, and potential alternative causes.",
  },
  {
    icon: "🔍",
    title: "Treatment Gap Analysis",
    body: "Flags where treatment stops, changes, or is inconsistent with the claimed injury, so attorneys can proactively explain or address those gaps rather than being surprised in deposition.",
  },
  {
    icon: "⚠️",
    title: "Gap Detection & Missing-Record Identification",
    body: "Reviewers are trained to spot when not enough records exist to support the story being told. Missing periods are flagged with exact retrieval recommendations — which provider, which dates, which record types — so gaps can be closed before valuation or trial.",
  },
  {
    icon: "🏥",
    title: "Pre-Existing & Comorbid Condition Mapping",
    body: "Structured summaries of prior conditions and injuries, including how defense might use them, and how they actually relate (or don't relate) to the alleged harm.",
  },
  {
    icon: "💊",
    title: "Medication & Exposure Analysis",
    body: "For drug and environmental matters, capture of drug names, dosages, NDCs, start/stop dates, lab values, and exposure data that underpin proof of use and proof of injury.",
  },
  {
    icon: "💼",
    title: "Damages-Focused Summaries",
    body: "High-level write-ups focused on functional impact, duration of impairment, and intensity of treatment to support demand ranges and mediation strategy.",
  },
  {
    icon: "📂",
    title: "Source-Based Indexing",
    body: "Organized record sets by facility and date, with references back to specific pages so litigators and experts can quickly find the underlying documentation.",
  },
];

export default function WhatWeDeliver() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
            Deliverables
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr ",
            gap: "40px",
            alignItems: "start",
          }}
          className="deliver-layout"
        >
          <div style={{ position: "sticky", top: "40px" }}>
            <h2
              style={{
                fontFamily: "'Marcellus', serif",
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 400,
                color: "#0f1923",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              From Raw Records to{" "}
              <span style={{ color: "#ff9a28" }}>Litigation-Ready Insight</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "#666",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}
            >
              A typical medical record review package from AdvanceEdge can include:
            </p>

          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
            className="deliver-cards"
          >
            {deliverables.map((d, i) => (
              <div
                key={i}
                style={{
                  padding: "24px",
                  background: "#f8f6f1",
                  borderRadius: "8px",
                  borderLeft: "4px solid #ff9a28",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "20px", marginBottom: "10px" }}>{d.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Marcellus', serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#0f1923",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    color: "#777",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {d.body}
                </p>
              </div>
            ))}
          </div>
          <div
              style={{
                background: "#f8f6f1",
                borderLeft: "4px solid #ff9a28",
                borderRadius: "6px",
                padding: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "#555",
                  lineHeight: 1.75,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                Outputs are formatted to plug directly into demand packages, settlement matrices,
                deposition prep, mediation briefs, and trial notebooks.
              </p>
            </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .deliver-layout { grid-template-columns: 1fr !important; }
          .deliver-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}