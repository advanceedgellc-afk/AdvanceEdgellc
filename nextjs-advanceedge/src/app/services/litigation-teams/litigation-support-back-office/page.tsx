"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import LitigationHero from "@/components/litigationTeams/LitigationHero";
import DayToDayServices from "@/components/litigationTeams/DayToDayServices";
import HowFirmsUseUs from "@/components/litigationTeams/HowFirmsUseUs";
import LitigationProcess from "@/components/litigationTeams/LitigationProcess";
import HumanLed from "@/components/litigationTeams/HumanLed";
import LitigationOperationsFeatures from "@/components/litigationTeams/LitigationOperationsFeatures";
import LitigationFaq from "@/components/litigationTeams/LitigationFaq";


import {
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  FileText,
  Database,
  BarChart,
  Users,
  Settings,
  Cpu,
  ArrowRight,
  Zap,
  MessageSquare
} from 'lucide-react';

// --- Interfaces ---
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

interface SectionHeaderProps {
  title: string;
  dark?: boolean;
}

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
}

// --- Components ---
const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", dark = false }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className={`py-24 px-6 ${dark ? 'bg-[#0a0a0c]' : 'bg-slate-50'} ${className}`}
  >
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </motion.section>
);

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, dark = false }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className={`text-3xl md:text-5xl font-bold mb-12 ${dark ? 'text-white' : 'text-slate-900'} bg-clip-text`}
  >
    {title}
  </motion.h2>
);

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#FF9A28] transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pb-6 text-slate-600"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function LitigationSupportPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
        {/* Hero Section */}
     
      <LitigationHero/>
    

      {/* Why Work Breaks Section */}
      <AnimatedSection>
        <SectionHeader title="Why Litigation Support and Back‑Office Work Break First" />
        <p className="mt-12 text-slate-700 font-medium text-center pb-10 text-lg">In high‑volume environments - Mass Tort campaigns, PI programs, national intake platforms - the real constraint is rarely leads or lawyers. It is operational debt. Thousands of small tasks pile up faster than your in‑house team can clear them.</p>
   
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Lead records are not cleaned or normalized, which makes follow-up and reporting unreliable.",
            "Contracts, HIPAA, or HITECH documents and packets do not reconcile across systems.",
            "Call QA and intake audits get skipped, script drift creeps in, and errors become normal.",
            "Reporting arrives late or not at all, so leadership is steering without current data."
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5, borderColor: '#FF9A28' }}
              className="flex gap-4 p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <CheckCircle2 className="text-[#FF9A28] shrink-0 mt-1" size={24} />
              <span className="text-slate-700 text-lg">{item}</span>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-slate-700 font-medium text-center text-lg">AdvanceEdge provides litigation support services and legal back office support services for law firms that want this operational debt under control, not hiding in spreadsheets and inboxes.</p>
      </AnimatedSection>

      {/* Services Grid */}
<DayToDayServices/>

      {/* How They Use Us */}

<HowFirmsUseUs/>
      {/* Process Section */}
<LitigationProcess/>
<HumanLed/>
      <LitigationOperationsFeatures/>
<LitigationFaq/>
    </div>
  );
}