"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i },
  }),
};

export default function IntakeNaturalExtensionSection() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-0 bg-[#FAEDEA]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full aspect-[4/4] overflow-hidden rounded-lg shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
            >
              <Image
                src="/virtualAgents/Intake/Legal-Right.webp"
                alt="Legal intake and litigation support"
                fill
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl lg:ml-auto"
          >
            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="font-marcellus text-4xl md:text-5xl leading-tight text-slate-900 mb-4"
            >
              Why Intake Is a Natural
              <br />
              Extension for Us
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="w-20 h-[2px] bg-[#FF9A28] mb-8"
            />

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="font-dm text-base md:text-lg text-slate-800 leading-relaxed mb-4"
            >
              With 15+ years supporting US law firms across litigation support,
              medical records, eDiscovery, and court filings, we understand how
              cases are evaluated from day one. This comprehensive experience
              across the entire legal workflow gives our intake specialists a
              distinct advantage—they see the bigger picture.
            </motion.p>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="font-dm text-base md:text-lg text-slate-800 leading-relaxed mb-4"
            >
              We started supporting intake during off‑hours when firms were
              missing good leads that came in evenings and weekends. It quickly
              became apparent that intake was the fastest way for clients to
              assess our agent quality and workflow understanding before scaling
              into broader services. Many firms now start with intake and expand
              confidently into AdvanceEdge’s full suite of litigation support
              solutions once they’ve validated our quality and reliability.
            </motion.p>

            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="font-dm text-base md:text-lg text-slate-800 leading-relaxed"
            >
              Our intake specialists aren’t just trained on scripts—they’re
              immersed in legal operations. They understand what makes a strong
              case, how medical records will be reviewed, and what documentation
              standards your firm needs. This context allows them to capture
              details other intake services might miss.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
