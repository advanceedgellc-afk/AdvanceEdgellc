"use client";

import { useEffect } from "react";

export default function BookACallPage() {
  useEffect(() => {
    // Load TidyCal embed script once
    const existingScript = document.querySelector(
      'script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]'
    ) as HTMLScriptElement | null;

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#050811] text-white">
      {/* Hero / Title */}
      <section className="bg-[#050811] border-b border-white/5 h-[400px] md:h-[500px] flex content-center items-center">
        <div className="max-w-6xl mx-auto px-4 pt-20 ">
          <h1 className="font-marcellus text-4xl md:text-5xl lg:text-6xl mb-4">
            Book A Call
          </h1>
          <p className="font-dm text-lg md:text-xl text-gray-300 max-w-2xl">
            Schedule a meeting with our team to discuss how Advance Edge can
            support your firm&apos;s growth and efficiency.
          </p>
        </div>
      </section>

      {/* TidyCal Calendar Section */}
      <section className="bg-white">
        <div className="w-full mx-auto px-4 py-10 md:py-16">
          <div className="bg-white rounded-2xl  overflow-hidden">
            <div className="tidycal-embed" data-path="victor-daniel/website"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
