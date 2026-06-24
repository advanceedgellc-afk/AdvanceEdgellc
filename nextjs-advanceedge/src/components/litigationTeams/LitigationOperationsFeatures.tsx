"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Settings, 
  TrendingUp, 
  ArrowRight,
  Zap,
  Lock,
  FileCheck,
  ClipboardCheck,
  History
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LitigationOperationsFeatures() {
  return (
    <div className="w-full">
      {/* 1. Human-Led, AI-Accelerated */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#19191a] py-24 px-6 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-8">
            Human‑Led, AI‑Accelerated Litigation Operations
          </motion.h2>
          <motion.div variants={fadeIn} className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>In real engagements, AI and human expertise work together.</p>
            <p><strong className="text-white">AI assists</strong> with document classification, de‑duplication, and routing, reducing the manual load on paralegals and operations staff.</p>
            <p><strong className="text-white">Analytics and dashboards</strong> surface trends such as deficiency rates, vendor performance, and conversion, so leadership can act in time rather than in hindsight.</p>
            <p><strong className="text-white">Human specialists handle judgment calls</strong>, for example, deciding whether a disqualified lead really meets criteria, whether a packet is truly complete, or whether an intake script is drifting in a way that affects case quality.</p>
            <p className="font-medium text-[#FF9A28]">You get scale and speed without giving up control or quality.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Compliance & Controls */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-slate-50 py-24 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-12 text-slate-900">
            Compliance, Confidentiality, and Quality Controls
          </motion.h2>
          <motion.div variants={fadeIn} className="mb-12 text-slate-600 text-lg">
            Litigation support and back office work touch sensitive intake data, contracts, and sometimes PHI. Workflows are designed around law firm expectations, not generic contact center norms.
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Lock, title: "Confidentiality & Access", text: "Role-based access control and least privilege policies with strict data segregation." },
              { icon: FileCheck, title: "Written SOPs", text: "Standardized checklists for all workflows from contract audits to lead reviews." },
              { icon: ClipboardCheck, title: "Two-Step QA", text: "Mandatory verification for settlement packets and high-impact reports before delivery." },
              { icon: History, title: "Audit-Ready Logs", text: "Full operational history showing who did what, when, and for which matter." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <item.icon className="text-[#FF9A28] mb-4" size={28} />
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeIn} className="mt-12 text-slate-700 font-medium">
            AdvanceEdge handles operations. Your lawyers and marketing leaders retain control of criteria, strategy, and decisions.
          </motion.p>
        </div>
      </motion.section>

      {/* 3. Single Legal Operations Engine */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#0a0a0c] py-24 px-6 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-8">
            Part of a Single Legal Operations Engine
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-slate-400 mb-12">
            Litigation Support & Back‑Office is one layer in a broader system:
          </motion.p>
          <div className="space-y-4">
            {[
              { name: "Intake & Contact Center", desc: "Captures structured info and documents." },
              { name: "Case Qualification", desc: "Turns raw leads into qualified cases." },
              { name: "Medical Retrieval & Review", desc: "Builds and interprets medical evidence." },
              { name: "Litigation Support & Back‑Office", desc: "Keeps data clean, packets assembled, and reports flowing." },
              { name: "Accounting & Bookkeeping", desc: "Closes the loop financially." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeIn} className="flex items-center gap-4 p-4 border-b border-white/10">
                <div className="w-8 h-8 rounded-full bg-[#FF9A28]/20 flex items-center justify-center text-[#FF9A28] font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <div className="font-bold">{step.name}</div>
                  <div className="text-sm text-slate-500">{step.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p variants={fadeIn} className="mt-12 text-lg font-semibold text-white">
            The result is one coordinated operations partner that understands your pipeline from first call to final packet.
          </motion.p>
        </div>
      </motion.section>

      {/* 4. Results */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-slate-50 py-24 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-12 text-slate-900">
            What Better Litigation Support & Back‑Office Delivers
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "More real cases", text: "Rescued from disqualified pools and cleaned vendor data." },
              { title: "Lower defect rates", text: "QA programs catch and correct issues before they become bottlenecks." },
              { title: "Cleaner reporting", text: "Decisions based on current data, not estimates or guesses." },
              { title: "Strategic focus", text: "More attorney and leadership time on work that drives outcomes." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="flex gap-4">
                <TrendingUp className="text-[#FF9A28] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
    </div>
  );
}