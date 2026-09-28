'use client';

import React from 'react';

export default function ScaleYourFirmSection() {
  const benefits = [
    { 
      icon: (
        <img 
                src="/virtualAgents/expertise.png" 
                alt="expertise"
                className="w-12 h-auto flex-shrink-0"
              />
      ),
      label: 'Professionally Trained'
    },
    { 
      icon: (
        <img 
                src="/virtualAgents/data-driven.png" 
                alt="expertise"
                className="w-12 h-auto flex-shrink-0"
              />
      ),
      label: 'Results-Driven'
    },
    { 
      icon: (
        <img 
                src="/virtualAgents/scalability.png" 
                alt="expertise"
                className="w-12 h-auto flex-shrink-0"
              />
      ),
      label: 'Scalable'
    },
    { 
      icon: (
        <img 
        src="/virtualAgents/cost-effectiveness.png" 
        alt="expertise"
        className="w-12 h-auto flex-shrink-0"
      />
      ),
      label: 'Cost-Effective'
    },
  ];

  return (
    <section className="bg-white py-10  md:py-20 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-0">
          {/* Left Content */}
          <div className="animate-fadeInLeft ">
            

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
              Scale Your Firm with Expert Virtual Agents
            </h1>
            {/* Orange Underline */}
            <div className="w-16 h-1 bg-[#FF9A28] mb-6"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At AdvanceEdge, we provide Virtual Agents As A Service (VAAS) to help law firms and legal service providers reduce overhead, improve efficiency, and focus on winning cases.
            </p>

            <p className="text-base text-gray-700 mb-12 leading-relaxed">
              Our trained professionals handle everything from legal research and case intake to contract management and marketing, seamlessly integrating into your firm.
            </p>

            {/* Quote Section with Image */}
            <div className="mb-12 flex gap-4">
              <img 
                src="/virtualAgents/left-quote.png" 
                alt="Quote mark"
                className="w-12 h-auto flex-shrink-0"
              />
              <p className="text-lg italic text-gray-800">
                Scaling in the legal industry starts with smarter support— our virtual agents help you grow, streamline, and succeed.
              </p>
            </div>

            {/* Pricing */}
            <p className="text-lg font-bold text-gray-900">
              Starting at just <span className="text-[#FF9A28]">$10/hour</span> – Get expert support without hiring full-time staff!
            </p>
          </div>

          {/* Right Image */}
          <div className="animate-fadeInRight flex justify-end">
            <img 
              src="/virtualAgents/finances-section.webp" 
              alt="Professional man with glasses holding tablet"
              className="right w-[68%]"
            />
          </div>
        </div>

        {/* Dark Benefits Bar with SVG Icons */}
        <div className="bg-gradient-to-r from-[#1a1f2e] to-[#0f1419] rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="text-center flex flex-col items-center opacity-0 animate-fadeInUp border-l border-[#FF9A28]/20 pl-8 first:border-l-0 first:pl-0"
                style={{
                  animationDelay: `${idx * 100}ms`,
                  animationFillMode: 'forwards',
                }}
              >
                {/* SVG Icon */}
                <div className="mb-4">
                  {benefit.icon}
                </div>
                {/* Label */}
                <p className="text-white text-lg font-light">
                  {benefit.label}
                </p>
              </div>
            ))}
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

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}