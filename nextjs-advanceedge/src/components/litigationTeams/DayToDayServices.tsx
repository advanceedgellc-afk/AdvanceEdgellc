"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Database, 
  FileText, 
  CheckCircle2, 
  BarChart, 
  Cpu 
} from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: "Processing and operational housekeeping",
    items: [
      { subtitle: "High‑volume data entry and facility updates", text: "Enter and update large batches of facility data so intake and medical records teams work from clean information." },
      { subtitle: "Mail and document intake operations", text: "Convert physical mail into digital records and update portals so nothing sits in a physical stack." },
      { subtitle: "Shared mailbox and follow-up queues", text: "Monitor mailboxes daily to process requests, manage resends, and keep follow-ups tied back to leads." },
      { subtitle: "Toll‑free number and routing tests", text: "Verify that toll‑free numbers route correctly to protect media spend and reduce missed opportunities." },
      { subtitle: "Callback gap checks", text: "Review calls to identify leads that missed callbacks and push them back into outreach flows." }
    ]
  },
  {
    icon: Database,
    title: "Lead management and case‑building",
    items: [
      { subtitle: "Rescuing qualified cases", text: "Audit disqualified leads to identify and recover cases that actually met criteria." },
      { subtitle: "Call data cleanup at scale", text: "Clean and reconcile call datasets, validate dispositions, and ensure systems of record reflect actual outcomes." },
      { subtitle: "Vendor and CSV normalization", text: "Transform vendor documents into import-ready CSVs for clean integration into your CRMs." }
    ]
  },
  {
    icon: FileText,
    title: "Contract and packet operations",
    items: [
      { subtitle: "Contract extraction, QC, and uploads", text: "Extract, quality check, and upload thousands of contracts into portals, tracking resolution for missing info." },
      { subtitle: "E‑signature reconciliation", text: "Audit signed leads, verify packet completion in portals, and confirm key data fields match intake records." },
      { subtitle: "Packet completeness validation", text: "Confirm that HIPAA, HITECH, and contracts are correctly categorized and align with signed data." }
    ]
  },
  {
    icon: CheckCircle2,
    title: "Quality assurance and compliance",
    items: [
      { subtitle: "Packet sign call audits", text: "Audit signing calls to verify agent script adherence, critical term confirmation, and behavior alignment." },
      { subtitle: "Vendor lead and call QA", text: "Review vendor-generated leads and recordings to improve disposition accuracy and vendor performance." },
      { subtitle: "Firm-specific QA programs", text: "Run structured QA for specific practices, verifying compliance and reducing error volumes to near-zero." }
    ]
  },
  {
    icon: BarChart,
    title: "Reporting and analytics",
    items: [
      { subtitle: "Recurring operational reporting", text: "Maintain lead tracking, outbound call status, injury lists, and facility reports for stakeholder visibility." },
      { subtitle: "Dashboards and ad hoc analysis", text: "Build dashboards that answer critical questions regarding vendor viability, packet stalls, and deficiency rates." }
    ]
  },
  {
    icon: Cpu,
    title: "Platform and tooling support",
    items: [
      { subtitle: "Survey and intake script support", text: "Maintain survey scripts, manage master tokens, and support integrations so criteria changes do not break data." },
      { subtitle: "Criteria comparison and SettLiT reviews", text: "Compare criteria across firms to provide insights that guide panel strategy and campaign economics." }
    ]
  }
];

export default function DayToDayServices() {
  return (
    <section className="bg-[#0a0a0c] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Litigation Support & Back‑Office Team Does Day‑to‑Day
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            This is what Litigation Support & Back‑Office looks like in real life for high‑volume legal operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ borderColor: '#FF9A28', y: -5 }}
              className="bg-[#16161a] p-8 rounded-3xl border border-white/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 bg-[#FF9A28]/10 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="text-[#FF9A28]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{service.title}</h3>
              <div className="space-y-6 flex-grow">
                {service.items.map((item, i) => (
                  <div key={i} className="group/item">
                    <h4 className="text-[#FF9A28] font-bold text-xs uppercase tracking-widest mb-1 group-hover/item:text-white transition-colors">
                      {item.subtitle}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover/item:text-slate-300 transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#16161a] to-[#0a0a0c] border border-[#FF9A28]/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#FF9A28]/5 pointer-events-none" />
          <p className="text-slate-300 text-lg font-medium relative z-10">
            All of this is delivered by AI-trained teams who use automation for data cleanup, routing, and validation, while keeping human judgment in charge of anything that changes case value or client outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}