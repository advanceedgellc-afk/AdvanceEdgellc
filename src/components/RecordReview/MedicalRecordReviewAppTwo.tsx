"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Scale, FileText, CheckCircle2, ChevronRight, Layers, Workflow, ShieldCheck } from 'lucide-react';

const reviewLevels = [
    {
      icon: Search,
      title: "1. Minimal review for case acquisition (proof of use & proof of injury)",
      intro: "Up front, especially when you or your marketing partners are using instant retrieval solutions like SettLiT, ConnectMD, YourCaseWorks, and similar tools, you often don't need a 20‑page narrative. What you need is a fast answer to:",
      bullets: [
        "Do we have proof of use/exposure?",
        "Do we have proof of injury tied to that product or exposure?"
      ],
      outro: "Our team reviews records and digital health data coming out of these platforms to perform a minimal, acquisition‑stage review: confirm documented use or exposure, confirm diagnosed injury, and flag obvious disqualifiers. This is exactly what legal marketing firms and intake platforms need to show that a campaign is delivering qualified cases, not just signed forms."
    },
    {
      icon: Scale,
      title: "2. Full case‑ready review for litigation and settlement",
      intro: "Once a case passes initial screens and attorneys are deciding whether to push toward settlement or trial, they need a much deeper analysis. At this stage, our reviewers provide full medical record reviews in the formats your litigation teams actually use:",
      bullets: [
        "Mass Tort matrix formats populated with proof‑of‑use, proof‑of‑injury, comorbidities, and treatment history",
        "Chronological medical summaries that tell the story from pre‑incident baseline through current condition",
        "Plaintiff fact sheet support, with medical facts listed chronologically and mapped back to the record"
      ],
      outro: "This level of review supports case strategy, valuation, and negotiation."
    },
    {
      icon: FileText,
      title: "3. Packet‑level review for settlement packets and trial exhibits",
      intro: "At the final stage, settlement packets, mediation binders, and trial exhibits are job-changed again. Here, our reviewers:",
      bullets: [
        "Re‑review the record to extract and bookmark exact pages where key facts appear (proof of use, proof of injury, key surgeries, labs, imaging, disability findings)",
        "Build organized packets or exhibit sets with those pages copied, labeled, and linked, so mediators, adjusters, judges, and juries can see the proof without hunting through full record sets"
      ],
      outro: "This \"packet‑level\" medical record review focuses on presentation and persuasion, rather than discovery, and our team conducts it routinely for settlement and trial-bound matters."
    }
  ];


  const processSteps = [
    {
      s: "01",
      t: "Define scope and stage",
      intro: "We start by understanding where the case is: acquisition screening, active litigation, settlement, or trial. You specify whether you need minimal proof‑of‑use/proof‑of‑injury review, full chronologies, matrix completion, packet‑level exhibit pulls, or some combination.",
      bullets: [],
      outro: ""
    },
    {
      s: "02",
      t: "Records intake and organization",
      intro: "Records arrive from your firm or directly from Medical Record Retrieval. We use AI‑assisted tools and human QA to:",
      bullets: [
        "De‑duplicate pages and sort by provider and date",
        "Normalize formats and prepare clean sets for clinical review"
      ],
      outro: ""
    },
    {
      s: "03",
      t: "Clinical review, annotation, and gap detection",
      intro: "Clinical and legal‑trained reviewers read through the records, annotate key events, and actively look for what's missing: date ranges with no documentation, surgeries mentioned but not evidenced, references to outside providers whose records are not yet in the file. When gaps are found, your team receives clear retrieval recommendations (which provider, which dates, which record types) so those holes can be closed before major case decisions.",
      bullets: [],
      outro: ""
    },
    {
      s: "04",
      t: "Build timelines, issue lists, and summaries",
      intro: "Depending on the defined scope, the team builds:",
      bullets: [
        "Medical timelines aligned to case theory",
        "Issue lists focused on liability, causation, and damages",
        "Matrices or plaintiff fact sheet support data",
        "Damages‑oriented narratives for demand and mediation"
      ],
      outro: ""
    },
    {
      s: "05",
      t: "Attorney/case team review and refinement",
      intro: "Sample outputs are reviewed with your litigators and case managers. You tell us what is most useful, what is extraneous, and what needs to be emphasized. The reviewing model is tuned so future cases better match your firm's preferences.",
      bullets: [],
      outro: ""
    },
    {
      s: "06",
      t: "Ongoing updates as records evolve",
      intro: "When new records arrive or treatment continues, we update existing timelines and summaries rather than starting from zero. That way, your view of each case stays current as the medical story develops.",
      bullets: [],
      outro: ""
    }
  ];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Section = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (

  <section className={`py-24 px-6 ${dark ? 'bg-[#0a0a0c] text-white' : 'bg-white text-slate-900'}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const SectionHeader = ({ title, dark = false }: { title: string; dark?: boolean }) => (

  <motion.h2 
    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
    className={`text-3xl md:text-5xl font-bold mb-12 ${dark ? 'text-white' : 'text-slate-900'}`}
  >
    {title}
  </motion.h2>
);

export default function MedicalRecordReviewSections() {
  return (
    <div className="min-h-screen">
      
      {/* 1. Levels of Review (Dark Background) */}
      <Section dark={true}>
        <SectionHeader title="Different Levels of Medical Record Review for Each Stage" dark />
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-lg text-slate-400 mb-12 max-w-3xl">
          Medical record review is not one monolithic product. Firms and legal marketing platforms use it differently at each stage of a case.
        </motion.p>
        
        <div className="space-y-8">
  {reviewLevels.map((item, i) => (
    <motion.div
      key={i}
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
      className="p-8 bg-[#16161a] border border-white/10 rounded-2xl hover:border-[#FF9A28]/50 transition-colors"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-[#FF9A28]/10 p-3 rounded-lg text-[#FF9A28]">
          <item.icon size={28} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
      </div>

      <div className="text-slate-400 leading-relaxed space-y-4">
        <p>{item.intro}</p>

        <ul className="space-y-2 pl-2">
          {item.bullets.map((bullet, j) => (
            <li key={j} className="flex items-start gap-3">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FF9A28] shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <p>{item.outro}</p>
      </div>
    </motion.div>
  ))}
</div>
      </Section>

{/* 2. Process (Light Background) */}
<Section dark={false}>
  <SectionHeader title="How Our Medical Record Review Process Works" />
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {processSteps.map((step, i) => (
      <motion.div
        key={i}
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-[#FF9A28]/50 transition-all"
      >
        <div className="text-4xl font-bold text-[#FF9A28] mb-4 opacity-50">{step.s}</div>
        <h4 className="text-lg font-bold text-slate-900 mb-3">{step.t}</h4>

        <div className="text-slate-600 text-sm leading-relaxed space-y-3">
          <p>{step.intro}</p>

          {step.bullets.length > 0 && (
            <ul className="space-y-2 pl-1">
              {step.bullets.map((bullet, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF9A28] shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {step.outro && <p>{step.outro}</p>}
        </div>
      </motion.div>
    ))}
  </div>
</Section>

    </div>
  );
}