"use client"
import React from 'react';

export default function LegalAccountingPage() {
  return (
    <div className=" bg-white text-gray-900 font-sans">
      {}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>

      {}
      <section className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 animate-gradient opacity-90" />
        
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="w-full md:w-1/2 flex justify-center ">
            <div className="relative  a p-4  shadow-2xl">
            <img 
          src="/accounting/trust-bookkeeping.webp" 
          alt="Accounting and financial records" 
          className="w-full h-full object-cover rounded-3xl"
        />
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
            Why Law Firm and Real Estate Accounting Need Specialists
            </h2>
            <div className="space-y-6 text-slate-300">
              <p className="leading-relaxed">
              Most bookkeepers are comfortable with basic income and expense tracking. Very few are comfortable with the combination of:
              </p>
              <ul className="space-y-3 list-none">
                {[
                  "Client trust and IOLTA rules for law firms",
                  "Three way trust reconciliation requirements",
                  "Matter level cost tracking and fee transfers",
                  "Property and portfolio level ledgers for real estate",
                  "Lender, partner and investor reporting",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[#fb923c] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-white border-l-4 border-[#fb923c] pl-4 italic">
              Law firms must keep client funds in separate trust or IOLTA accounts, maintain individual client ledgers and perform monthly three way reconciliations or they risk bar complaints and serious consequences. Real estate investors, on the other hand, must understand property level cash flow, debt service, reserves and tax sensitive items such as depreciation and capital improvements.
              <br/><br/>
              AdvanceEdge is built around these realities. Our accounting work is not a generic small business template. It is designed for attorneys, law firms and real estate investors, including clients who wear both hats.
                            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}