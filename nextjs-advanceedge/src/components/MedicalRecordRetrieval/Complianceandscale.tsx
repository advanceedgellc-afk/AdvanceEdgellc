"use client";

const complianceItems = [
  {
    icon: "🔒",
    title: "HIPAA-Aware Authorizations",
    body: "Requests are based on valid, appropriately scoped authorizations that meet provider and regulatory expectations.",
  },
  {
    icon: "📋",
    title: "Minimum Necessary Principle",
    body: "Requests are scoped to the records needed for litigation, helping satisfy \"minimum necessary\" expectations and avoid over-broad pulls.",
  },
  {
    icon: "🔐",
    title: "Secure Transmission & Access Controls",
    body: "Records are transmitted and stored using encrypted channels with strict access controls and audit logs consistent with law-firm security expectations.",
  },
  {
    icon: "📁",
    title: "Documented Request & Response History",
    body: "Every request, follow-up, and provider response is logged, creating a practical chain-of-custody record you can rely on if questions ever arise.",
  },
];

const scaleStats = [
  { stat: "4.5M+", label: "Medical record retrieval calls and related follow-ups placed" },
  { stat: "90k+", label: "Verified U.S. healthcare facilities, pharmacies, and copy services" },
  { stat: "1.5M+", label: "Medical records reviewed across major torts and practice areas" },
];

const scaleBullets = [
  "We often know in advance which facilities respond best to which channels and how often they need to be nudged, shortening cycle times.",
  "Common failure modes — authorization defects, incorrect recipient details, and missing payment references — are accounted for in our checklists, reducing rework.",
  "When your firm or agency launches a new campaign, capacity can flex up to handle the spike in retrieval volume, then down again when things normalize.",
];

export default function ComplianceAndScale() {
  return (
    <>
      {/* Compliance */}
      <section
        style={{
          background: "#ffffff",
          padding: "100px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Section label */}
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "80px",
              alignItems: "start",
            }}
            className="compliance-layout"
          >
            <div>
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
                Compliance, Security, and PHI Protection{" "}
                <span style={{ color: "#ff9a28" }}>at the Core</span>
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "#666",
                  lineHeight: 1.8,
                  marginBottom: "24px",
                }}
              >
                Medical record retrieval sits at the intersection of HIPAA, provider policies, and
                litigation requirements. Our workflows are designed to reduce risk rather than
                create it.
              </p>
              <div
                style={{
                  background: "#f8f6f1",
                  borderLeft: "4px solid #ff9a28",
                  borderRadius: "6px",
                  padding: "20px 20px",
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
                  AdvanceEdge never provides legal advice or opinions about the substantive merits
                  of a case based on records; our role is to obtain, organize, and prepare data so
                  your attorneys can make those calls.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {complianceItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    padding: "24px 24px",
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
                  <span style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}>
                    {item.icon}
                  </span>
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
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        color: "#666",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .compliance-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Scale & Experience */}
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
              Scale & Experience
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Marcellus', serif",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "56px",
              maxWidth: "560px",
            }}
          >
            Scale, Experience, and Facility Coverage{" "}
            <span style={{ color: "#ff9a28" }}>You Can Rely On</span>
          </h2>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "10px",
              overflow: "hidden",
              marginBottom: "60px",
            }}
            className="stats-grid"
          >
            {scaleStats.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "40px 32px",
                  background: "#0f1923",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Marcellus', serif",
                    fontSize: "44px",
                    color: "#ff9a28",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {s.stat}
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Practical bullets */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "28px",
              fontStyle: "italic",
            }}
          >
            In practical terms, that means:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "760px" }}>
            {scaleBullets.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: "24px",
                    height: "24px",
                    background: "rgba(255,154,40,0.15)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ff9a28",
                    fontSize: "12px",
                    marginTop: "2px",
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

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.8,
              marginTop: "36px",
              maxWidth: "680px",
              fontStyle: "italic",
            }}
          >
            All of this is supported by AI-assisted status tracking and document organization, plus
            human QA that ensures records are usable for litigation the moment they land in your
            system.
          </p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .stats-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}