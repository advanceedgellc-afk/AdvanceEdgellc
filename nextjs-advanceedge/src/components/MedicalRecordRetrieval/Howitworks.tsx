"use client";

const steps = [
  {
    number: "01",
    title: "Scope and Provider Mapping",
    body: "From intake and Case Qualification data, we map out the likely provider universe for each matter: ER, inpatient, outpatient, specialists, imaging, pharmacy, rehab. You confirm or refine that list.",
  },
  {
    number: "02",
    title: "Authorization Preparation and Validation",
    body: "We prepare or review your HIPAA authorizations and other releases to ensure they are complete and appropriately scoped before any request is sent. This includes checking dates, entities, scope language, and signatures to minimize avoidable rejections.",
  },
  {
    number: "03",
    title: "Request Submission via Optimal Channels",
    body: "Using the 90k+ facility database, we select the right channel for each provider — fax, portal, copy service, or mail — and submit the request with all required documentation, payment, and reference details.",
  },
  {
    number: "04",
    title: "Ongoing Follow-Up and Escalation",
    body: "We follow up with providers and copy services on a defined cadence — escalating when timelines slip beyond typical ranges — until records are produced. You see status by matter and provider, instead of relying on scattered emails and sticky notes.",
  },
  {
    number: "05",
    title: "Quality Check and Gap Analysis",
    body: "When records arrive, we compare them to the original request: patient, provider, date range, and record types. Obvious gaps, mismatches, or missing providers are flagged and either resolved by our team or escalated to yours, depending on your preferences.",
  },
  {
    number: "06",
    title: "Secure Delivery and Integration with Review",
    body: "Records are delivered securely to your systems. When you use Medical Record Review, those same records flow immediately into clinician-driven review workflows, producing timelines, summaries, and issue lists your attorneys can work from without delay.",
  },
];

export default function HowItWorks() {
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
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Our Process
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "64px",
            maxWidth: "560px",
          }}
        >
          How Our Medical Record{" "}
          <span style={{ color: "#ff9a28" }}>Retrieval Process Works</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, #0d1520 0%, #121e2e 100%)",
                padding: "40px 36px",
                borderBottom: i < steps.length - 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "linear-gradient(135deg, #131f2e 0%, #162438 100%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "linear-gradient(135deg, #0d1520 0%, #121e2e 100%)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Marcellus', serif",
                    fontSize: "11px",
                    color: "#ff9a28",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Step {step.number}
                </span>
                <span
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "rgba(255,154,40,0.2)",
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Marcellus', serif",
                  fontSize: "19px",
                  fontWeight: 400,
                  color: "#ffffff",
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}