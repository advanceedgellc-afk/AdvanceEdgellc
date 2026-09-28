"use client"
import React, { useEffect, useState } from 'react';

/**
 * CaseStudiesComingSoon component
 * A sleek, dark-themed placeholder for upcoming case studies.
 */
export default function CaseStudiesComingSoon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-[#050b16] py-24 px-6 font-['DM_Sans',sans-serif] relative overflow-hidden flex items-center justify-center">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Marcellus&display=swap');
        .blob {
          animation: float 10s infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>
      
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="blob absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF9A28]/10 rounded-full blur-[120px]" />
        <div className="blob absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className={`max-w-2xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        <div className="inline-block mb-8">
          <div className="w-16 h-16 rounded-full border border-slate-700 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#FF9A28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-[#FF9A28] font-bold tracking-[0.3em] uppercase text-xs">Stay Tuned</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-['Marcellus',serif] text-white mb-8 leading-tight">
          Case Studies & Success Stories
        </h1>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#FF9A28] to-transparent mx-auto mb-10" />

        <p className="text-lg text-slate-400 leading-relaxed max-w-lg mx-auto">
          We are currently curating our most impactful client success stories. We look forward to sharing how we drive measurable results and operational efficiency for high-volume law firms and marketing agencies.
        </p>

        <div className="mt-12">
          <button 
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 bg-white/[0.05] border border-white/[0.1] text-white rounded-full hover:bg-[#FF9A28] hover:border-transparent transition-all duration-300 font-medium"
          >
            Return Home
          </button>
        </div>
      </div>
    </section>
  );
}