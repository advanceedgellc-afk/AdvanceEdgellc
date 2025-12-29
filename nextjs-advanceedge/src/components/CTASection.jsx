'use client';

import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full py-10 lg:py-20 px-5 relative overflow-hidden bg-[#0f1424]">
{/* 🔶 LEFT BACKGROUND TRIANGLE IMAGE */}
<div
        className="absolute  left-0 top-1/2 -translate-y-1/2 h-[400px] w-[220px] opacity-0 lg:opacity-90 pointer-events-none"
        style={{
          backgroundImage: "url('/overlay-g-footer.png')", // place inside /public
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF9A28]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF9A28]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex-1">
            <div className="mb-6 animate-[fadeInDown_0.8s_ease-out]">
              <span className="text-[#FF3600] text-sm font-bold tracking-widest uppercase">
                 GET IN TOUCH 
              </span>
            </div>

            <h2
              className="text-2xl md:text-4xl font-light text-white mb-8 leading-tight animate-[fadeInDown_0.8s_ease-out_100ms_both]"
            >
              Partner with AdvanceEdge today<br/> and take your Firm to the next level.
            </h2>
          </div>

          {/* Right CTA Card */}
<div className="flex-shrink-0 animate-[slideInRight_0.8s_ease-out_200ms_both]">
  <a
    href="tel:18329377738"
    className="block"
    aria-label="Call AdvanceEdge at 832-937-7738"
  >
    <div
      className="px-12 py-10 shadow-2xl text-center min-w-xs transform hover:scale-105 transition-all duration-300 cursor-pointer rounded-[50px_8px_50px_8px]"
      style={{
        background: "linear-gradient(90deg, #FF9A28 0%, #0f1424 100%)",
      }}
    >
      <div className="text-4xl md:text-5xl font-light text-white mb-3 tracking-tight">
        832.937.7738
      </div>
      <p className="text-white text-sm font-semibold uppercase tracking-widest">
        FEEL FREE TO CALL US
      </p>
    </div>
  </a>
</div>


        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

    </section>
  );
}
