"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const leftPoints = [
  "Answer inbound calls and web leads immediately",
  "Qualify Mass Tort, MVA, and PI cases using your criteria",
  "Capture comprehensive incident and injury details",
  "Apply your firm‑specific qualification criteria",
  "Document everything cleanly in your CRM system",
  "Execute warm handoffs to your legal teams",
];

export default function IntakeSpecialistsSection() {
  return (
    <section className="pb-10 pt-10 md:pt-20 px-5 md:px-0 bg-[#05142A] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-marcellus text-3xl md:text-4xl lg:text-5xl leading-tight text-center md:text-left">
            What Our Intake Specialists Do
          </h2>
          <div className="mt-4 h-[2px] w-24 bg-[#FF9A28] mx-auto md:mx-0" />
        </motion.div>

        {/* 2-column content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: bullet list */}
          <motion.ul
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {leftPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-[#FF9A28]">
                  <FaCheckCircle className="text-lg" />
                </span>
                <p className="font-dm text-base md:text-lg text-slate-100 leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </motion.ul>

          {/* Right: description text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 max-w-xl md:ml-auto"
          >
            <h3 className="font-marcellus text-2xl md:text-3xl text-slate-50 leading-snug">
              Intake handled the way law firms actually need it.
            </h3>
            <p className="font-dm text-base md:text-lg text-slate-200 leading-relaxed">
              Our intake specialists serve as the critical first touchpoint between
              potential clients and your firm. They’re trained to ask the right questions,
              identify red flags early, and capture the specific details your attorneys
              need to make fast, confident case decisions.
            </p>
            <p className="font-dm text-base md:text-lg text-slate-200 leading-relaxed">
              Every interaction follows your approved scripts and qualification criteria,
              ensuring consistency across all shifts and specialists. The result is a steady
              pipeline of well-documented, qualified leads that your legal team can evaluate
              and convert efficiently.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
