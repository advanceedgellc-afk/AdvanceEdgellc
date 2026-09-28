"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

const stats = [
  {
    value: "12+",
    label: "Years supporting legal teams and campaigns",
    icon: "⚖️",
  },
  {
    value: "1.5M+",
    label: "Medical records reviewed across major torts and practice areas",
    icon: "📋",
  },
  {
    value: "4.5M+",
    label: "Medical record retrieval calls placed to facilities",
    icon: "📞",
  },

];

// Animated number counter
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9.]+$/)?.[0] || "";

  const springValue = useSpring(0, { stiffness: 50, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) springValue.set(numericPart);
  }, [isInView, numericPart]);

  useEffect(() => {
    return springValue.onChange((v: number) => {
      setDisplay(Math.round(v * 10) / 10);
    });
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
}

// Floating orb
function Orb({ size, x, y, color, delay }: {
  size: number; x: string | number; y: string | number; color: string; delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size, left: x, top: y,
        background: color,
        filter: "blur(60px)",
      }}
      animate={{ x: [0, 20, -15, 0], y: [0, -30, 15, 0], scale: [1, 1.08, 0.96, 1] }}
      transition={{ duration: 14 + delay * 2, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center text-center p-10 rounded-3xl overflow-hidden cursor-default"
      style={{
        background: hovered
          ? "linear-gradient(145deg, rgba(249,115,22,0.1) 0%, rgba(251,146,60,0.05) 50%, rgba(255,255,255,0.02) 100%)"
          : "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        border: hovered
          ? "1px solid rgba(249,115,22,0.45)"
          : "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.45s ease",
        boxShadow: hovered
          ? "0 0 60px rgba(249,115,22,0.12), inset 0 1px 0 rgba(255,255,255,0.05)"
          : "none",
      }}
    >
      {/* Top glow on hover */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(249,115,22,0.8), transparent)" }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Corner shine */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(249,115,22,0.18) 0%, transparent 70%)" }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* Subtle number background watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ opacity: 0.03 }}
      >
        <span
          className="font-black text-white"
          style={{ fontSize: "clamp(6rem, 14vw, 10rem)", fontFamily: "monospace", lineHeight: 1 }}
        >
          <CountUp value={stat.value} />
        </span>
      </div>

      {/* Main number */}
      <motion.div
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 mb-3"
      >
        <div
          className="font-black leading-none"
          style={{
            fontSize: "clamp(3rem, 6vw, 4.5rem)",
            fontFamily: "monospace",
            backgroundImage: hovered
              ? "linear-gradient(135deg, #fdba74 0%, #f97316 50%, #ea580c 100%)"
              : "linear-gradient(135deg, #f97316 0%, #fdba74 60%, #f97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% auto",
            filter: hovered ? "drop-shadow(0 0 20px rgba(249,115,22,0.5))" : "none",
            transition: "filter 0.4s ease",
          }}
        >
          <CountUp value={stat.value} />
        </div>
      </motion.div>

      {/* Thin separator */}
      <motion.div
        className="w-12 h-px mb-4 relative z-10"
        style={{ background: "linear-gradient(to right, transparent, rgba(249,115,22,0.6), transparent)" }}
        animate={{ width: hovered ? 64 : 48, opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.35 }}
      />

      {/* Label */}
      <p
        className="relative z-10 text-sm leading-relaxed font-medium uppercase tracking-wide"
        style={{
          color: hovered ? "#b8c7db" : "#64748b",
          letterSpacing: "0.05em",
          transition: "color 0.35s ease",
          maxWidth: "200px",
        }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0]);

  const noiseFilter = `
    <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
      <filter id='n' x='0' y='0'>
        <feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
      </filter>
      <rect width='200' height='200' filter='url(#n)' opacity='0.04'/>
    </svg>
  `;

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-24 px-4 overflow-hidden"
      style={{ backgroundColor: "#080a12", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(noiseFilter)}")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Orbs */}
      <motion.div className="absolute inset-0 pointer-events-none z-[2]" style={{ y }}>
        <Orb size={600} x="-5%" y="-10%" color="radial-gradient(circle, rgba(249,115,22,0.14) 0%, transparent 70%)" delay={0} />
        <Orb size={450} x="70%" y="50%" color="radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 70%)" delay={4} />
        <Orb size={300} x="40%" y="20%" color="radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" delay={7} />
      </motion.div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(8,10,18,0.85) 100%)" }}
      />

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        style={{ opacity }}
      >

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>


      </motion.div>
    </section>
  );
}