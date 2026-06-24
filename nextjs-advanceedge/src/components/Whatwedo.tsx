import { 
    PhoneCall, SearchCheck, 
    Clock, Cpu, FileText, Stethoscope, Briefcase, 
    Users, Calculator, BarChart, Layers, 
    ShieldCheck
  } from 'lucide-react';
  
  const NAVY = '#0F172A';
  const ORANGE = '#E88720';
  
  export default function WhatWeDo() {
    return (
      <div className="min-h-screen bg-white font-sans" style={{ color: NAVY }}>
        <style>{`
          /* Section 1 cards */
          .s1-card { border: 1px solid #e2e8f0; border-radius: 1.5rem; transition: border-color 0.3s, box-shadow 0.3s; }
          .s1-card:hover { border-color: ${ORANGE}; box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
  
          /* Section 2 cards */
          .s2-card { border: 1px solid #1e293b; border-radius: 1.5rem; transition: border-color 0.3s, transform 0.3s; }
          .s2-card:hover { border-color: ${ORANGE}; transform: translateY(-6px); }
          .s2-bar-fill { width: 0; transition: width 0.7s ease-out; background-color: ${ORANGE}; }
          .s2-card:hover .s2-bar-fill { width: 100%; }
  
          /* Section 3 cards */
          .s3-card { border: 1px solid #e2e8f0; border-radius: 1.5rem; transition: border-color 0.3s, box-shadow 0.3s; background: white; }
          .s3-card:hover { border-color: ${ORANGE}; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
          .s3-icon { border-radius: 0.75rem; transition: background-color 0.3s, color 0.3s; background-color: rgba(15,23,42,0.06); color: ${ORANGE}; }
          .s3-card:hover .s3-icon { background-color: ${ORANGE}; color: white; }
          .s3-title { transition: color 0.3s; color: ${NAVY}; }
          .s3-card:hover .s3-title { color: ${ORANGE}; }
        `}</style>
  
        {/* SECTION 1: For Intake Leaders */}
        <section className="py-24 md:py-32 px-6 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
              
              {/* Left Column - Sticky */}
              <div className="lg:w-[50%]  lg:sticky lg:top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12" style={{ backgroundColor: ORANGE }} />
                  <span className="font-bold tracking-[0.2em] uppercase text-xs" style={{ color: ORANGE }}>Intake &amp; Growth</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-8" style={{ color: NAVY }}>
                  For Intake Directors, CMOs, and Marketing Owners
                </h3>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-10">
                  You spend real money to make the phone ring. Our job is to make sure those calls turn into clean, qualified cases, not wasted impressions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-2xl mb-1" style={{ color: ORANGE }}>24/7</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Availability</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="font-bold text-2xl mb-1" style={{ color: ORANGE }}>99%</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Audit Score</p>
                  </div>
                </div>
              </div>
  
              {/* Right Cards */}
              <div className="lg:w-[50%]  grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Contact Center & Intake Specialists",
                    text: "Dedicated legal intake teams trained on Mass Tort, PI, MVA, and other high‑volume practice areas, with scripts built around your specific qualification criteria and compliance rules.",
                    icon: <PhoneCall size={22} />
                  },
                  {
                    title: "Case Qualification (Flagship Service)",
                    text: "A four‑layer case qualification model: primary screening, secondary QC after retainer, ongoing docket health reviews, and campaign/vendor intelligence so you know which channels and partners actually deliver viable cases.",
                    icon: <SearchCheck size={22} />
                  },
                  {
                    title: "24/7, Nights & Weekend Coverage (No Premiums)",
                    text: 'Round‑the‑clock coverage without "weekend surcharges," so you aren\'t paying extra just to catch the leads you already paid to generate.',
                    icon: <Clock size={22} />
                  },
                  {
                    title: "AI‑Assisted Workflows, Human QA",
                    text: "AI tools support summaries, follow‑ups, and data entry, while trained legal specialists make the judgment calls. Hence, you get speed without losing nuance in liability, medical history, or coverage questions.",
                    icon: <Cpu size={22} />
                  }
                ].map((item, i) => (
                  <div key={i} className="s1-card p-8 bg-white">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: NAVY, color: ORANGE }}
                    >
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 leading-tight" style={{ color: NAVY }}>{item.title}</h4>
                    <p className="text-slate-500 text-base leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* SECTION 2: For Litigation Teams */}
        <section className="py-24 md:py-32 px-6 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] blur-[140px] rounded-full -mr-64 -mt-64" style={{ backgroundColor: ORANGE }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12" style={{ backgroundColor: ORANGE }} />
                  <span className="font-bold tracking-[0.2em] uppercase text-xs" style={{ color: ORANGE }}>Litigation Teams</span>
                </div>
             <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">For Litigation Support, Paralegals, and Trial Teams</h3>
              <p className="max-w-3xl text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                You can&apos;t move cases without records, summaries, and clean files. AdvanceEdge takes the volume work off your plate so litigators stay focused on strategy, not chasing paperwork.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Medical Record Retrieval",
                  text: "High‑volume record retrieval with millions of retrieval calls made and relationships across tens of thousands of U.S. facilities, so your requests don't sit ignored in a fax queue.",
                  icon: <FileText size={28} />
                },
                {
                  title: "Medical Record Review",
                  text: "Clinically trained reviewers—physicians, pharmacists, nurses, and other specialists—who understand drug histories, timelines, and comorbidities, producing litigation‑ready summaries instead of generic abstracts.",
                  icon: <Stethoscope size={28} />
                },
                {
                  title: "Litigation Support & Back‑Office",
                  text: "Forms, data entry, document indexing, follow‑ups, and other paralegal‑level work executed by teams that have already handled millions of legal support tasks for U.S. law firms.",
                  icon: <Briefcase size={28} />
                },
                {
                  title: "Settlement & Post‑Resolution Support",
                  text: "Help with settlement packets, lien coordination, and other repeatable workflows that bog teams down at the exact moment cash should be flowing into the firm.",
                  icon: <ShieldCheck size={28} />
                }
              ].map((item, i) => (
                <div key={i} className="s2-card flex flex-col p-8 cursor-default overflow-hidden relative" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8), #0F172A)' }}>
                  {/* Top animated bar */}
                  <div className="h-0.5 w-full mb-8 relative overflow-hidden rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                    <div className="s2-bar-fill absolute top-0 left-0 h-full" />
                  </div>
                  <div className="mb-6" style={{ color: ORANGE }}>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-4 text-white leading-tight">{item.title}</h4>
                  <p className="text-slate-400 text-base leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* SECTION 3: For Firm Owners */}
        <section className="py-24 md:py-32 px-6 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="font-bold tracking-[0.3em] uppercase text-sm mb-4" style={{ color: ORANGE }}>Strategic Capacity</h2>
              <h3 className="text-4xl md:text-6xl font-black leading-tight mb-8" style={{ color: NAVY }}>For Managing Partners, COOs, and Firm Owners</h3>
              <p className="text-xl md:text-2xl leading-relaxed font-light" style={{ color: `${NAVY}99` }}>
                Your real constraint isn&apos;t leads or even talent—it&apos;s operational capacity and cost structure. AdvanceEdge gives you a flexible partner instead of another block of fixed headcount.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Virtual Legal Agents (Remote, Dedicated Staff)",
                  text: "Remote professionals who function like in‑house staff for intake, admin, litigation support, and finance, without the salary, benefits, and office overhead of additional full‑time hires.",
                  icon: <Users size={28} />
                },
                {
                  title: "Accounting & Trust Bookkeeping",
                  text: "Support for day‑to‑day bookkeeping, trust accounting, and expense tracking so your numbers stay clean and audit‑ready while attorneys stay on legal work.",
                  icon: <Calculator size={28} />
                },
                {
                  title: "Digital Marketing Support, Not a Replacement",
                  text: "When you need help operationalizing campaigns—not replacing your agency—we support landing page intake workflows, form handling, and campaign‑specific intake scripts so marketing dollars don't die at the first phone ring.",
                  icon: <BarChart size={28} />
                },
                {
                  title: "Elastic Capacity with 30‑Day Adjustments",
                  text: "Scale teams up or down with short-notice windows (for example, 30 days), so you can match staffing to campaign peaks instead of carrying idle seats during slow periods.",
                  icon: <Layers size={28} />
                }
              ].map((item, i) => (
                <div key={i} className="s3-card flex flex-row gap-6 p-8">
                  <div className="s3-icon shrink-0 w-14 h-14 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="s3-title text-xl font-bold mb-3 leading-tight">{item.title}</h4>
                    <p className="text-slate-500 text-base leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Bottom Label */}
            <div className="mt-16 flex justify-center">
              <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full text-white" style={{ backgroundColor: NAVY, boxShadow: `0 20px 40px ${NAVY}33` }}>
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: ORANGE }}>Core Advantage</span>
                <div className="h-4 w-px bg-white/20" />
                <span className="text-lg font-bold">Elastic Legal Infrastructure</span>
              </div>
            </div>
          </div>
        </section>
  
      </div>
    );
  }