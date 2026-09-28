"use client"
import React, { useEffect, useState } from 'react';

/**
 * HistorySection component
 * A dark-themed, professional timeline layout showcasing the company's evolution.
 */
export default function HistorySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const historyData = [
    {
      year: "2011–2016",
      title: "Litigation Support Origins",
      body: "AdvanceEdge started as a litigation support team solving the unglamorous but mission-critical challenges of large-scale litigation. We handled high-volume data entry, document indexing, discovery material management, and medical record organization for busy litigation teams.",
      extra: "During this phase, we developed our “Quality Turn Around Time” mindset—fast, accurate execution combined with tight feedback loops. We built expertise in data reconciliation, Short Form Complaint preparation, and meticulous medical records review, proving we could deliver under intense, court-driven deadlines."
    },
    {
      year: "2017–2021",
      title: "Scaling for Mass Tort & MDL Complexity",
      body: "As Mass Tort and MDL work accelerated, our role evolved from back-office vendor to strategic operational partner. We moved from simple data entry into:",
      list: [
        "Specialized medical record review (MRR)",
        "Call auditing and lead qualification",
        "Lifecycle support for claims across intake, case development, and settlement preparation"
      ],
      footer: "Our teams are embedded into client environments, working daily in platforms like Case Docker, Disco, MR8, Litify, and proprietary CRMs. We helped firms manage complex dockets such as AFFF and pelvic mesh by rapidly scaling trained teams without adding permanent internal headcount."
    },
    {
      year: "2022–2026",
      title: "AI-Integrated Legal Operations Partner",
      body: "Today, AdvanceEdge represents a new generation of AI-integrated legal operations. We combine AI-assisted automation with experienced reviewers and team leads to close the gap between marketing spend and signed, settlement-ready cases.",
      extra: "We have executed on some of the most demanding projects in the industry, including the Boy Scouts of America (BSA) bankruptcy, where we processed thousands of complex questionnaires and supporting documents under tight, court-ordered deadlines. From lead cleanup and contract packet assembly to complex settlement packet preparation and IOLTA-compliant bookkeeping, our mission is to keep your operations running with 24/7 reliability so your attorneys can focus on strategy and clients."
    }
  ];

  return (
    <section className="bg-[#050b16] py-24 px-6 font-['DM_Sans',sans-serif] relative overflow-hidden text-slate-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Marcellus&display=swap');
      `}</style>
      
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FF9A28] rounded-full blur-[200px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-['Marcellus',serif] text-white leading-[1.1] mb-6">
            Our History in Legal Operations
          </h2>
          <div className="h-1 w-24 bg-[#FF9A28] mx-auto rounded-full" />
        </div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {historyData.map((era, index) => (
            <div 
              key={index} 
              className={`group transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Year Indicator */}
                <div className="flex-shrink-0">
                  <div className="text-[#FF9A28] font-['Marcellus',serif] text-2xl font-bold border-l-2 border-[#FF9A28] pl-4">
                    {era.year}
                  </div>
                </div>

                {/* Content Box */}
                <div className="flex-grow p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FF9A28]/50 transition-all duration-500 hover:bg-white/[0.05]">
                  <h3 className="text-3xl font-['Marcellus',serif] text-white mb-6">
                    {era.title}
                  </h3>
                  
                  <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
                    <p>{era.body}</p>
                    
                    {era.list && (
                      <ul className="space-y-2 py-2">
                        {era.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-[#FF9A28] mt-1.5">◆</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {era.extra && <p>{era.extra}</p>}
                    {era.footer && <p className="pt-2">{era.footer}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}