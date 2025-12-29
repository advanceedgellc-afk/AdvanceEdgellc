"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTimes } from "react-icons/fa";

// ✅ Proper TypeScript interface
interface FaqItem {
  id: number;
  question: string;
  answer: string | {
    answerPoints?: string[];
    summary?: string;
  };
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What are Virtual Agents, and how can they help law firms?",
    answer: "What types of Virtual Agents do you offer?",
  },
  {
    id: 2,
    question: "What makes AdvanceEdge's Virtual Agents cost-effective for law firms?",
    answer: {
      answerPoints: [
        "Virtual Attorneys – Case review & legal research",
        "Super Paralegals – Document preparation & e-filing",
        "Marketing Experts – SEO, PPC & lead generation",
        "Web Developers – Legal website & CRM integration"
      ],
      summary: "Each agent is skilled, experienced, and trained for law firm needs."
    }
  },
  {
    id: 3,
    question: "How can a Virtual Attorney assist my law firm?",
    answer: "A Virtual Attorney provides legal research, case law analysis, demand letter drafting, and document review, ensuring firms stay productive without hiring full-time lawyers.",
  },
  {
    id: 4,
    question: "How does hiring a Virtual Agent save law firms money?",
    answer: "Virtual Agents reduce overhead costs by handling legal tasks remotely without requiring office space, benefits, or full-time salaries—allowing law firms to scale operations efficiently.",
  },
  {
    id: 5,
    question: "AEO: What are the key benefits of hiring Virtual Agents for legal support?",
    answer: {
      answerPoints: [
        "Cost savings – No in-house hiring expenses",
        "Scalability – Hire agents as needed",
        "Expertise – Specialized legal professionals",
        "Efficiency – Faster case processing & lead handling"
      ],
      summary: "Virtual Agents streamline law firm operations and increase productivity."
    }
  },
  {
    id: 6,
    question: "AEO: How do Virtual Agents improve client intake for law firms?",
    answer: {
      answerPoints: [
        "Handling inquiries via phone, chat, and email",
        "Pre-screening potential clients based on case criteria",
        "Managing appointment scheduling & follow-ups"
      ],
      summary: "This ensures qualified leads and a smooth client onboarding process."
    }
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // ✅ Fixed renderAnswerContent with proper typing
  const renderAnswerContent = (answer: FaqItem["answer"]) => {
    // If it's a simple string answer
    if (typeof answer === "string") {
      return (
        <p className="font-dm text-slate-300 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      );
    }

    // If it has answerPoints (bullet list)
    return (
      <div className="space-y-3">
        {/* Bullet points */}
        <div className="pl-6 md:pl-8 space-y-2">
          {answer.answerPoints?.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-2.5 h-2.5 bg-[#FF9A28] rounded-full mt-2.5 flex-shrink-0"
              />
              <p className="font-dm text-slate-300 leading-relaxed text-sm md:text-base flex-1">
                {point}
              </p>
            </div>
          ))}
        </div>
        
        {/* Summary */}
        {answer.summary && (
          <p className="font-dm text-slate-400 italic pt-3 pl-6 md:pl-8 text-sm md:text-base">
            "{answer.summary}"
          </p>
        )}
      </div>
    );
  };

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
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [showBookingModal]);

  // ... rest of your component remains EXACTLY the same
  return (
    <>
      <section className="py-16 md:py-24 px-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
        <div className="container w-[100%] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* LEFT SIDE */}
            <motion.div
              className="lg:sticky lg:top-24"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-10 md:mb-12">
                <motion.div
                  className="flex items-center gap-3 pb-4 md:pb-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-12 h-1 rounded-full bg-[#FF9A28]" />
                  <span className="font-dm text-sm font-bold tracking-widest text-[#FF3600] uppercase">
                    How Can We Help?
                  </span>
                </motion.div>

                <h2 className="font-marcellus text-4xl md:text-5xl leading-tight mb-6">
                  Frequently Asked Questions
                </h2>

                <p className="font-dm text-base md:text-lg text-slate-300">
                Get clear, concise answers to the most common questions about our case acquisition process, lead quality, pricing, compliance, and more.


                </p>
              </div>

              {/* CTA BUTTON -> opens popup */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
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
            </motion.div>

            {/* RIGHT SIDE – ACCORDION */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {faqItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  {/* ACCORDION BUTTON */}
                  <motion.button
                    onClick={() =>
                      setActiveId(activeId === item.id ? null : item.id)
                    }
                    className={`w-full text-left p-5 md:p-6 rounded-lg transition-all duration-300 border 
                      border-slate-700 hover:border-[#FF9A28]/50 ${
                        activeId === item.id
                          ? "bg-slate-800/80 border-[#FF9A28]"
                          : "bg-slate-800/40 hover:bg-slate-800/60"
                      }`}
                    whileHover={{ x: 3 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-dm font-semibold text-sm md:text-base text-[#FF9A28] group-hover:text-[#e98820] transition-colors leading-relaxed">
                        {item.question}
                      </h3>

                      {/* ICON */}
                      <motion.div
                        className="flex-none mt-1 w-6 h-6 rounded-full bg-[#FF9A28] flex items-center justify-center text-slate-950"
                        animate={{ rotate: activeId === item.id ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaPlus className="text-sm font-bold" />
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* ANSWER */}
                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          className="p-5 md:p-6 bg-slate-800/30 border border-t-0 border-slate-700 rounded-b-lg"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                        >
                          {renderAnswerContent(item.answer)}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Modal - unchanged */}
      {showBookingModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setShowBookingModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-8xl w-full max-h-[100vh] overflow-hidden relative flex flex-col"
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
          </div>
        </div>
      )}
    </>
  );
}
