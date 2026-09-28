"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function LawFirmAccounting() {
  const services = [
    "Legal specific chart of accounts and bookkeeping",
    "Matter level cost and expense tracking",
    "Operating account reconciliations that tie back to your practice management system",
    "Client trust and IOLTA bookkeeping using individual client ledgers",
    "Monthly three way reconciliations that match bank statements, trust ledgers and client ledger totals",
    "Documentation and audit trails that support bar audits and internal reviews"
  ];

  return (
    <section className="bg-[#0a0a0c] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Law Firm Accounting and Trust Bookkeeping
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Law firm accounting starts with the same building blocks as any business but adds trust accounting, IOLTA rules and heightened scrutiny from state bars.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#16161a] p-8 md:p-12 rounded-3xl border border-white/5"
        >
          <h3 className="text-2xl font-semibold mb-8 text-[#FF9A28]">Our services for law firms include:</h3>
          
          <ul className="space-y-4">
            {services.map((item, index) => (
              <li key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#FF9A28]" />
                <span className="text-slate-300 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-8 border-t border-white/10"
        >
          <p className="text-slate-400 leading-relaxed italic">
            We also help align your workflows, for example when retainers are received, how and when fees are transferred from trust to operating, and how settlements are distributed, so the accounting side mirrors your legal obligations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}