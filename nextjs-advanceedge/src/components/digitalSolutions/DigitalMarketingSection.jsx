'use client';

import Image from 'next/image';
import { useBookingModal } from "@/context/BookingModalContext";

export default function DigitalMarketingSection() {
  const { openBookingModal } = useBookingModal();
  return (
    <section className="relative isolate overflow-hidden py-10 md:py-20 bg-gradient-to-br from-[#0f1117] via-[#1a1f2e] to-[#0f1117]">
      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Vertical divider left */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        {/* Grid Layout: Left heading, Right 2x2 cards */}
        <div className="grid gap-0 lg:gap-0 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Section: Heading + Description + Buttons */}
          <div className="flex flex-col justify-start animate-fadeInUp pr-8">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Digital Marketing
            </h2>
            <h3 className="mt-3 text-2xl md:text-3xl font-light text-white">
              Get Found. Get Leads.<br/> Get Results.
            </h3>

            <p className="mt-8 text-base md:text-base text-gray-400 leading-relaxed max-w-md">
              A website without traffic is like a billboard in the desert. Our digital marketing strategies
              drive targeted traffic and turn visitors into paying customers.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex items-center gap-3">
            <button
                type="button"
                onClick={openBookingModal}
                className="inline-flex justify-center gap-2 items-center shadow-xl text-lg bg-white/10 backdrop-blur-md font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white/20 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 border-white/30 hover:border-[#FF9A28] rounded-full group text-white font-dm"
              >
                BOOK A CALL
                <svg
                  className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-white/20 text-white ease-linear duration-300 rounded-full border border-white/50 group-hover:border-white p-1.5 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-white group-hover:fill-[#FF9A28]"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section: 2x2 Grid with borders */}
          <div className="grid gap-0 sm:grid-cols-2 pl-2 md:pl-8">
            {/* Top-Left Card */}
            <div className="border-b border-r border-white/10 pt-8 pb-8 pr-8">
              <ServiceCard
                image="/digitalSolutions/seo.png"
                title="SEO"
                description="Rank higher and drive organic traffic"
                delay={0.1}
              />
            </div>

            {/* Top-Right Card */}
            <div className="border-b border-white/10 pt-8 pb-8 pl-0 md:pl-8">
              <ServiceCard
                image="/digitalSolutions/pay-per-click.png"
                title="PPC"
                description="Get immediate leads with paid ads"
                delay={0.2}
              />
            </div>

            {/* Bottom-Left Card */}
            <div className="border-r border-white/10 pt-8 pr-8">
              <ServiceCard
                image="/digitalSolutions/social-media.png"
                title="Social Media Marketing"
                description="Engage your audience & grow your brand"
                delay={0.3}
              />
            </div>

            {/* Bottom-Right Card */}
            <div className="pt-8 pl-0 md:pl-8">
              <ServiceCard
                image="/digitalSolutions/content-marketing.png"
                title="Content Marketing"
                description="High-value blogs, landing pages & copywriting"
                delay={0.4}
              />
            </div>
          </div>
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

function ServiceCard({ image, title, description, delay = 0 }) {
  return (
    <article
      className="group relative flex flex-col gap-3 card-animate"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Icon Container with Image or Fallback */}
      <div className="flex h-14 w-14 items-center justify-center  group-hover:text-white transition-all duration-300 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={40}
            height={40}
            className="w-full h-full object-contain p-1.5"
          />
        ) : (
          <span className="text-2xl">•</span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-medium text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base md:text-base leading-relaxed text-gray-400">
        {description}
      </p>
    </article>
  );
}
