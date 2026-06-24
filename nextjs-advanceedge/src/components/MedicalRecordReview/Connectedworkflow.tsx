"use client";

const stackItems = [
  { number: "01", title: "Intake & Contact Center", body: "Capture structured data on injuries and treatment.", active: false },
  { number: "02", title: "Case Qualification", body: "Decides which matters deserve attorney time.", active: false },
  { number: "03", title: "Medical Record Retrieval", body: "Obtains complete records from providers, pharmacies, copy services, and digital platforms.", active: false },
  { number: "04", title: "Medical Record Review", body: "Turns those records into timelines, issue lists, and damages analysis.", active: true },
  { number: "05", title: "Litigation Support & Back-Office", body: "Uses those outputs to drive discovery, settlement, and trial preparation.", active: false },
];

const results = [
  { heading: "Faster, more confident case decisions", body: "Attorneys can decide whether to advance, settle, or exit a case based on clear, structured evidence." },
  { heading: "More consistent valuations", body: "Settlement ranges and trial posture are grounded in standardized, comparable summaries rather than scattered notes." },
  { heading: "Better use of attorney and expert time", body: "Lawyers and experts focus on strategy, argument, and opinion — not basic chart review." },
  { heading: "Cleaner communication", body: "You can explain strengths and weaknesses in plain language backed by precise references to the record — to clients, co-counsel, and decision-makers." },
];

export default function ConnectedWorkflow() {
  return (
    <>
      {/* Connected stack */}
      <section
        id="connected-workflow"
        style={{
          background: "#ffffff",
          padding: "100px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
              How It Fits Together
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "80px",
              alignItems: "start",
            }}
            className="stack-layout"
          >
            <div>
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
                Part of a{" "}
                <span style={{ color: "#ff9a28" }}>Connected Medical Evidence Workflow</span>
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "#666",
                  lineHeight: 1.8,
                }}
              >
                On its own, medical record review clarifies individual cases. Paired with other
                AdvanceEdge services, it becomes part of a connected medical evidence pipeline.
                
              </p>
              <div
                style={{
                  background: "#f8f6f1",
                  borderLeft: "4px solid #ff9a28",
                  borderRadius: "6px",
                  padding: "20px",
                  marginTop:"20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "#555",
                    lineHeight: 1.75,
                    margin: 0,
                    fontStyle: "italic",
                  }}
                >
                  That&apos;s what it means for AdvanceEdge to operate as your legal intake and
                operations partner, not just a standalone review vendor.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {stackItems.map((item) => (
                <div
                  key={item.number}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px 24px",
                    borderRadius: "8px",
                    background: item.active ? "#0f1923" : "#f8f6f1",
                    borderLeft: `4px solid ${item.active ? "#ff9a28" : "transparent"}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Marcellus', serif",
                      fontSize: "12px",
                      color: item.active ? "#ff9a28" : "rgba(15,25,35,0.3)",
                      minWidth: "28px",
                      paddingTop: "2px",
                    }}
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Marcellus', serif",
                        fontSize: "15px",
                        fontWeight: 400,
                        color: item.active ? "#ffffff" : "#0f1923",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                      {item.active && (
                        <span
                          style={{
                            marginLeft: "10px",
                            fontSize: "10px",
                            background: "#ff9a28",
                            color: "#0f1923",
                            padding: "2px 8px",
                            borderRadius: "20px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            verticalAlign: "middle",
                          }}
                        >
                          YOU ARE HERE
                        </span>
                      )}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        color: item.active ? "rgba(255,255,255,0.6)" : "#888",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .stack-layout { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Results + CTA */}
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
              Results
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
              maxWidth: "540px",
            }}
          >
            What Better Medical Record{" "}
            <span style={{ color: "#ff9a28" }}>Review Delivers</span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
              marginBottom: "60px",
            }}
            className="results-grid"
          >
            {results.map((r, i) => (
              <div
                key={i}
                style={{
                  padding: "32px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  borderTop: "3px solid #ff9a28",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,154,40,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Marcellus', serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#ff9a28",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {r.heading}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {r.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA block */}
          <div
            style={{
              background: "rgba(255,154,40,0.08)",
              border: "1px solid rgba(255,154,40,0.25)",
              borderRadius: "10px",
              padding: "48px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <p
                style={{
                  fontFamily: "'Marcellus', serif",
                  fontSize: "20px",
                  color: "#ffffff",
                  lineHeight: 1.4,
                  margin: "0 0 10px",
                }}
              >
                See what structured review looks like on one of your current cases.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Schedule a working session to walk through one of your current cases — from raw
                records to attorney decision — and see how a structured review model would change
                your team&apos;s workload and confidence.
              </p>
            </div>
            <a
              href="/contact"
              style={{
                display: "inline-block",
                padding: "16px 32px",
                background: "#ff9a28",
                color: "#0f1923",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                borderRadius: "4px",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
              }
            >
              Book a 20-Minute Medical Records Review Consult
            </a>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .results-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}