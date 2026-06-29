"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Clock, Bot } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const features = [
  {
    icon: <Scale className="w-8 h-8 text-[#FF9A28]" />,
    title: "Legal-trained agents, not generic reps",
    description: "Intake specialists are trained on Mass Tort, PI, MVA, family law, estate, immigration, and other high-volume practice areas. They understand liability basics, medical and financial details, timelines, and what your attorneys actually need to see in an intake file before they say yes to a case."
  },
  {
    icon: <Clock className="w-8 h-8 text-[#FF9A28]" />,
    title: "24/7 coverage without the “weekend tax”",
    description: "Phones, chats, and web leads don’t stop on Friday at 5 p.m. Coverage spans nights, weekends, holidays, and all time zones without tacking on “after-hours premiums,” so you aren’t paying extra just to answer the same leads you already funded with your marketing."
  },
  {
    icon: <Bot className="w-8 h-8 text-[#FF9A28]" />,
    title: "Human-led, AI-assisted workflows",
    description: "AI tools assist with summaries, data validation, and follow-up triggers, while experienced intake specialists handle the actual conversations and judgment calls. That combination gives you speed and consistency without losing nuance in liability, medical history, family dynamics, or immigration details."
  }
];

export default function WhyTrustUs() {
  return (
    <section className="bg-[#0f1115] text-white py-24 px-6 md:px-12 lg:px-24">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight  text-[#ffffff]  ">
            Why Law Firms and Legal Marketing Agencies Trust Our Intake Specialists
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Whether you’re a two-attorney PI shop, a multi-office firm with Mass Tort and MVA dockets, or a legal marketing agency sending thousands of leads per week, intake is the make-or-break point. Every missed call, slow follow-up, or incomplete file shows up later as “bad leads,” unhappy clients, and wasted ad spend. AdvanceEdge was built specifically as a legal intake and operations partner.
          </p>
        </motion.div>

        {}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1a1f26] p-8 rounded-xl border border-slate-800 hover:border-[#FF9A28]/50 transition-colors group"
            >
              <div className="mb-6 p-3 bg-[#0f1115] w-fit rounded-lg shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}