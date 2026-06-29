"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ClientExample() {
  const lawFirmServices = [
    "Maintain day to day books and records",
    "Track matter level costs and reimbursements",
    "Support trust bookkeeping and reconciliations in line with state bar expectations"
  ];

  const reHoldings = [
    "Track rent and other income",
    "Record property level expenses, capital improvements and reserves",
    "Prepare simple property and portfolio reports for use with lenders, partners and advisers"
  ];

  return (
    <section className="bg-[#0a0a0c] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Client Example: One Owner, Law Firm and Real Estate Portfolio
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            One of our long term clients is a trial lawyer who owns a growing plaintiff law firm and also holds a portfolio of real estate investments in the United States.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Law Firm Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#16161a] p-8 rounded-3xl border border-white/5 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#FF9A28]">For his law firm, we:</h3>
            <ul className="space-y-4">
              {lawFirmServices.map((item, index) => (
                <li key={index} className="flex gap-4 items-start text-slate-300 text-lg">
                  <div className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#FF9A28]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Real Estate Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#16161a] p-8 rounded-3xl border border-white/5 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-[#FF9A28]">For his real estate holdings, we:</h3>
            <ul className="space-y-4">
              {reHoldings.map((item, index) => (
                <li key={index} className="flex gap-4 items-start text-slate-300 text-lg">
                  <div className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#FF9A28]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Conclusion Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="p-8 border-t border-white/10"
        >
          <p className="text-slate-400 leading-relaxed italic text-lg">
            Because one team sees both sides, he gets a consistent view of cash flow and profitability across his professional practice and his investments, not two disconnected sets of numbers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}