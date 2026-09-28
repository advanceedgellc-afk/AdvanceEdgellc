'use client';

import React from 'react';

export default function OurApproachSection() {
  const approaches = [
    {
      icon: 'bi-chat-fill',
      title: 'Tech-Enabled Efficiency',
      description: 'Leveraging automation, AI, and industry best practices for superior results.',
      highlighted: false,
    },
    {
      icon: 'bi-bell-fill',
      title: 'Strategic Insight',
      description: 'In-depth legal and marketing acumen to navigate complex challenges.',
      highlighted: true,
    },
    {
      icon: 'bi-trophy-fill',
      title: 'Client-Centric Solutions',
      description: 'Personalized, data-driven support that prioritizes growth and sustainability.',
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white py-10 md:py-20 px-5 relative overflow-hidden">
      {/* Bootstrap Icons Link */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css" />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 
            className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight"
            style={{ animation: 'fadeInDown 0.8s ease-out' }}
          >
            Our Approach:
          </h2>
          <h3 
            className="text-4xl md:text-5xl font-light text-gray-800 mb-8"
            style={{ animation: 'fadeInDown 0.8s ease-out 100ms both' }}
          >
            Precision, Performance & Partnership
          </h3>
          <div 
            className="w-20 h-1 bg-[#FF9A28] mx-auto mb-8"
            style={{ animation: 'scaleInX 0.6s ease-out 200ms both' }}
          ></div>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ animation: 'fadeInUp 0.8s ease-out 300ms both' }}
          >
            At Advance Edge, we don't just provide services—we integrate seamlessly into your operations, ensuring precision, efficiency, and compliance at every step. Our expertise in legal and digital domains allows us to craft customized strategies that align with your business objectives.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, idx) => (
            <div
              key={idx}
              className={`relative group`}
              style={{
                animation: 'fadeInUp 0.8s ease-out',
                animationDelay: `${400 + idx * 150}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Card */}
              <div
                className={`h-full p-8 rounded-3xl transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl ${
                  approach.highlighted
                    ? 'border-2 border-[#FF9A28] bg-gradient-to-br from-white to-orange-50'
                    : 'bg-white border border-gray-200 hover:border-[#FF9A28]/30'
                }`}
              >
                {/* Background shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-[#FF9A28] to-transparent rounded-3xl transition-opacity duration-500 pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 ${
                      approach.highlighted
                        ? 'bg-[#FF9A28]/20'
                        : 'bg-gray-100 group-hover:bg-[#FF9A28]/20'
                    }`}
                  >
                    <i 
                      aria-hidden="true"
                      className={`bi ${approach.icon} text-3xl ${
                        approach.highlighted ? 'text-[#FF9A28]' : 'text-gray-700'
                      }`}
                    ></i>
                  </div>

                  {/* Title */}
                  <h4
                    className={`text-2xl font-light mb-4 transition-colors duration-300 ${
                      approach.highlighted
                        ? 'text-gray-900'
                        : 'text-gray-900 group-hover:text-[#FF9A28]'
                    }`}
                  >
                    {approach.title}
                  </h4>

                  {/* Description */}
                  <p
                    className={`text-base leading-relaxed transition-colors duration-300 ${
                      approach.highlighted
                        ? 'text-gray-700'
                        : 'text-gray-600 group-hover:text-gray-700'
                    }`}
                  >
                    {approach.description}
                  </p>

                  {/* Highlight badge for center card */}
                  {approach.highlighted && (
                    <div
                      className="mt-6 inline-block px-4 py-2 bg-[#FF9A28]/20 text-[#FF9A28] text-sm font-semibold rounded-full"
                      style={{ animation: 'popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 600ms both' }}
                    >
                      Featured
                    </div>
                  )}
                </div>

                {/* Animated border glow on hover */}
                {approach.highlighted && (
                  <div
                    className="absolute inset-0 rounded-3xl border-2 border-[#FF9A28] opacity-0 group-hover:opacity-20 group-hover:shadow-lg group-hover:shadow-[#FF9A28]/50 transition-all duration-500 pointer-events-none"
                    style={{
                      animation: 'borderGlow 2s ease-in-out infinite paused group-hover:running',
                    }}
                  ></div>
                )}
              </div>
            </div>
          ))}
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

        @keyframes scaleInX {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.5) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 154, 40, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 8px rgba(255, 154, 40, 0.1);
          }
        }

        .group:hover .group-hover\:running {
          animation-play-state: running;
        }
      `}</style>
    </section>
  );
}