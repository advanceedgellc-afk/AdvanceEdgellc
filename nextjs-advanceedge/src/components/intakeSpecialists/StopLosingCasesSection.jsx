"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useBookingModal } from "@/context/BookingModalContext";

export default function StopLosingCasesSection() {
  const { openBookingModal } = useBookingModal();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-white py-20 md:py-28 px-5 md:px-0">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Image - 1 column (narrower) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-xl "
            >
              <Image
                src="/virtualAgents/Intake/handshake.webp"
                alt="Professional handshake"
                fill
                className="object-cover h-full w-full"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right: Content - 2 columns (wider) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:col-span-3"
          >
            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-marcellus text-3xl md:text-3xl lg:text-[40px] leading-tight text-slate-900 mb-6"
            >
              Stop Losing Good Cases at Intake
            </motion.h2>

            {/* First Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-dm text-base md:text-lg text-slate-700 leading-relaxed mb-6"
            >
              Every missed call is a potential case lost to a competitor. Every poorly qualified lead
              wastes your attorneys' valuable time. Your intake process is too critical to leave to
              chance or inconsistent coverage.
            </motion.p>

            {/* Bold Text */}
            <motion.p
              variants={itemVariants}
              className="font-marcellus text-2xl md:text-2xl text-slate-900 mb-6 leading-snug"
            >
              Start with intake. Validate quality. Scale with confidence.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-dm text-base md:text-lg text-slate-700 leading-relaxed mb-6"
            >
              Most firms begin with a single specialist covering their highest-value time periods—
              typically evenings and weekends when leads come in but staff isn't available. Within 30
              days, you'll have clear data on conversion rates, lead quality, and ROI. Then you can
              scale up with confidence, knowing exactly what you're getting.
            </motion.p>

            {/* Third Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-dm text-base md:text-lg text-slate-700 leading-relaxed mb-8"
            >
              AdvanceEdge intake specialists become an extension of your team, representing your
              firm professionally while capturing the details your attorneys need to make fast case
              decisions. The result is more qualified leads, higher conversion rates, and the peace
              of mind that comes from knowing no good case slips through the cracks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={openBookingModal}
                className="inline-flex justify-center gap-2 items-center shadow-xl text-base bg-gray-50 backdrop-blur-md font-semibold border-gray-50  isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FF9A28] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2  rounded-full group text-gray-800 font-dm"
              >
                Hire an Intake Specialist
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

              <button
                    type="button"
                    onClick={() => openBookingModal}
                    className="inline-flex justify-center gap-2 items-center shadow-xl text-base bg-gray-700 backdrop-blur-md font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white/20 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 border-white/30 hover:border-[#FF9A28] rounded-full group text-white font-dm"
                  >Schedule a Quick Discussion
                    <svg
                      className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-700 text-white ease-linear duration-300 rounded-full border border-white/50 group-hover:border-white p-1.5 rotate-45"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-white group-hover:fill-[#FF9A28]"
                      ></path>
                    </svg>
                  </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
