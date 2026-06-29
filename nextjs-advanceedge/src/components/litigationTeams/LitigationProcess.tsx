"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Map your operational reality",
    description: "We start by mapping how your work actually flows today. Where leads come from, how contracts are managed, how calls are logged, how packets are built, and which systems are involved, such as client portals, CxOne, Litify, Salesforce, or proprietary tools."
  },
  {
    number: "02",
    title: "Define a task menu tied to outcomes",
    description: "From that map, we define concrete task types such as disqualified lead review, call data cleanup, contract audits, packet sign call audits, and recurring reports. Each task type gets a playbook that defines inputs, steps, checks, and outputs, so work is consistent regardless of volume."
  },
  {
    number: "03",
    title: "Connect to your tools and templates",
    description: "Our team works inside your approved systems. That can include intake portals, CRMs, call center platforms, survey tools, case management, and e‑signature platforms. Your firm owns the criteria, scripts, and templates. Our team owns execution and QA within that framework."
  },
  {
    number: "04",
    title: "Run, report, and refine",
    description: "Once live, we track throughput, error rates, and business impact, such as rescued cases, reduced deficiencies, reduced agent errors, and faster packet completion. Playbooks and reports are refined with you until the litigation support and legal back office support services for your law firm become a stable, repeatable layer you can dial up or down."
  }
];

export default function LitigationProcess() {
  return (
    <section className="bg-[#0a0a0c] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How Our Litigation Support & Back‑Office Process Works
          </h2>
        </motion.div>

        {}
        <div className="relative">
          {/* Horizontal Line Connector */}
          <div className="absolute top-10 left-0 right-0 h-[2px] bg-white/10 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Node */}
                <div className="w-20 h-20 rounded-full bg-[#16161a] border-2 border-white/10 flex items-center justify-center text-2xl font-bold text-[#FF9A28] mb-8 group-hover:border-[#FF9A28]/50 transition-all duration-300 z-10 relative">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="bg-[#16161a] p-6 rounded-3xl border border-white/5 h-full transition-all duration-300 hover:border-[#FF9A28]/50">
                  <h3 className="text-lg font-bold text-white mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}