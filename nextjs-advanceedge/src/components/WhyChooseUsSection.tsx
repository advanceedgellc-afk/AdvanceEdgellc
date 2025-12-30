"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaClock,
  FaCheckCircle,
  FaHeadset,
  FaStar,
  FaTimes,
} from "react-icons/fa";

const features = [
  {
    icon: FaTrophy,
    title: "Proven Success",
    description:
      "We take pride in delivering top-quality case acquisition and legal support solutions that drive real results for our clients.",
  },
  {
    icon: FaClock,
    title: "Industry Expertise",
    description:
      "With years of experience in legal marketing and operations, we help law firms and agencies scale efficiently.",
  },
  {
    icon: FaCheckCircle,
    title: "Trusted by Professionals",
    description:
      "Our tailored services are designed to meet the unique needs of law firms and legal marketing firms across the U.S.",
  },
  {
    icon: FaHeadset,
    title: "Consultation at No Cost",
    description:
      "Discover how AdvanceEdge can enhance your practice with a free consultation—no commitment required.",
  },
];

export default function WhyChooseUsSection() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Load / reload TidyCal script when modal opens
  useEffect(() => {
    if (!showBookingModal) return;

    // Remove existing TidyCal script if present
    const existingScript = document.querySelector(
      'script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]'
    ) as HTMLScriptElement | null;
    if (existingScript) existingScript.remove();

    // Remove existing TidyCal instance (defensive)
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
      <section className="py-10 md:py-20 px-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Features Grid */}
            <motion.div
              className="lg:col-span-2 order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  const isRight = index % 2 === 1;
                  const isBottom = index >= 2;

                  return (
                    <motion.div
                      key={index}
                      className={`p-6 group relative rounded-lg ${
                        isRight ? "md:border-l md:border-slate-700" : ""
                      } ${isBottom ? "md:border-t md:border-slate-700" : ""}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {/* Icon */}
                      <motion.div
                        className="text-4xl sm:text-5xl text-[#FF9A28] mb-4 sm:mb-6 inline-block"
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.15 }}
                      >
                        <IconComponent />
                      </motion.div>

                      {/* Title */}
                      <h3 className="font-marcellus text-xl sm:text-2xl mb-3 sm:mb-4 text-white group-hover:text-[#FF9A28] transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="font-dm text-sm sm:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: CTA Section */}
            <motion.div
              className="lg:col-span-1 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-6 sm:p-8 lg:sticky lg:top-32">
                {/* Header Tag */}
                <motion.div
                  className="flex items-center gap-3 pb-4 sm:pb-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-12 h-1 rounded-full bg-[#FF9A28]" />
                  <span className="font-dm text-sm font-bold tracking-widest text-[#FF3600] uppercase">
                    WHY CHOOSE US?
                  </span>
                </motion.div>

                {/* Heading */}
                <h2 className="font-marcellus  text-3xl sm:text-4xl leading-tight mb-4 sm:mb-6">
                  Results Driven Solutions for Law Firms & Legal Marketing Firms
                </h2>

                <p className="font-dm text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 leading-relaxed font-semibold">
                  Empowering Your Growth with Expert Support
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-6 sm:mb-8 flex-wrap">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-xl sm:text-2xl text-[#FF9A28]"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      <FaStar />
                    </motion.span>
                  ))}
                </div>

                {/* CTA Button -> opens popup */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(true)}
                    className="inline-flex justify-center gap-2 items-center shadow-xl text-lg bg-white/10 backdrop-blur-md font-semibold isolation-auto 
                    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
                    before:rounded-full before:bg-white/20 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 
                    before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 border-white/30 hover:border-[#FF9A28] rounded-full 
                    group text-white font-dm"
                  >
                    BOOK A CALL
                    <svg
                      className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-white/20 text-white ease-linear duration-300 rounded-full border border-white/50 group-hover:border-white p-1.5 rotate-45"
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowBookingModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-8xl w-full max-h-[100vh] overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowBookingModal(false)}
              className="absolute top-6 right-6 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors z-50 shadow-lg"
              aria-label="Close modal"
              type="button"
            >
              <FaTimes size={20} className="text-white" />
            </button>

            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#0a0d1e] to-[#1a1d2e] p-8 text-white flex-shrink-0">
              <h2 className="font-marcellus text-3xl mb-2">Book a Call</h2>
              <p className="font-dm text-gray-300">
                Schedule a meeting with our team to discuss your needs
              </p>
            </div>

            {/* TidyCal Embed */}
            <div className="flex-1 overflow-y-auto p-8 bg-white">
              <div
                className="tidycal-embed"
                data-path="victor-daniel/website"
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
