"use client";
import { useState } from "react";

const tasks = [
  {
    number: "01",
    title: "Leverages a verified 90k+ facility database",
    body: "Uses an in-house, continuously maintained database of 90,000+ U.S. healthcare facilities, pharmacies, and copy services to identify the correct contact method, channel, and process for each provider — rather than hunting for fax numbers and portal links from scratch.",
  },
  {
    number: "02",
    title: "Maps providers from your intake and docket",
    body: "Reads Intake and Case Qualification data to build a provider list for each matter: hospitals, ERs, PCPs, specialists, imaging centers, pharmacies, and prior-treating providers.",
  },
  {
    number: "03",
    title: "Prepares and validates HIPAA-compliant authorizations",
    body: "Checks that all required elements — patient identifiers, scope, purpose, dates, and signatures — are present before a request ever goes out, reducing denials and \"please resend\" loops.",
  },
  {
    number: "04",
    title: "Submits requests via the right channel for each provider",
    body: "Sends requests by fax, portal, mail, copy-service integration, or secure email, depending on the provider's rules and your firm's policies. The 90k-facility database often includes these preferences based on prior experience.",
  },
  {
    number: "05",
    title: "Uses modern digital retrieval platforms where it makes sense",
    body: "For appropriate dockets and clients, our team is proficient in digital retrieval solutions such as SettLiT, ConnectMD, YourCaseWorks, and similar platforms. This enables rapid retrieval of structured EMR, pharmacy, and claims data, then backfill with traditional facility-level records as needed.",
  },
  {
    number: "06",
    title: "Tracks every request and follows up on a set cadence",
    body: "Logs each request with provider, date, method, and expected turnaround; follows up with providers and copy services on a disciplined schedule until records arrive.",
  },
  {
    number: "07",
    title: "Verifies completeness and identifies gaps",
    body: "Confirms that records match the requested date ranges, providers, and record types; flags obvious gaps — missing facilities, incomplete date spans, absent imaging or pharmacy data — before they surprise your litigators.",
  },
  {
    number: "08",
    title: "Delivers records securely and hands them off for review",
    body: "Delivers records via encrypted channels into your DMS/CMS or a secure portal. When you use Medical Record Review, retrieval feeds directly into clinician-led timelines, summaries, and issue lists, rather than dumping raw PDFs on your team.",
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState<number | null>(null);

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
            Day-to-Day Operations
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="whatwedo-layout"
        >
          {/* Left sticky */}
          <div style={{ position: "sticky", top: "40px" }}>
            <h2
              style={{
                fontFamily: "'Marcellus', serif",
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              What Our Medical Record Retrieval{" "}
              <span style={{ color: "#ff9a28" }}>Specialists Do Day-to-Day</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              This is what &ldquo;we handle medical record retrieval for law firms&rdquo; means in
              practice. Day-to-day, the AdvanceEdge team:
            </p>
            <div
              style={{
                background: "rgba(255,154,40,0.08)",
                border: "1px solid rgba(255,154,40,0.25)",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "#ff9a28",
                  lineHeight: 1.75,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                ✦ All of this is managed by an AI‑trained team that uses AI for tracking, deduplication, routing, and document organization, keeping humans in charge of provider communication, exception handling, and final QA, while the routine work is automated wherever safely possible.
              </p>
            </div>
          </div>

          {/* Right — expandable task list */}
          <div>
            {tasks.map((task, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  cursor: "pointer",
                }}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "20px 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Marcellus', serif",
                      fontSize: "13px",
                      color: "#ff9a28",
                      minWidth: "28px",
                      opacity: 0.7,
                    }}
                  >
                    {task.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Marcellus', serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: active === i ? "#ff9a28" : "#ffffff",
                      flex: 1,
                      margin: 0,
                      lineHeight: 1.3,
                      transition: "color 0.2s",
                    }}
                  >
                    {task.title}
                  </h3>
                  <span
                    style={{
                      color: "#ff9a28",
                      fontSize: "18px",
                      flexShrink: 0,
                      transition: "transform 0.2s",
                      transform: active === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </div>
                {active === i && (
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.8,
                      margin: "0 0 20px 48px",
                      padding: "0",
                    }}
                  >
                    {task.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .whatwedo-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}