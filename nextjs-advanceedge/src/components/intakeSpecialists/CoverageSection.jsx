'use client';

import React from 'react';

export default function IndustryExpertiseSection() {
  const benefits = [
    {
      title: 'Flexible Scheduling',
      description: 'Full-time or part-time specialists configured to match your exact coverage needs and call volume patterns',
    },
    {
      title: 'Extended Hours',
      description: 'Comprehensive weekend, after-hours, and graveyard shift coverage across all US time zones',
    },
    {
      title: 'Campaign Support',
      description: 'Single or multi-campaign support with specialists trained on different case types and qualification criteria',
    },
    {
      title: 'Scalable Growth',
      description: 'Easily scale up coverage as your volume grows or during marketing campaign surges',
    },
  ];

  return (
    <section className="bg-[#F7FCFF] py-10 md:py-20  px-5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
      <div className="absolute top-1/3 right-20 opacity-10 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="140" stroke="#FF9A28" strokeWidth="1" />
          <circle cx="150" cy="150" r="100" stroke="#FF9A28" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left - Professional Image */}
          <div style={{ animation: 'fadeInLeft 0.8s ease-out' }} className='order-3'>
            <div className="relative">
              <img
                src="/virtualAgents/Intake/coverage.webp"
                alt="Professional"
                className="w-[100%] h-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Middle - Dark Testimonial Box - Narrower Width */}
          <div className='flex items-center content-center order-2'>
            <div 
              className="bg-gray-900 text-white rounded-3xl mb-4 p-8 shadow-2xl relative flex flex-col justify-center h-full mx-auto w-full"
              style={{
                animation: 'scaleUp 0.8s ease-out 200ms both',
                borderRadius: '30px 0 30px 0',
                maxWidth: '350px',
              }}
            >
              <p 
                className="text-gray-300 text-base leading-relaxed"
                style={{ animation: 'fadeInUp 0.6s ease-out 600ms both' }}
              >
                Your intake needs are unique, and our coverage model adapts accordingly. Whether you need a single specialist covering weekends or a full team handling multiple campaigns across all shifts, we configure resources to match your operational requirements.

                <br /><br />

                Many firms start with after-hours coverage to test our quality, then expand to full-time specialists once they see the conversion rates. Others use us exclusively for overflow during high-volume marketing campaigns. The flexibility is yours.
              </p>
            </div>
          </div>

          {/* Right - Benefits List */}
          <div style={{ animation: 'fadeInRight 0.8s ease-out' }} className='flex items-center content-center order-1'>    
            
            <div className="space-y-6">
            <h2 
              className="text-3xl md:text-4xl font-light text-gray-900 mb-1 leading-tight"
              style={{ animation: 'fadeInDown 0.6s ease-out 100ms both' }}
            >
             Coverage That Fits Your Operation

            </h2>
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4 group transition-all duration-300 hover:translate-x-2"
                  style={{
                    animation: 'slideInLeft 0.6s ease-out',
                    animationDelay: `${300 + idx * 120}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  {/* Arrow Icon with hover animation */}
                  <div className="flex-shrink-0 mt-1">
                    <div 
                      className="flex items-center justify-center w-8 h-8 text-[#FF9A28] transition-all duration-300 group-hover:scale-110 group-hover:text-orange-700"
                      style={{ 
                        animation: 'scaleInIcon 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', 
                        animationDelay: `${400 + idx * 120}ms`,
                        fontSize: '1.5rem'
                      }}
                    >
                      <i aria-hidden="true" className="bi bi-arrow-right-circle-fill"></i>
                    </div>
                  </div>

                  {/* Content with hover animation */}
                  <div className="flex-grow transition-all duration-300 group-hover:text-gray-900">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1 transition-all duration-300 group-hover:text-[#FF9A28]">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm transition-all duration-300 group-hover:text-gray-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.3) rotate(-180deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes scaleInIcon {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
