"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { PhoneIncoming, FileCheck, Clock, BarChart3, ThumbsUp } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const results = [
  { icon: PhoneIncoming, text: "More calls are answered live instead of dropping to voicemail" },
  { icon: FileCheck, text: "A higher percentage of inquiries convert into qualified files in your system" },
  { icon: Clock, text: "Attorneys spend less time on obviously unqualified calls and more on viable matters" },
  { icon: BarChart3, text: "Marketing reports become clearer because “lead quality” and “intake performance” are no longer mixed together" },
  { icon: ThumbsUp, text: "Clients get a better first impression of your firm, which improves show rates, reviews, and referrals" },
];

export default function Results() {
  return (
    <section className="bg-[#0b0e14] py-24 px-6 text-slate-300">
      <motion.div 
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            What Strong Intake Does for Your Cases and Campaigns
          </h2>
          <p className="text-lg text-slate-400">
            When intake is treated as a serious legal function instead of an afterthought, several things change quickly:
          </p>
        </motion.div>

        {/* Two-Column Body Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Column 1: Points List */}
          <div className="space-y-4">
            {results.map((result, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex gap-4 p-5 bg-[#11141a] rounded-xl border border-slate-800 hover:border-[#FF9A28]/30 transition-colors"
              >
                <div className="mt-1">
                  <result.icon className="w-6 h-6 text-[#FF9A28]" />
                </div>
                <p className="text-slate-200 leading-relaxed font-medium text-sm">
                  {result.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Column 2: Visual Element */}
          <motion.div 
            variants={itemVariants} 
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-slate-800"
          >

<img 
          src="/intake-leaders/intake-and-contact-center.webp" 
          alt="Accounting and financial records" 
          className="w-full h-full object-cover rounded-3xl "
        />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Bottom Narrative Section */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center border-t border-slate-800 pt-12">
          <p className="text-slate-400 leading-relaxed italic text-lg">
            Your marketing, reputation, and relationships are already doing the hard work of getting people to reach out. The fastest gain is often not “more leads,” but doing a better job with the leads you already have. That’s what a legal intake and contact center partner is supposed to deliver.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}