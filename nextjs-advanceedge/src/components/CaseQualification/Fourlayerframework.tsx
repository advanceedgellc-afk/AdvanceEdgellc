"use client";
import { useState } from "react";

const layers = [
  {
    number: "01",
    label: "Primary Qualification",
    sublabel: "Pre-Retainer",
    color: "#ff9a28",
    summary:
      "This is the first pass, usually right after initial intake. The goal is simple: decide whether the matter is even in the realm of what your firm handles.",
    summaryDetail:
      "As a core component of the primary qualification layer, our team utilizes integrated tools like Enformion and Persona for rapid identity verification. We validate names, addresses, and dates of birth to ensure total data integrity before a file moves deeper into your workflow, flagging mismatches or inconsistent data points at the earliest possible stage of the intake funnel.",
    points: [
      "Quick filters: jurisdiction, dates, practice area fit, basic damages or complexity thresholds.",
      "Identity and contact validation using platforms such as Enformion and Persona for clients who require an extra KYC-style check at the intake stage.",
      "Standardized questions matched to each practice area—Mass Tort, PI, MVA, family, estate, immigration, etc.",
      'Early "out of scope" decisions are handled respectfully, with clean disposition codes so you know why the matter was declined.',
    ],
    result:
      "The result is that your docket is never polluted with matters that clearly don’t belong at your firm.",
  },
  {
    number: "02",
    label: "Secondary Quality Check",
    sublabel: "Post-Retainer",
    color: "#ff9a28",
    summary:
      "Primary qualification is about fit. Secondary QC is about depth and accuracy. This happens after a retainer or LOE is signed, before the file moves deeper into litigation workflows.",
      summaryDetail:
      "Secondary QC is about depth and accuracy. Moving beyond simple completeness, our team leverages data-intelligence tools like Enformion and Persona to identify red flags, mismatches, inconsistent histories, or suspicious contact patterns. We flag these issues at the earliest possible stage so your attorneys can make informed decisions rather than discovering problems deep in the litigation process.",
    points: [
      "Data Integrity & Verification: Confirming that contact details, core facts, and essential documentation are fully consistent across intake notes, digital forms, and external data integrations.",
      "Risk Detection: Surfacing critical gaps and red flags, including identity mismatches, inconsistent address histories, or suspicious timelines, before files advance into your litigation workflow.",
      "Intake Clarification: Resolving ambiguous or incomplete responses early in the process to prevent administrative bottlenecks and discovery issues later on.",
      "Edge-Case Escalation: Identifying matters that meet basic criteria but show signs of weak damages, complex conflicts, or potential fraud for immediate attorney review.",
    ],
    result:
      "This layer protects your litigators from inheriting messy files that stall discovery and settlement negotiations.",
  },
  {
    number: "03",
    label: "Docket Health Review",
    sublabel: "Ongoing",
    color: "#ff9a28",
    summary:
      "Cases don't stay static. Over time, treatment changes, clients move, new records arrive, and tort criteria evolve. The docket health review layer keeps an eye on the entire portfolio.",
    points: [
      "Periodic structured check-ins to confirm contact details, treatment status, and key milestones.",
      "Identification of cases at risk (lost contact, missing records, stalled treatment) so your team can intervene early.",
      "Portfolio-level tagging—strong, marginal, at-risk that gives managing partners and litigation leads a real-time sense of how healthy the docket really is.",
    ],
    result:
      "Instead of waiting for trial prep to discover problems, you spot them months earlier.",
  },
  {
    number: "04",
    label: "Campaign & Vendor Intelligence",
    sublabel: "Optional, but powerful",
    color: "#ff9a28",
    summary:
      "This is where case qualification feeds back into your marketing and vendor strategy, especially for legal marketing agencies and firms investing heavily in Mass Tort and PI campaigns.",
    points: [
      "Compare qualification and retention rates by campaign, channel, vendor, and intake routing.",
      "See which sources produce high-quality, retainable cases and which just generate noise.",
      'Build "fit profiles" of your best cases and feed them back to agencies to sharpen targeting.',
    ],
    result:
      "This layer turns case qualification into a strategic feedback loop, not just a gatekeeper function.",
  },
];

export default function FourLayerFramework() {
  const [activeLayer, setActiveLayer] = useState(0);
  const layer = layers[activeLayer];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0d1520 0%, #121e2e 100%)",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot texture */}
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
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{ display: "block", width: "28px", height: "2px", background: "#ff3600" }} />
          <span
            style={{
              color: "#ff3600",
              fontWeight: "900",
              fontFamily: "'DM Sans', serif",
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Our Framework
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "56px",
            maxWidth: "600px",
          }}
        >
          Our Four-Layer Case{" "}
          <span style={{ color: "#ff9a28", fontFamily: "'Marcellus', serif" }}>Qualification</span>{" "}
          Framework
        </h2>

        {/* Tab nav */}
        <div
          style={{
            display: "flex",
            gap: "0",
            marginBottom: "48px",
            borderBottom: "1px solid rgba(201,160,71,0.2)",
            overflowX: "auto",
          }}
          className="layer-tabs"
        >
          {layers.map((l, i) => (
            <button
              key={i}
              onClick={() => setActiveLayer(i)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "16px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                borderBottom:
                  activeLayer === i ? "3px solid #ff9a28" : "3px solid transparent",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "DM Sans, serif",
                  fontSize: "11px",
                  color: activeLayer === i ? "#ff9a28" : "rgba(255,255,255,0.35)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
              >
                Layer {l.number}
              </span>
              <span
                style={{
                  fontFamily: "DM Sans, serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: activeLayer === i ? "#ffffff" : "rgba(255,255,255,0.5)",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {l.label}
              </span>
            </button>
          ))}
        </div>

        {/* Active layer content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "60px",
            alignItems: "start",
          }}
          className="layer-content-grid"
        >
          {/* Left */}
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "6px 14px",
                background: "rgba(201,160,71,0.12)",
                border: "1px solid rgba(201,160,71,0.3)",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  color: "#ff9a28",
                  fontFamily: "DM Sans, serif",
                  fontSize: "12px",
                }}
              >
                {layer.sublabel}
              </span>
            </div>

            <div
              style={{
                fontFamily: "DM Sans, serif",
                fontSize: "80px",
                fontWeight: 700,
                color: "rgba(201,160,71,0.12)",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {layer.number}
            </div>

            <h3
              style={{
                fontFamily: "Marcellus, serif",
                fontSize: "clamp(20px, 3vw, 30px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              {layer.label}
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "DM Sans, serif",
                fontSize: "15px",
                lineHeight: 1.8,
                marginBottom: (layer as any).summaryDetail ? "20px" : "28px",
              }}
            >
              {layer.summary}
            </p>
            {(layer as any).summaryDetail && (
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "DM Sans, serif",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                {(layer as any).summaryDetail}
              </p>
            )}

            {/* Result callout */}
            <div
              style={{
                background: "rgba(201,160,71,0.08)",
                border: "1px solid rgba(201,160,71,0.25)",
                borderRadius: "6px",
                padding: "16px 20px",
              }}
            >
              <p
                style={{
                  color: "#ff9a28",
                  fontFamily: "DM Sans, serif",
                  fontSize: "13px",
                  fontStyle: "italic",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                ✦ {layer.result}
              </p>
            </div>
          </div>

          {/* Right – bullet points */}
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {layer.points.map((point, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "20px 0",
                    borderBottom:
                      i < layer.points.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "24px",
                      height: "24px",
                      background: "rgba(201,160,71,0.15)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ff9a28",
                      fontSize: "12px",
                      fontWeight: 700,
                      fontFamily: "DM Sans, serif",
                      marginTop: "2px",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      fontFamily: "DM Sans, serif",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .layer-content-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}