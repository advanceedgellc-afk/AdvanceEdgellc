"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneOutgoing, 
  ClipboardList, 
  ShieldCheck, 
  FileText, 
  PenTool, 
  UserPlus, 
  Database, 
  Headphones 
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const steps = [
  { icon: <PhoneOutgoing className="w-6 h-6 text-[#FF9A28]" />, text: "Answer inbound calls, chats, and web form leads in real time during agreed coverage windows" },
  { icon: <ClipboardList className="w-6 h-6 text-[#FF9A28]" />, text: "Ask structured, practice-specific questions based on your criteria for Mass Tort, PI, MVA, family, estate, immigration, and more" },
  { icon: <ShieldCheck className="w-6 h-6 text-[#FF9A28]" />, text: "Qualify or disqualify cases using your firm’s rules, red flags, and risk tolerance" },
  { icon: <FileText className="w-6 h-6 text-[#FF9A28]" />, text: "Capture incident details, timelines, treatment history, employment and financial information, dependents, immigration history, or any other required context" },
  { icon: <PenTool className="w-6 h-6 text-[#FF9A28]" />, text: "Prepare and send retainers for e-signature to qualified claimants, using your templates and engagement rules" },
  { icon: <UserPlus className="w-6 h-6 text-[#FF9A28]" />, text: "Complete onboarding paperwork: HIPAA forms, authorizations, disclosures, conflict checks, as your workflow requires" },
  { icon: <Database className="w-6 h-6 text-[#FF9A28]" />, text: "Document everything directly in your CRM or case management system, with clear notes and standardized dispositions" },
  { icon: <Headphones className="w-6 h-6 text-[#FF9A28]" />, text: "Execute warm transfers to attorneys or book consults on your calendar when a live handoff is appropriate" },
];

export default function FromFirstContact() {
  return (
    <section className="bg-slate-50 text-slate-900 py-24 px-6 md:px-12 lg:px-24">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-[#FF9A28] to-[#e68a1f] bg-clip-text text-transparent">
            From First Contact to Signed Retainer
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            This is not “answer phones and take messages.” Intake is treated as a specialized legal function that runs from the first ring all the way to a signed retainer and clean onboarding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#FF9A28]/50 hover:shadow-lg transition-all group flex flex-col items-start text-left"
            >
              <div className="mb-4 p-2 bg-slate-50 rounded-lg border border-slate-100 shadow-sm">
                {step.icon}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 text-center shadow-sm"
        >
          <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mx-auto italic">
            Because the wider AdvanceEdge operation also handles medical record retrieval, record review, and litigation support, the intake team knows exactly what downstream teams need. The information gathered at intake supports the entire lifecycle of the case, which means fewer callbacks, fewer surprises, and faster movement from intake to active file.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}