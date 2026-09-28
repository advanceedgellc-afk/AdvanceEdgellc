"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function LitigationOperations() {
  return (
    <section className="bg-[#131313] py-24 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl   p-12 overflow-hidden relative">
              {/* Abstract Human-AI Synergy SVG */}

              <img 
          src="/litigation-teams/human-led.webp" 
          alt="Accounting and financial records" 
          className="w-full h-full object-cover rounded-3xl "
        />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0c]/80 to-transparent" />
            </div>
          </motion.div>

          {}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Human‑Led, AI‑Accelerated Litigation Operations
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                In real engagements, AI and human expertise work together.
              </p>
              
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-[#FF9A28] mt-1.5">•</span>
                  <span>AI assists with document classification, de‑duplication, and routing, reducing the manual load on paralegals and operations staff.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#FF9A28] mt-1.5">•</span>
                  <span>Analytics and dashboards surface trends such as deficiency rates, vendor performance, and conversion, so leadership can act in time rather than in hindsight.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#FF9A28] mt-1.5">•</span>
                  <span>Human specialists handle judgment calls, for example, deciding whether a disqualified lead really meets criteria, whether a packet is truly complete, or whether an intake script is drifting in a way that affects case quality.</span>
                </li>
              </ul>

              <p className="pt-4 font-semibold text-white">
                You get scale and speed without giving up control or quality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}