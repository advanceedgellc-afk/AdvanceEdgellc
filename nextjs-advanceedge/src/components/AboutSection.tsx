"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useBookingModal } from "@/context/BookingModalContext";

export default function AboutSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { openBookingModal } = useBookingModal();
  const reduceMotion = useReducedMotion();

  // Video modal: close on Escape and lock page scroll while open
  useEffect(() => {
    if (!isVideoModalOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoModalOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isVideoModalOpen]);

  return (
    <>
      <section className="bg-white px-5 pb-16 pt-2 md:pb-32 md:pt-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* LEFT IMAGE SECTION */}
            <div className="relative flex h-[500px] items-center justify-center lg:justify-start">
              {/* Back card */}
              <motion.div
                className="absolute top-1/4 h-[440px] w-full overflow-hidden rounded-2xl shadow-xl md:h-[520px] md:w-[340px]"
                animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/about/About-2-edited.webp"
                  alt="AdvanceEdge team members collaborating on legal intake work"
                  fill
                  sizes="(min-width: 768px) 340px, 100vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Front card (desktop only) */}
              <motion.div
                className="absolute right-0 top-6 hidden h-[320px] w-[220px] overflow-hidden rounded-2xl border-8 border-white shadow-2xl md:right-12 md:block md:h-[480px] md:w-[380px]"
                animate={reduceMotion ? undefined : { y: [0, 14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/about/about-img-1.jpg"
                  alt="Legal support specialist reviewing case files for a law firm"
                  fill
                  sizes="380px"
                  className="object-cover"
                />
              </motion.div>

              {/* Decorative dot pattern */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-1/3 grid grid-cols-5 gap-3 md:-left-12"
              >
                {Array.from({ length: 15 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="h-2 w-2 rounded-full bg-slate-300"
                    animate={
                      reduceMotion
                        ? undefined
                        : { opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }
                    }
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-6 pt-16 md:pt-40">
              {/* Tag line */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-1 w-12 rounded-full bg-[#FF9A28]" />
                <span className="font-dm text-sm font-bold uppercase tracking-widest text-[#FF3600]">
                  About Us
                </span>
              </motion.div>

              {/* Headline */}
              <h2 className="mb-12 text-3xl font-bold leading-[1.05] tracking-tight text-brand-navy md:text-4xl lg:text-5xl">
                Trusted by legal teams{" "}
                <br className="hidden md:block" />
                <span className="text-orange-400">
                  handling high-volume, time-sensitive work
                </span>
              </h2>

              {/* Description */}
              <motion.div
                className="space-y-4 font-dm text-lg leading-relaxed text-slate-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p>
                  AdvanceEdge supports law firms and legal marketing agencies
                  across the United States, including high-volume{" "}
                  <strong>Mass Tort and PI practices</strong> and leading legal
                  marketing firms.
                </p>
                <p>
                  Whether you run a two-attorney shop or a national campaign
                  desk, you get the same{" "}
                  <strong>disciplined intake processes, audited workflows,</strong>{" "}
                  and <strong>elastic capacity</strong>.
                </p>
              </motion.div>

              {/* Play + CTA */}
              <motion.div
                className="flex flex-col gap-6 pt-4 md:flex-row md:items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Play button (video modal) */}
                <div className="flex items-center justify-center gap-4 md:justify-start">
                  <motion.button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    aria-label="Play introduction video"
                    aria-haspopup="dialog"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#FF9A28] shadow-lg transition-colors hover:bg-[#e88720]"
                  >
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border-2 border-[#FF9A28]"
                      animate={reduceMotion ? undefined : { opacity: [1, 0], scale: [1, 1.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <Play
                      aria-hidden="true"
                      focusable="false"
                      className="ml-1 h-6 w-6 fill-white text-white"
                    />
                  </motion.button>

                  <div className="text-left font-dm">
                    <p className="text-lg font-semibold text-slate-900">
                      See How We Work
                    </p>
                    <p className="text-sm text-slate-500">Watch our intro video</p>
                  </div>
                </div>

                {/* Book a Call -> global GHL booking pop-up */}
                <div className="mt-3 flex justify-center md:mt-0 md:justify-start">
                  <button
                    type="button"
                    onClick={openBookingModal}
                    aria-haspopup="dialog"
                    className="group relative z-10 inline-flex items-center justify-center gap-4 overflow-hidden rounded-full border-2 border-gray-50 bg-gray-50 px-6 py-3 font-dm text-base font-semibold text-gray-800 shadow-xl backdrop-blur-md
                      before:absolute before:-left-full before:-z-10 before:aspect-square before:w-full before:rounded-full before:bg-[#FF9A28] before:transition-all before:duration-700
                      hover:text-gray-50 before:hover:left-0 before:hover:w-full before:hover:scale-150 before:hover:duration-700 md:px-8 md:py-4 md:text-lg"
                  >
                    BOOK A CALL
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="h-6 w-6 rotate-45 rounded-full border border-gray-700 p-1 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none md:h-7 md:w-7"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-gray-800"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="AdvanceEdge introduction video"
              className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-black"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
                aria-label="Close video"
                autoFocus
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/QSKcnXJQg0k?autoplay=1&rel=0"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="AdvanceEdge overview video"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}