'use client';

import { useBookingModal } from "@/context/BookingModalContext";

export default function WhyChooseAdvanceEdgeSection() {
  const { openBookingModal } = useBookingModal();

  const features = [
    {
      title: 'Legal Industry Expertise',
      description:
        'Specialized in law firms, legal marketers, and service providers',
      icon: 'bi-gear',
    },
    {
      title: 'Custom-Tailored Strategies',
      description: 'No cookie-cutter solutions, only results-driven execution',
      icon: 'bi-lightbulb',
    },
    {
      title: 'End-to-End Solutions',
      description: 'One agency for web, marketing, and digital growth',
      icon: 'bi-puzzle',
    },
    {
      title: 'Proven Track Record',
      description: 'Clients trust us for real ROI and business growth',
      icon: 'bi-patch-check',
    },
  ];

  return (
    <section className="bg-white py-10 md:py-20 px-5 relative overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Why Choose AdvanceEdge?
          </h2>
          <div className="w-16 h-1 bg-[#FF9A28] mx-auto"></div>
        </div>

        {/* Features Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="opacity-0 animate-fadeInUp group"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
                animationFillMode: 'forwards',
              }}
            >
              {/* Feature Item */}
              <div className="flex gap-6 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#FFF5EB] group-hover:bg-[#FF9A28] transition-all duration-300 transform group-hover:scale-110">
                    <i
                      aria-hidden="true"
                      className={`bi ${feature.icon} text-2xl text-[#FF9A28] group-hover:text-white transition-colors duration-300`}
                    ></i>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#FF9A28] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center gap-3 opacity-0 animate-fadeInUp"
          style={{
            animationDelay: '500ms',
            animationFillMode: 'forwards',
          }}>
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

      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
      />

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