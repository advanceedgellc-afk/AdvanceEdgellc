"use client";

const audiences = [
  {
    icon: "⚖️",
    label: "High-Volume Mass Tort & PI Firms",
    body: "If your firm runs multiple Mass Torts or high-volume PI/MVA dockets, each new campaign can generate hundreds or thousands of matters with complex medical histories. Tracking requests across dozens of hospital systems and local providers quickly becomes unmanageable. AdvanceEdge centralizes record retrieval for your entire docket, so you can see what has been requested, what's pending, and what's ready for Review at any point in time.",
  },
  {
    icon: "🏛️",
    label: "Solo & Small Firms Handling Serious Injuries",
    body: "Solo and small firms that take on catastrophic injury, malpractice, or long-term disability matters often lack the back-office muscle to keep record retrieval moving. Our team plugs in as your virtual medical records department, so you can pursue complex, high-value cases without hiring and training full-time retrieval staff.",
  },
  {
    icon: "📣",
    label: "Legal Marketing Agencies & Intake Platforms",
    body: "Legal marketing agencies and intake platforms selling Mass Tort and PI campaigns to firms are increasingly judged on \"case quality,\" not just signed retainers. When law-firm clients lack a robust records process, good campaigns can look bad. With AdvanceEdge handling record retrieval behind your clients' dockets, you can be more confident that signed cases are backed by real, verifiable medical evidence.",
  },
];

export default function WhoItsFor() {
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
            Who It&apos;s For
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 400,
            color: "#0f1923",
            lineHeight: 1.2,
            marginBottom: "56px",
            maxWidth: "600px",
          }}
        >
          Who Our Medical Record Retrieval{" "}
          <span style={{ color: "#ff9a28" }}>Services Are Built For</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="who-grid"
        >
          {audiences.map((a, i) => (
            <div
              key={i}
              style={{
                background: "#f8f6f1",
                borderRadius: "10px",
                padding: "36px 30px",
                borderTop: "3px solid #ff9a28",
                transition: "box-shadow 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{a.icon}</div>
              <h3
                style={{
                  fontFamily: "'Marcellus', serif",
                  fontSize: "19px",
                  fontWeight: 400,
                  color: "#0f1923",
                  marginBottom: "14px",
                  lineHeight: 1.3,
                }}
              >
                {a.label}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}