import { User, TrendingUp, Megaphone } from 'lucide-react';

const NAVY = '#0F172A';
const ORANGE = '#E88720';

export default function WhoWeWorkWith() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ color: NAVY }}>
      <style>{`
        .card-icon { color: ${ORANGE}; transition: color 0.5s; }
        .icon-bg { transition: background-color 0.5s; }
        .card:hover .icon-bg { background-color: ${ORANGE} !important; }
        .card:hover .card-icon { color: white; }
        .navy-card:hover .icon-bg { background-color: ${ORANGE} !important; }
        .navy-card:hover .nav-icon { color: white; }
      `}</style>

      <section className="relative py-24 md:py-32 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2
              className="text-sm font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: ORANGE }}
            >
              Who we work with
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: NAVY }}>
              Who We Work With
            </h3>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: `${NAVY}B3` }}>
              Different teams, same problem: more demand than capacity. AdvanceEdge is a legal intake and operations partner for organizations that can&apos;t afford dropped calls, stale leads, or clogged litigation workflows.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Solo & Small Law Firms */}
            <div className="card group p-8 md:p-10 rounded-3xl bg-white border border-slate-100 transition-all duration-500 shadow-2xl hover:-translate-y-2">
              <div className="icon-bg w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
                <User size={28} className="card-icon" />
              </div>
              <h4 className="text-2xl font-bold mb-6" style={{ color: NAVY }}>
                Solo &amp; Small Law Firms
              </h4>
              <p className="text-slate-600 leading-relaxed">
                You&apos;re doing it all: consults, court, staff management, and marketing. Intake and admin work steal time from billable work. We give you trained virtual legal agents and intake specialists who work your matters like in&#8209;house staff, without the overhead of full&#8209;time hires.
              </p>
            </div>

            {/* Growing & High-Volume Firms - NAVY CARD */}
            <div
              className="card group p-8 md:p-10 rounded-3xl bg-white border border-slate-100 transition-all duration-500 shadow-2xl hover:-translate-y-2"
              
            >
              <div
                className="icon-bg w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8"
                
              >
                <TrendingUp size={28} className="card-icon" />
              </div>
              <h4 className="text-2xl font-bold mb-6" style={{ color: NAVY }}>
                Growing &amp; High&#8209;Volume Firms (Mass Tort, PI, MVA, and more)
              </h4>
              <p className="text-slate-600 leading-relaxed" >
                You&apos;re running campaigns, opening dockets, and juggling multiple torts. What you need is not &quot;more leads&quot; but clean intake, reliable case qualification, medical record workflows that don&apos;t stall, and coverage that doesn&apos;t break the budget on nights and weekends.
              </p>
            </div>

            {/* Agencies & Platforms */}
            <div className="card group p-8 md:p-10 rounded-3xl bg-white border border-slate-100 transition-all duration-500 shadow-2xl hover:-translate-y-2">
              <div className="icon-bg w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
                <Megaphone size={28} className="card-icon" />
              </div>
              <h4 className="text-2xl font-bold mb-6" style={{ color: NAVY }}>
                Legal Marketing Agencies &amp; Intake Platforms
              </h4>
              <p className="text-slate-600 leading-relaxed">
                You drive the phones and forms; your clients judge you on signed retainers. AdvanceEdge sits between your media and your clients&apos; case management systems, handling intake, qualification, and record workflows so your campaigns prove their value instead of exposing intake gaps.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}