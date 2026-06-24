import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const NAVY = '#0F172A';
const ORANGE = '#E88720';

export default function TrustSection() {
  return (
    <div className=" bg-[#f4faff] font-sans" style={{ color: NAVY }}>
      <section className="relative py-20 md:py-12 lg:py-16 px-6 flex flex-col items-center justify-center">

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase"
              style={{
                backgroundColor: `${NAVY}0D`,
                border: `1px solid ${NAVY}1A`,
                color: NAVY,
              }}
            >
              National Legal Support
            </div>
          </div>

          {/* Headline */}
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-12 leading-[1.05]"
            style={{ color: NAVY }}
          >
            Trusted by legal teams that{' '}
            <br className="hidden md:block" />
            <span style={{ color: ORANGE }}>can&apos;t afford to miss</span>
          </h2>

          {/* Body */}
          <div className="space-y-10">
            <p
              className="text-xl md:text-2xl leading-relaxed font-light"
              style={{ color: `${NAVY}CC` }}
            >
              AdvanceEdge supports law firms and legal marketing agencies across the United States,
              including high&#8209;volume{' '}
              <span
                className="font-semibold"
                style={{ color: NAVY, borderBottom: `2px solid ${ORANGE}4D` }}
              >
                Mass Tort and PI practices
              </span>{' '}
              and leading legal marketing firms.
            </p>

            <p
              className="text-xl md:text-2xl leading-relaxed font-light"
              style={{ color: `${NAVY}CC` }}
            >
              Whether you run a two&#8209;attorney shop or a national campaign desk, you get the same{' '}
              <span className="font-semibold" style={{ color: NAVY }}>disciplined intake processes</span>,{' '}
              <span className="font-semibold" style={{ color: NAVY }}>audited workflows</span>, and{' '}
              <span className="font-semibold" style={{ color: NAVY }}>elastic capacity</span>.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md font-semibold border-gray-50 isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FF9A28] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full group text-gray-800 font-dm"
            >
              Partner with AdvanceEdge
              <svg
                className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1.5 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </Link>
          </div>
        </div>  

      </section>
    </div>
  );
}