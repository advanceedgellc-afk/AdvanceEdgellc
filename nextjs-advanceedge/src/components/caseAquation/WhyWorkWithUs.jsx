"use client";

import React from "react";

export default function WhyWorkWithUs() {
  const features = [
    {
      id: 1,
      icon: "bi-chat-left-text-fill",
      title: "Higher Conversion Rates",
      description: "Cases are fully pre-screened and retainers signed.",
    },
    {
      id: 2,
      icon: "bi-shield-check",
      title: "Compliance & Transparency",
      description: "We follow strict legal and ethical marketing standards.",
    },
    {
      id: 3,
      icon: "bi-trophy-fill",
      title: "Cost-Effective Acquisition",
      description: "Get qualified cases at a competitive CPA (Cost Per Acquisition).",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-20 px-5 overflow-hidden">
      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Why Work With Us?
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className="group bg-white border-2 border-gray-200 rounded-3xl p-10 text-center hover:border-[#FF9A28] hover:shadow-lg transition-all duration-300 opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${idx * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Icon Circle with flip and color change on hover */}
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF9A28] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                <i
                  aria-hidden="true"
                  className={`bi ${feature.icon} text-3xl text-white transition-colors duration-300`}
                ></i>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-[#FF9A28] transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
            transform: translateY(20px);
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
