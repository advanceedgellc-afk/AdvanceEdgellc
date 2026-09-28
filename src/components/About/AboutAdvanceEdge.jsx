import React from 'react';

/**
 * AboutSection component
 * A stylish, editorial-inspired light theme layout with a balanced grid.
 */
export default function AboutSection() {
  const services = [
    {
      title: "Mass Tort & MDL Operations",
      description: "High-volume case support across dockets such as Camp Lejeune, 3M Earplugs, AFFF, Suboxone, Roundup, Hair Relaxer, Pelvic Mesh, and more. We help manage data, documents, and workflows from intake through settlement."
    },
    {
      title: "Legal Intake & Lead Management",
      description: "Intake teams, lead cleanup, and contract packet support that bridge the gap between legal marketing agencies and law firms. We synchronize lead records, contracts, and packets across CRMs and case management systems, and rescue qualified leads from “disqualified” pools."
    },
    {
      title: "Medical Records & Case-Building Workflows",
      description: "Ordering, indexing, and reviewing medical records at scale, with QA programs designed to catch gaps and inconsistencies before they hurt case value."
    },
    {
      title: "Settlement & Litigation Support",
      description: "Assembly and QA of settlement and mediation packets, discovery support, and large-scale project execution under court-ordered timelines."
    },
    {
      title: "Back-Office & Accounting Pods",
      description: "Specialized bookkeeping for law firms and attorney-investors, including IOLTA-compliant trust bookkeeping, matter-level cost tracking, and real-estate, property-level ledgers where relevant. Accounting is one of the pillars we run so that your operational story and financials stay in sync."
    },
    {
      isSummary: true,
      description: "All of this is delivered as a managed legal operations layer that integrates with your existing systems instead of replacing them."
    }
  ];

  return (
    <section className="bg-[#FAFAFA] py-24 px-6 font-['DM_Sans',sans-serif] relative overflow-hidden">
      {}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] opacity-60" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {}
        <div className="mb-10">
          <span className="text-[#FF9A28] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-['Marcellus',serif] text-slate-900 leading-[1.1] max-w-5xl">
            About AdvanceEdge: AI‑Integrated Legal Operations for High‑Volume Law Firms
          </h1>
        </div>

        {}
        <div className="  mb-32">
     
          <div className=" space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              AdvanceEdge is a legal operations partner for Mass Tort and Personal Injury law firms and the marketing organizations that drive their caseloads. We design and run AI‑assisted, human‑led workflows that connect marketing, intake, medical records, litigation, settlement, and back‑office support into one reliable engine.
            </p>
            <p>
              Instead of hiring, training, and managing large internal teams for every new docket, our clients plug into dedicated pods that understand high‑volume litigation and deliver consistent results at scale.
            </p>
          </div>
        </div>

        {}
        <div className="mb-16">
          <h3 className="text-4xl font-['Marcellus',serif] text-slate-900 mb-16 text-center">
            What We Do for Law Firms and Legal Marketing Teams
          </h3>
          
          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 shadow-sm">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-10 transition-all duration-500 ${
                  service.isSummary 
                    ? "bg-white flex items-center justify-center text-center" 
                    : "bg-white hover:bg-slate-50"
                }`}
              >
                {service.isSummary ? (
                  <p className="text-xl md:text-2xl font-['Marcellus',serif] text-slate-800 leading-relaxed italic border-l-4 border-[#FF9A28] pl-6 py-2">
                    {service.description}
                  </p>
                ) : (
                  <div className="group">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full border border-orange-200 flex items-center justify-center font-['Marcellus',serif] text-[#FF9A28] group-hover:bg-[#FF9A28] group-hover:text-white transition-all duration-300">
                        0{index + 1}
                      </div>
                      <h4 className="text-2xl font-['Marcellus',serif] mt-1 text-slate-900">
                        {service.title}
                      </h4>
                    </div>
                    <p className="leading-relaxed text-sm pl-14 text-slate-500">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}