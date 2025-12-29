"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaClipboardList, FaUsers, FaCloud, FaArrowRight, FaTimes } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    number: "01",
    icon: FaClipboardList,
    title: "Case Acquisition",
    description:
      "Securing verified, high-quality leads for law firms, especially in Mass Tort cases.",
    bgColor: "bg-white",
    borderColor: "border-orange-200",
    iconColor: "text-[#F69325]",
    href: "/services/case-acquisition",
  },
  {
    id: 2,
    number: "02",
    icon: FaUsers,
    title: "Virtual Agents",
    description:
      "Our Virtual Agents offer a flexible, affordable solution to streamline administrative tasks.",
    bgColor: "bg-white",
    borderColor: "border-orange-200",
    iconColor: "text-[#F69325]",
    href: "/services/virtual-agents",
  },
  {
    id: 3,
    number: "03",
    icon: FaCloud,
    title: "Technology Solutions",
    description:
      "High-quality, verified leads and tech integration for your firm's success.",
    bgColor: "bg-white",
    borderColor: "border-orange-200",
    iconColor: "text-[#F69325]",
    href: "/services/digital-solutions",
  },
];

export default function ServicesSection() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Load / reload TidyCal script when modal opens
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
      <section id="services" className="py-10 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-16 px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 flex flex-col items-center justify-center">
              <motion.div
                className="flex items-center gap-3 pb-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-12 h-1 rounded-full bg-[#FF9A28]" />
                <span className="font-dm text-sm font-bold tracking-widest text-[#FF3600] uppercase">
                  What We Do
                </span>
              </motion.div>
            </div>

            <h2 className="font-marcellus text-4xl md:text-5xl text-slate-900 mb-4">
              Innovative Solutions for the Evolving Legal Industry
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -12 }}
                className={`group p-8 rounded-2xl border-2 ${service.borderColor} ${service.bgColor} transition-all duration-300 hover:shadow-2xl h-full flex flex-col`}
              >
                {/* Number */}
                <div className="font-marcellus text-4xl font-bold text-slate-200 mb-4 group-hover:text-[#FF9A28] transition-colors">
                  {service.number}
                </div>

                {/* Icon */}
                <motion.div
                  className={`text-5xl ${service.iconColor} mb-6`}
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <service.icon />
                </motion.div>

                {/* Title */}
                <h3 className="font-marcellus text-2xl text-slate-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-dm text-slate-600 text-base mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-dm font-bold text-sm uppercase transition-all duration-300 group-hover:gap-3 w-fit"
                >
                  <span className="text-slate-900 group-hover:text-[#FF9A28]">
                    Learn More
                  </span>
                  <FaArrowRight className="text-[#FF9A28] group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA -> opens TidyCal popup */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <button
              type="button"
              onClick={() => setShowBookingModal(true)}
              className="group inline-flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md font-semibold border-gray-50 
                before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
                before:rounded-full before:bg-[#FF9A28] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 
                relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full text-gray-800 font-dm"
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
          </motion.div>
        </div>
      </section>

      {/* TidyCal Booking Modal */}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
