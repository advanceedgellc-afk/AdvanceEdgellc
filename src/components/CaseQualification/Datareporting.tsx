"use client";

const metrics = [
  {
    label: "Source-Level Performance",
    icon: "📊",
    desc: "Acceptance and retention rates broken down by campaign, channel, vendor, and intake path.",
  },
  {
    label: "Portfolio Views",
    icon: "📁",
    desc: "Snapshot of total leads, qualified cases, signed retainers, and active docket by practice area.",
  },
  {
    label: "Reason Codes",
    icon: "🏷️",
    desc: 'Standardized "why" for declined or dropped cases, jurisdiction, timing, damages, documentation issues, conflicts, etc., so improvements are obvious.',
  },
  {
    label: "Benchmarking Over Time",
    icon: "📈",
    desc: "Track how changes in criteria, scripts, or vendors impact actual case quality and economics.",
  },
];

export default function DataReporting() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Row 1: Header (Full Width) */}
        <div style={{ marginBottom: "60px" }}>
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
              Intelligence & Reporting
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Marcellus', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 400,
              color: "#0f1923",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Data, Reporting, and{" "}
            <span style={{ color: "#ff9a28", fontFamily: "'Marcellus', serif" }}>Campaign Intelligence</span>
          </h2>

          <p
            style={{
              color: "#666",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "700px",
            }}
          >
            A case qualification program that doesn&apos;t produce actionable data is just a
            fancy checklist. AdvanceEdge builds reporting into the process from day one.
          </p>
        </div>

        {/* Row 2: Image and Metrics Grid */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1.5fr", 
            gap: "60px",
            alignItems: "start",
            marginBottom: "60px" 
          }}
          className="reporting-layout"
        >
          {/* Image */}
          <div style={{ position: "sticky", top: "40px" }}>
            <div 
              style={{ 
                width: "100%", 
                aspectRatio: "4/5",
                background: "#f8f6f1",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #efeae0",
                overflow: "hidden"
              }}
            >
              <img 
                src="/case-qualification/reporting.webp" 
                alt="Campaign Intelligence and Reporting"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Metrics Grid & Callout */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "1fr 1fr", 
                gap: "24px" 
              }}
            >
              {metrics.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    padding: "24px",
                    background: "#f8f6f1",
                    borderRadius: "12px",
                    borderLeft: "4px solid #ff9a28",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{m.icon}</span>
                  <h3
                    style={{
                      fontFamily: "'Marcellus', serif",
                      fontSize: "18px",
                      fontWeight: 400,
                      color: "#0f1923",
                      margin: 0,
                    }}
                  >
                    {m.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Callout Card (Moved to Right Column) */}
            <div
              style={{
                background: "#0f1923",
                borderRadius: "16px",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  color: "#ffffff",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  margin: 0
                }}
              >
                This is the information you need when it&apos;s time to renew agency contracts,
                reallocate budget, or retire underperforming campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Removed */}
        
        {/* Responsive Media Query */}
        <style>{`
          @media (max-width: 900px) {
            .reporting-layout { grid-template-columns: 1fr !important; }
            .reporting-layout > div:first-child { display: none; }
          }
          @media (max-width: 600px) {
             .reporting-layout > div:last-child { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}