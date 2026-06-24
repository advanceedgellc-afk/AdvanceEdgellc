"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useBookingModal } from "@/context/BookingModalContext";

export default function CaseAcquisitionHero() {
    const { openBookingModal } = useBookingModal();

  return (
    <section className="py-16 md:py-24 px-5 md:px-0 bg-[#0D1521] overflow-hidden">
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
              <div className="relative w-full aspect-[4/4]">
                <Image
                  src="/intake-leaders/case-qualification.webp"
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-marcellus text-4xl md:text-5xl lg:text-[40px] leading-tight text-white"
            >
              Case Qualification for Law Firms & Legal Marketing Agencies
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-marcellus text-lg md:text-2xl text-[#a6abb2]"
            >A four‑layer case qualification program: primary screening, secondary quality checks,
             docket health reviews, and campaign/vendor intelligence that turns inbound leads into clean, 
             qualified cases your attorneys actually want to see.

            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-dm text-base text-[#a5a9af] leading-relaxed"
            >
              Most firms don’t have a “lead problem.” They have a qualification problem.
               Marketing is working, phones are ringing, forms are filling up but your 
               attorneys are wading through half‑baked files, unqualified callers, and missing
                information. AdvanceEdge’s case qualification service sits between intake and attorney
                 review, acting as a dedicated decisioning layer that protects your time, your campaigns,
                  and your docket.
            </motion.p>
             {/* CTA Button */}
        <div className="flex justify-center gap-3 mt-12 opacity-0 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
        <button
                type="button"
                onClick={openBookingModal}
                className="inline-flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md font-semibold border-gray-50  isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FF9A28] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2  rounded-full group text-gray-800 font-dm"
              >
                BOOK A CALL
                <svg
                  className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1.5 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
        </div>          
          </motion.div>
        </div>
      </div>
    </section>
  );
}
