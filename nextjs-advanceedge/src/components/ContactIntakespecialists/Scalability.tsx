"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Layers, Expand, ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const features = [
  {
    icon: Calendar,
    title: "Flexible schedules",
    description: "Choose after‑hours only, evenings and weekends, full 24/7, or specific time blocks that match your lead flow and internal staffing."
  },
  {
    icon: Layers,
    title: "Multiple campaigns and case types",
    description: "The same intake team can be trained on multiple campaigns or practice areas, with clear tags and disposition rules for each."
  },
  {
    icon: Expand,
    title: "Elastic capacity",
    description: "Headcount can be scaled up ahead of a large Mass Tort launch or seasonal push, then scaled down when volume normalizes, using agreed notice periods."
  },
  {
    icon: ArrowUpRight,
    title: "Start small, expand as needed",
    description: "Many firms start with a single coverage window (evenings/weekends) or one campaign, evaluate performance, then expand to broader intake and back‑office support once the model has proved itself."
  }
];

export default function Scalability() {
  return (
    <section className="bg-white py-24 px-6 text-slate-900">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-slate-900">
            Coverage and Scalability That Match Your Firm or Campaigns
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your intake needs don’t stay flat. Campaigns launch, seasons change, trial calendars shift, and media tests spike volume. The contact center model is built to follow that curve without forcing you to hire and fire staff.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-[#FF9A28]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}