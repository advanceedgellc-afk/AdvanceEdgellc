'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function WhyAdvanceEdgeSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: 'Cost-Effective & Scalable',
      icon: 'bi-graph-up',
      description: 'Reduce staffing costs by up to 60% while maintaining service quality. Scale resources based on demand without long-term commitments.'
    },
    {
      id: 2,
      title: 'Legal Industry Experts',
      icon: 'bi-briefcase-fill',
      description: 'Specialized virtual agents with extensive law firm experience. Deep understanding of legal workflows and compliance requirements.'
    },
    {
      id: 3,
      title: '24/7 Availability',
      icon: 'bi-clock-fill',
      description: 'Round-the-clock support for client intake, document management, and case follow-ups. Never miss a client opportunity.'
    },
    {
      id: 4,
      title: 'Fully Trained Professionals',
      icon: 'bi-award-fill',
      description: 'Pre-vetted and trained agents ready to integrate immediately. Skip hiring delays and get productive talent from day one.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
       

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Professional Image Section */}
          <div className="opacity-0 animate-fadeInLeft" style={{ animationFillMode: 'forwards', animationDuration: '0.8s' }}>
            {/* Main Image Container */}
            <div className="relative">
               {/* Header */}
        <div className="mb-16 md:mb-20 animate-fadeInDown">
          <p className="text-[#FF9A28] font-semibold text-sm md:text-base tracking-wider uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-4xl font-light text-gray-900 mb-4 leading-tight">
            Why Advance Edge Virtual Agents?
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF9A28] to-transparent mt-8"></div>
        </div>
              {/* Large rounded image */}
              <div className="relative rounded-r-[50px] overflow-hidden shadow-2xl h-96 md:h-[550px] bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src="/virtualAgents/why_AE.webp"
                  alt="Professional Virtual Agent"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* AI-Powered Badge - Stylish */}
              <div className="absolute -bottom-16 left-0 md:-left-12 bg-white rounded-2xl shadow-2xl p-5 md:p-7 border border-gray-100 w-52 md:w-64 animate-bounce backdrop-blur-sm" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#FF9A28] to-[#e88720] flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <i aria-hidden="true" className="bi bi-cpu text-xl md:text-2xl"></i>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold text-gray-900 mb-1">AI-Powered Solution</p>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Advanced technology meets legal expertise
                    </p>
                  </div>
                </div>
              </div>

              {/* Accent decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#FF9A28]/20 rounded-full"></div>
              <div className="absolute -bottom-8 -right-1 md:-right-12 w-32 h-32 border-2 border-[#FF9A28]/10 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Features Grid */}
          <div className="mt-10 md:mt-0  marker:opacity-0 animate-fadeInRight" style={{ animationFillMode: 'forwards', animationDuration: '0.8s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, idx) => (
                <div
                  key={feature.id}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${idx * 120}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Card */}
                  <div className="relative h-full group cursor-pointer">
                    {/* Animated background glow */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      hoveredCard === feature.id 
                        ? 'bg-gradient-to-br from-[#FF9A28]/20 via-[#FF9A28]/5 to-transparent opacity-100' 
                        : 'bg-gradient-to-br from-[#FF9A28]/0 to-transparent opacity-0'
                    } blur-xl`}></div>
                    
                    {/* Card content */}
                    <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-7 md:p-8 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#FF9A28]/40 group-hover:-translate-y-2 overflow-hidden">
                      
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#FF9A28] to-transparent w-0 group-hover:w-full transition-all duration-500"></div>

                      {/* Icon Container - Stylish */}
                      <div className="relative mb-6">
                        {/* Background circle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF9A28]/20 to-[#FF9A28]/5 rounded-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
                        
                        {/* Icon */}
                        <div className="relative w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-[#FF9A28] via-[#FF9A28]/90 to-[#e88720] rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
                          <i aria-hidden="true" className={`bi ${feature.icon} text-2xl md:text-3xl`}></i>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FF9A28] transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>

                      {/* Bottom right accent */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#FF9A28]/5 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          
          </div>
        </div>

      
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-bounce {
          animation: bounce 3s infinite;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
