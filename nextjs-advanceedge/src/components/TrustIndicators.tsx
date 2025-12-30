'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function TrustIndicators() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const indicators = [
    {
      icon: ' bi-speedometer2',
      title: 'Proven Success',
      subtitle:
        'Empowering law firms and legal marketing teams with data–driven strategies and high–impact results.',
      delay: 0,
    },
    {
      icon: 'journal-medical',
      title: 'Premier Litigation Support',
      subtitle:
        'From mass tort case acquisition to specialized legal operations, we streamline your firm’s growth.',
      delay: 0.2,
    },
    {
      icon: 'shield-check',
      title: 'Industry‑Leading Expertise',
      subtitle:
        'Leveraging deep knowledge and cutting‑edge solutions in Mass Torts & beyond to optimize complex litigation practices.',
      delay: 0.4,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#f9fbff] py-16 md:py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className={`
                relative rounded-3xl border border-slate-100 bg-white
                shadow-lg hover:shadow-2xl transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.01] group p-8
                ${isVisible ? 'animate-card-enter' : 'opacity-0 translate-y-6'}
              `}
              style={{
                animationDelay: isVisible ? `${indicator.delay}s` : '0s',
              }}
            >
              {/* Icon */}
              <div className="mb-5">
                <div
                  className={`
                    inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16
                    rounded-2xl bg-orange-500/10 text-orange-500 text-2xl md:text-3xl
                    group-hover:bg-orange-500/20 group-hover:text-orange-500 group-hover:shadow-lg
                    transition-all duration-500 border-2 border-orange-500/30
                    ${isVisible ? 'animate-icon-pop' : ''}
                  `}
                >
                  <i className={`bi bi-${indicator.icon}`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 leading-snug">
                {indicator.title}
              </h3>

              {/* Subtitle */}
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {indicator.subtitle}
              </p>

              {/* Bottom accent line */}
              <span className="mt-5 block h-[2px] w-10 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes card-enter {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes icon-pop {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-card-enter {
          animation: card-enter 0.7s ease-out forwards;
        }

        .animate-icon-pop {
          animation: icon-pop 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
