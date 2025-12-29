'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useBookingModal } from "@/context/BookingModalContext";

export default function IntakeSpecialistsHero() {
    const { openBookingModal } = useBookingModal();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br flex items-center from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-32 md:pt-40 pb-20">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 top-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -left-40 bottom-40 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute right-1/3 -top-20 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,154,40,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,154,40,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ">
          {/* LEFT CONTENT */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 mb-8 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-300">
                Staffing Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Legal Intake
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                Specialists That
              </span>
              <span className="block">Convert Leads Into Cases</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Mass Tort, MVA & PI intake with weekend, after-hours, and graveyard shift coverage.
            </p>

            {/* Accent Line */}
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8 rounded-full" />

            

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
            <button
                type="button"
                onClick={openBookingModal}
                className="inline-flex justify-center gap-2 items-center shadow-xl text-base bg-gray-50 backdrop-blur-md font-semibold border-gray-50  isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FF9A28] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2  rounded-full group text-gray-800 font-dm"
              >
                Hire an Intake Specialist
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

              <button
                    type="button"
                    onClick={() => openBookingModal}
                    className="inline-flex justify-center gap-2 items-center shadow-xl text-base bg-white/10 backdrop-blur-md font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white/20 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 border-white/30 hover:border-[#FF9A28] rounded-full group text-white font-dm"
                  >
                    See How It Works
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

          {/* RIGHT IMAGE */}
          <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Floating Cards Background */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-3xl blur-3xl animate-float" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/10 rounded-3xl blur-3xl animate-float animation-delay-2000" />
            </div>

            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-500/20 backdrop-blur-md bg-gradient-to-br from-orange-500/10 to-slate-900/50">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />

              <Image
                src="/virtualAgents/Intake/Intake-Hero.webp"
                alt="Professional intake specialist on call"
                width={600}
                height={700}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                priority
              />

            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-orange-500/30 rounded-full opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-orange-500/20 rounded-full opacity-30" />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
