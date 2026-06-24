"use client";

const problems = [
  {
    number: "01",
    heading: "Late discoveries.",
    body: "Pre-existing conditions, confounding factors, or missing surgeries are discovered only when defense raises them — not when you're still in control of the narrative.",
  },
  {
    number: "02",
    heading: "Inconsistent outputs.",
    body: "Each reviewer summarizes differently, so partners can't rely on a standard package to make decisions.",
  },
  {
    number: "03",
    heading: "Attorney time spent on non-attorney work.",
    body: "Highly paid litigators get dragged into basic chart reading instead of focusing on case strategy, negotiation, and trial prep.",
  },
];

export default function WhyItsOwnJob() {
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
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            The Problem
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="whyjob-layout"
        >
          {/* Left sticky */}
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
              Why Medical Record Review Is Its Own Job,{" "}
              <span style={{ color: "#ff9a28" }}>Not Just &ldquo;More Paralegal Work&rdquo;</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "#666",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              In Mass Tort and serious injury work, medical records are where liability, causation,
              and damages either show up — or they don&apos;t. Yet in many firms, record review is
              still handled informally: a huge PDF is dropped on a busy associate or paralegal, and
              everyone hopes they find the right facts in time.
            </p>
            <div
              style={{
                background: "#0f1923",
                borderRadius: "8px",
                padding: "28px",
                borderLeft: "4px solid #ff9a28",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.75,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                ✦ AdvanceEdge treats medical record review as a defined function with clear inputs,
                standardized outputs, and experienced reviewers — so you get reliable medical
                insight without burning out your team.
              </p>
            </div>
          </div>

          {/* Right — problem cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {problems.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "24px",
                  padding: "28px",
                  background: "#f8f6f1",
                  borderRadius: "8px",
                  borderLeft: "4px solid #ff9a28",
                  transition: "box-shadow 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    fontFamily: "'Marcellus', serif",
                    fontSize: "42px",
                    color: "rgba(255,154,40,0.15)",
                    lineHeight: 1,
                    flexShrink: 0,
                    width: "56px",
                  }}
                >
                  {p.number}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Marcellus', serif",
                      fontSize: "17px",
                      fontWeight: 400,
                      color: "#0f1923",
                      marginBottom: "8px",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.heading}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .whyjob-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}