"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseAcquisitionHero() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-0 bg-[#F6F6F6] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Image with border and animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-auto"
          >
            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-3xl overflow-hidden border border-slate-300"
            >
              {/* Glow border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#FF9A28] group-hover:shadow-[0_0_12px_rgba(255,154,40,0.8)] transition-all duration-300" />

              {/* Image wrapper with aspect ratio */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/caseAquation/AE-case-aq.webp"
                  alt="Case Acquisition for Law Firms"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-marcellus text-4xl md:text-5xl lg:text-[40px] leading-tight text-slate-900"
            >
              Case Acquisition for Law Firms & Legal Marketing Firms
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-marcellus text-lg md:text-2xl text-slate-700"
            >
              Delivering High-Intent Plaintiffs for Mass Tort & Personal Injury Cases
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-dm text-base text-slate-600 leading-relaxed"
            >
              At Advance Edge LLC, we provide a seamless case acquisition solution for both law firms and legal marketing firms, ensuring a steady pipeline of qualified claimants.
            </motion.p>

            {/* Features list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3 pt-4"
            >
              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#FF9A28] mt-2 flex-shrink-0"></span>
                <p className="font-dm text-slate-700">
                  <span className="font-semibold">For Law Firms</span> – We deliver screened, high-value plaintiffs ready for litigation.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="w-2 h-2 rounded-full bg-[#FF9A28] mt-2 flex-shrink-0"></span>
                <p className="font-dm text-slate-700">
                  <span className="font-semibold">For Legal Marketing Firms</span> – We help you scale your case acquisition efforts with data-backed strategies and compliance-driven lead generation.
                </p>
              </div>
            </motion.div>

            {/* Bottom text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-dm text-slate-600 pt-4 border-t border-slate-200"
            >
              No more chasing unverified leads—get cases that convert into settlements.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
