"use client";
import { useState } from "react";

const levels = [
  {
    number: "01",
    label: "Case Acquisition",
    title: "Minimal Review — Proof of Use & Proof of Injury",
    summary:
      "Up front — especially when you or your marketing partners are using instant retrieval solutions like SettLiT, ConnectMD, YourCaseWorks and similar tools — you often don't need a 20-page narrative. What you need is a fast answer to:",
    questions: [
      "Do we have proof of use / exposure?",
      "Do we have proof of injury tied to that product or exposure?",
    ],
    body: "Our team reviews records and digital health data coming out of these platforms to perform a minimal, acquisition-stage review: confirm documented use or exposure, confirm diagnosed injury, and flag obvious disqualifiers. This is exactly what legal marketing firms and intake platforms need to show that a campaign is delivering qualified cases, not just signed forms.",
    bullets: [],
    footer: "",
    badge: "Fastest turnaround",
  },
  {
    number: "02",
    label: "Litigation & Settlement",
    title: "Full Case-Ready Review for Litigation and Settlement",
    summary:
      "Once a case passes initial screens and attorneys are deciding whether to push toward settlement or trial, they need a much deeper analysis. At this stage, our reviewers provide full medical record reviews in the formats your litigation teams actually use:",
    questions: [],
    body: "",
    bullets: [
      "Mass Tort matrix formats populated with proof-of-use, proof-of-injury, comorbidities, and treatment history",
      "Chronological medical summaries that tell the story from pre-incident baseline through current condition",
      "Plaintiff fact sheet support, with medical facts listed chronologically and mapped back to the record",
    ],
    footer: "This level of review supports case strategy, valuation, and negotiation.",
    badge: "Most comprehensive",
  },
  {
    number: "03",
    label: "Settlement & Trial",
    title: "Packet-Level Review for Settlement Packets and Trial Exhibits",
    summary:
      "At the final stage — settlement packets, mediation binders, and trial exhibits — the job changes again. Here, our reviewers:",
    questions: [],
    body: "",
    bullets: [
      "Re-review the record to extract and bookmark exact pages where key facts appear (proof of use, proof of injury, key surgeries, labs, imaging, disability findings)",
      "Build organized packets or exhibit sets with those pages copied, labeled, and linked, so mediators, adjusters, judges, and juries can see the proof without hunting through full record sets",
    ],
    footer: 'This "packet-level" medical record review is about presentation and persuasion, not discovery — and our team does it routinely for settlement and trial-bound matters.',
    badge: "Trial-ready",
  },
];

export default function ThreeLevels() {
  const [active, setActive] = useState(0);
  const level = levels[active];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0d1520 0%, #121e2e 100%)",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(201,160,71,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
            Review Levels
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "16px",
            maxWidth: "580px",
          }}
        >
          Different Levels of Medical Record Review{" "}
          <span style={{ color: "#ff9a28" }}>for Each Stage</span>
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
            marginBottom: "56px",
            maxWidth: "600px",
          }}
        >
          Medical record review is not one monolithic product. Firms and legal marketing platforms
          use it differently at each stage of a case.
        </p>

        {/* Tab nav */}
        <div
          style={{
            display: "flex",
            gap: "0",
            marginBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            overflowX: "auto",
          }}
        >
          {levels.map((l, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "16px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                borderBottom: active === i ? "3px solid #ff9a28" : "3px solid transparent",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  color: active === i ? "#ff9a28" : "rgba(255,255,255,0.35)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                Level {l.number}
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: active === i ? "#ffffff" : "rgba(255,255,255,0.45)",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {l.label}
              </span>
            </button>
          ))}
        </div>

        {/* Active content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "60px",
            alignItems: "start",
          }}
          className="levels-grid"
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "6px 14px",
                background: "rgba(255,154,40,0.12)",
                border: "1px solid rgba(255,154,40,0.3)",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  color: "#ff9a28",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                }}
              >
                {level.badge}
              </span>
            </div>

            <div
              style={{
                fontFamily: "'Marcellus', serif",
                fontSize: "80px",
                fontWeight: 400,
                color: "rgba(255,154,40,0.1)",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {level.number}
            </div>

            <h3
              style={{
                fontFamily: "'Marcellus', serif",
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "16px",
              }}
            >
              {level.title}
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: level.questions.length > 0 ? "20px" : "0",
              }}
            >
              {level.summary}
            </p>

            {level.questions.length > 0 && (
              <div
                style={{
                  background: "rgba(255,154,40,0.08)",
                  border: "1px solid rgba(255,154,40,0.2)",
                  borderRadius: "6px",
                  padding: "16px 20px",
                  marginBottom: "20px",
                }}
              >
                {level.questions.map((q, qi) => (
                  <p
                    key={qi}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "#ff9a28",
                      lineHeight: 1.6,
                      margin: qi < level.questions.length - 1 ? "0 0 8px" : "0",
                      fontStyle: "italic",
                    }}
                  >
                    ✦ {q}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Right */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "10px",
              padding: "36px",
            }}
          >
            {/* Plain body text (Level 01) */}
            {level.body && (
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
                {level.body}
              </p>
            )}

            {/* Bullet list (Levels 02 & 03) */}
            {level.bullets.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {level.bullets.map((b, bi) => (
                  <div key={bi} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: "20px",
                        height: "20px",
                        background: "rgba(255,154,40,0.15)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ff9a28",
                        fontSize: "10px",
                        marginTop: "3px",
                      }}
                    >
                      ✓
                    </span>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Footer sentence */}
            {level.footer && (
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.8,
                  margin: "24px 0 0",
                  fontStyle: "italic",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  paddingTop: "20px",
                }}
              >
                {level.footer}
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .levels-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}