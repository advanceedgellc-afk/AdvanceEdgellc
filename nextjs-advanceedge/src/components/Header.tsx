"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin, ArrowRight,
  Target, Bot, Megaphone, FileSearch, UserCheck, TrendingUp,
  Headphones, Stethoscope, Briefcase, Scale, HandCoins, Calculator,
} from "lucide-react";

const whatWeDo = [
  {
    group: "Intake Leaders",
    href: "/services/intake-leaders",
    icon: Headphones,
    pages: [
      { name: "Contact Center & Intake Specialists", href: "/services/intake-leaders/contact-center-intake-specialists", icon: Headphones, desc: "24/7 trained intake coverage" },
      { name: "Case Qualification", href: "/services/intake-leaders/case-qualification", icon: UserCheck, desc: "Pre-screen & qualify incoming leads" },
    ],
  },
  {
    group: "Litigation Teams",
    href: "/services/litigation-teams",
    icon: Scale,
    pages: [
      { name: "Medical Record Retrieval", href: "/services/litigation-teams/medical-record-retrieval", icon: FileSearch, desc: "Fast record collection" },
      { name: "Medical Record Review", href: "/services/litigation-teams/medical-record-review", icon: Stethoscope, desc: "Clinician-led summaries" },
      { name: "Litigation Support", href: "/services/litigation-teams/litigation-support-back-office", icon: Briefcase, desc: "Paralegal tasks" },
    ],
  },
  {
    group: "Firm Owners & COOs",
    href: "/services/firm-owners-coos",
    icon: Target,
    pages: [
      { name: "Case Acquisition", href: "/services/firm-owners-coos/case-acquisition", icon: TrendingUp, desc: "Mass tort & PI lead generation" },
      { name: "Virtual Legal Agents", href: "/services/firm-owners-coos/virtual-legal-agents", icon: Bot, desc: "AI-powered legal support" },
      { name: "Trust Bookkeeping", href: "/services/firm-owners-coos/accounting-trust-bookkeeping", icon: Calculator, desc: "IOLTA-compliant ops" },
      { name: "Digital Marketing", href: "/services/firm-owners-coos/digital-marketing", icon: Megaphone, desc: "SEO, PPC & brand authority" },
    ],
  },
];


// Mega menu link with reliable hover state via onMouseEnter/Leave
function MegaLink({ page, onNavigate }: {
  page: { name: string; href: string; icon: React.ElementType; desc: string };
  onNavigate: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={page.href}
      onClick={onNavigate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-start gap-3 p-3 rounded-xl border transition-all duration-200"
      style={{
        background: hovered ? "linear-gradient(to right, #fff7ed, #ffffff)" : "transparent",
        borderColor: hovered ? "#fed7aa" : "transparent",
        boxShadow: hovered ? "0 2px 8px rgba(249,115,22,0.1)" : "none",
      }}
    >
      <div
        className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
        style={{
          background: hovered ? "#f97316" : "#f1f5f9",
          boxShadow: hovered ? "0 4px 12px rgba(249,115,22,0.35)" : "none",
        }}
      >
        <page.icon size={15} style={{ color: hovered ? "#ffffff" : "#64748b" }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p
            className="text-[13px] lg:text-sm font-semibold leading-tight  transition-colors duration-200"
            style={{ color: hovered ? "#ea580c" : "#1e293b" }}
          >
            {page.name}
          </p>
          <ArrowRight
            size={12}
            className="flex-shrink-0 transition-all duration-200"
            style={{
              color: "#f97316",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateX(0)" : "translateX(-4px)",
            }}
          />
        </div>
        <p
          className="text-[11px] mt-0.5 transition-colors duration-200"
          style={{ color: hovered ? "#64748b" : "#94a3b8" }}
        >
          {page.desc}
        </p>
      </div>
    </Link>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMegaDelayed = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <>
      <style>{`
        @keyframes megaSlide {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mega-animate { animation: megaSlide 0.2s cubic-bezier(0.19,1,0.22,1) both; }
      `}</style>

      {/* The header is the positioning root for the mega panel */}
      <header className="fixed top-0 left-0 right-0 z-50">

        {/* ── Top Bar ── only rendered when not scrolled so it takes zero space */}


        {/* ── Main Nav ── */}
        <nav className={`transition-all duration-500 py-2 ${!scrolled ? "lg:py-4" : ""} ${
          scrolled ? "lg:bg-white/95 lg:backdrop-blur-lg lg:shadow-2xl" : "lg:bg-transparent"
        } bg-white/95 backdrop-blur-lg shadow-lg lg:shadow-none`}>
          <div className="container mx-auto px-4">
            <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "" : "lg:border-b border-slate-400/30"}`}>

              {/* Logo */}
              <Link href="/" className="flex items-center pb-3 flex-shrink-0 transition-transform hover:scale-105 duration-300">
                <Image
                  src="/Logo-ae.webp"
                  alt="Advance Edge Logo"
                  width={176} height={48}
                  className="w-44 h-auto object-contain"
                  priority
                />
              </Link>

              {/* Desktop links */}
              <div className="hidden lg:flex items-center gap-1 font-sans">
                {/* HOME */}
                <Link href="/" className={`text-sm font-medium uppercase py-2 px-3 rounded-md transition-colors ${
                  isActive("/") ? "text-orange-400" : scrolled ? "text-slate-900 hover:text-orange-400" : "text-white hover:text-orange-400"
                }`}>HOME</Link>

                {/* WHAT WE DO trigger */}
                <button
                  onMouseEnter={openMega}
                  onMouseLeave={closeMegaDelayed}
                  className={`flex items-center gap-1 text-sm font-medium uppercase py-2 px-3 rounded-md transition-colors outline-none ${
                    isActive("/services") || megaOpen ? "text-orange-400" : scrolled ? "text-slate-900 hover:text-orange-400" : "text-white hover:text-orange-400"
                  }`}
                >
                  WHAT WE DO
                  <ChevronDown size={12} className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
                </button>

                <Link href="/about" className={`text-sm font-medium uppercase py-2 px-3 rounded-md transition-colors ${isActive("/about") ? "text-orange-400" : scrolled ? "text-slate-900 hover:text-orange-400" : "text-white hover:text-orange-400"}`}>ABOUT</Link>
                <Link href="/blog" className={`text-sm font-medium uppercase py-2 px-3 rounded-md transition-colors ${isActive("/blog") ? "text-orange-400" : scrolled ? "text-slate-900 hover:text-orange-400" : "text-white hover:text-orange-400"}`}>BLOG</Link>
                <Link href="/contact" className={`text-sm font-medium uppercase py-2 px-3 rounded-md transition-colors ${isActive("/contact") ? "text-orange-400" : scrolled ? "text-slate-900 hover:text-orange-400" : "text-white hover:text-orange-400"}`}>CONTACT</Link>
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-4 font-sans flex-shrink-0">
                <a href="tel:8329377738" className={`flex items-center gap-2 py-2 px-3 rounded-md transition-colors ${scrolled ? "text-slate-900 hover:text-orange-400" : "text-white hover:text-orange-400"}`}>
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-xl leading-none">832.937.7738</span>
                </a>
                <Link href="/book-a-call" className="inline-flex justify-center items-center gap-2 shadow-xl text-sm bg-gray-50 font-semibold before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 relative z-10 px-6 py-3 overflow-hidden border-2 border-gray-50 rounded-full group text-gray-800 transition-colors">
                  BOOK A CALL
                  <div className="w-6 h-6 transition-all duration-300 rounded-full border border-slate-700 p-1 rotate-45 flex items-center justify-center group-hover:rotate-90 group-hover:bg-white group-hover:border-white">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className={`lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-full border border-orange-300/70 shadow-md backdrop-blur-md transition-all duration-300 ${mobileMenuOpen ? "bg-orange-500 text-white rotate-90" : "bg-white/80 text-slate-900"}`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden bg-white shadow-xl rounded-lg mt-3 p-6 border border-gray-200">
                <ul className="space-y-2">
                  <li><Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 text-slate-900 font-medium text-lg hover:text-orange-500 transition-colors">Home</Link></li>
                  <li>
                    <details className="group">
                      <summary className="font-medium text-slate-900 cursor-pointer py-2 px-4 select-none flex items-center justify-between">
                        What We Do <ChevronDown size={16} className="group-open:rotate-180 transition-transform" />
                      </summary>
                      <ul className="pl-6 space-y-2 mt-2">
                        {whatWeDo.map((grp) => (
                          <li key={grp.group}>
                            <Link href={grp.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 font-medium hover:text-orange-500 transition-colors">
                              <span className="text-[10px] font-bold uppercase tracking-wide opacity-50">For </span>{grp.group}
                            </Link>
                            <ul className="pl-4 ml-4 border-l-2 border-orange-200 space-y-1">
                              {grp.pages.map((page) => (
                                <li key={page.name}>
                                  <Link href={page.href} onClick={() => setMobileMenuOpen(false)} className="block py-1 text-gray-600 text-sm hover:text-orange-500 pl-2">
                                    &rarr; {page.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                  <li><Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 text-slate-900 font-medium text-lg hover:text-orange-500 transition-colors">About</Link></li>
                  <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 text-slate-900 font-medium text-lg hover:text-orange-500 transition-colors">Blog</Link></li>
                  <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-3 px-4 text-slate-900 font-medium text-lg hover:text-orange-500 transition-colors">Contact</Link></li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* ── MEGA MENU PANEL ──
            Rendered directly inside <header> (the position:fixed root).
            left-0 right-0 = full viewport width. No container wrapping the grid. */}
{megaOpen && (
  <div
    className="mega-animate hidden lg:block absolute left-1/4 -translate-x-1/2 z-[9998] px-4 pb-6 w-[94vw] sm:w-[90vw] md:w-[85vw] lg:w-[720px] xl:w-[820px] max-w-4xl"
    style={{ top: "100%" }}
    onMouseEnter={openMega}
    onMouseLeave={closeMegaDelayed}
  >
            <div className="bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.18)] border border-slate-200 overflow-hidden">
              {/* Orange accent top bar */}
              <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300" />
              {/* Force 3 equal columns with inline style to guarantee horizontal layout */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
  {whatWeDo.map((group, gi) => (
    <div
      key={group.group}
      className="p-4 md:p-5 lg:p-6 xl:p-8"
      style={{ borderRight: gi < whatWeDo.length - 1 ? "1px solid #f1f5f9" : "none" }}
    >
                    {/* Group header */}
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-orange-100">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 shadow-sm">
                        <group.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-0.5">FOR</p>
                        <p className="text-sm font-bold text-slate-900">{group.group}</p>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-1">
                      {group.pages.map((page) => (
                        <MegaLink key={page.name} page={page} onNavigate={() => setMegaOpen(false)} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </header>
    </>
  );
}