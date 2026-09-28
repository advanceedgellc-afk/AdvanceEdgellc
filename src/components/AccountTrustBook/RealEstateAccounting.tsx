"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function RealEstateAccounting() {
  const services = [
    "Property level income and expense tracking",
    "Rent and other revenue recording and reconciliation",
    "Security deposit and escrow tracking with clear ledgers",
    "Allocation of common or shared expenses where required",
    "Property, portfolio and entity level reporting for owners, partners and lenders"
  ];

  return (
    <section className="bg-white py-24 px-6 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Real Estate Investment and Property Accounting
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            For attorneys and other investors who own rental properties, development projects or other real estate assets, we provide property level and portfolio level bookkeeping that supports cash flow decisions, financing and tax planning.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-slate-900">
            Services for real estate investors include:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#FF9A28]/50 transition-colors"
              >
                <p className="text-slate-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conclusion Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="p-8 bg-[#FF9A28]/5 border border-[#FF9A28]/10 rounded-2xl"
        >
          <p className="text-slate-700 leading-relaxed italic">
            We align our structure with yours, whether you use single member entities, holding companies or other structures, so reports match how you think about your investments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}