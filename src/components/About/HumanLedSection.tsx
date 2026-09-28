"use client"
import React, { useEffect, useState } from 'react';

/**
 * HumanLedSection component
 * A clean, high-impact light theme section emphasizing the balance of AI and Human expertise.
 */
export default function HumanLedSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-slate-50 py-24 px-6 font-['DM_Sans',sans-serif] text-slate-900 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Marcellus&display=swap');
      `}</style>

      <div className="max-w-5xl mx-auto">
        {}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Marcellus',serif] text-slate-900 mb-6">
            Human‑Led, AI‑Assisted Legal Operations
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            AdvanceEdge is built on the belief that the best legal operations combine automation with expert judgment.
          </p>
        </div>

        {}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* AI Card */}
          <div className={`p-8 bg-white rounded-3xl shadow-sm border border-slate-200 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-['Marcellus',serif] text-slate-900 mb-4">AI-Assisted Efficiency</h3>
            <p className="text-slate-600 leading-relaxed">
              AI supports repetitive tasks like data normalization, document classification, and flagging anomalies.
            </p>
          </div>

          {/* Human Card */}
          <div className={`p-8 bg-white rounded-3xl shadow-sm border border-slate-200 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6 border border-orange-100">
              <svg className="w-6 h-6 text-[#FF9A28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-['Marcellus',serif] text-slate-900 mb-4">Human Expertise</h3>
            <p className="text-slate-600 leading-relaxed">
              Human specialists handle medical judgment, legal nuance, compliance decisions, and QA—especially in trust accounting and settlement work.
            </p>
          </div>
        </div>

        {}
        <div className={`transition-all duration-1000 delay-700 text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="h-px w-24 bg-slate-200 mx-auto mb-8" />
          <p className="text-lg md:text-xl font-['Marcellus',serif] text-slate-600 italic leading-relaxed max-w-xl mx-auto">
            This blend allows us to move quickly without treating your cases like just another dataset.
          </p>
        </div>
      </div>
    </section>
  );
}