'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '/virtualAgents/Intake/balance.webp', // e.g. public/icons/legal-trained.svg
      title: 'Legal-Trained Agents',
      description:
        'Intake specialists trained specifically for Mass Tort, MVA, and PI case evaluation with proven qualification frameworks',
    },
    {
      icon: '/virtualAgents/Intake/clock.webp',
      title: '24/7 Coverage',
      description:
        'Comprehensive coverage across nights, weekends, and all US time zones so you never miss a qualified lead',
    },
    {
      icon: '/virtualAgents/Intake/monitor.webp',
      title: 'CRM-Ready Process',
      description:
        'Script-driven intake with clean CRM documentation and continuous QA monitoring for consistent quality',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-10 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-50/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">
              Why Choose Us
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-bold text-slate-900 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Why Top Law Firms Choose AdvanceEdge Intake
          </h2>

          <p
            className={`text-base text-slate-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            AdvanceEdge delivers intake specialists who understand the nuances of legal case
            evaluation. Our agents do not just answer phones—they apply your firm&apos;s specific
            criteria, capture critical incident and injury details, and document everything clearly
            in your CRM system. With comprehensive QA monitoring and script-driven processes, every
            lead receives consistent, professional evaluation that protects your firm&apos;s
            reputation and conversion rates.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? `${400 + idx * 150}ms` : '0ms' }}
            >
              {/* Card Background Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-15 blur transition-all duration-500 -z-10" />

              {/* Card */}
              <div className="relative h-full p-8 md:p-10 rounded-3xl border-2 border-orange-100 bg-white shadow-md hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Top Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Decorative Corner */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-100/20 rounded-full blur-2xl group-hover:bg-orange-100/40 transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon Container (Image) */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 mb-6 group-hover:from-orange-200 group-hover:to-orange-100 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-200/50">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
