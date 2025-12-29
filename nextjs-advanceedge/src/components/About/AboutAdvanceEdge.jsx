'use client';

import React, { useState, useEffect } from 'react';
import { useBookingModal } from "@/context/BookingModalContext";

export default function AboutAdvanceEdgeSection() {
  const { openBookingModal } = useBookingModal();

  const [count, setCount] = useState(0);
  const targetCount = 100;

  useEffect(() => {
    if (count < targetCount) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <section className="bg-white py-10 md:py-20 px-5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute top-1/3 right-20 opacity-10 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="#FF9A28" strokeWidth="1" />
          <circle cx="150" cy="150" r="100" stroke="#FF9A28" strokeWidth="1" />
          <path d="M150 50 Q200 100 150 150 Q100 100 150 50" stroke="#FF9A28" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image with Badge */}
          <div style={{
            animation: 'fadeInLeft 0.8s ease-out',
          }}>
            <div className="relative">
              {/* Profile Image - Using Placeholder */}
              <div className="rounded-tr-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-300 to-gray-400 w-[90%] h-full flex items-center justify-center">
                <img
                  src="/about/About_us-hero.webp"
                  alt="AdvanceEdge Professional"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Orange Badge - 100+ */}
              <div className="absolute -bottom-10 left-0 md:-left-14 bg-[#FF9A28]  rounded-bl-3xl px-6 py-8 shadow-xl transform hover:scale-105 transition-transform duration-300"
                style={{
                  animation: 'slideInUp 0.7s ease-out 300ms both',
                }}>
                <div className="text-white">
                  <p className="text-5xl font-bold mb-2">{count}+</p>
                  <p className="text-sm font-bold tracking-widest">
                    PROFESSIONALS ACROSS OUR<br />GLOBAL DELIVERY CENTERS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className='mt-6' style={{
            animation: 'fadeInRight 0.8s ease-out',
          }}>
            {/* Header Tag */}
            <div className="mb-6" style={{ animation: 'fadeInDown 0.6s ease-out 100ms both' }}>
              <p className="text-[#FF9A28] text-sm font-bold tracking-widest mb-4">
                🟠 ABOUT ADVANCE EDGE 🟠
              </p>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight"
              style={{ animation: 'fadeInUp 0.6s ease-out 150ms both' }}>
              Empowering Law Firms & Businesses with Expert Virtual Solutions
            </h2>

            {/* Divider */}
            <div className="w-16 h-1 bg-[#FF9A28] mb-8"
              style={{ animation: 'fadeInUp 0.6s ease-out 200ms both' }}></div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-base mb-8"
              style={{ animation: 'fadeInUp 0.6s ease-out 250ms both' }}>
              At AdvanceEdge, we specialize in high-performance Virtual Legal Support, Web Development, and Digital Marketing tailored to the evolving needs of law firms and businesses. With a deep understanding of mass tort litigation, legal operations, and digital transformation, we provide expert-driven, scalable solutions that optimize efficiency and drive measurable results.
            </p>

            {/* Quote Section */}
            <div className="bg-gray-50 border-l-4 border-[#FF9A28] pl-6 py-6 mb-8 rounded-sm"
              style={{ animation: 'fadeInUp 0.6s ease-out 300ms both' }}>
              <div className="flex gap-4">
                <span className="text-4xl text-[#FF9A28]">"</span>
                <p className="text-gray-700 italic leading-relaxed">
                  We believe everyone deserves affordable and simple access to legal services and helping people.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex gap-3"
              style={{ animation: 'fadeInUp 0.6s ease-out 350ms both' }}>
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
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
}