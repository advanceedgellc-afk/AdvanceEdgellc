'use client';

import React, { useState, useEffect } from 'react';

export default function StatsSection() {
  const [counts, setCounts] = useState([0, 0, 0]);

  const stats = [
    { target: 25, suffix: '+', label: 'Major Mass Tort Litigations Handled' },
    { target: 43000, suffix: '+', label: 'Medical Records Reviewed' },
    { target: 300, suffix: '+', label: 'Qualified Cases Delivered' },
  ];

  useEffect(() => {
    const timers = stats.map((stat, idx) => {
      let current = 0;
      const increment = Math.ceil(stat.target / 30);
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[idx] = current;
          return newCounts;
        });
      }, 30);

      return timer;
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k';
    }
    return num.toString();
  };

  return (
    <section className="bg-gradient-to-br from-[#1a2835] via-[#243447] to-[#1a2835] py-8 px-5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF9A28]/3 rounded-full blur-3xl -ml-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF9A28]/3 rounded-full blur-3xl -mr-48 -mb-48 pointer-events-none"></div>

     

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full md:h-44">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center px-8 py-8 transition-all duration-500 ${
                idx !== stats.length - 1 ? 'md:border-r border-white/20 border-r-0' : ''
              } ${idx !== 0 ? 'md:border-l border-white/20 border-l-0' : ''}`}
              style={{
                animation: 'fadeInUp 0.8s ease-out',
                animationDelay: `${idx * 200}ms`,
                animationFillMode: 'both',
              }}
            >
              {/* Number with countdown animation */}
              <div className="text-center mb-6">
                <div
                  className="text-6xl md:text-7xl font-light text-[#FF9A28] tabular-nums tracking-tight"
                  style={{
                    animation: 'scaleIn 0.6s ease-out',
                    animationDelay: `${300 + idx * 200}ms`,
                    animationFillMode: 'both',
                  }}
                >
                  {formatNumber(counts[idx])}{stat.suffix}
                </div>
              </div>

              {/* Label */}
              <p
                className="text-center text-white text-xl font-light leading-relaxed max-w-xs"
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${400 + idx * 200}ms`,
                  animationFillMode: 'both',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
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