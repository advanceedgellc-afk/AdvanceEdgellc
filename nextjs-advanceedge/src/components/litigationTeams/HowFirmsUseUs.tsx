"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Building, Target, CheckCircle2 } from 'lucide-react';

export default function HowFirmsUseUs() {
  const marketingBullets = [
    "Cleaned and normalized about 40,000 call records and fixed callback logic.",
    "Reviewed almost 10,000 disqualified leads and rescued 95 viable PFAS and Suboxone type cases.",
    "Processed and audited more than 3,000 contracts and packets across e‑signature and portal systems.",
    "Ran multi-level QA programs across more than 2,000 calls, cutting monthly error counts from 25 to 30 down to 2 to 3.",
    "Provided two-level QA support for a high-volume plaintiff firm on Litify, reviewing thousands of leads, extracting documents, categorizing contracts and HIPAA or HITECH records, and entering structured data into the firm’s system."
  ];

  const piBullets = [
    "Keep lead records, contracts, and medical packets synchronized across intake, CRM, and case management systems.",
    "Audit intake calls for criteria compliance and script adherence.",
    "Assemble settlement and mediation packets from Medical Record Review outputs.",
    "Maintain calendars, tasks, and follow-ups so matters keep moving even when volume spikes."
  ];

  const soloBullets = [
    "Provide verified, high-quality leads to grow the case pipeline with qualified Mass Tort cases.",
    "Assign virtual agents to handle administrative tasks, document management, and client intake.",
    "Implement web development and digital marketing solutions to ensure the firm stands out in a crowded digital marketplace.",
    "Offer flexible staffing plans - including hourly, part-time, or full-time support to match the firm's specific case volume and admin load."
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How Firms and Legal Marketing Agencies Use Litigation Support & Back‑Office
          </h2>
        </motion.div>

        <div className="space-y-12">
          {/* Legal Marketing Agencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#FF9A28]/10 rounded-2xl flex items-center justify-center">
                <Target className="text-[#FF9A28]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">For legal marketing agencies and intake platforms</h3>
            </div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Legal marketing agencies and intake platforms need a partner that lives inside their operations, not a distant contractor. In a single recent quarter for one national legal marketing client, our team:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              {marketingBullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 items-start">
                  <CheckCircle2 className="text-[#FF9A28] shrink-0 mt-1" size={18} />
                  <span className="text-sm text-slate-700">{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 font-medium italic border-t border-slate-100 pt-6">
              The result is cleaner pipelines, better conversion, and reporting that panel firms and marketing leadership can trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mass Tort & PI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: '#FF9A28' }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <Building className="text-[#FF9A28]" size={24} />
                <h3 className="text-xl font-bold text-slate-900">For Mass Tort and PI law firms</h3>
              </div>
              <p className="text-slate-600 mb-6 italic">Mass Tort and PI firms use our litigation support services to:</p>
              <ul className="space-y-4">
                {piBullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <Zap className="text-[#FF9A28] shrink-0 mt-1" size={16} />
                    <span className="text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solo & Small Firms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: '#FF9A28' }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-[#FF9A28]" size={24} />
                <h3 className="text-xl font-bold text-slate-900">For solo and small firms</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Solo and small firms use AdvanceEdge as a virtual litigation operations team. We handle form preparation, data entry, packet checks, basic QA, and simple reporting, so the attorney can focus on clients and the court rather than on the back office.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                For solo attorneys and small firms, managing day-to-day operations while meeting client expectations can be overwhelming. AdvanceEdge delivers flexible support tailored to these needs, reducing administrative burdens and supporting practice growth through cost-effective solutions.
              </p>
              <h4 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">How we help solo and small firms:</h4>
              <ul className="space-y-3">
                {soloBullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9A28] mt-2 shrink-0" />
                    <span className="text-sm">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}