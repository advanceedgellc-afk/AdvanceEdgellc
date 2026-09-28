'use client';

import React from 'react';
import {
  PhoneCall,
  ClipboardCheck,
  UserCheck,
  FileSignature,
  FileText,
  Database,
  Zap,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';

type FeatureCardProps = {
  icon: React.ElementType;
  text: string;
  delay: number;
};

const FeatureCard = ({ icon: Icon, text, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF9A28]/50 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9A28]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-4 p-3 rounded-xl bg-[#FF9A28]/10 text-[#FF9A28] group-hover:bg-[#FF9A28] group-hover:text-white transition-colors w-fit">
          <Icon size={24} />
        </div>
        <p className="text-slate-300 group-hover:text-white transition-colors leading-relaxed font-medium text-sm md:text-base">
          {text}
        </p>
      </div>
    </motion.div>
  );
};

const features = [
  { icon: PhoneCall,      text: "Answer inbound calls, chats, and web leads immediately during agreed coverage windows." },
  { icon: ClipboardCheck, text: "Ask structured questions based on your practice area (Mass Tort, PI, Family Law, etc.) and criteria." },
  { icon: UserCheck,      text: "Qualify or disqualify cases using your firm-specific rules and thresholds." },
  { icon: Database,       text: "Capture incident details, timelines, treatment history, and key eligibility factors." },
  { icon: FileSignature,  text: "Prepare and send retainers/e-signatures for qualified claimants instantly." },
  { icon: FileText,       text: "Complete onboarding documentation including HIPAA, authorizations, and disclosures." },
  { icon: Zap,            text: "Document every interaction cleanly in your CRM/case management system." },
  { icon: Users,          text: "Execute warm transfers to your attorneys or schedule consults immediately." },
];

export default function LegalIntakeSpecialists() {
  return (
    <section className="relative bg-black text-white font-sans selection:bg-[#FF9A28]/30 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#FF9A28]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-[#ff3600]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-8 bg-[#ff3600]" />
            <span className="text-[#ff3600] font-bold tracking-wider uppercase text-sm">Our Operations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-500 leading-tight"
          >
            What do our Legal Intake Specialists Do?
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-[#FF9A28] font-medium mb-6"
          >
            From Inquiry to Signed Retainer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            This isn&apos;t &ldquo;answer phones and take messages.&rdquo; Our intake specialists treat every interaction as a{' '}
            <span className="text-white font-medium">specialized legal function</span> from first contact through signed
            retainer, run entirely to your playbook.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              text={feature.text}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Support Callout Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden p-4 md:p-6 rounded-3xl bg-gradient-to-br from-[#1F1A15]/10 to-[#ff3600]/10 border border-white/10"
        >
          

          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
              Because AdvanceEdge was built inside litigation support and medical record operations, intake
              specialists understand what downstream teams need—whether it&apos;s{' '}
              <span className="text-[#FF9A28] font-semibold italic">Mass Tort comorbidities</span>,{' '}
              <span className="text-[#FF9A28] font-semibold italic">family law financial details</span>, or{' '}
              <span className="text-[#FF9A28] font-semibold italic">immigration timelines</span>. Every qualified
              lead becomes a signed retainer with complete documentation, not just a scribbled Post&#8209;It note.
            </p>
          </div>
        </motion.div>

      
      </div>
    </section>
  );
}