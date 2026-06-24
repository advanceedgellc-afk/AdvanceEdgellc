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
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ maxWidth: "1100px" }}>

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
              Intelligence & Reporting
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Marcellus', serif",
              fontSize: "clamp(24px, 3.5vw, 38px)",
              fontWeight: 700,
              color: "#0f1923",
              lineHeight: 1.22,
              marginBottom: "16px",
            }}
          >
            Data, Reporting, and{" "}
            <span style={{ color: "#ff9a28", fontFamily: "'Marcellus', serif" }}>Campaign Intelligence</span>
          </h2>

          <p
            style={{
              color: "#666",
              fontFamily: "DM Sans, serif",
              fontSize: "15px",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            A case qualification program that doesn&apos;t produce actionable data is just a
            fancy checklist. AdvanceEdge builds reporting into the process from day one.
          </p>

          {/* Metrics list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
            {metrics.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  padding: "22px 24px",
                  background: "#f8f6f1",
                  borderRadius: "8px",
                  borderLeft: "4px solid #ff9a28",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 24px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <span style={{ fontSize: "22px", flexShrink: 0, marginTop: "2px" }}>
                  {m.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "Marcellus, serif",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#0f1923",
                      marginBottom: "6px",
                    }}
                  >
                    {m.label}
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
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dark callout card */}
          <div
            style={{
              background: "#0f1923",
              borderRadius: "12px",
              padding: "48px 36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative gold circles */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                border: "2px solid rgba(201,160,71,0.15)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "1px solid rgba(201,160,71,0.07)",
                pointerEvents: "none",
              }}
            />

           

            <p
              style={{
                fontFamily: "DM Sans, serif",
                fontSize: "16px",
                color: "#ffffff8c",
                lineHeight: 1.7,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              This is the information you need when it&apos;s time to renew agency contracts,
              reallocate budget, or retire underperforming campaigns.
            </p>

            
          </div>

        </div>
      </div>
    </section>
  );
}