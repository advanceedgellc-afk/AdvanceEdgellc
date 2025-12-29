"use client";

import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const typingTexts = ["Email", "Leads", "Growth", "Sales"];

  // typing effect
  useEffect(() => {
    const fullText = typingTexts[currentTextIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (currentCharIndex < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (currentCharIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        }, 50);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % typingTexts.length);
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentTextIndex]);

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
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] min-h-[550px] md:min-h-[650px] flex items-center justify-center px-5 pb-0 pt-24 md:pb-0 md:pt-24">
        <div className="max-w-4xl w-full">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-light leading-tight text-white mb-6 tracking-tight">
              Maximize Case Intake with Data-Driven Acquisition{" "}
              <span className="inline-block relative">
                <span className="text-[#FF9A28] font-medium">
                  {displayText}
                  <span className="inline-block w-0.5 h-[1em] bg-[#FF9A28] ml-1 animate-blink align-text-bottom"></span>
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
              Leverage advanced analytics and targeted strategies to connect with the right claimants, streamline your intake process, and drive higher case conversions.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              {/* BOOK A CALL button (same style as WhyChooseUsSection) */}
              <button
                    type="button"
                    onClick={() => setShowBookingModal(true)}
                    className="inline-flex justify-center gap-2 items-center shadow-xl text-lg bg-white/10 backdrop-blur-md font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white/20 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 border-white/30 hover:border-[#FF9A28] rounded-full group text-white font-dm"
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

            </div>
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
