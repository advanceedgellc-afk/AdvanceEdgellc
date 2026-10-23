"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useBookingModal } from "@/context/BookingModalContext";
import { faqItems } from "./faqItems";

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const { openBookingModal } = useBookingModal();

  return (
    <section className="overflow-x-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-16 text-white md:py-24">
      <div className="container mx-auto w-full px-4">
        <div className="grid grid-cols-1 items-start gap-12 md:gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            className="lg:sticky lg:top-24"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10 md:mb-12">
              <div className="flex items-center gap-3 pb-4 md:pb-5">
                <div className="h-1 w-12 rounded-full bg-[#FF9A28]" />
                <span className="font-dm text-sm font-bold uppercase tracking-widest text-[#FF3600]">
                  How Can We Help?
                </span>
              </div>

              <h2 className="mb-6 font-marcellus text-4xl leading-tight md:text-5xl">
                Contact Center &amp; Legal Intake Specialists FAQs
              </h2>
            </div>

            {/* CTA -> global GHL booking pop-up */}
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <button
                type="button"
                onClick={openBookingModal}
                aria-haspopup="dialog"
                className="group relative z-10 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-dm text-lg font-semibold text-white shadow-xl backdrop-blur-md
                  before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-white/20 before:transition-all before:duration-700
                  hover:border-[#FF9A28] hover:text-white before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700"
              >
                BOOK A CALL
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="h-7 w-7 rotate-45 rounded-full border border-white/50 p-1.5 duration-300 ease-linear group-hover:rotate-90 group-hover:border-white group-hover:bg-white/20"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-white group-hover:fill-[#FF9A28]"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – ACCORDION */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {faqItems.map((item, index) => {
              const isOpen = activeId === item.id;
              const buttonId = `intake-faq-question-${item.id}`;
              const panelId = `intake-faq-answer-${item.id}`;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <h3>
                    <motion.button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setActiveId(isOpen ? null : item.id)}
                      whileHover={{ x: 3 }}
                      className={`w-full border p-5 text-left transition-all duration-300 md:p-6 ${
                        isOpen
                          ? "rounded-t-lg border-[#FF9A28] bg-slate-800/80"
                          : "rounded-lg border-slate-700 bg-slate-800/40 hover:border-[#FF9A28]/50 hover:bg-slate-800/60"
                      }`}
                    >
                      <span className="flex items-start justify-between gap-4">
                        <span className="font-dm text-sm font-semibold leading-relaxed text-[#FF9A28] transition-colors group-hover:text-[#e98820] md:text-base">
                          {item.question}
                        </span>

                        <motion.span
                          aria-hidden="true"
                          className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#FF9A28] text-slate-950"
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Plus className="h-4 w-4" />
                        </motion.span>
                      </span>
                    </motion.button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="rounded-b-lg border border-t-0 border-[#FF9A28] bg-slate-800/30 p-5 md:p-6">
                          <p className="font-dm text-sm leading-relaxed text-slate-300 md:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
