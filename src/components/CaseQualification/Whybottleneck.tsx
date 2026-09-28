"use client";

import { Weight } from "lucide-react";

const problems = [
  {
    number: "01",
    title: "Unqualified leads waste an attorney's time.",
    desc: "When every intake file lands on an attorney's desk, your most expensive people spend hours replaying what a trained specialist could have filtered out in minutes.",
  },
  {
    number: "02",
    title: "Over-aggressive disqualification quietly kills good cases.",
    desc: "Rushed admin staff who say \"no\" too quickly because they don't understand the nuance of Mass Tort, PI, MVA, or even complex family and immigration cases.",
  },
  {
    number: "03",
    title: "Campaign performance looks worse than it is.",
    desc: "Without a disciplined qualification layer, it's impossible to tell whether the issue is lead quality, intake performance, or attorney availability. Everything gets lumped into \"the leads are bad.\"",
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
      {/* Decorative gold strip left edge */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "10%",
          bottom: "10%",
          width: "4px",
          background: "linear-gradient(180deg, transparent, #c9a047 30%, #c9a047 70%, transparent)",
          borderRadius: "2px",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
          <span style={{ display: "block", width: "28px", height: "2px", background: "#ff3600" }} />
          <span
            style={{
              color: "#ff3600",
              fontFamily: "'DM Sans', serif",
              fontWeight:"900",
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
             
            }}
          >
            The Real Problem
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 700,
            color: "#0f1923",
            lineHeight: 1.2,
            marginBottom: "16px",
            maxWidth: "640px",
          }}
        >
          Why Case Qualification Is the{" "}
          <span style={{ color: "#ff9a28",fontFamily: "'Marcellus', serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700, }}>Real Bottleneck</span>
        </h2>

        <p
          style={{
            color: "#555",
            fontFamily: "DM Sans, serif",
            fontSize: "16px",
            lineHeight: 1.8,
            marginBottom: "60px",
            maxWidth: "700px",
          }}
        >
          For most growth-minded firms and agencies, the constraint isn't clicks or even
          calls — it's the ability to consistently decide which matters deserve attorney
          attention.
        </p>

        {/* Problem cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
            marginBottom: "60px",
          }}
          className="bottleneck-grid"
        >
          {problems.map((item) => (
            <div
              key={item.number}
              style={{
                background: "#f8f6f1",
                borderRadius: "8px",
                padding: "36px 28px",
                borderTop: "4px solid #ff9a28",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 16px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "DM Sans, serif",
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#ff9a28",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                {item.number}
              </span>
              <h3
                style={{
                  fontFamily: "Marcellus, serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#0f1923",
                  lineHeight: 1.4,
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "DM Sans, serif",
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Resolution callout */}
        <div
          style={{
            background: "#0f1923",
            borderRadius: "8px",
            padding: "36px 40px",
            borderLeft: "4px solid #c9a047",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontFamily: "DM Sans, serif",
              fontSize: "16px",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            AdvanceEdge's case qualification program fixes this by creating a clear,
            documented layer between{" "}
            <em style={{ color: "#ff9a28" }}>"someone reached out"</em> and{" "}
            <em style={{ color: "#ff9a28" }}>"an attorney will invest time in this file."</em>{" "}
            That layer runs to your rules, not ours.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bottleneck-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 540px) and (max-width: 900px) {
          .bottleneck-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}