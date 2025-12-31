'use client';

import React, { useState, useEffect } from 'react';
import { useBookingModal } from "@/context/BookingModalContext";
export default function WhyDigitalSolutionsSection() {
 
  const { openBookingModal } = useBookingModal();

  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const sliderImages = [
    '/digitalSolutions/1-AEO.png',
    '/digitalSolutions/2-performance-marketing.png',
    '/digitalSolutions/3-WebDev.png',
  ];

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [autoplay, sliderImages.length]);

  return (
    <section className="bg-white py-10 md:py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Why Outsource to Advance Edge?
          </h2>
          <div className="w-16 h-1 bg-[#FF9A28] mx-auto"></div>
        </div>

        {/* Main Content - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 - Traditional Full-Time */}
          <div
            className="bg-gray-50 rounded-2xl p-8 border border-gray-200 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            <div className="text-5xl mb-6">⏰</div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Hiring an In-House Team
            </h3>
            <p className="text-lg font-bold text-gray-900 mb-8">
              Starts at
              <br />
              <span className="text-[#FF9A28] text-3xl">$100k</span>{' '}
              <span className="text-gray-600 font-normal">/per year (salaries)</span>
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#FF9A28] text-xl">✓</span>
                <span className="text-gray-700">Multiple hires required</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF9A28] text-xl">✓</span>
                <span className="text-gray-700">Training & overhead costs</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF9A28] text-xl">✓</span>
                <span className="text-gray-700">Limited expertise in one area</span>
              </div>
            </div>
          </div>

          {/* Card 2 - AdvanceEdge Virtual Agent */}
          <div
            className="bg-gray-900 text-white rounded-2xl p-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-light mb-6">
              Partnering with AdvanceEdge
            </h3>
            <p className="text-lg font-bold mb-8">
              Affordable monthly plans
              <br />
              <span className="text-[#FF9A28] text-3xl">No hidden costs</span>
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#FF9A28] text-xl">✓</span>
                <span className="text-gray-300">All-in-one team included</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF9A28] text-xl">✓</span>
                <span className="text-gray-300">No hidden costs, no HR hassle</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF9A28] text-xl">✓</span>
                <span className="text-gray-300">Specialists in web & marketing</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Image Slider */}
          <div
            className="opacity-0 animate-fadeInUp md:col-span-2 lg:col-span-1"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            {/* Image Slider */}
            <div
              className="relative rounded-2xl overflow-hidden w-full h-full shadow-lg cursor-pointer min-h-[600px] md:min-h-[400px]"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              {sliderImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    idx === activeSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Dot Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSlide(idx);
                      setAutoplay(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeSlide
                        ? 'bg-[#FF9A28] w-3'
                        : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className="flex justify-center gap-3 mt-12 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
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