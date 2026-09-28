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
      {
        subtitle: "High-volume data entry and facility updates",
        text: "Enter and update large batches of facility data, for example, more than 900 facilities in a single quarter for a Mass Tort campaign, so intake, medical records, and packet teams work from clean, consistent information."
      },
      {
        subtitle: "Mail and document intake operations",
        text: "Review hard-copy packets and UPS mail several times a week, convert physical documents into digital records, and update portals so nothing important sits in a physical stack waiting for someone to notice it."
      },
      {
        subtitle: "Shared mailbox and follow-up queues",
        text: "Monitor shared mailboxes daily, often hundreds of emails per quarter, process requests, handle hard-copy conversions, manage resend requests, and keep follow-ups tied back to specific leads and packets."
      },
      {
        subtitle: "Toll-free number and routing tests",
        text: "Place structured test calls, hundreds per quarter, to verify that toll-free numbers route to the correct campaigns and law firms. This protects media spend and reduces missed opportunities from misrouted calls."
      },
      {
        subtitle: "Callback gap checks",
        text: "Review prior weeks' calls to identify leads that never received promised callbacks, then push those leads back into your outreach flows so they are not silently lost."
      }
    ]
  },
  {
    icon: Database,
    title: "Lead management and case-building operations",
    items: [
      {
        subtitle: "Rescuing qualified cases from disqualified pools",
        text: "In one quarter, our team reviewed 9,970 disqualified leads and identified 95 that actually met criteria, leads that would otherwise have been lost forever."
      },
      {
        subtitle: "Call data cleanup at scale",
        text: "Clean and reconcile very large call datasets, for example, around 40,000 calls in a quarter. Validate dispositions, correct missing leads, align callbacks, and ensure systems of record reflect what really happened on the phones."
      },
      {
        subtitle: "Vendor and CSV intake normalization",
        text: "Turn vendor-generated documents and intake Word files into import-ready CSVs. Build and QA CSV files for outsourced leads so they import cleanly into your portals and CRMs."
      }
    ]
  },
  {
    icon: FileText,
    title: "Contract and packet operations",
    items: [
      {
        subtitle: "Contract extraction, QC, and uploads",
        text: "Extract, quality check, and upload thousands of contracts and related documents, such as more than 3,200 packets in one quarter, into client portals. Track and resolve missing information instead of letting packets sit incomplete."
      },
      {
        subtitle: "E-signature and portal reconciliation",
        text: "Audit signed leads from tools like HelloSign, verify that packet complete leads are correctly reflected in your portal, and confirm that key fields such as signing dates match intake records."
      },
      {
        subtitle: "Packet completeness and intake validation",
        text: "Confirm that contracts, HIPAA, HITECH, and related documents are present and correctly categorized. Validate that portal records and intake data align with what was actually signed."
      }
    ]
  },
  {
    icon: CheckCircle2,
    title: "Quality assurance and compliance",
    items: [
      {
        subtitle: "Packet sign call audits",
        text: "Listen to packet signing calls, verify that agents follow the correct script, confirm critical terms, and identify where behavior drifts from expectations. In one program, auditing 452 packets uncovered and corrected multiple packet signing errors before they became systemic."
      },
      {
        subtitle: "Vendor lead and call QA",
        text: "Audit vendor-generated leads and call recordings, review agent performance and disposition accuracy, and document findings that can be used in vendor management and campaign optimization."
      },
      {
        subtitle: "Firm-specific QA programs",
        text: "Run structured QA programs for specific plaintiff firms, for example, several thousand calls across multiple Mass Tort practices in a quarter. Verify script compliance, accuracy, and criteria adherence, and feed back findings that reduced monthly error volumes from 25 to 30 down to only 2 to 3 issues."
      }
    ]
  },
  {
    icon: BarChart,
    title: "Reporting and analytics",
    items: [
      {
        subtitle: "Recurring operational reporting",
        text: "Maintain a stack of regular reports, such as lead tracking repositories, outbound call status, contact attempts, qualified or disqualified breakdowns, injury lists, and facility reports, so stakeholders see what is happening without having to build reports themselves."
      },
      {
        subtitle: "Dashboards and ad hoc analysis",
        text: "Build and maintain dashboards, and collaborate on ad hoc reports that answer real questions. Examples include which vendors are producing viable cases, where packets stall, which firms are behind on review, and where deficiency rates are highest."
      }
    ]
  },
  {
    icon: Cpu,
    title: "Platform and tooling support",
    items: [
      {
        subtitle: "Survey and intake script support",
        text: "Maintain and enhance survey or intake scripts in tools such as LimeSurvey, manage master tokens and question mapping, and support integrations so changes to criteria do not break downstream data."
      },
      {
        subtitle: "Criteria comparison and SettLiT style reviews",
        text: "Review cases from instant retrieval or digital health platforms, compare criteria across different law firms, and generate insights that guide pricing decisions, panel strategy, and campaign economics."
      }
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