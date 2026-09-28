"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ComplianceSection = () => (
  <section className="bg-white py-24 px-6 text-slate-800">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Compliance, Confidentiality, and Quality Controls
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Litigation support and back office work touch sensitive intake data, contracts, and sometimes PHI. Workflows are designed around law firm expectations, not generic contact center norms.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { text: "Confidentiality and access control based on roles and least privilege, with clear data segregation by client, campaign, and firm." },
          { text: "Written SOPs and checklists for all recurring workflows, including contract audits, e‑signature reconciliation, disqualified lead review, and QA programs." },
          { text: "Two-step QA for critical outputs such as settlement packets and high-impact reports, with a second reviewer checking against a checklist before delivery." },
          { text: "Audit-ready logs that show who did what, when, and for which matter, so there is always a clear operational history." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-4 p-6 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm hover:border-[#FF9A28]/50 hover:shadow-md transition-all duration-300"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FF9A28]/10 flex items-center justify-center text-[#FF9A28]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm font-medium">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center max-w-3xl mx-auto p-8 bg-[#FF9A28]/5 rounded-3xl border border-[#FF9A28]/10"
      >
        <p className="text-slate-700 leading-relaxed font-medium">
          AdvanceEdge handles operations. Your lawyers and marketing leaders retain control of criteria, strategy, and decisions.
        </p>
      </motion.div>
    </div>
  </section>
);

const LegalOperationsEngine = () => (
  <section className="bg-[#0a0a0c] py-24 px-6 text-slate-300">
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          Part of a Single Legal Operations Engine
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Litigation Support & Back‑Office is one layer in a broader system:
        </p>
      </motion.div>
      
      <div className="space-y-8">
        {[
          "Intake & Contact Center captures structured information and documents from every call.",
          "Case Qualification turns raw leads into qualified or disqualified cases based on your rules.",
          "Medical Record Retrieval and Medical Record Review build and interpret the medical evidence.",
          "Litigation Support & Back‑Office keeps data clean, contracts reconciled, packets assembled, QA running, and reports flowing.",
          "Accounting & Bookkeeping and trust accounting close the loop financially."
        ].map((item, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex gap-6 items-center group"
             >
               <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#FF9A28] flex items-center justify-center text-[#FF9A28] font-bold text-sm">
                 {i + 1}
               </div>
               <div className="flex-grow border-b border-white/5 pb-8 group-last:border-none">
                 <span className="text-lg text-slate-300 group-hover:text-white transition-colors duration-300">{item}</span>
               </div>
             </motion.div>
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 text-slate-400 font-semibold max-w-2xl mx-auto border-t border-white/10 pt-12"
      >
        The result is one coordinated operations partner that understands your pipeline from first call to final packet.
      </motion.p>
    </div>
  </section>
);

const ResultsSection = () => (
  <section className="bg-white py-24 px-6 text-slate-800">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-4xl font-bold leading-tight text-slate-900">
          What Better Litigation Support & Back‑Office Delivers
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          From real client work, firms and legal marketing agencies typically see:
        </p>
        <ul className="space-y-4 text-slate-600">
          {[
            "More real cases from the same marketing spend, as viable cases are rescued from disqualified pools and vendor data is cleaned.",
            "Lower defect and deficiency rates in contracts, packets, and calls, as QA programs identify and correct issues early.",
            "Cleaner and faster reporting so operations and leadership can make decisions on current data rather than guesses.",
            "More attorney and leadership time on work that actually drives outcomes, and less time inside portals, spreadsheets, and call logs."
          ].map((item, i) => (
             <li key={i} className="flex gap-3 bg-[#FF9A28]/5 p-4 rounded-xl border border-[#FF9A28]/10">
               <span className="text-[#FF9A28] font-bold mt-0.5">✓</span>
               <span className="text-slate-700 text-sm md:text-base">{item}</span>
             </li>
          ))}
        </ul>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="aspect-square rounded-3xl bg-slate-100 border border-slate-200 flex items-center justify-center p-8"
      >
              <img 
          src="/litigation-teams/litigation-support-book.webp" 
          alt="Accounting and financial records" 
          className="w-full h-full object-cover rounded-3xl "
        />
      </motion.div>
    </div>
  </section>
);

export default function App() {
  return (
    <main className="font-sans">
      <ComplianceSection />
      <LegalOperationsEngine />
      <ResultsSection />
    </main>
  );
}