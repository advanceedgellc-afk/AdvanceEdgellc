"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function AboutSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Load / reload TidyCal script when booking modal opens
  useEffect(() => {
    if (!showBookingModal) return;

    const existingScript = document.querySelector(
      'script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]'
    ) as HTMLScriptElement | null;
    if (existingScript) existingScript.remove();

    if (typeof window !== "undefined" && "TidyCal" in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).TidyCal;
    }

    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [showBookingModal]);

  return (
    <>
      <section className="pt-2 md:pt-0 pb-16 md:pb-32 bg-white px-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE SECTION */}
            <div className="relative h-[500px] flex items-center justify-center lg:justify-start">
              {/* Back Card */}
              <motion.div
                className="absolute top-1/4 w-[100%] md:w-[340px] h-[440px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl"
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/about/about-img-2.jpg"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Front Card */}
              <motion.div
                className="absolute right-0 md:right-12 top-6 w-[220px] md:w-[380px] h-[320px] md:h-[480px] rounded-2xl overflow-hidden hidden md:block shadow-2xl border-8 border-white"
                animate={{ y: [0, 14, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/about/about-img-1.jpg"
                  alt="Legal team"
                  fill
                  className="object-cover"
                />
              </motion.div>

              

              {/* Dot Pattern */}
              <div className="absolute left-0 md:-left-12 top-1/3 grid grid-cols-5 gap-3">
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-2 h-2 rounded-full bg-slate-300"
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-6 pt-16 md:pt-40">
              {/* Tag Line */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-1 bg-[#FF9A28] rounded-full" />
                <span className="font-dm text-sm font-bold tracking-widest text-[#FF3600] uppercase">
                  About Us
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="font-marcellus text-3xl md:text-5xl text-slate-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Empowering Legal Professionals with Innovation and Expertise
              </motion.h2>

              {/* Description */}
              <motion.p
                className="font-dm text-slate-600 text-base leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                At Advance Edge, we are dedicated to empowering legal
                professionals with innovative solutions that drive success. With
                over 12 years of experience, we specialize in providing
                high-quality case acquisition, expert virtual agents, and
                digital marketing services tailored to law firms across the U.S.
              </motion.p>

              {/* Quote */}
              <div className="font-dm relative">
                <div className="font-semibold text-slate-900 text-lg relative">
                  <span className="absolute -top-6 -left-4 text-[#FF9A28] text-6xl">
                    ❝
                  </span>
                  Success in the legal industry isn’t just about winning
                  cases—it’s about having the right support to grow and thrive.
                </div>
              </div>

              {/* Play + CTA Wrapper */}
              <motion.div
                className="flex flex-col md:flex-row md:items-center gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Play Button Section (video modal) */}
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="relative w-16 h-16 bg-[#FF9A28] hover:bg-[#e88720] rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#FF9A28]"
                      animate={{ scale: [1, 1.3], opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <FaPlay className="text-white text-lg ml-1" />
                  </button>

                  <div className="font-dm text-left">
                    <p className="font-semibold text-slate-900 text-lg">
                      See How We Work
                    </p>
                    <p className="text-sm text-slate-500">
                      Watch our intro video
                    </p>
                  </div>
                </div>

                {/* Book a Call Button -> opens TidyCal popup */}
                <motion.div
                  className="flex justify-center mt-3 md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(true)}
                    className="group inline-flex justify-center gap-4 items-center shadow-xl text-base md:text-lg bg-gray-50 backdrop-blur-md font-semibold border-gray-50 
                      before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
                      before:rounded-full before:bg-[#FF9A28] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 
                      relative z-10 px-6 md:px-8 py-3 md:py-4 overflow-hidden border-2 rounded-full text-gray-800 font-dm"
                  >
                    BOOK A CALL
                    <svg
                      className="w-6 h-6 md:w-7 md:h-7 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-gray-800 group-hover:fill-gray-800"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 w-10 h-10 rounded-full text-white flex items-center justify-center"
              >
                ✕
              </button>

              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/NvtsM8Nk72c?autoplay=1"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="AdvanceEdge Overview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TIDYCAL BOOKING MODAL */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-8xl w-full max-h-[100vh] overflow-hidden relative flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowBookingModal(false)}
                className="absolute top-6 right-6 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors z-50 shadow-lg"
                aria-label="Close modal"
                type="button"
              >
                <FaTimes size={20} className="text-white" />
              </button>

              <div className="bg-gradient-to-r from-[#0a0d1e] to-[#1a1d2e] p-8 text-white flex-shrink-0">
                <h2 className="font-marcellus text-3xl mb-2">Book a Call</h2>
                <p className="font-dm text-gray-300">
                  Schedule a meeting with our team to discuss your needs
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-8 bg-white">
                <div
                  className="tidycal-embed"
                  data-path="victor-daniel/website"
                ></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
