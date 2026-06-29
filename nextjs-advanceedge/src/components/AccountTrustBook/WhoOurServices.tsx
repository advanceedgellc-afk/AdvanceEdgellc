import React from 'react';

const WhoOurServices: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-orange-50 flex items-center justify-center p-8 overflow-hidden">
      {/* Animated Gradient Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-100 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-amber-100 blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl w-full">
        {/* Content Centered */}
        <div className="space-y-12 text-slate-900">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 text-center">
              Who Our Accounting & Trust Bookkeeping Services Are Built For
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <FeatureItem 
              title="Solo and small law firms" 
              desc="Solo and small firms often start with a general bookkeeper or do it themselves, then discover that trust accounting and IOLTA rules are more complex than they expected. We provide legal bookkeeping services for small law firms that want someone who already understands retainers, client ledgers and trust compliance, not someone you have to train from scratch."
            />
            <FeatureItem 
              title="Growing and high volume firms" 
              desc="Growing PI, Mass Tort, MVA and multi practice firms need timely, accurate books and bulletproof trust reconciliations, but leaders are already stretched between marketing, hiring and case work. We help you handle the increased volume of transactions, multiple trust accounts and more complex reporting, while connecting cleanly into the rest of your operations stack."
            />
            <FeatureItem 
              title="Legal marketing agencies and intake platforms" 
              desc="Agencies and intake platforms that handle marketing funds, cost sharing or settlement flows with panel firms need clean financial records and clear reconciliation of funds in and out. Our accounting and trust bookkeeping team can work with your finance staff to track campaign costs, pass throughs and distributions in a way your law firm partners and auditors can understand."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  title: string;
  desc: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, desc }) => (
  <div className="border-l-4 border-[#fb923c] pl-6 py-4 bg-white/50 backdrop-blur-sm rounded-r-lg shadow-sm">
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default WhoOurServices;