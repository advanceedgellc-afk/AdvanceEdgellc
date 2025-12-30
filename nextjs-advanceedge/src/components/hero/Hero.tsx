import Image from "next/image";
import HeroClient from "./HeroClient";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 md:px-10 ">
      {/* Background image (LCP element) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-BG/AE-bg1-opt.webp"
          alt="Law Office Background"
          fill
          priority  // Handles fetchPriority="high" automatically
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1920px"  // More precise breakpoints
          quality={60}
          className="object-cover"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0d1e]/95 via-[#1a1d2e]/85 to-[#0a0d1e]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0d1e]/60" />
      </div>

      {/* Client-side interactive content */}
      <HeroClient />
    </section>
  );
}
