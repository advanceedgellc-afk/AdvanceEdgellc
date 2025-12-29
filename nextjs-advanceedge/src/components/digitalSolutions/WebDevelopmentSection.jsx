'use client';
import React from 'react';

export default function WebDevelopmentSection() {
  return (
    <section className="relative isolate overflow-hidden py-10 md:py-20">
      {/* Background: columns image + white overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/columns-bg.jpg')] bg-cover bg-center opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-white/85" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Top: Heading + Right card layout */}
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_minmax(300px,350px)]">
          {/* Left: Heading with underline accent */}
          <div className="flex flex-col justify-start animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#333333] leading-tight">
              Web Development
              <br />
              Build a Strong Digital Foundation
            </h2>

            {/* Orange underline accent */}
            <div className="mt-4 h-1 w-20 bg-[#D89C3C] rounded-full" />

            <p className="mt-8 text-base md:text-base text-[#6b6b6b] leading-relaxed ">
              Your website is your brand&apos;s first impression—make it count. Our expert developers craft fast,
              secure, and conversion‑focused websites tailored to your business needs.
            </p>
          </div>

          {/* Right: Custom Website Design card (top position) */}
          <div className="mt-4">
            <ServiceCard
              icon="bi-journal-bookmark-fill"
              title="Custom Website Design"
              subtitle="Beautiful, responsive, and user‑friendly designs"
              delay={0.1}
              position="top-right"
            />
          </div>
        </div>

        {/* Bottom: Three cards in a row */}
        <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon="bi-search"
            title="SEO‑Optimized Development"
            subtitle="Built with technical SEO best practices from day one"
            delay={0.2}
          />
          <ServiceCard
            icon="bi-bag-check-fill"
            title="E‑Commerce & CMS"
            subtitle="Scalable platforms like Shopify, WordPress, and custom headless builds"
            delay={0.3}
          />
          <ServiceCard
            icon="bi-shield-lock-fill"
            title="Speed & Security"
            subtitle="Lightning‑fast performance and enterprise‑grade protection"
            delay={0.4}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }

        .card-animate {
          animation: cardIn 0.7s ease-out both;
        }
      `}</style>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  subtitle,
  delay = 0,
  position,
}) {
  return (
    <article
      className={`
        relative group overflow-hidden rounded-3xl
        bg-white/65 backdrop-blur-2xl border border-white/75
        shadow-[0_18px_60px_rgba(15,15,15,0.05)]
        px-7 py-8 sm:px-8 sm:py-9 flex flex-col gap-2
        hover:-translate-y-1 hover:shadow-[0_24px_75px_rgba(15,15,15,0.1)]
        transition-transform duration-300 card-animate
        ${position === 'top-right' ? 'lg:min-h-[160px]' : ''}
      `}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Icon circle */}
      <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-[100%] bg-[#FDF3E2] text-[#E09A34] hover:bg-[#FF9A28] hover:text-black transition-all duration-300 text-lg sm:text-xl">
        <i aria-hidden="true" className={`bi ${icon}`} />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-medium text-[#333333] mt-2">
        {title}
      </h3>

      {/* Subtitle / Description */}
      {subtitle && (
        <p className="text-base sm:text-base leading-relaxed text-[#666666]">
          {subtitle}
        </p>
      )}

      {/* Soft light overlay on hover */}
      <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-br from-white/60 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
}
