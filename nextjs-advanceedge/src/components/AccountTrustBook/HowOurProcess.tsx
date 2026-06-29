import React from 'react';

const HowOurProcess: React.FC = () => {
  return (
    <section className="relative w-full py-20 min-h-screen bg-slate-950 p-8 md:p-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-orange-900/5 blur-[150px]"></div>
      </div>

      <div className="max-w-3xl mx-auto z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How Our Accounting & Trust Bookkeeping Process Works
          </h2>
        </div>

        <div className="relative space-y-12 pl-8 border-l-2 border-slate-800">
          <TimelineStep 
            step="Step 1" 
            title="Assess your current setup" 
            desc="We start with a quick assessment of your current accounting and trust bookkeeping environment. That includes bank account structure, software, current ledgers, reconciliation habits and any known pain points or past issues."
          />
          <TimelineStep 
            step="Step 2" 
            title="Design roles, controls and workflows" 
            desc="Together, we define who will do what, which tasks stay inside your firm, which tasks AdvanceEdge will handle and what approvals or controls are required. This includes written workflows for trust deposits, withdrawals, retainer handling, cost reimbursements and monthly closing."
          />
          <TimelineStep 
            step="Step 3" 
            title="Connect to your systems" 
            desc="We connect to your existing accounting and practice management tools such as QuickBooks Online, Xero or legal specific platforms like Clio, LeanLaw, CosmoLex or similar tools, always under firm controlled access and permissions."
          />
          <TimelineStep 
            step="Step 4" 
            title="Run bookkeeping and reconciliations on a schedule" 
            desc="On an agreed schedule, usually weekly for operating books and monthly for trust, we process transactions, update ledgers, perform three way trust reconciliations and prepare your reports. Exceptions and questions are raised promptly so they do not linger for months."
          />
          <TimelineStep 
            step="Step 5" 
            title="Review and refine" 
            desc="Owners and COOs review key reports on a regular cadence. We adjust categories, reports and processes based on your feedback so the accounting and trust bookkeeping function fits the way your firm actually thinks about money."
          />
        </div>
      </div>
    </section>
  );
};

interface TimelineStepProps {
  step: string;
  title: string;
  desc: string;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ step, title, desc }) => (
  <div className="relative pl-8">
    {/* Timeline Dot */}
    <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#fb923c] rounded-full shadow-[0_0_10px_#fb923c]"></div>
    
    <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl transition-all duration-300 hover:border-[#fb923c]/50">
      <span className="text-[#fb923c] font-mono font-bold">{step}</span>
      <h3 className="text-xl font-bold text-white mt-1 mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default HowOurProcess;