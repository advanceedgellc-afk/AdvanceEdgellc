"use client";

const steps = [
  {
    number: "01",
    title: "Define Scope and Stage",
    body: [
      {
        type: "text",
        content:
          "We start by understanding where the case is: acquisition screening, active litigation, settlement, or trial. You specify whether you need minimal proof‐of‐use/proof‐of‐injury review, full chronologies, matrix completion, packet‐level exhibit pulls, or some combination.",
      },
    ],
  },
  {
    number: "02",
    title: "Records Intake and Organization",
    body: [
      {
        type: "text",
        content: (
          <>
            Records arrive from your firm or directly from{" "}
            <strong>Medical Record Retrieval</strong>. We use AI‐assisted tools and human QA to:
          </>
        ),
      },
      {
        type: "bullets",
        items: [
          "De‐duplicate pages and sort by provider and date",
          "Normalize formats and prepare clean sets for clinical review",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Clinical Review, Annotation, and Gap Detection",
    body: [
      {
        type: "text",
        content:
          "Clinical and legal‐trained reviewers read through the records, annotate key events, and actively look for what's missing: date ranges with no documentation, surgeries mentioned but not evidenced, references to outside providers whose records are not yet in the file. When gaps are found, your team receives clear retrieval recommendations (which provider, which dates, which record types) so those holes can be closed before major case decisions.",
      },
    ],
  },
  {
    number: "04",
    title: "Build Timelines, Issue Lists, and Summaries",
    body: [
      {
        type: "text",
        content: "Depending on the defined scope, the team builds:",
      },
      {
        type: "bullets",
        items: [
          "Medical timelines aligned to case theory",
          "Issue lists focused on liability, causation, and damages",
          "Matrices or plaintiff fact sheet support data",
          "Damages‐oriented narratives for demand and mediation",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Attorney / Case Team Review and Refinement",
    body: [
      {
        type: "text",
        content:
          "Sample outputs are reviewed with your litigators and case managers. You tell us what is most useful, what is extraneous, and what needs to be emphasized. The reviewing model is tuned so future cases better match your firm's preferences.",
      },
    ],
  },
  {
    number: "06",
    title: "Ongoing Updates as Records Evolve",
    body: [
      {
        type: "text",
        content:
          "When new records arrive or treatment continues, we update existing timelines and summaries rather than starting from zero. That way, your view of each case stays current as the medical story develops.",
      },
    ],
  },
];

function StepBody({ body }: { body: any[] }) {
  return (
    <>
      {body.map((block: any, i: number) => {
        if (block.type === "text") {
          return (
            <p
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.8,
                margin: 0,
                marginBottom: body[i + 1]?.type === "bullets" ? "10px" : 0,
              }}
            >
              {block.content}
            </p>
          );
        }
        if (block.type === "bullets") {
          return (
            <ul
              key={i}
              style={{
                margin: 0,
                paddingLeft: "18px",
                listStyleType: "disc",
              }}
            >
              {block.items.map((item: string, j: number) => (
                <li
                  key={j}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.8,
                    marginBottom: j < block.items.length - 1 ? "2px" : 0,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </>
  );
}

export default function HowItWorks() {
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
            Our Process
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Marcellus', serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            fontWeight: 400,
            color: "#0f1923",
            lineHeight: 1.2,
            marginBottom: "64px",
            maxWidth: "560px",
          }}
        >
          How Our Medical Record{" "}
          <span style={{ color: "#ff9a28" }}>Review Process Works</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2px",
            background: "rgba(15,25,35,0.06)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          className="steps-grid"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: "#fdfcfa",
                padding: "40px 36px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#f8f6f1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#fdfcfa";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Marcellus', serif",
                    fontSize: "11px",
                    color: "#ff9a28",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Step {step.number}
                </span>
                <span
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "rgba(255,154,40,0.25)",
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Marcellus', serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "#0f1923",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}
              >
                {step.title}
              </h3>
              <StepBody body={step.body} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}