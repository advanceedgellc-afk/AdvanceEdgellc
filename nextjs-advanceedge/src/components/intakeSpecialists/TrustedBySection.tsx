'use client';

import React, { useEffect, useState } from 'react';

interface StatItemProps {
  number: string;
  label: string;
  description: string;
}

interface TrustedSectionProps {
  title?: string;
  description?: string;
  stats?: StatItemProps[];
}

// Scale Icon Component
const JusticeScaleIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 120 150"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="20" y1="50" x2="100" y2="50" strokeWidth="3" />
    <line x1="60" y1="20" x2="60" y2="50" strokeWidth="3" />
    <line x1="40" y1="50" x2="40" y2="70" />
    <line x1="35" y1="70" x2="45" y2="70" strokeWidth="2" />
    <rect x="30" y="70" width="20" height="15" rx="2" strokeWidth="2" />
    <line x1="80" y1="50" x2="80" y2="70" />
    <line x1="75" y1="70" x2="85" y2="70" strokeWidth="2" />
    <rect x="70" y="70" width="20" height="15" rx="2" strokeWidth="2" />
    <circle cx="60" cy="15" r="4" strokeWidth="2" />
    <path d="M 60 10 L 58 8 L 59 6 L 60 8 L 61 6 L 62 8 Z" fill="currentColor" />
  </svg>
);

// Enhanced Stat Item with Animations
const StatItem: React.FC<StatItemProps & { index: number }> = ({ 
  number, 
  label, 
  description, 
  index 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center px-6 py-12 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Number with Gradient */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="relative text-6xl md:text-7xl font-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
            {number}
          </h3>
        </div>

        {/* Animated Border Accent */}
        <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

        {/* Label */}
        <h4 className="text-sm md:text-xl font-medium text-white mb-3 text-center leading-tight max-w-xs">
          {label}
        </h4>

        {/* Description */}
        <p className="text-base  text-gray-300 text-center leading-relaxed max-w-xs">
          {description}
        </p>
      </div>

      {/* Vertical Border Separator */}
      {index < 2 && (
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-amber-500/50 to-transparent" />
      )}
    </div>
  );
};

// Main Component
const TrustedSection: React.FC<TrustedSectionProps> = ({
  title = "Trusted by Law Firms for 15+ Years",
  description = "AdvanceEdge has built a reputation as a trusted partner in the legal services industry. Our foundation in litigation support, medical records management, eDiscovery, and court filings gives us unique insight into how cases are evaluated from the first phone call through resolution. This deep understanding of the entire legal workflow means our intake specialists don't just collect information—they identify the details that matter most to your case evaluation process.",
  stats = [
    {
      number: "15+",
      label: "Years Supporting US Legal Services",
      description: "Over a decade and a half of proven expertise in the legal industry",
    },
    {
      number: "100%",
      label: "US-Based Company with Global Delivery Centers",
      description: "Strategically located global delivery centers provide comprehensive support with US-based oversight and expertise.",
    },
    {
      number: "24/7",
      label: "Qualified Cases Delivered",
      description: "Real-time support for law firms across all time zones and shifts",
    },
  ],
}) => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    setHeaderVisible(true);
  }, []);

  return (
    <section className="w-full overflow-hidden">
      {/* Enhanced Header Section with Gradient Background */}
      <div className="relative bg-gradient-to-b from-rose-50 via-pink-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-rose-200 to-pink-300 rounded-full opacity-15 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Animated Title */}
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 bg-clip-text text-center mb-6 transition-all duration-1000 transform ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {title}
          </h2>

          {/* Animated Gradient Underline */}
          <div className="flex justify-center mb-8">
            <div
              className={`h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-600 rounded-full transition-all duration-1000 transform ${
                headerVisible ? 'opacity-100 w-32' : 'opacity-0 w-0'
              }`}
            />
          </div>

          {/* Animated Description */}
          <p
            className={`text-center text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-200 transform ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Enhanced Stats Section with Dark Background */}
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-gradient-to-tl from-amber-500/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-0">
           

            {/* Stats Grid with Enhanced Styling */}
            <div className="lg:w-4/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Stat Item */}
                    <StatItem
                      {...stat}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .group:hover h3 {
          animation: none;
        }
      `}</style>
    </section>
  );
};

export default TrustedSection;