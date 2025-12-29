'use client';

import React, { useState } from 'react';

import { useBookingModal } from "@/context/BookingModalContext";

export default function WhyChooseSection() {
  const { openBookingModal } = useBookingModal();
  const [activeTab, setActiveTab] = useState(0);


  const tabs = [
    {
      title: 'Pre-Qualified Case Leads',
      highlighted: true,
      features: [
        'Targeted & Verified',
        'High-Intent Claimants',
        'Faster Case Conversions',
        'Improved ROI',
      ],
      description: 'We provide vetted, high-intent case leads to help you sign more qualified claimants with ease.',
      image: '/caseAquation/AE-pre-qualified.webp',
    },
    {
      title: 'Performance-Based Model',
      highlighted: true,
      features: [
        'No Upfront Costs',
        'Pay for Performance',
        'Risk-Free Growth',
        'Higher Conversions',
      ],
      description: 'Pay for results, not just leads—maximize ROI with our success-driven approach.',
      image: '/caseAquation/performace_mark2.webp',
    },
    {
      title: 'Custom Case Acquisition',
      highlighted: true,
      features: [
        'Niche-Specific Leads',
        'Data-Driven Targeting',
        'Scalable Solutions',
        'Higher Case Success',
      ],
      description: 'Tailored strategies to match your firm\'s unique case criteria and goals.',
      image: '/caseAquation/custom-case.webp',
    },
    {
      title: 'Legal & Compliance Expertise',
      highlighted: true,
      features: [
        'Fully Compliant Leads',
        'Ethical Marketing Practices',
        'Regulatory Expertise',
        'Risk-Free Growth',
      ],
      description: 'We ensure every lead meets legal and compliance standards for risk-free acquisition.',
      image: '/caseAquation/Complaince.webp',
    },
    {
      title: 'Scalability',
      highlighted: true,
      features: [
        'Adaptable to Demand',
        'Seamless Growth',
        'High-Volume Ready',
        'Scalable Strategies',
      ],
      description: 'Effortlessly scale your case intake with flexible and growth-driven solutions.',
      image: '/caseAquation/Scalability.webp',
    },
  ];

  const activeTabData = tabs[activeTab];
  const showContent = activeTabData.highlighted;

  return (
    <section className="py-10 md:py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Why Choose Advance Edge LLC?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We go beyond basic lead generation. Our data-driven approach ensures you receive verified, high-intent claimants that match the specific requirements of mass tort and personal injury cases.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Vertical Tabs */}
          <div className="w-full lg:w-80 flex flex-col gap-0">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-6 py-5 transition-all duration-300 border-l-4 whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gray-50 border-l-[#ff3600] text-[#ff3600] font-semibold'
                    : 'bg-white border-l-gray-200 text-gray-700 hover:bg-gray-50'
                } ${tab.highlighted ? 'text-[#ff3600]' : ''}`}
              >
                <span className="block font-bold">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          {showContent && (
            <div className="flex-1 animate-fadeIn">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Left Content */}
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                    {activeTabData.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {activeTabData.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {activeTabData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-[#FF9A28] rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 w-[90%]">
                <div className="w-[80%] relative overflow-hidden rounded-tl-[32px] rounded-br-[32px] shadow-lg bg-gray-100">
                    <img
                    src={activeTabData.image}
                    alt={activeTabData.title}
                    className="w-full h-80 md:h-96 object-cover object-center"
                    />
                </div>
                </div>


              </div>
            </div>
          )}
        </div>

        {/* CTA Buttons - Bottom */}
            <div className="flex flex-wrap justify-center gap-4 mt-16 pt-8 border-t border-gray-200">
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}