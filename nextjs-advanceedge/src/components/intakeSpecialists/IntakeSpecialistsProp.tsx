"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Built Inside Litigation Support",
    description:
      "We're not a staffing agency. We're a legal services company that understands case evaluation from day one because we work across the entire litigation lifecycle.",
  },
  {
    id: 2,
    title: "Quality Over Volume",
    description:
      "Our intake process is aligned to case quality, not call volume metrics. We focus on conversion rates and qualified leads, not just answering phones quickly.",
  },
  {
    id: 3,
    title: "Real Workflow Experience",
    description:
      "Our specialists have genuine Mass Tort and MVA workflow experience. They understand medical terminology, statute of limitations considerations, and liability factors.",
  },
  {
    id: 4,
    title: "Proven Extended Coverage",
    description:
      "We deliver reliable weekend, after-hours, and overnight coverage when your competitors are missing calls. No more lost leads during off-hours.",
  },
  {
    id: 5,
    title: "Validated Scaling",
    description:
      "Start small and scale up confidently once quality is validated. Test our specialists' performance before committing to expanded coverage or additional campaigns.",
  },
];

export default function WhyAdvanceEdge() {
  const firstCard = cards[0];
  const remainingCards = cards.slice(1);

  return (
    <section className="pb-10 md:pb-20 px-5 md:px-0 bg-[#05142A]">
      <div className="container mx-auto  max-w-7xl space-y-16 bg-white">
        <div className="px-10 py-14">
        {/* Row 1: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-10">
          {/* Col 1: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-marcellus text-3xl md:text-4xl lg:text-5xl leading-tight text-slate-900 mb-6">
              Why AdvanceEdge Intake Works Better
            </h2>
            <div className="w-20 h-1.5 bg-[#FF9A28] rounded-full" />
          </motion.div>

          {/* Col 2: First card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-6 items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF9A28] flex items-center justify-center shadow-lg">
              <FaArrowRight className="text-white text-xl" />
            </div>
            <div className="flex-1 pt-1">
              <h3 className="font-marcellus text-2xl md:text-3xl text-slate-900 mb-3 leading-tight">
                {firstCard.title}
              </h3>
              <p className="font-dm text-base md:text-lg text-slate-700 leading-relaxed">
                {firstCard.description}
              </p>
              <div className="mt-6 h-px bg-gradient-to-r from-slate-200 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Row 2–3: remaining 4 cards in 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {remainingCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF9A28] flex items-center justify-center shadow-lg">
                <FaArrowRight className="text-white text-xl" />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-marcellus text-2xl md:text-3xl text-slate-900 mb-3 leading-tight">
                  {card.title}
                </h3>
                <p className="font-dm text-base md:text-lg text-slate-700 leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-6 h-px bg-gradient-to-r from-slate-200 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
