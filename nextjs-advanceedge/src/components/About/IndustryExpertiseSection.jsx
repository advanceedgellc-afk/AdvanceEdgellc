'use client';

import React from 'react';

export default function IndustryExpertiseSection() {
  const benefits = [
    {
      title: 'Specialized Legal Support',
      description: 'Mass tort case evaluations, legal research, and virtual paralegal services.',
    },
    {
      title: 'Custom Web Development',
      description: 'High-performance, SEO-optimized websites tailored for law firms and enterprises.',
    },
    {
      title: 'Data-Driven Digital Marketing',
      description: 'Strategic SEO, PPC, and social media campaigns for brand growth.',
    },
    {
      title: 'Flexible, Scalable, and Cost-Effective',
      description: 'On-demand support without the overhead of full-time hires.',
    },
  ];

  return (
    <section className="bg-white pt-10 md:pt-20 pb-0 px-5 relative overflow-hidden">
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
          <div style={{ animation: 'fadeInLeft 0.8s ease-out' }} className='order-3 md:order-1'>
            <div className="relative">
              <img
                src="/about/Industry-expert.webp"
                alt="Professional"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Middle - Dark Testimonial Box - Narrower Width */}
          <div className='flex items-center content-center order-2 md:order-2'>
          <div 
            className="bg-gray-900 text-white rounded-3xl p-8 shadow-2xl relative flex flex-col justify-center h-full md:h-[80%] mx-auto w-full"
            style={{
              animation: 'scaleUp 0.8s ease-out 200ms both',
              borderRadius: '30px 0 30px 0',
              maxWidth: '320px',
            }}
          >
            

            <h3 
              className="text-2xl font-medium mb-4 leading-tight"
              style={{ animation: 'fadeInUp 0.6s ease-out 500ms both' }}
            >
              Industry Expertise That Delivers Results
            </h3>

            <p 
              className="text-gray-300 text-base mb-8 leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease-out 600ms both' }}
            >
              With years of experience in legal support services and digital growth strategies, we bring the right talent, technology, and insights to help businesses scale effectively.
            </p>

            {/* Rating Section */}
            <div 
              className="border-t border-dashed border-gray-600 pt-6 order-1 md:order-3"
              style={{ animation: 'slideInUp 0.8s ease-out 700ms both' }}
            >
              <p className="text-sm font-semibold text-gray-300 mb-3">
                Our Best Skilled Attorneys, Trust Score 4.5
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-[#FF9A28] text-lg"
                    style={{ animation: 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', animationDelay: `${800 + i * 80}ms` }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          </div>

          {/* Right - Benefits List */}
          <div style={{ animation: 'fadeInRight 0.8s ease-out' }}>
            <h2 
              className="text-4xl font-light text-gray-900 mb-12 leading-tight"
              style={{ animation: 'fadeInDown 0.6s ease-out 100ms both' }}
            >
              Why Choose AdvanceEdge?
            </h2>

            <div 
              className="w-16 h-1 bg-[#FF9A28] mb-8"
              style={{ animation: 'slideInLeft 0.6s ease-out 150ms both' }}
            ></div>

            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="flex gap-4"
                  style={{
                    animation: 'slideInLeft 0.6s ease-out',
                    animationDelay: `${300 + idx * 120}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  {/* Orange checkmark icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div 
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FF9A28]/20 text-[#FF9A28] transform"
                      style={{ animation: 'scaleInIcon 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', animationDelay: `${400 + idx * 120}ms` }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
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