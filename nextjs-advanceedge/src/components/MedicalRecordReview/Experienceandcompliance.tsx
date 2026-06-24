"use client";

const tortTypes = [
  { icon: "💊", label: "Pharmaceutical & Drug-Related Matters", body: "Chronic-use medications, black-box warning drugs, multi-drug regimens." },
  { icon: "🌿", label: "Defective Products & Environmental Exposures", body: "Agrochemical and industrial exposures where latency and mixed exposures complicate causation." },
  { icon: "🩺", label: "Defective Devices & Implants", body: "Orthopedic implants and 3M earplugs and related devices, where proof of correct use and proof of failure both matter." },
  { icon: "🌱", label: "Agrochemical & Environmental Torts", body: "Products like Roundup, Paraquat, and related exposures where epidemiology, exposure duration, and risk factors matter." },
];

const complianceItems = [
  { icon: "🔐", title: "Encrypted Environments", body: "Encrypted environments for record storage and transmission." },
  { icon: "👤", title: "Role-Based Access", body: "Role-based access so only assigned reviewers see PHI for specific matters." },
  { icon: "📋", title: "Audit Logs", body: "Audit logs capturing who accessed which records and when." },
  { icon: "📄", title: "Scoped Outputs", body: "Outputs limited to what your team actually needs for litigation, not unnecessary duplication of the full chart." },
];

export default function ExperienceAndCompliance() {
  return (
    <>
      {/* Experience section */}
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
              Our Experience
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "80px",
              alignItems: "start",
            }}
            className="exp-layout"
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
                15+ Years of Medical Record Review Experience Across{" "}
                <span style={{ color: "#ff9a28" }}>Mass Torts & Case Types</span>
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
                AdvanceEdge&apos;s medical record review team has been supporting plaintiff-side
                litigations since 2011, starting with early Mass Torts like asbestos and
                transvaginal mesh/sling cases and evolving through more than a decade of new drugs,
                devices, and environmental matters.
              </p>
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
                  After thousands of reviews, spotting what should be there but isn&apos;t —
                  missing records, unexplained gaps, suspicious timelines — has become second
                  nature, and that is often where the biggest risks and opportunities in a case are
                  hiding.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {tortTypes.map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "20px",
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
                  <span style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}>{t.icon}</span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Marcellus', serif",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: "#0f1923",
                        marginBottom: "6px",
                      }}
                    >
                      {t.label}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        color: "#777",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {t.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .exp-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Compliance + AI section */}
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "start",
            }}
            className="comp-ai-layout"
          >
            {/* Compliance */}
            <div>
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
                  Compliance & Security
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Marcellus', serif",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 400,
                  color: "#ffffff",
                  lineHeight: 1.25,
                  marginBottom: "20px",
                }}
              >
                Compliance, Security & PHI Protection{" "}
                <span style={{ color: "#ff9a28" }}>in Medical Record Review</span>
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                Medical record review involves PHI at scale. Workflows are designed to align with
                law-firm-grade security and privacy expectations.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {complianceItems.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "flex-start",
                      padding: "16px 18px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "6px",
                      borderLeft: "3px solid #ff9a28",
                    }}
                  >
                    <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>{c.icon}</span>
                    <div>
                      <h4
                        style={{
                          fontFamily: "'Marcellus', serif",
                          fontSize: "14px",
                          fontWeight: 400,
                          color: "#ffffff",
                          marginBottom: "4px",
                        }}
                      >
                        {c.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {c.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.75,
                  marginTop: "20px",
                  fontStyle: "italic",
                }}
              >
                AdvanceEdge surfaces facts and patterns; your attorneys and experts remain
                responsible for legal opinions and strategy.
              </p>
            </div>

            {/* AI section */}
            <div>
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
                  Human + AI
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Marcellus', serif",
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  fontWeight: 400,
                  color: "#ffffff",
                  lineHeight: 1.25,
                  marginBottom: "20px",
                }}
              >
                Human-Led,{" "}
                <span style={{ color: "#ff9a28" }}>AI-Assisted</span>{" "}
                Medical Record Review
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                AI tools are powerful, but in litigation, credibility and nuance still win. Our
                approach:
              </p>
              {[
                { label: "AI for efficiency", body: "Use AI for OCR, sorting, de-duplication, and routing so humans can focus on thinking." },
                { label: "AI for pattern detection", body: "Use AI to help detect repeated patterns — recurring diagnoses, providers, exposures — that clinicians then validate." },
                { label: "Humans for judgment", body: "Keep all clinical interpretation and legal relevance decisions in human hands." },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 20px",
                    marginBottom: "12px",
                    background: "rgba(255,154,40,0.06)",
                    border: "1px solid rgba(255,154,40,0.15)",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Marcellus', serif",
                      fontSize: "14px",
                      color: "#ff9a28",
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.75,
                  marginTop: "8px",
                  fontStyle: "italic",
                }}
              >
                That gives you the efficiency benefits of AI while preserving the judgment and
                explainability courts and opposing counsel expect.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .comp-ai-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}