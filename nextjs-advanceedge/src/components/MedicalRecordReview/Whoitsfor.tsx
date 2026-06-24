"use client";

const audiences = [
  {
    icon: "⚖️",
    title: "Mass Tort and High‑Volume PI Practices",
    intro: "For Mass Tort and high‑volume PI/MVA dockets, standardized medical record review gives you:",
    points: [
      "Consistent criteria for what \"ready for settlement\" or \"ready for trial\" means across hundreds or thousands of files.",
      "Portfolio‑level insight into which cases are strong, weak, or borderline.",
      "A scalable way to support co‑counsel, referring firms, and expert teams with clean, comparable medical summaries.",
    ],
  },
  {
    icon: "🏛️",
    title: "Firms with Complex Single‑Event Cases",
    intro: "Serious malpractice, catastrophic injury, environmental exposure, and complex liability cases all require deep medical analysis. Our clinicians and analysts provide:",
    points: [
      "Causation‑focused review of records and exposures",
      "Standard‑of‑care context (within the limits of your experts' jurisdictions)",
      "Clear articulation of how pre‑existing conditions and co‑morbidities intersect with the alleged injury",
    ],
  },
  {
    icon: "📣",
    title: "Legal Marketing Firms and Aggregators",
    intro: "Legal marketing firms and aggregators primarily need fast, credible screening: proof of use, proof of injury, and obvious disqualifiers for cases coming out of instant retrieval flows like SettLiT, ConnectMD, and YourCaseWorks. Our minimal‑review SKU is built for exactly that—so you can demonstrate case quality to law‑firm clients without paying for full litigation‑ready analysis on every lead.",
    points: [],
  },
];

export default function WhoItsFor() {
  return (
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
            Who It&apos;s For
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
          Who Our Medical Record Review{" "}
          <span style={{ color: "#ff9a28" }}>Services Are Built For</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="whofor-grid"
        >
          {audiences.map((a, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                padding: "36px 28px",
                borderTop: "3px solid #ff9a28",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,154,40,0.05)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.03)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "14px" }}>{a.icon}</div>
              <h3
                style={{
                  fontFamily: "'Marcellus', serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#ffffff",
                  marginBottom: "14px",
                  lineHeight: 1.3,
                }}
              >
                {a.title}
              </h3>

              {a.intro && (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.7,
                    margin: 0,
                    marginBottom: a.points.length > 0 ? "16px" : 0,
                  }}
                >
                  {a.intro}
                </p>
              )}

              {a.points.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {a.points.map((pt, pi) => (
                    <div key={pi} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span
                        style={{
                          flexShrink: 0,
                          width: "18px",
                          height: "18px",
                          background: "rgba(255,154,40,0.15)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ff9a28",
                          fontSize: "10px",
                          marginTop: "2px",
                        }}
                      >
                        ✓
                      </span>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          color: "rgba(255,255,255,0.6)",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .whofor-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}