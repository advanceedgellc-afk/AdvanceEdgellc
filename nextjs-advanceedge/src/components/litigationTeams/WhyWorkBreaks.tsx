"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const breakdowns = [
  "Lead records are not cleaned or normalized, which makes follow-up and reporting unreliable.",
  "Contracts, HIPAA, or HITECH documents and packets do not reconcile across systems.",
  "Call QA and intake audits get skipped, script drift creeps in, and errors become normal.",
  "Reporting arrives late or not at all, so leadership is steering without current data.",
];

/** "Why Litigation Support and Back-Office Work Break First" section. */
export default function WhyWorkBreaks() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-12 text-slate-900"
        >
          Why Litigation Support and Back‑Office Work Break First
        </motion.h2>

        <p className="mt-12 text-slate-700 font-medium text-center pb-10 text-lg">
          In high‑volume environments (Mass Tort campaigns, PI programs, national intake
          platforms), the real constraint is rarely leads or lawyers. It is operational debt.
          Thousands of small tasks pile up faster than your in‑house team can clear them.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {breakdowns.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -5, borderColor: "#FF9A28" }}
              className="flex gap-4 p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <CheckCircle2 className="text-[#FF9A28] shrink-0 mt-1" size={24} aria-hidden="true" />
              <span className="text-slate-700 text-lg">{item}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-slate-700 font-medium text-center text-lg">
          AdvanceEdge provides litigation support services and legal back office support services
          for law firms that want this operational debt under control, not hiding in spreadsheets
          and inboxes.
        </p>
      </div>
    </motion.section>
  );
}