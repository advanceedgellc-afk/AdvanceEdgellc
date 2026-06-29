import React from 'react';

const HumanLedAI: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-orange-50 flex items-center justify-center p-8 overflow-hidden">
      {/* Animated Gradient Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-100 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-amber-100 blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl w-full z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Human Led, AI Assisted Legal Accounting
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto">
            AdvanceEdge uses AI where it helps, then keeps humans in charge where judgment and compliance matter most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <FeatureCard 
            text="AI helps with transaction categorization, pattern detection and anomaly spotting, for example unusual trust movements or inconsistent coding, which are then reviewed by human accountants."
          />
          <FeatureCard 
            text="Automation supports the mechanics of reconciliations and report generation, reducing manual errors and freeing time for analysis."
          />
          <FeatureCard 
            text="Human accountants and trust bookkeepers interpret results, verify compliance with bar rules and help explain what the numbers actually mean for your firm."
          />
       
        </div>
        <div className="mt-12 p-8 bg-white/60 backdrop-blur-md border border-white rounded-2xl text-center">
            <p className="text-slate-700 font-medium text-lg">
            You get speed and consistency without turning sensitive accounting and trust work into a black box.
            </p>
          </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ text }) => (
  <div className="bg-white/60 backdrop-blur-md border border-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-12 h-1 bg-[#fb923c] mb-6 rounded-full"></div>
    <p className="text-slate-600 leading-relaxed font-medium">{text}</p>
  </div>
);

export default HumanLedAI;