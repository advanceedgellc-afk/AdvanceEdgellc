"use client";

const operations = [
  {
    icon: "📝",
    title: "Questionnaire Optimization",
    desc: "We design and refine qualification scripts for every practice area, ensuring your specific screening logic is always up to date.",
  },
  {
    icon: "⚖️",
    title: "Consistent Decisioning",
    desc: "We apply your rules uniformly across every caller and digital inquiry, ensuring borderline cases are handled with discipline rather than subjectivity.",
  },
  {
    icon: "🔍",
    title: "Identity & Data Integrity",
    desc: "Utilizing integrated tools like Enformion and Persona, we validate key details early to catch identity mismatches or gaps before they move deeper into your workflow.",
  },
  {
    icon: "🚩",
    title: "Risk & Red-Flag Detection",
    desc: "Our team scrutinizes files for factual inconsistencies or suspicious histories, surfacing critical issues for attorney review instead of burying them in raw notes.",
  },
  {
    icon: "📊",
    title: "Strategic Escalation",
    desc: "We deliver borderline matters to your attorneys with concise summaries that highlight missing information and potential upside, protecting your most expensive time.",
  },
  {
    icon: "🗃️",
    title: "Downstream Data Normalization",
    desc: "We capture structured data your litigation team needs — conflict entities, treatment timelines, and financial details — so discovery doesn't stall later.",
  },
  {
    icon: "🩺",
    title: "Ongoing Docket Health",
    desc: "As new records arrive or treatment status changes, we update case tags and statuses to provide a real-time view of your portfolio's health.",
  },
  {
    icon: "📈",
    title: "Campaign & Vendor Intelligence",
    desc: "We produce reports that track qualification rates by source and channel, ensuring intake and marketing decisions are grounded in hard data, not anecdotes.",
  },
];

export default function DailyOperations() {
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
            Day-to-Day Operations
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "72px",
            alignItems: "start",
          }}
          className="ops-layout"
        >
          {/* Left: heading */}
          <div style={{ position: "sticky", top: "40px" }}>
            <h2
              style={{
                fontFamily: "'Marcellus', serif",
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 700,
                color: "#0f1923",
                lineHeight: 1.22,
                marginBottom: "20px",
              }}
            >
              What Our Case Qualification Team Does{" "}
              <span style={{ color: "#ff9a28",fontFamily: "'Marcellus', serif",  }}>Every Day</span>
            </h2>
            <p
              style={{
                color: "#666",
                fontFamily: "DM Sans, serif",
                fontSize: "15px",
                lineHeight: 1.8,
              }}
            >
              Case qualification is far more than a single checkbox — it's a persistent
              operational layer engineered around your firm's specific acceptance
              criteria, risk profile, and marketing strategy.<br/><b>On a daily basis, the AdvanceEdge team manages the following:</b>
            </p>

            {/* Dark accent box */}
            <div
              style={{
                marginTop: "32px",
                background: "#0f1923",
                borderRadius: "8px",
                padding: "24px 24px",
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
                Because this framework is tightly integrated with your medical records
                and back-office processes, case qualification serves as a live control
                system for your entire docket.
              </p>
            </div>
          </div>

          {/* Right: operations grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
            className="ops-cards"
          >
            {operations.map((op, i) => (
              <div
                key={i}
                style={{
                  background: "#f8f6f1",
                  borderRadius: "8px",
                  padding: "24px 22px",
                  borderBottom: "3px solid transparent",
                  transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderBottomColor = "#ff9a28";
                  el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderBottomColor = "transparent";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    fontSize: "22px",
                    marginBottom: "12px",
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(201,160,71,0.1)",
                    borderRadius: "8px",
                  }}
                >
                  {op.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Marcellus, serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0f1923",
                    marginBottom: "8px",
                    lineHeight: 1.35,
                  }}
                >
                  {op.title}
                </h3>
                <p
                  style={{
                    fontFamily: "DM Sans, serif",
                    fontSize: "13px",
                    color: "#666",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {op.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ops-layout { grid-template-columns: 1fr !important; }
          .ops-cards { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 540px) and (max-width: 900px) {
          .ops-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}