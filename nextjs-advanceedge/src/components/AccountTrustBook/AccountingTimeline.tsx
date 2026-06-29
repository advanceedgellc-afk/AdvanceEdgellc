"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Step 1: Discovery and diagnostic",
    description: "We review your current accounting setup for the firm and, if relevant, your real estate entities. That includes bank accounts, trust or IOLTA accounts, software, existing ledgers, reconciliations and reporting."
  },
  {
    title: "Step 2: Design roles, controls and workflows",
    description: "Together, we define who does what. Which tasks stay inside your firm, which tasks we handle, what approvals are required and how trust, retainer and property cash flows should move. We put this into clear, written workflows and checklists."
  },
  {
    title: "Step 3: Connect to your tools",
    description: "We connect to your existing accounting and practice platforms such as QuickBooks Online, Xero, Clio, LeanLaw, CosmoLex or similar tools, and to any real estate or property management systems you already use, always under firm controlled permissions."
  },
  {
    title: "Step 4: Run the recurring cycle",
    description: "On a set schedule, we process transactions, update ledgers, perform reconciliations, produce financial statements and, for law firms, complete monthly three way trust reconciliations. Exceptions are surfaced quickly so they do not accumulate unnoticed."
  },
  {
    title: "Step 5: Review and refine",
    description: "You review reports with a dedicated contact at AdvanceEdge, we adjust categories, reports and processes based on your feedback and we refine until the accounting and bookkeeping function feels like a natural part of your operations."
  }
];

export default function AccountingTimeline() {
  return (
    <section className="bg-white py-24 px-6 text-slate-800">
      <div className="max-w-3xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            How Our Accounting and Bookkeeping Engagements Work
          </h2>
        </motion.div>

        <div className="relative space-y-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-slate-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-16 md:pl-24"
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FF9A28] flex items-center justify-center text-white font-bold shadow-lg border-4 border-white">
                {index + 1}
              </div>
              
              {/* Content */}
              <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}