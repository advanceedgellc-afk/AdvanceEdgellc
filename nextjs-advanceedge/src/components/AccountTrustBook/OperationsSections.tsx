import React from 'react';

const OperationsSections: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: DARK - Compliance, Controls & Peace of Mind */}
      <section className="relative w-full py-20 bg-slate-950 flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-orange-950/30 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-slate-800/50 blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl w-full z-10 text-slate-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
            Compliance, Controls and Peace of Mind
          </h2>
          <p className="text-lg text-slate-300 mb-12 text-center max-w-2xl mx-auto">
            Trust accounting is fundamentally about ethics and client protection. Our accounting and trust bookkeeping services are designed to support that, not just the numbers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              text="Clear separation of trust and operating functions and records, to avoid commingling and confusion."
            />
            <FeatureCard 
              text="Monthly three way trust reconciliations, not just occasional check ins, so issues are caught quickly rather than years later."
            />
            <FeatureCard 
              text="Documented procedures, checklists and audit trails that show how funds were handled, which is essential if you ever face a bar inquiry or audit."
            />
            <FeatureCard 
              text="Training and guidance for firm leadership and staff on basic trust accounting do and do not rules, so everyone understands their role."
            />
          </div>
          <div className="mt-12 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl text-center">
            <p className="text-slate-300 italic text-lg">
              The goal is for you to sleep well at night knowing your books and trust accounts are correct and defensible.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: LIGHT - Single Legal Operations Engine */}
      <section className="relative w-full py-20 bg-orange-50 flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-100 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-amber-100 blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-4xl w-full z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Part of a Single Legal Operations Engine
          </h2>
          <p className="text-lg text-slate-700 mb-12 text-center max-w-2xl mx-auto">
            Accounting and trust bookkeeping work best when they are connected to intake, case work and settlement operations, not siloed away. With AdvanceEdge, that looks like this:
          </p>

          <div className="space-y-6">
            <ProcessItem 
              bold="Intake & Contact Center and Case Qualification" 
              text="generate structured data on new clients, retainers and expected costs."
            />
            <ProcessItem 
              bold="Medical Record Retrieval and Medical Record Review" 
              text="support cost tracking and settlement valuations."
            />
            <ProcessItem 
              bold="Litigation Support & Back‑Office" 
              text="keeps packets, documents and status clean so settlements and distributions can move smoothly."
            />
            <ProcessItem 
              bold="Accounting & Trust Bookkeeping" 
              text="records the money side of all of this, from retainers in to distributions and fees out, with clean reconciliations and reports."
            />
          </div>
          <div className="mt-12 p-8 bg-white/60 backdrop-blur-md border border-white rounded-2xl text-center">
            <p className="text-slate-700 font-medium text-lg">
              Instead of a loose collection of vendors and internal spreadsheets, you have one coordinated operations partner that understands both your workflows and your numbers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: DARK (Redesigned) - Results you can expect */}
      <section className="relative w-full py-20 bg-slate-950 flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-orange-950/30 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-slate-800/50 blur-[120px] animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-3xl w-full z-10 text-slate-100">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white text-center">
            What Better Accounting & Trust Bookkeeping Delivers
          </h2>
          <p className='pb-10'>Firms that move to a legal specific accounting and trust bookkeeping model typically see:</p>
          <div className="space-y-4">
            <BenefitItem 
              text="Fewer trust account surprises, because reconciliations and controls happen monthly and exceptions are handled quickly."
            />
            <BenefitItem 
              text="More confident financial decisions, because partners and COOs have current, accurate reports instead of outdated snapshots."
            />
            <BenefitItem 
              text="More time for attorneys and leaders to focus on cases, strategy and growth rather than on spreadsheets, bank portals and basic reconciliations."
            />
            <BenefitItem 
              text="Stronger positioning with clients and regulators, because your handling of client funds is structured, documented and ready for scrutiny."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ text }) => (
  <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl h-full flex items-start">
    <div className="w-1.5 h-8 bg-[#fb923c] mr-4 rounded-full flex-shrink-0"></div>
    <p className="text-slate-300 leading-relaxed font-medium">{text}</p>
  </div>
);

interface ProcessItemProps {
  bold: string;
  text: string;
}

const ProcessItem: React.FC<ProcessItemProps> = ({ bold, text }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
      <div className="w-3 h-3 bg-[#fb923c] rounded-full"></div>
    </div>
    <p className="text-slate-700 leading-relaxed">
      <span className="font-bold text-slate-900">{bold}</span> {text}
    </p>
  </div>
);

interface BenefitItemProps {
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => (
  <div className="bg-slate-900/20 border border-slate-800 p-6 rounded-xl flex items-center space-x-6 hover:bg-slate-900/40 transition-colors">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fb923c]/20 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-[#fb923c]"></div>
    </div>
    <p className="text-slate-300 text-lg font-medium">{text}</p>
  </div>
);

export default OperationsSections;