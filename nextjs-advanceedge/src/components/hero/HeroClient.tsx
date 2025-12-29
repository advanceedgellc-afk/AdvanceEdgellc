"use client";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useBookingModal } from "@/context/BookingModalContext";
const handleScrollToServices = () => {
  const el = document.getElementById("services");
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 90;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function HeroClient() {
 
  const { openBookingModal } = useBookingModal();

  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Load TidyCal only when modal opens
 

  return (
    <>
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 z-10 hero-pattern" />

      {/* Gradient orbs (delayed visual polish) */}
      <div className="absolute top-24 right-80 w-96 h-96 bg-[#FF9A28]/10 rounded-full blur-3xl opacity-0 animate-fade-in z-10" />
      <div className="absolute bottom-20 left-80 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-0 animate-fade-in-delay z-10" />

      <div className="container mx-auto px-4 relative z-20 py-32 lg:py-40">
        <div className="max-w-4xl pt-10 md:pt-32">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-[#FF9A28]/10 border border-[#FF9A28]/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#FF9A28] rounded-full animate-pulse" />
              <span className="text-[#FF3600] text-base font-medium font-dm">
                The Legal Industry&apos;s
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-marcellus text-4xl md:text-6xl text-white mb-6 leading-tight tracking-wide">
              TRUSTED PARTNER IN{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A28] to-[#FF9A28]/70">
                GROWTH & EFFICIENCY
              </span>
            </h1>

            {/* Description */}
            <p className="font-dm text-[19px] text-gray-200 mb-14 leading-relaxed max-w-3xl">
              Empowering legal professionals with innovative solutions that
              drive success. Over 12 years of experience in case acquisition,
              virtual agents, and digital marketing.
            </p>

            {/* CTA */}
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
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollToServices}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-20"
        aria-label="Scroll to services"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </button>

     
    </>
  );
}
