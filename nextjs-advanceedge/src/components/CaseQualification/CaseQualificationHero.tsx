"use client"
import React from 'react';
import { useBookingModal } from "@/context/BookingModalContext";
import GhlContactForm from "@/components/forms/GhlContactForm";

/**
 * Case Qualification Hero Component
 * * A responsive, dark-themed hero section for case qualification services.
 */
export default function App() {
  const { openBookingModal } = useBookingModal();
  return (
    <section className="relative w-full lg:min-h-[80vh] min-h-[100vh] pt-32 pb-10 flex items-center justify-center overflow-hidden bg-slate-950">
      
      {}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop" 
          alt="Case qualification and professional strategy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/85"></div>
      </div>

      {}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                  {/* Left content */}
                  <div className="max-w-3xl text-center lg:text-left">
        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 leading-tight text-slate-100">
          Case Qualification for <span className="text-[#fb923c] font-medium">Law Firms & Legal Marketing Agencies</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          A four‑layer case qualification program: primary screening, secondary quality checks, docket health reviews, and campaign/vendor intelligence that turns inbound leads into clean, qualified cases your attorneys actually want to see.
        </p>

        {/* Detailed Body Section */}
        <div className="  rounded-2xl   text-left mb-10">
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Most firms don’t have a “lead problem.” They have a qualification problem. Marketing is working, phones are ringing, forms are filling up but your attorneys are wading through half‑baked files, unqualified callers, and missing information. AdvanceEdge’s case qualification service sits between intake and attorney review, acting as a dedicated decisioning layer that protects your time, your campaigns, and your docket.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                        {/* Right form */}
          <div className="w-full max-w-2xl mx-auto lg:mx-0">
            <GhlContactForm className="min-h-[560px]" iframeHeight={531} />
          
        </div>
        </div>
      </div>
    </section>
  );
}