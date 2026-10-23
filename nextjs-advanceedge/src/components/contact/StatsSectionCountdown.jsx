'use client';

import React, { useState, useEffect } from 'react';

export default function StatsSection() {
  // Real numbers are in the HTML from the start (so search engines never see "0+").
  // On the client the counters run up from 0 once.
  const [count1, setCount1] = useState(25);
  const [count2, setCount2] = useState(1500000);
  const [count3, setCount3] = useState(300);

  useEffect(() => {
    const run = (target, step, ms, set) => {
      let value = 0;
      const timer = setInterval(() => {
        value = Math.min(value + step, target);
        set(value);
        if (value === target) clearInterval(timer);
      }, ms);
      return timer;
    };
    const t1 = run(25, 1, 50, setCount1);
    const t2 = run(1500000, 50000, 40, setCount2);
    const t3 = run(300, 15, 45, setCount3);
    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clearInterval(t3);
    };
  }, []);

  // 1,500,000 -> "1.5M", 50,000 -> "50k"
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'k';
    }
    return num.toString();
  };

  return (
    <section className="bg-gradient-to-br from-[#1a2835] via-[#243447] to-[#1a2835] py-12 px-5 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -ml-48 -mt-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF9A28]/5 rounded-full blur-3xl -mr-48 -mb-48"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="group flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="odometer mb-6">
              <span className="odometer-digit text-5xl md:text-7xl font-black bg-gradient-to-r from-[#FF9A28] to-[#FFAB5E] bg-clip-text text-transparent drop-shadow-lg">
                {count1.toLocaleString()}
              </span>
              <span className="text-3xl md:text-4xl font-bold text-[#FF9A28] ml-2">+</span>
            </div>
            <p className="text-white text-lg md:text-xl font-light leading-tight tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
              Major Mass Tort<br/>Litigations Handled
            </p>
          </div>

          {/* Stat 2 */}
          <div className="group flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl animation-delay-200">
            <div className="odometer mb-6">
              <span className="odometer-digit text-5xl md:text-7xl font-black bg-gradient-to-r from-[#FF9A28] to-[#FFAB5E] bg-clip-text text-transparent drop-shadow-lg">
                {formatNumber(count2)}
              </span>
              <span className="text-3xl md:text-4xl font-bold text-[#FF9A28] ml-2">+</span>
            </div>
            <p className="text-white text-lg md:text-xl font-light leading-tight tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
              Medical Records<br/>Reviewed
            </p>
          </div>

          {/* Stat 3 */}
          <div className="group flex flex-col items-center text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl animation-delay-400">
            <div className="odometer mb-6">
              <span className="odometer-digit text-5xl md:text-7xl font-black bg-gradient-to-r from-[#FF9A28] to-[#FFAB5E] bg-clip-text text-transparent drop-shadow-lg">
                {count3.toLocaleString()}
              </span>
              <span className="text-3xl md:text-4xl font-bold text-[#FF9A28] ml-2">+</span>
            </div>
            <p className="text-white text-lg md:text-xl font-light leading-tight tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
              Qualified Cases<br/>Delivered
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .odometer-digit {
          display: inline-block;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* Staggered entrance animations */
        .animation-delay-200 {
          animation: slideInUp 1s ease-out 0.2s both;
        }
        .animation-delay-400 {
          animation: slideInUp 1s ease-out 0.4s both;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Hover glow effect */
        .group:hover .odometer-digit {
          text-shadow: 0 0 30px rgba(255, 154, 40, 0.6);
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}