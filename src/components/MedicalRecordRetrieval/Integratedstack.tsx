"use client";

const stackItems = [
  {
    number: "01",
    title: "Intake Specialists & Contact Center",
    body: "Capture detailed, structured information from clients.",
    active: false,
  },
  {
    number: "02",
    title: "Case Qualification",
    body: "Uses that data, plus tools like Enformion and Persona, to decide which matters deserve attorney attention.",
    active: false,
  },
  {
    number: "03",
    title: "Medical Record Retrieval",
    body: "Obtains the provider-level evidence needed to prove up those qualified cases.",
    active: true,
  },
  {
    number: "04",
    title: "Medical Record Review",
    body: "Turns raw PDFs into usable timelines, issue lists, and synopses.",
    active: false,
  },
  {
    number: "05",
    title: "Litigation Support & Back-Office",
    body: "Uses all of the above to move matters to resolution efficiently.",
    active: false,
  },
];

const results = [
  {
    heading: "Fewer last-minute surprises",
    body: "Missing facilities, incomplete records, and obvious gaps are identified earlier, not days before a deadline.",
  },
  {
    heading: "Faster case readiness",
    body: "Demand letters, settlement talks, and trial prep start from complete, organized records instead of partial notes.",
  },
  {
    heading: "More predictable timelines",
    body: "Partners and case managers can plan around realistic retrieval windows, with visibility into what's pending and why.",
  },
  {
    heading: "More focused litigation teams",
    body: "Paralegals and attorneys spend less time on hold with providers and more time on strategy, negotiation, and client care.",
  },
];

export default function IntegratedStack() {
  return (
    <>
      {/* Integrated Stack */}
      <section
        id="integrated-stack"
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
                Part of an{" "}
                <span style={{ color: "#ff9a28" }}>Integrated Legal Operations Stack</span>
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "#666",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                Record retrieval is one piece of a larger operating system for law firms and legal
                marketing agencies. That&apos;s what it means to use AdvanceEdge as a legal intake
                and operations partner, not just a one-off retrieval vendor.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {stackItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "20px",
                    padding: "20px 24px",
                    borderRadius: "8px",
                    background: item.active ? "#0f1923" : "#f8f6f1",
                    borderLeft: `4px solid ${item.active ? "#ff9a28" : "transparent"}`,
                    transition: "background 0.2s",
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

      {/* Results section */}
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
            <span style={{ color: "#ff9a28" }}>Retrieval Delivers</span>
          </h2>
          <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "#999",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                When medical record retrieval stops being a side chore and becomes a disciplined process, firms typically see:
              </p>
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
                  padding: "32px 32px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "10px",
                  borderTop: "3px solid #ff9a28",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,154,40,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.03)";
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
            <div style={{ maxWidth: "580px" }}>
              <p
                style={{
                  fontFamily: "'Marcellus', serif",
                  fontSize: "20px",
                  color: "#ffffff",
                  lineHeight: 1.4,
                  margin: "0 0 10px",
                }}
              >
                Your attorneys should be building cases, not chasing records. A dedicated medical record retrieval partner makes that difference visible in a matter of months, not years.
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
                Book a 20-minute session to map your current record retrieval process, identify the
                worst bottlenecks, and see exactly where AdvanceEdge can plug in.
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
              Book a 20-Minute Records Workflow Review
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