"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, CheckCircle, FileText, Scale } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Compliance() {
  return (
    <section className="bg-[#0b0e14] py-24 px-6 text-slate-300">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Centered Top Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF9A28] to-[#F59E0B]"
          >
            Compliance, Data Protection, and Audit Trails Built In
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-400 leading-relaxed">
            Intake touches some of the most sensitive information your firm will ever handle: medical history, family circumstances, financial details, immigration status. The intake program is designed to protect your clients, your firm, and your marketing partners.
          </motion.p>
        </div>

        {/* Main Content: Image left, Features right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] border border-slate-800"
            variants={itemVariants}
          >
              <img 
          src="/intake-leaders/case-qualification.webp" 
          alt="Accounting and financial records" 
          className="w-full h-full object-cover rounded-3xl "
        />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent" />
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FF9A28] shrink-0" />
              <p><strong className="text-white">Client‑approved scripts and disclosures:</strong> All language used on calls, chats, and forms is based on your approved scripts and disclosures, including any jurisdiction‑specific or practice‑specific requirements.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <Lock className="w-6 h-6 text-[#FF9A28] shrink-0" />
              <p><strong className="text-white">Secure handling of personal and medical data:</strong> Information is stored and transmitted using secure systems with access controls, audit trails, and clear retention rules.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <ShieldCheck className="w-6 h-6 text-[#FF9A28] shrink-0" />
              <p><strong className="text-white">Consent and contact rules respected:</strong> Intake workflows are aligned with your consent policies and contact frequency rules to reduce the risk of complaints and compliance issues.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <FileText className="w-6 h-6 text-[#FF9A28] shrink-0" />
              <p><strong className="text-white">Full QA, recording, and reporting:</strong> Calls and interactions can be recorded and scored for quality. You have visibility into how intake is handled in your name, and you can review real examples any time you want to audit tone or compliance.</p>
            </motion.div>
          </div>
        </div>

        {/* Centered Bottom Disclaimer */}
        <motion.div 
          variants={itemVariants} 
          className="max-w-4xl mx-auto p-6 bg-[#11141a] rounded-xl border border-slate-800 flex gap-4 items-center justify-center text-center"
        >
          <Scale className="w-12 h-12 text-[#FF9A28] shrink-0" />
          <p className="text-sm text-slate-400 italic">
            Nothing in the intake workflow constitutes legal advice. Intake specialists document information and apply your screening standards; final decisions about representation always rest with your attorneys.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}