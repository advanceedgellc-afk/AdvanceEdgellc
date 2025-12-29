'use client';

import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useBookingModal } from "@/context/BookingModalContext";


export default function VaasOnboardingSection() {
  const { openBookingModal } = useBookingModal();

  const [hoveredCard, setHoveredCard] = useState(null);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Strategy Call',
      icon: 'bi-journal-bookmark-fill',
      description: 'We assess your firm\'s needs, workflow, and pain points to match you with the right virtual agents.'
    },
    {
      id: 2,
      number: '02',
      title: 'Agent Selection',
      icon: 'bi-people-fill',
      description: 'Choose from our expert virtual agents based on your required skills, experience level, and workload.'
    },
    {
      id: 3,
      number: '03',
      title: 'Seamless Onboarding',
      icon: ' bi-chat-right-text-fill',
      description: 'Our team integrates into your workflow, using your preferred tools and platforms.'
    },
    {
      id: 4,
      number: '04',
      title: 'Performance Optimization',
      icon: 'bi-graph-up-arrow',
      description: 'We provide ongoing support & adjustments to maximize productivity and ensure success.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#1a1f2e] to-[#0f1419] py-10 md:py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            The VAAS Onboarding Process
          </h2>
          <p className="text-[#FF9A28] text-3xl font-light mb-6">How It Works</p>
          <div className="w-16 h-1 bg-[#FF9A28] mx-auto"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              onMouseEnter={() => setHoveredCard(step.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="opacity-0 animate-fadeInUp group cursor-pointer"
              style={{
                animationDelay: `${idx * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Card Container */}
              <div className="relative">
                {/* White Card */}
                <div className="bg-white rounded-2xl p-6 pb-20 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  {/* Number and Icon Section */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Number */}
                    <span className="text-[#FFD4A3] font-light text-3xl group-hover:text-[#FF9A28] transition-colors duration-300">
                      {step.number}
                    </span>
                    {/* Icon Background */}
                    <div className="w-12 h-12 bg-[#FFF5EB] rounded-lg flex items-center justify-center text-xl group-hover:bg-[#FF9A28] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <i aria-hidden="true" className={`bi ${step.icon} text-[#FF9A28] group-hover:text-white`}></i>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 text-xl font-light mb-4 group-hover:text-[#FF9A28] transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description - appears on hover */}
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line (for horizontal layout) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-[#FF9A28]/50 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center gap-3 opacity-0 animate-fadeInUp" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
        <button
        type="button"
        onClick={openBookingModal}
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

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
