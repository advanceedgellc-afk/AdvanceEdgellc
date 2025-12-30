'use client';

import React, { useState } from 'react';
import { useBookingModal } from "@/context/BookingModalContext";

export default function PartnerInGrowthCTA() {
  const { openBookingModal } = useBookingModal();

  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-gray-50 py-10 md:py-5  px-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Content */}
          <div style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
            {/* Header Tag */}
            <div style={{ animation: 'fadeInDown 0.6s ease-out 100ms both' }}>
              <p className="text-[#FF9A28] text-sm text-center font-bold tracking-widest mb-6">
                🟠 Your Partner in Growth 🟠
              </p>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-10 leading-tight"
              style={{ animation: 'fadeInUp 0.6s ease-out 150ms both' }}
            >
              Want to Stay Ahead in the Evolving Legal Ecosystem?
            </h2>

            {/* CTA Buttons */}
            <div 
              className="flex gap-3 justify-center "
              style={{ animation: 'fadeInUp 0.6s ease-out 250ms both' }}
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

          {/* Right Section - Image with Video Play Button */}
          <div 
            className="relative w-full md:w-[87%] "
            style={{ animation: 'fadeInRight 0.8s ease-out' }}
          >
            {/* Main Image Container */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/about/Growth.webp"
                alt="Team Meeting"
                className=" w-[100%] object-cover"
              />
            </div>

            {/* Blinking Play Button */}
            <button
              onClick={() => setShowVideo(true)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF9A28] text-white rounded-tl-[40%] rounded-br-[40%] w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
              aria-label="Play video"
            >
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5"
          onClick={() => setShowVideo(false)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'scaleIn 0.3s ease-out' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-10 transition-colors"
              aria-label="Close video"
            >
              ×
            </button>

            {/* YouTube Embed */}
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="AdvanceEdge Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(255, 154, 40, 0.7);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 0 15px rgba(255, 154, 40, 0);
          }
        }

        button:focus-visible {
          outline: 2px solid #FF9A28;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
