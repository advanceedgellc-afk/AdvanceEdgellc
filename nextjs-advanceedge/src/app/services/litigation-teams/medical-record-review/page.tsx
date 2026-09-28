"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RecordReviewHero from "@/components/RecordReview/RecordReviewHero";
import MedicalRecordReviewAppOne from "@/components/RecordReview/MedicalRecordReviewAppOne";
import MedicalRecordReviewAppTwo from "@/components/RecordReview/MedicalRecordReviewAppTwo";
import MedicalRecordReviewAppThree from "@/components/RecordReview/MedicalRecordReviewAppThree";
import RecordReviewFaqs from "@/components/RecordReview/RecordReviewFaqs";

import {
  CheckCircle2,
  ChevronDown,
  ShieldCheck
} from 'lucide-react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-5xl font-bold mb-10 text-white"
  >
    {title}
  </motion.h2>
);

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

interface AccordionItemProps {
  question: string;
  answer: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
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
            className="overflow-hidden pb-6 text-slate-400"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function MedicalRecordReviewPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-300 font-sans selection:bg-[#FF9A28]/30">
      <RecordReviewHero/>
      <MedicalRecordReviewAppOne/>
      <MedicalRecordReviewAppTwo/>
      <MedicalRecordReviewAppThree/>
      <RecordReviewFaqs/>
      {/* Hero Section */}
      
    </div>
  );
}