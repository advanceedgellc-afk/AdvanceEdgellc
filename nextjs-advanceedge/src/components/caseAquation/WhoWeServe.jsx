'use client';

import React, { useState } from 'react';
import { useBookingModal } from "@/context/BookingModalContext";
export default function WhoWeServe() {
  const { openBookingModal } = useBookingModal();
  const [hoveredItem, setHoveredItem] = useState(null);

  const audiences = [
    {
      title: 'Law Firms:',
      items: [
        'Looking to increase their mass tort caseload without handling marketing.',
        'Seeking pre-screened, retain-signed plaintiffs for litigation.',
        'Wanting a scalable acquisition model with cost-effective solutions.',
      ],
      icon: '⚖️',
    },
    {
      title: 'Legal Marketing Firms:',
      items: [
        'Needing qualified, verified leads to sell to partner law firms.',
        'Looking to optimize lead generation with compliance-backed strategies.',
        'Scaling mass tort marketing efforts with pre-qualified, high-intent claimants.',
      ],
      icon: '📊',
    },
  ];

  return (
    <section className="bg-white py-10 md:py-20 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Images */}
          <div className="relative h-full lg:h-full lg:min-h-[500px] flex items-center justify-center">
            {/* Main Image */}
            <div className="relative w-full max-w-xl animate-fadeInLeft">
              <div className="relative rounded-tl-[40px] rounded-br-[40px] overflow-hidden shadow-2xl h-96 lg:h-[550px]">
                <img
                  src="/caseAquation/Who-we-are.webp"
                  alt="Professional woman lawyer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Secondary Image Overlay */}
              <div className="absolute -bottom-8 left-0 md:-left-8  w-44 h-40 rounded-lg overflow-hidden shadow-xl border-4 border-white hover:scale-110 transition-transform duration-300 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                <img
                  src="/caseAquation/Serving-Every-Business.webp"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Orange Badge */}
              <div className="absolute bottom-0 left-10 bg-[#FF9A28] text-white px-6 py-4 rounded-tr-2xl shadow-lg animate-slideInUp" style={{ animationDelay: '300ms' }}>
                <p className="font-semibold text-base leading-tight">
                  Serving Every Business<br />
                  in the Legal Industry
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="animate-fadeInRight">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
              Who We Serve?
            </h2>

            <div className="space-y-10">
              {audiences.map((audience, idx) => (
                <div
                  key={idx}
                  className="opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${400 + idx * 150}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  {/* Title with Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{audience.icon}</span>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {audience.title}
                    </h3>
                  </div>

                  {/* Items List */}
                  <div className="space-y-4 pl-11">
                    {audience.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex gap-3 group cursor-pointer opacity-0 animate-fadeInUp"
                        style={{
                          animationDelay: `${400 + idx * 150 + itemIdx * 80}ms`,
                          animationFillMode: 'forwards',
                        }}
                        onMouseEnter={() => setHoveredItem(`${idx}-${itemIdx}`)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {/* Bullet Point */}
                        <div className="flex-shrink-0 w-2 h-2 bg-[#FF3600] rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>

                        {/* Text */}
                        <p
                          className={`text-gray-700 leading-relaxed transition-all duration-300 ${
                            hoveredItem === `${idx}-${itemIdx}`
                              ? 'text-[#FF9A28] font-medium translate-x-1'
                              : ''
                          }`}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-5 pt-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
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
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </section>
  );
}