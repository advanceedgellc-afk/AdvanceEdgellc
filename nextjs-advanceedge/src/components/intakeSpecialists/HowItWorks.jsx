'use client';

import React from 'react';

export default function IndustryExpertiseSection() {
  const benefits = [
    {
      title: 'Align on Scripts & Criteria',
      description: 'We review your qualification criteria, approved scripts, disclosure requirements, and CRM workflows to ensure complete alignment with your firm\'s standards',
    },
    {
      title: 'Dedicated Specialist Assigned',
      description: 'A trained intake specialist is assigned to your account, learns your specific requirements, and becomes an extension of your team',
    },
    {
      title: 'Live Intake & Documentation',
      description: 'Your specialist begins handling live calls and web leads, capturing all required information and documenting it cleanly in your CRM system',
    },
    {
      title: 'Ongoing QA & Optimization',
      description: 'Continuous quality assurance monitoring, call reviews, and process optimization ensure consistent performance and identify improvement opportunities',
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
          <div style={{ animation: 'fadeInLeft 0.8s ease-out' }} className='order-3 md:order-1' >
            <div className="relative">
              <img
                src="/about/Industry-expert.webp"
                alt="Professional"
                className="w-[90%] h-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Middle - Dark Testimonial Box - Narrower Width */}
          <div className='flex items-center content-center order-2'>
            <div 
              className="bg-gray-900 text-white rounded-3xl p-8 shadow-2xl relative flex flex-col justify-center h-full md:h-[70%] mx-auto w-full"
              style={{
                animation: 'scaleUp 0.8s ease-out 200ms both',
                borderRadius: '30px 0 30px 0',
                maxWidth: '350px',
              }}
            >
              <h3 
                className="text-3xl font-medium  leading-tight"
                style={{ animation: 'fadeInUp 0.6s ease-out 500ms both' }}
              >
                How It Works
              </h3>

              <p 
                className="text-gray-300 text-base  leading-relaxed"
                style={{ animation: 'fadeInUp 0.6s ease-out 600ms both' }}
              >
The onboarding process is straightforward and designed to get you up and running quickly. Most firms are live with intake coverage within 7-10 days of kickoff. We handle the training, quality assurance infrastructure, and ongoing optimization while you focus on converting the qualified leads we deliver.

</p>

             
            </div>
          </div>

          {/* Right - Benefits List */}
          <div style={{ animation: 'fadeInRight 0.8s ease-out' }} className='flex items-center content-center order-1 md:order-3'>    

            <div className="space-y-6">
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
                  {/* Number icon with hover animation */}
                  <div className="flex-shrink-0 mt-1">
                    <div 
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9A28] text-white font-bold text-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-700 group-hover:shadow-lg"
                      style={{ animation: 'scaleInIcon 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)', animationDelay: `${400 + idx * 120}ms` }}
                    >
                      {idx + 1}
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
