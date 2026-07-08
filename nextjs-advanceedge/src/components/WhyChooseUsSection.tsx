"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useBookingModal } from "@/context/BookingModalContext";

import {
  Trophy,
  BookOpen,
  Users,
  BarChart3,
  Moon,
  Cpu,
  Star,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Proven Success",
    description:
      "We take pride in delivering top-quality case acquisition and legal support solutions that drive real results for our clients.",
    statLabel: "Client retention",
    accent: "#f97316",
  },
  {
    icon: BookOpen,
    title: "Deep Legal Domain Experience",
    description:
      "AdvanceEdge\u2019s leadership team brings decades of experience in legal services, with particular depth in Mass Tort, PI, and MVA operations, so your work isn\u2019t handled by generic \u201ccustomer service\u201d agents.",
    statLabel: "Years combined",
    accent: "#fb923c",
  },
  {
    icon: Users,
    title: "Specialized Talent Pool You Won't Find in a Generic Call Center",
    description:
      "Your agent pool includes professionals from multiple work specializations—physicians, pharmacists, dentists, nurses, and seasoned legal support staff—trained specifically for complex medical and legal intake and record work.​",

    statLabel: "Specialists",
    accent: "#f97316",
  },
  {
    icon: BarChart3,
    title: "Volume That Proves We've Seen Your Problems Before",
    description:
      "Across the team, AdvanceEdge has reviewed over 1.5 million medical records, made more than 4.5 million record retrieval calls, and executed over 10 million paralegal and support tasks for legal matters.​",
   
    statLabel: "Tasks executed",
    accent: "#ea580c",
  },
  {
    icon: Moon,
    title: "Coverage Without the \u201cHidden Tax\u201d",
    description:
      "Nights, weekends, and holiday coverage are part of the model, not an add‑on line item, so you don't wake up Monday to a full voicemail box and an empty pipeline.​",
   
    statLabel: "Days/year",
    accent: "#fb923c",
  },
  {
    icon: Cpu,
    title: "Human‑Led, AI‑Accelerated by Design",
    description:
      "Every team is trained on AI tools: summarization, drafting, and data validation, so you get the speed and consistency of automation with the judgment and accountability of experienced humans.​",
   
    statLabel: "Faster delivery",
    accent: "#f97316",
  },
];

// Floating orb component
function FloatingOrb({ delay = 0, size = 400, x = 0, y = 0, color = "orange" }: {
  delay?: number; size?: number; x?: number | string; y?: number | string; color?: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color === "orange"
          ? "radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 12 + delay * 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

// Feature card
function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col h-full"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative p-8 rounded-2xl flex flex-col h-full overflow-hidden cursor-default"
        style={{
          background: hovered
            ? "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(255,255,255,0.04) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          border: hovered ? "1px solid rgba(249,115,22,0.4)" : "1px solid rgba(255,255,255,0.07)",
          transition: "all 0.4s ease",
        }}
        animate={{ rotateY: hovered ? 1 : 0, rotateX: hovered ? -1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
          style={{
            background: "radial-gradient(circle at top right, rgba(249,115,22,0.15) 0%, transparent 70%)",
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Stat badge */}
        <div className="absolute top-6 right-6">
          <motion.div
            className="text-right"
            animate={{ opacity: hovered ? 1 : 0.4, scale: hovered ? 1 : 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-2xl font-black text-orange-400 font-mono leading-none">
              
            </div>
            <div className="text-[9px] text-orange-400/60 uppercase tracking-widest font-bold mt-0.5">
              {feature.statLabel}
            </div>
          </motion.div>
        </div>

        {/* Icon */}
        <motion.div
          className="mb-6 relative"
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="relative inline-flex">
            <motion.div
              className="absolute inset-0 rounded-xl"
              animate={{
                boxShadow: hovered
                  ? "0 0 30px rgba(249,115,22,0.5)"
                  : "0 0 0px rgba(249,115,22,0)",
              }}
              transition={{ duration: 0.4 }}
            />
            <div
              className="relative p-3.5 rounded-xl"
              style={{
                background: hovered
                  ? "linear-gradient(135deg, #ea580c, #f97316)"
                  : "rgba(249,115,22,0.12)",
                transition: "all 0.4s ease",
              }}
            >
              <feature.icon
                size={26}
                strokeWidth={1.5}
                className="transition-colors duration-400"
                style={{ color: hovered ? "white" : "#f97316" }}
              />
            </div>
          </div>
        </motion.div>

        <h3
          className="text-xl font-bold mb-3 transition-colors duration-300"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            color: hovered ? "#fdba74" : "white",
            letterSpacing: "-0.01em",
          }}
        >
          {feature.title}
        </h3>

        <p
          className="text-base leading-relaxed transition-colors duration-300 flex-1"
          style={{ color: hovered ? "#b8c7db" : "#64748b" }}
        >
          {feature.description}
        </p>

        {/* Bottom divider */}
        <motion.div
          className="mt-6 h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(249,115,22,0.5), transparent)",
          }}
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function WhyChooseUsSection() {
  const { openBookingModal } = useBookingModal();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
 
  // Noise texture SVG inline
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
    <>
      <section
        ref={sectionRef}
        className="relative py-20 md:py-24 px-4 overflow-hidden"
        style={{
          backgroundColor: "#080a12",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Noise overlay */}
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
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Animated orbs */}
        <motion.div className="absolute inset-0 pointer-events-none z-[2]" style={{ y }}>
          <FloatingOrb size={700} x={-100} y={-200} color="orange" delay={0} />
          <FloatingOrb size={500} x="60%" y="40%" color="blue" delay={3} />
          <FloatingOrb size={350} x="30%" y="60%" color="orange" delay={6} />
        </motion.div>

        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-[3]"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(8,10,18,0.8) 100%)",
          }}
        />

        <motion.div
          className="container mx-auto max-w-7xl relative z-10"
          style={{ opacity }}
        >
          {/* Header section */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              {/* Left: heading */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Label */}
                  <div className="flex items-center gap-3 mb-8">
                    <motion.div
                      className="flex items-center gap-2 px-4 py-1.5 rounded-full"
                      style={{
                        background: "rgba(249,115,22,0.1)",
                        border: "1px solid rgba(249,115,22,0.3)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(249,115,22,0)",
                          "0 0 20px rgba(249,115,22,0.3)",
                          "0 0 0px rgba(249,115,22,0)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-orange-500"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      
                      <span
                        className="text-sm font-medium uppercase tracking-[0.25em] text-orange-400"
                      >
                        Why Choose Us
                      </span>
                    </motion.div>
                  </div>

                  <h2
                    className="leading-[1.05] text-white"
                    style={{
                      
                      fontSize: "clamp(2.8rem, 3vw, 5rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Results Driven{" "}
                    <br />
                    <span className="relative inline-block">
                      <span
                        style={{
                          backgroundImage: "linear-gradient(135deg, #f97316 0%, #fdba74 50%, #f97316 100%)",
                          backgroundSize: "200% auto",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        Solutions
                      </span>
                      {/* Underline decoration */}
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-px"
                        style={{
                          background: "linear-gradient(to right, #f97316, #fdba74, transparent)",
                        }}
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </span>
                    {" "}for{" "}
                    <br className="hidden md:block" />
                    <span className="text-slate-300">Law Firms</span>
                  </h2>
                </motion.div>
              </div>

              {/* Right: description + CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex flex-col gap-8"
              >
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#94a3b8" }}
                >
                  Empowering your growth with specialized expertise, human-led AI, and deep domain experience that scales with your ambition.
                </p>

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
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
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-white group-hover:fill-[#FF9A28]"
          ></path>
        </svg>
      </button>


                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div
              className="mt-16 h-px"
              style={{
                background: "linear-gradient(to right, transparent, rgba(249,115,22,0.3), rgba(255,255,255,0.05), transparent)",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}