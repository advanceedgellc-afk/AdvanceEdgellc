'use client';

import { useBookingModal } from "@/context/BookingModalContext";

export default function HowItWorksSection() {
  const { openBookingModal } = useBookingModal();

  const steps = [
    {
      number: '01',
      title: 'Strategy Session',
      description:
        'We analyze your business goals, competition, and target audience.',
      icon: 'bi-journal-bookmark-fill',
    },
    {
      number: '02',
      title: 'Custom Plan & Execution',
      description:
        'Our team designs a tailored website & marketing strategy for maximum ROI.',
      icon: 'bi-kanban-fill',
    },
    {
      number: '03',
      title: 'Launch & Optimize',
      description:
        'We deploy, track, and refine strategies for continued growth & success.',
      icon: 'bi-bar-chart-line-fill',
    },
  ];

  return (
    <section className="relative py-10 md:py-20 px-5 overflow-hidden">
      {/* Split Background - Top Dark, Bottom White */}
      <div className="absolute inset-0 top-0 h-1/2 bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#1a1f2e] pointer-events-none"></div>
      <div className="absolute inset-0 bottom-0 h-1/2 bg-black pointer-events-none"></div>

      {/* Background Blur Elements - Top Dark Section */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -ml-48 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            How It Works
          </h2>
          <p className="text-3xl md:text-4xl font-light text-[#FF9A28] mb-6">
            A Seamless Growth Process
          </p>
          <div className="w-16 h-1 bg-[#FF9A28] mx-auto"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="opacity-0 animate-slideInUp group"
              style={{
                animationDelay: `${(idx + 1) * 150}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Card Container */}
              <div className="bg-[#FFF9F3] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px] h-full border border-[#FFE8D1]">
                {/* Step Number with Icon Background */}
                <div className="flex items-start justify-between mb-8">
                  <p className="text-[#FF9A28] text-3xl font-light tracking-wider">
                    {step.number}
                  </p>
                  <div className="w-14 h-14 bg-[#FFF5EB] rounded-lg flex items-center justify-center group-hover:bg-[#FF9A28] group-hover:text-white transition-all duration-300 flex-shrink-0 border border-[#FFE8D1]">
                    <i
                      aria-hidden="true"
                      className={`bi ${step.icon} text-2xl`}
                    ></i>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#FF9A28] transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="flex justify-center gap-3 mt-16 opacity-0 animate-fadeInUp"
          style={{
            animationDelay: '600ms',
            animationFillMode: 'forwards',
          }}
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
