"use client";

const problems = [
  {
    number: "01",
    heading: "Every provider plays by different rules.",
    body: "One facility wants faxed forms, another only accepts portal uploads, another uses a third-party copy service, and insists on separate checks.",
  },
  {
    number: "02",
    heading: "Authorizations are easy to get technically wrong.",
    body: "A missing checkbox, date range, or scope clause can stall a request for weeks without anyone realizing.",
  },
  {
    number: "03",
    heading: "Complex cases touch many providers.",
    body: "A single plaintiff may have hospitalizations, ER visits, specialists, imaging, therapy, and pharmacy records — each with its own retrieval path.",
  },
  {
    number: "04",
    heading: "Your best people are doing the worst work.",
    body: "Paralegals, associates, and even partners end up chasing records instead of moving cases toward resolution.",
  },
];

export default function WhyBottleneck() {
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
            gridTemplateColumns: "1fr 1.6fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="why-layout"
        >
          {/* Left */}
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
              Why Medical Record Retrieval{" "}
              <span style={{ color: "#ff9a28" }}>Slows Firms Down</span>
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
              Every serious Mass Tort, PI, or MVA file lives or dies on the strength of its medical
              records. But in most firms, record retrieval is still an improvised mix of ad-hoc
              faxes, one-off portal logins, and &ldquo;has anyone heard back from this
              hospital?&rdquo; shouted across the office.
            </p>
            {/* Resolution callout */}
            <div
              style={{
                background: "#0f1923",
                borderRadius: "8px",
                padding: "28px 28px",
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
                ✦ AdvanceEdge&apos;s medical records retrieval service replaces this chaos with a
                predictable process, so your attorneys argue from the record instead of chasing it.
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
                  padding: "28px 28px",
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
          .why-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}