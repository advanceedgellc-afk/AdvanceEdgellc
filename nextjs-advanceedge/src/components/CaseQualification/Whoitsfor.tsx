"use client";

const audiences = [
  {
    role: "Intake Leaders, CMOs & Marketing Owners",
    icon: "📣",
    desc: "If you're responsible for intake or marketing ROI, case qualification is the difference between \"we think the campaign is working\" and \"we know exactly which campaigns are filling the docket with strong cases.\" A clear qualification layer lets you defend budgets, optimize channels, and work more effectively with agencies.",
  },
  {
    role: "Managing Partners & COOs",
    icon: "🏛️",
    desc: "For owners and COOs, the priority is attorney leverage and predictable margins. A disciplined case qualification program keeps lower-value matters away from your most expensive people and flags problems in the docket before they hit your P&L.",
  },
  {
    role: "Legal Marketing Agencies & Aggregators",
    icon: "🎯",
    desc: "If you're a CAMG- or Bridge-Legal-type agency, you live and die by client perception of \"lead quality.\" A third-party case qualification program you can point to — run to the client's criteria — gives you clean, defensible data when you say, \"The marketing is working; here's exactly where things are breaking down.\"",
  },
  {
    role: "Litigation Teams & Practice Leads",
    icon: "⚖️",
    desc: "For Mass Tort, PI, and other litigation teams, case qualification reduces noise and surfaces the matters that truly deserve deeper investment. By the time a file hits your desk, it has passed both fit and quality filters — and you have the context you need to decide whether to advance, pause, or exit the case.",
  },
];

export default function WhoItsFor() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #121e2e 0%, #0f1923 100%)",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,160,71,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,160,71,0.03) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
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
            Who We Serve
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
            maxWidth: "580px",
          }}
        >
          Who Gets the Most{" "}
          <span style={{ color: "#ff9a28", fontFamily: "'Marcellus', serif", }}>Value</span> from
          Case Qualification
        </h2>

        {/* Audience cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
          className="audience-grid"
        >
          {audiences.map((a, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,160,71,0.15)",
                borderRadius: "10px",
                padding: "36px 32px",
                transition: "border-color 0.25s, background 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(201,160,71,0.5)";
                el.style.background = "rgba(201,160,71,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(201,160,71,0.15)";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <div
                style={{
                  fontSize: "26px",
                  marginBottom: "16px",
                  width: "52px",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(201,160,71,0.1)",
                  borderRadius: "10px",
                }}
              >
                {a.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Marcellus, serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.35,
                  marginBottom: "14px",
                }}
              >
                {a.role}
              </h3>
              <p
                style={{
                  fontFamily: "DM Sans, serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .audience-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}