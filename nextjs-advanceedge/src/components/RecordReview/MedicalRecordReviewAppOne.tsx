"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Stethoscope,
  Scale,
  BrainCircuit,
} from 'lucide-react';

interface SectionProps {
  children: React.ReactNode;
  dark?: boolean;
}

interface SectionHeaderProps {
  title: string;
  dark?: boolean;
}

/**
 * SEO METADATA:
 * Title: Medical Record Review Services for Law Firms | AdvanceEdge
 * Description: Clinician-led medical record review services for Mass Tort, PI, MVA, malpractice, and complex injury dockets.
 */

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Section = ({ children, dark = false }: SectionProps) => (
  <section className={`py-24 px-6 ${dark ? 'bg-[#0a0a0c] text-white' : 'bg-white text-slate-900'}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const SectionHeader = ({ title, dark = false }: SectionHeaderProps) => (
  <motion.h2 
    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
    className={`text-3xl md:text-5xl font-bold mb-12 ${dark ? 'text-white' : 'text-slate-900'}`}
  >
    {title}
  </motion.h2>
);

export default function MedicalRecordReviewApp() {
  return (
    <div className="min-h-screen bg-white">
      


      {/* 1. Why it's its own job */}
      <Section dark={false}>
        <SectionHeader title="Why Medical Record Review Is Its Own Job, Not Just “More Paralegal Work”" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-lg text-slate-700 mb-12 max-w-3xl">
          <p className="mb-6">In Mass Tort and serious injury litigation, medical records are the ultimate arbiter of liability, causation, and damages. Despite their criticality, many firms still treat medical record review as an informal, ad-hoc task: a massive PDF is handed off to a busy associate or paralegal with the hope that they’ll surface the right facts before a deadline. This lack of structure typically leads to:</p>
          <div className="space-y-4">
            <p><strong className="text-[#FF9A28]">Late discoveries.</strong> Pre‑existing conditions, confounding factors, or missing surgeries are discovered only when defense raises them, not when you’re still in control of the narrative.</p>
            <p><strong className="text-[#FF9A28]">Inconsistent outputs.</strong> Each reviewer summarizes differently, so partners can’t rely on a standard package to make decisions.</p>
            <p><strong className="text-[#FF9A28]">Attorney time spent on non‑attorney work.</strong> Highly paid litigators get dragged into basic chart reading instead of focusing on case strategy, negotiation, and trial prep.</p>
          </div>
          <p className="mt-8">Rather than treating medical record review for law firms as an informal task, AdvanceEdge approaches it as a structured operation with clear inputs and standardized results. Our expert reviewers provide the reliable clinical insights you need without overloading your internal staff.</p>
        </motion.div>
      </Section>

      {/* 2. Clinicians, Analysts, AI */}
      <Section dark={true}>
        <div className="text-sm uppercase tracking-widest text-[#FF9A28] font-bold mb-4">Who actually reviews your medical records</div>
        <SectionHeader title="Clinicians, Legal‑Trained Analysts, and AI Working Together" dark />
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-slate-400 mb-12 max-w-3xl">
          A useful medical record review must be both clinically accurate and legally relevant. Our teams are built around that reality.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Stethoscope, title: "Clinical reviewers", text: "Physicians, pharmacists, nurses, dentists, and other medically trained professionals who understand diagnoses, progression, pharmacology, device failure modes, and the standard of care. They know how to read EMRs and structured digital health data, not just skim for keywords." },
            { icon: Scale, title: "Legal‑aware analysts", text: "Reviewers trained on Mass Tort, PI, MVA, malpractice, and disability patterns who know how to connect medical facts to liability, causation, and damages. They flag proof of use, proof of injury, treatment gaps, comparative fault signals, and defense‑friendly facts that attorneys must address." },
            { icon: BrainCircuit, title: "AI‑assisted workflows", text: "AI tools handle OCR, de‑duplication, sectioning, and basic tagging, so human reviewers aren’t manually wrestling with 5,000-page PDFs. Pattern‑detection helps surface repeated drugs, providers, or injuries, which clinicians then confirm and contextualize. All clinical and legal judgments remain with human experts; AI is there to accelerate, not replace, review." }
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-[#16161a] p-8 rounded-2xl border border-white/5">
              <item.icon className="text-[#FF9A28] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. Deliverables */}
      <Section dark={false}>
        <div className="text-sm uppercase tracking-widest text-[#FF9A28] font-bold mb-4">What our medical record review team actually delivers</div>
        <SectionHeader title="From Raw Records to Litigation‑Ready Insight" />
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-slate-600 mb-12">
          A typical medical record review package from AdvanceEdge can include:
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { t: "Chronological medical timelines", d: "Visit‑by‑visit summaries showing dates, providers, diagnoses, procedures, medications, and key findings in order." },
            { t: "Case‑specific issue lists", d: "Clear identification of facts relevant to liability, causation, and damages: first exposure/use dates, onset of symptoms, and aggravating factors." },
            { t: "Treatment gap analysis", d: "Flags where treatment stops, changes, or is inconsistent with the claimed injury, so attorneys can proactively explain or address those gaps." },
            { t: "Gap detection and missing‑record identification", d: "Reviewers spot missing periods and notify your team exactly what records need to be retrieved so gaps can be closed." },
            { t: "Pre‑existing and comorbid condition mapping", d: "Structured summaries of prior conditions, including how defense might use them and how they relate to the alleged harm." },
            { t: "Medication and exposure analysis", d: "For drug/environmental matters, capture of drug names, dosages, NDCs, and exposure data." },
            { t: "Damages‑focused summaries", d: "High‑level write‑ups focused on functional impact, duration of impairment, and intensity of treatment." },
            { t: "Source‑based indexing", d: "Organized record sets by facility and date, with references back to specific pages for quick verification." }
          ].map((item, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <CheckCircle2 className="text-[#FF9A28] shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-slate-900 mb-1">{item.t}</h4>
                <p className="text-slate-600 text-sm">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mt-12 bg-[#FF9A28]/5 border border-[#FF9A28]/20 p-8 rounded-2xl">
          <p className="text-lg font-medium text-slate-800 text-center italic">Outputs are formatted to plug directly into demand packages, settlement matrices, deposition prep, mediation briefs, and trial notebooks.</p>
        </motion.div>
      </Section>

    </div>
  );
}