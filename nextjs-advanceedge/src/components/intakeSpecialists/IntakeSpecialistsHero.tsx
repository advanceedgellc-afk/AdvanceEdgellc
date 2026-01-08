'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useBookingModal } from "@/context/BookingModalContext";

export default function IntakeSpecialistsHero() {
  const { openBookingModal } = useBookingModal();

  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,154,40,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,154,40,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 mb-8 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-300">
                Staffing Solutions
              </span>
            </div>

            {/* Heading */}
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

              {/* Hire Button */}
              <button
                type="button"
                onClick={openBookingModal}
                className="inline-flex justify-center gap-2 items-center shadow-xl text-base bg-gray-50 backdrop-blur-md font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FF9A28] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full group text-gray-800 font-dm"
              >
                Hire an Intake Specialist
              </button>

              {/* Video Button */}
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex justify-center gap-2 items-center shadow-xl text-base bg-white/10 backdrop-blur-md font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white/20 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 border-white/30 hover:border-[#FF9A28] rounded-full group text-white font-dm"
              >
                See How It Works
              </button>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`relative transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-500/20 backdrop-blur-md bg-gradient-to-br from-orange-500/10 to-slate-900/50">
              <Image
                src="/virtualAgents/Intake/Intake-Hero.webp"
                alt="Professional intake specialist on call"
                width={600}
                height={700}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* YOUTUBE MODAL */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-orange-500/30 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 text-white bg-black/60 hover:bg-orange-500 transition rounded-full w-10 h-10 flex items-center justify-center text-xl"
              aria-label="Close video"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QSKcnXJQg0k?autoplay=1&rel=0"
              title="How Our Intake Specialists Work"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
