"use client";

import React from 'react';

const steps = [
  {
    number: "01",
    title: "Scope and Provider Mapping",
    body: "From intake and Case Qualification data, we map out the likely provider universe for each matter: ER, inpatient, outpatient, specialists, imaging, pharmacy, rehab. You confirm or refine that list.",
  },
  {
    number: "02",
    title: "Authorization Preparation and Validation",
    body: "We prepare or review your HIPAA authorizations and other releases to ensure they are complete and appropriately scoped before any request is sent. This includes checking dates, entities, scope language, and signatures to minimize avoidable rejections.",
  },
  {
    number: "03",
    title: "Request Submission via Optimal Channels",
    body: "Using the 90k+ facility database, we select the right channel for each provider — fax, portal, copy service, or mail — and submit the request with all required documentation, payment, and reference details.",
  },
  {
    number: "04",
    title: "Ongoing Follow-Up and Escalation",
    body: "We follow up with providers and copy services on a defined cadence — escalating when timelines slip beyond typical ranges — until records are produced. You see status by matter and provider, instead of relying on scattered emails and sticky notes.",
  },
  {
    number: "05",
    title: "Quality Check and Gap Analysis",
    body: "When records arrive, we compare them to the original request: patient, provider, date range, and record types. Obvious gaps, mismatches, or missing providers are flagged and either resolved by our team or escalated to yours, depending on your preferences.",
  },
  {
    number: "06",
    title: "Secure Delivery and Integration with Review",
    body: "Records are delivered securely to your systems. When you use Medical Record Review, those same records flow immediately into clinician-driven review workflows, producing timelines, summaries, and issue lists your attorneys can work from without delay.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg, #0d1520 0%, #121e2e 100%)",
      }}
    >
      {/* Decorative dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(201,160,71,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px] bg-[#ff3600]" />
            <span
              className="text-[#ff3600] font-black text-xs tracking-[0.18em] uppercase font-sans"
            >
              Our Process
            </span>
          </div>

          <h2
            className="font-serif text-[clamp(2rem,3.5vw,2.5rem)] font-light leading-tight text-white mb-6"
          >
            How Our Medical Record{" "}
            <span className="text-[#ff9a28]">Retrieval Process Works</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12 pl-12 md:pl-0">
          {/* Vertical line connector */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-8 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline marker */}
              <div
                className="absolute left-0 md:left-1/2 -ml-[19px] w-10 h-10 rounded-full bg-[#121e2e] border-2 border-[#ff9a28] flex items-center justify-center font-serif text-[#ff9a28] font-bold z-10 shadow-[0_0_15px_rgba(255,154,40,0.3)]"
              >
                {step.number}
              </div>

              {/* Content box */}
              <div className="md:w-1/2">
                <div
                  className="bg-[#0d1520]/80 p-8 rounded-2xl border border-white/5 hover:border-[#ff9a28]/30 transition-colors duration-300 backdrop-blur-sm"
                >
                  <h3
                    className="font-serif text-xl text-white mb-3 leading-tight"
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans text-sm text-white/60 leading-relaxed"
                  >
                    {step.body}
                  </p>
                </div>
              </div>
              <div className="md:w-1/2" /> {/* Spacer for flex grid */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}