"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HumanAIAccounting() {
  const points = [
    {
      title: "AI assistance",
      desc: "AI assists with categorizing transactions, spotting anomalies and preparing draft reconciliations and reports."
    },
    {
      title: "Process automation",
      desc: "Automation reduces manual re entry between systems such as practice management, property management and accounting software."
    },
    {
      title: "Human oversight",
      desc: "Human accountants and trust bookkeepers review, correct, document and explain what the numbers mean, and ensure trust and regulatory rules are followed."
    },
    {
      title: "The result",
      desc: "You get the speed and consistency of modern tools together with the accountability of a specialist team."
    }
  ];

  return (
    <section className="bg-[#0a0a0c] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Human Led, AI Assisted Accounting
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Our team uses AI tools where they genuinely help, then keeps experienced humans in charge of anything that affects compliance or judgment.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#16161a] p-8 rounded-3xl border border-white/5 flex gap-6 items-start hover:border-[#FF9A28]/30 transition-colors"
            >
              <div className="flex-shrink-0 w-2 h-12 bg-[#FF9A28] rounded-full mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                <p className="text-slate-400 leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}