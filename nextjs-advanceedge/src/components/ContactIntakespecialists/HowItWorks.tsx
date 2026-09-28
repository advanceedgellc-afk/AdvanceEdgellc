"use client"
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Align on scripts, criteria, and systems",
    desc: "The starting point is your world: your practice areas, your campaigns, your risk tolerance. You share existing intake scripts, qualification rules, disclosures, and system setup. Together, everything is tightened so your criteria are explicit, the questions flow logically, and the documentation required by attorneys and regulators is baked in from the first call."
  },
  {
    number: "02",
    title: "Train a dedicated intake team on your playbook",
    desc: "A dedicated pod of intake specialists is assigned to your firm or campaigns. They are trained on your tone, your practice nuances, your preferred phrasing, and your systems. To your callers, they sound like your own staff because they are working from your playbook, not a generic script."
  },
  {
    number: "03",
    title: "Go live with coverage and documentation",
    desc: "Once training and test calls are complete, coverage goes live. Calls, chats, and web leads are handled under your brand. Every interaction is recorded in your CRM or case management system with standardized notes, dispositions (qualified, disqualified, needs review), and next steps. When appropriate, callers are warm‑transferred to your attorneys or booked for consults."
  },
  {
    number: "04",
    title: "QA, call reviews, and ongoing optimization",
    desc: "No script is perfect on day one. Recorded calls and sample files are reviewed on a regular cadence. Where conversion drops, confusion arises, or callers raise new questions, the intake script and workflows are refined with your input. Over time, the intake funnel becomes more precise: fewer unqualified calls reach your attorneys, more qualified cases become signed retainers, and your marketing data becomes cleaner."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 px-6 text-slate-900">
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            How Our Legal Intake Program Works
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-20 bg-gradient-to-r from-[#FF9A28] to-[#F59E0B] mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="relative flex gap-8 md:gap-12"
            >
              {/* Timeline Connector */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#FF9A28] flex items-center justify-center font-bold text-[#FF9A28] bg-white z-10">
                  {step.number}
                </div>
                {i !== steps.length - 1 && (
                  <div className="flex-grow w-0.5 bg-slate-200 mt-4 -mb-16" />
                )}
              </div>

              {/* Content */}
              <div className="pb-16">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}