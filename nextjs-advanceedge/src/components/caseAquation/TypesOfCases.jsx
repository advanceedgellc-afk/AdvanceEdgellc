'use client';

import React, { useState, useEffect } from 'react';

export default function TypesOfCases() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const caseTypes = [
    {
      id: 1,
     
      image: '/caseAquation/Personal_Injury.webp',
    },
    {
      id: 2,
     
      image: '/caseAquation/Defective_Drugs.webp',
    },
    {
      id: 3,
     
      image: '/caseAquation/Medical_Devices.webp',
    },
    {
      id: 4,
      
      image: '/caseAquation/Toxic_Exposure.webp',
    },
    {
      id: 5,
     
      image: '/caseAquation/Product_Liability.webp',
    },
  ];

  const caseCategories = [
    { icon: '⚠️', label: 'Defective Drugs' },
    { icon: '🏥', label: 'Medical Devices' },
    { icon: '☢️', label: 'Toxic Exposure' },
    { icon: '⚙️', label: 'Product Liability' },
    { icon: '💔', label: 'Personal Injury' },
  ];
  const caseCategoriesRight = [
    { icon: '⚠️', label: 'Environmental Exposure' },
    { icon: '🏥', label: 'Workplace Injury' },
    { icon: '☢️', label: 'Nursing Home Abuse & Neglect' },
    { icon: '⚙️', label: 'Medical Malpractice' },
    { icon: '💔', label: 'Social Security Disability (SSDI)' },
  ];

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % caseTypes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const currentCase = caseTypes[activeSlide];
  const nextCase = caseTypes[(activeSlide + 1) % caseTypes.length];

  return (
    <section className="bg-[#F6F6F6] py-10 md:py-20 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Left Content - White Card */}
          <div className="bg-white rounded-tl-[40px] rounded-bl-[40px] p-12 animate-fadeInLeft border-l-4 border-[#FF9A28]  shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Types of Cases<br />We Acquire
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              We acquire high-quality cases across mass tort, personal injury, product liability, and more—helping law firms and legal marketing firms connect with the right claimants.
            </p>

            {/* Case Categories */}
            <div className='grid grid-cols-2 lg:grid-cols-2 gap-0 items-stretch'>
            <div className="space-y-4">
              {caseCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-gray-800 font-medium opacity-0 animate-fadeInUp hover:text-[#FF9A28] transition-colors cursor-pointer"
                  style={{
                    animationDelay: `${idx * 80}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="w-5 h-5 bg-[#ff3600] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">●</span>
                  </div>
                  <span>{category.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {caseCategoriesRight.map((category, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-gray-800 font-medium opacity-0 animate-fadeInUp hover:text-[#FF9A28] transition-colors cursor-pointer"
                  style={{
                    animationDelay: `${idx * 80}ms`,
                    animationFillMode: 'forwards',
                  }}
                >
                  <div className="w-5 h-5 bg-[#ff3600] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">●</span>
                  </div>
                  <span>{category.label}</span>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Right Slider - Dark Background */}
          <div
            className="bg-gradient-to-br from-gray-900 to-black rounded-tr-[40px] rounded-br-[40px] p-8 animate-fadeInRight overflow-hidden relative flex flex-col items-center justify-center"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {/* Two Slides Container */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              {/* First Slide */}
              <div className="relative rounded-2xl overflow-hidden h-60 md:h-80 shadow-2xl">
                {caseTypes.map((caseType, idx) => (
                  <div
                    key={caseType.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === activeSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={caseType.image}
                      alt={caseType.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay with Text */}
                    <div className="absolute inset-0  to-transparent flex items-end p-4">
                      <h2 className="text-white text-lg font-light">{caseType.title}</h2>
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Slide */}
              <div className="relative rounded-2xl overflow-hidden h-60 md:h-80 shadow-2xl">
                {caseTypes.map((caseType, idx) => (
                  <div
                    key={`next-${caseType.id}`}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === (activeSlide + 1) % caseTypes.length ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={caseType.image}
                      alt={caseType.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay with Text */}
                    <div className="absolute inset-0  flex items-end p-4">
                      <h2 className="text-white text-lg font-light">{caseType.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              {caseTypes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveSlide(idx);
                    setAutoplay(false);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeSlide
                      ? 'w-3 h-3 bg-[#FF9A28]'
                      : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
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
            transform: translateY(15px);
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