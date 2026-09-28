"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Megaphone } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const benefits = [
  {
    icon: Target,
    title: "High‑Volume Mass Tort & PI Firms",
    desc: "If you’re running multiple Mass Tort, PI, and MVA campaigns across different channels, torts, and geographies, you can’t afford inconsistent intake. A specialized intake team keeps standards steady across peak volume periods, trial schedules, and new campaign launches. You get more consistent case quality, better data on which campaigns and vendors are performing, and fewer “lost” leads in the gaps between time zones and office hours."
  },
  {
    icon: Users,
    title: "Solo & Small Firms Growing Their Docket",
    desc: "Solo and small firms rarely have enough volume or margin to justify full‑time intake staff, but you also can’t keep sending callers to voicemail while you’re in court. Intake specialists give you professional, law‑firm‑native coverage without needing to add headcount, office space, benefits, or constant training. Callers experience a polished, empathetic intake that feels like your front desk, even when you’re out of the office."
  },
  {
    icon: Megaphone,
    title: "Legal Marketing Agencies & Intake Platforms",
    desc: "Agencies and platforms are judged on signed retainers and case quality, not click‑through rates. When the phones ring but the client’s in‑house intake can’t keep up, your campaigns get blamed. With a specialized intake partner behind your campaigns, every call and form fill is answered, qualified against the client’s criteria, and pushed to signed retainer and clean documentation. That gives you a stronger story in Quarterly Business Reviews (QBRs), better retention, and clearer data on campaign performance."
  }
];

export default function WhoBenefits() {
  return (
    <section className="bg-[#0b0e14] py-24 px-6">
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Who Benefits Most from Our Contact Center & Intake Support
          </h2>
          <div className="h-1 w-20 bg-[#FF9A28] mx-auto rounded-full" />
        </div>

        {}
        <div className="space-y-24">
          {benefits.map((b, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0 pt-1">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
                  <b.icon className="w-8 h-8 text-[#FF9A28]" />
                </div>
              </div>
              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight border-l-2 border-[#FF9A28] pl-6">
                  {b.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg pl-6 border-l border-slate-800">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}