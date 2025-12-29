'use client';

import { useBookingModal } from "@/context/BookingModalContext";
import React from 'react';

export default function CaseAcquisitionProcess() {
  const { openBookingModal } = useBookingModal();
  const processes = [
    {
      number: 1,
      title: 'Multi-Channel Marketing Campaigns',
      items: [
        {
          subtitle: 'Paid Search & Social Media Ads',
          description: 'Capturing high-intent claimants.',
        },
        {
          subtitle: 'Content & SEO Strategies',
          description: 'Generating organic mass tort leads.',
        },
        {
          subtitle: 'Television & Radio Outreach',
          description: 'Reaching a broader claimant base.',
        },
      ],
    },
    {
      number: 2,
      title: 'Comprehensive Case Screening & Qualification',
      items: [
        {
          subtitle: 'Eligibility Screening',
          description: 'Matching claimants to specific case criteria',
        },
        {
          subtitle: 'Medical Verification',
          description:
            'Ensuring medical proof aligns with case requirements.',
        },
        {
          subtitle: 'Case Strength Evaluation',
          description:
            'Reviewing symptoms, treatment history, and potential legal standing.',
        },
      ],
    },
    {
      number: 3,
      title: 'Signed Retainers & Seamless Case Delivery',
      items: [
        {
          subtitle: 'Secure signed retainers & HIPAA-compliant forms.',
          description: '',
        },
        {
          subtitle: 'Confirm all supporting medical documentation.',
          description: '',
        },
        {
          subtitle: 'Deliver fully vetted cases to your firm or marketing team.',
          description: '',
        },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0f1419] to-[#1a1f2e] py-10 md:py-20 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInDown">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
            Our Case Acquisition Process
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We leverage <span className="font-semibold">AI-powered targeting</span>,{' '}
            <span className="font-semibold">multi-platform outreach</span>, and{' '}
            <span className="font-semibold">legal intake expertise</span> to acquire qualified
            cases for law firms and marketing agencies.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {processes.map((process, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-8 backdrop-blur-sm hover:border-[#FF9A28]/50 hover:shadow-lg hover:shadow-[#FF9A28]/20 transition-all duration-500 group animate-slideUp"
              style={{
                animationDelay: `${idx * 150}ms`,
              }}
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#FF9A28] mb-6 group-hover:bg-[#FF9A28]/10 group-hover:scale-110 transition-all duration-300">
                <span className="text-[#FF9A28] font-bold text-lg animate-pulse">
                  {process.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 leading-tight group-hover:text-[#FF9A28] transition-colors duration-300">
                {process.title}
              </h3>

              {/* Items */}
              <div className="space-y-6">
                {process.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="opacity-0 animate-fadeInUp"
                    style={{
                      animationDelay: `${idx * 150 + itemIdx * 100}ms`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <h4 className="text-white font-semibold mb-2 group-hover:text-[#FF9A28]/90 transition-colors duration-300">
                      {item.subtitle}
                    </h4>
                    {item.description && (
                      <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/30 my-12 animate-expandWidth"></div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
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
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-expandWidth {
          animation: expandWidth 1s ease-out 0.3s;
        }
      `}</style>
    </section>
  );
}