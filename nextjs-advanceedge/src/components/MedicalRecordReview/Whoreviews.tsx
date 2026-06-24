"use client";

const reviewers = [
  {
    icon: "🩺",
    title: "Clinical Reviewers",
    body: "Physicians, pharmacists, nurses, dentists, and other medically trained professionals who understand diagnoses, progression, pharmacology, device failure modes, and standard of care. They know how to read EMRs and structured digital health data, not just skim for keywords.",
  },
  {
    icon: "⚖️",
    title: "Legal-Aware Analysts",
    body: "Reviewers trained on Mass Tort, PI, MVA, malpractice, and disability patterns who know how to connect medical facts to liability, causation, and damages. They flag proof of use, proof of injury, treatment gaps, comparative fault signals, and defense-friendly facts attorneys must address.",
  },
  {
    icon: "🤖",
    title: "AI-Assisted Workflows",
    body: "AI tools handle OCR, de-duplication, sectioning, and basic tagging so human reviewers aren't manually wrestling with 5,000-page PDFs. Pattern-detection helps surface repeated drugs, providers, or injuries, which clinicians then confirm and contextualize. All clinical and legal judgments remain with human experts; AI is there to accelerate, not replace, review.",
  },
];

export default function WhoReviews() {
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
            Our Review Team
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 400,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "16px",
            maxWidth: "600px",
          }}
        >
          Clinicians, Legal-Trained Analysts, and{" "}
          <span style={{ color: "#ff9a28" }}>AI Working Together</span>
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
            marginBottom: "56px",
            maxWidth: "580px",
          }}
        >
          A useful medical record review must be both clinically accurate and legally relevant. Our
          teams are built around that reality.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="who-reviews-grid"
        >
          {reviewers.map((r, i) => (
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
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>{r.icon}</div>
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
                {r.title}
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
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .who-reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}