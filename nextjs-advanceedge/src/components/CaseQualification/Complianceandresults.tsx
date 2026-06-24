"use client";
import Link from "next/link";

const complianceItems = [
  {
    icon: "🔐",
    title: "Conflict-Aware Data Capture",
    desc: "Names, counterparties, employers, insurers, and other entities are captured in a structured way so they can flow into your conflict checks.",
  },
  {
    icon: "📍",
    title: "Jurisdiction & Eligibility Controls",
    desc: "Matters outside your licensed jurisdictions or practice focus are declined quickly and respectfully, with clear documentation.",
  },
  {
    icon: "📋",
    title: "Audit-Ready Notes",
    desc: "Every decision — qualified, disqualified, or escalated — is supported by notes in your system. If anyone asks \"Why did we take/not take this case?\" the answer is there.",
  },
  {
    icon: "🚫",
    title: "No Legal Advice Given",
    desc: "As with intake, the qualification team never gives legal advice. They apply your criteria and escalate anything that requires attorney judgment.",
  },
];

const results = [
  {
    headline: "Attorney time is protected.",
    desc: "They're no longer the first line of defense against unqualified or incomplete matters.",
  },
  {
    headline: "Campaign and vendor conversations get sharper.",
    desc: "You know which sources produce strong cases and which only create noise.",
  },
  {
    headline: "Your docket feels healthier.",
    desc: "Fewer \"mystery files,\" fewer stalled matters, and a clearer sense of which cases are truly worth pushing.",
  },
];

export default function ComplianceAndResults() {
  return (
    <>
      {/* Compliance Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #0f1923 0%, #0d1520 100%)",
          padding: "100px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(201,160,71,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
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
                fontFamily: "'DM Sans', serif",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                
              }}
            >
              Risk & Documentation
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Marcellus', serif",
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "12px",
              maxWidth: "620px",
            }}
          >
            Compliance, Conflicts, and Documentation You Can{" "}
            <span style={{ color: "#ff9a28",fontFamily: "'Marcellus', serif",  }}>Trust</span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "DM Sans, serif",
              fontSize: "15px",
              lineHeight: 1.8,
              marginBottom: "52px",
              maxWidth: "640px",
            }}
          >
            Case qualification sits near your firm's risk surface: conflicts, consent,
            eligibility, and data accuracy all matter. The program is structured to
            support your obligations instead of working around them.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
            className="compliance-grid"
          >
            {complianceItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,160,71,0.15)",
                  borderRadius: "8px",
                  padding: "28px 26px",
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,160,71,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,160,71,0.15)";
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    flexShrink: 0,
                    width: "44px",
                    height: "44px",
                    background: "rgba(201,160,71,0.1)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "2px",
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "Marcellus, serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "DM Sans, serif",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 680px) {
            .compliance-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Results Section */}
      <section
        style={{
          background: "#ffffff",
          padding: "100px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold accent strip */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "10%",
            bottom: "10%",
            width: "4px",
            background: "linear-gradient(180deg, transparent, #ff9a28 30%, #ff9a28 70%, transparent)",
          }}
        />

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
              What to Expect
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "80px",
              alignItems: "center",
            }}
            className="results-layout"
          >
            {/* Left */}
            <div>
              <h2
                style={{
                  fontFamily: "'Marcellus', serif",
                  fontSize: "clamp(26px, 3.5vw, 40px)",
                  fontWeight: 700,
                  color: "#0f1923",
                  lineHeight: 1.22,
                  marginBottom: "20px",
                }}
              >
                What Strong Case Qualification{" "}
                <span style={{ color: "#ff9a28", fontFamily: "'Marcellus', serif",}}>Delivers</span>
              </h2>
              <p
                style={{
                  color: "#666",
                  fontFamily: "DM Sans, serif",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                A proper case qualification program usually changes three things quickly.
              </p>

              <div
                style={{
                  background: "#0f1923",
                  borderRadius: "10px",
                  padding: "28px 28px",
                  borderLeft: "4px solid #ff9a28",
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "DM Sans, serif",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    margin: 0,
                    
                  }}
                >
                  You've already invested heavily in marketing, intake, and reputation.
                  Case qualification is the missing layer that makes that investment pay
                  off instead of draining attorney time and firm margin.
                </p>
              </div>
            </div>

            {/* Right: results list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {results.map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    padding: "28px 28px",
                    background: "#f8f6f1",
                    borderRadius: "8px",
                    borderTop: "3px solid #ff9a28",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "DM Sans, serif",
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "rgba(201,160,71,0.3)",
                      lineHeight: 1,
                      flexShrink: 0,
                      width: "36px",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Marcellus, serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "#0f1923",
                        marginBottom: "8px",
                        lineHeight: 1.35,
                      }}
                    >
                      {r.headline}
                    </h3>
                    <p
                      style={{
                        fontFamily: "DM Sans, serif",
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div
                style={{
                  marginTop: "8px",
                  padding: "28px 28px",
                  background: "#0f1923",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "DM Sans, serif",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  Book a 20-minute working session to walk through your current
                  qualification criteria. You'll leave with a practical roadmap —
                  whether you use AdvanceEdge or not.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "13px 24px",
                    background: "#ff9a28",
                    border: "2px solid #ff9a28",
                    borderRadius: "40px",
                    color: "#0f1923",
                    fontFamily: "DM Sans, serif",
                    fontSize: "13px",
                    fontWeight: 700,
                    textDecoration: "none",
                    alignSelf: "flex-start",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#ff9a28";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#ff9a28";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#0f1923";
                  }}
                >
                  Book a 20-Minute Review →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .results-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}