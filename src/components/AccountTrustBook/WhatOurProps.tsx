"use client";

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Comprehensive bookkeeping services",
    desc: "Daily, weekly, monthly and catch up bookkeeping to keep your books current. We record income and expenses, post journal entries, maintain the general ledger and prepare your records for tax and management reporting."
  },
  {
    title: "Accounts payable management",
    desc: "Vendor invoice processing, payment scheduling, vendor reconciliations and expense management.",
    bullets: [
      "For law firms: includes experts, medical providers, marketing vendors, court costs and operating overhead.",
      "For real estate investors: includes utilities, repairs and maintenance, insurance, HOA or association fees, property management fees and lender related payments."
    ]
  },
  {
    title: "Accounts receivable and billing support",
    desc: "Customer and client invoicing, payment tracking, collections support and receivables reconciliation.",
    bullets: [
      "For law firms: we coordinate with your billing system to align invoices, trust transfers and collections with matter records.",
      "For real estate: we track rent and other income, monitor delinquencies and keep aging reports clean so you can act early."
    ]
  },
  {
    title: "Bank, credit card and general ledger reconciliations",
    desc: "Regular bank reconciliations, credit card reconciliations and general ledger balancing. We match statements to books, investigate differences and close out reconciling items so you know the numbers you see are real, not approximate."
  },
  {
    title: "Financial statement preparation",
    desc: "Preparation of core financial statements and supporting schedules, including:",
    bullets: [
      "Profit and Loss Statement",
      "Balance Sheet",
      "Cash Flow Statement",
      "Trial Balance",
      "Practice area or department level schedules for law firms",
      "Property or portfolio level schedules for real estate investors",
      "These can be produced monthly or quarterly depending on your needs and provide the baseline for tax planning, bank relationships and internal decision making."
    ]
  },
  {
    title: "Month end and year end closing",
    desc: "Month end and year end closing entries, accruals, prepayments, reconciliations and financial close support. We align revenue and expenses with the correct periods and make sure balance sheet accounts, including retainers, trust balances and property reserves, are reviewed before the books are closed."
  },
  {
    title: "Payroll accounting support",
    desc: "Payroll journal entries, payroll reconciliations and employee reimbursement accounting. We work with your payroll provider so wages, taxes, benefits and reimbursements are correctly reflected in your books and, for multi office firms or portfolios, can be analyzed by location."
  }
];

export default function AccountingBookkeeping() {
  return (
    <section className="bg-white py-24 px-6 text-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Accounting and Bookkeeping Services
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            The list below reflects what we actually do for law firms and real estate investors. Each service can be tailored to your systems, volume and internal team.
          </p>
        </motion.div>

        {}
        <div className="space-y-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: 10 }}
              className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-[#FF9A28] shadow-sm hover:shadow-[0_10px_30px_rgba(255,154,40,0.1)] transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1.5 w-1.5 h-6 bg-[#FF9A28] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-base mb-4">
                    {service.desc}
                  </p>
                  
                  {service.bullets && (
                    <ul className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                      {service.bullets.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                          <span className="text-[#FF9A28] mt-1 text-[12px] font-bold">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}