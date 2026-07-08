"use client"
import React, { useEffect, useState } from 'react';

/**
 * WorkProcessSection component
 * A clean, professional section detailing the engagement model.
 * Light background design with balanced layout.
 */
export default function WorkProcessSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const processSteps = [
    {
      title: "Discover and map your current operations",
      text: "We review your intake flows, marketing pipelines, medical record processes, case management system, and back-office setup to understand where work slows down or breaks."
    },
    {
      title: "Design pods and workflows around your dockets",
      text: "We build dedicated pods (intake, records, settlement, accounting) aligned to your practice areas and campaigns, with clear SLAs, SOPs, and QA checkpoints."
    },
    {
      title: "Integrate into your existing stack",
      text: "We work inside your CRMs, case management tools, document systems, and finance platforms rather than forcing a single toolset, so adoption is fast and disruption is low."
    },
    {
      title: "Run, measure, and refine",
      text: "We operate as an extension of your team, report on volumes and quality, and continuously tune processes based on your feedback and docket needs."
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 font-['DM_Sans',sans-serif] text-slate-900 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Marcellus&display=swap');
      `}</style>

      <div className="max-w-6xl mx-auto">
        {}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-['Marcellus',serif] text-slate-900 mb-6">
            How We Work with You
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our engagement model is straightforward and designed for high-volume environments:
          </p>
        </div>

        {}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Column: Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://placehold.co/800x1000/e2e8f0/64748b?text=Professional+Operations" 
                alt="Operations Workflow" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9A28]/20 to-transparent" />
            </div>
          </div>

          {/* Right Column: Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#FF9A28] font-bold shadow-sm group-hover:bg-[#FF9A28] group-hover:text-white transition-all duration-300">
                      0{index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-['Marcellus',serif] text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className={`transition-all duration-1000 delay-500 text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="h-px w-24 bg-slate-200 mx-auto mb-8" />
            <p className="text-lg md:text-xl font-['Marcellus',serif] text-slate-600 leading-relaxed max-w-2xl mx-auto italic">
              The goal is not to “outsource” work blindly, but to create a predictable, measurable operations layer you can rely on.
            </p>
        </div>
      </div>
    </section>
  );
}