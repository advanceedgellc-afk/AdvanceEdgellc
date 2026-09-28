import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Scale, 
  Target, 
  ShieldCheck, 
  BrainCircuit, 
  CheckCircle2,
  Lock,
  FileCheck,
  ClipboardCheck,
  History
} from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Section = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
    <section className={`py-24 px-6 ${dark ? 'bg-[#0a0a0c]' : 'bg-slate-50'}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const SectionHeader = ({ title, dark = false }: { title: string; dark?: boolean }) => (
    <motion.h2 
    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
    className={`text-3xl md:text-5xl font-bold mb-12 ${dark ? 'text-white' : 'text-slate-900'}`}
  >
    {title}
  </motion.h2>
);

export default function MedicalRecordReviewSectionsContent() {
  return (
    <div className="w-full">
      
      {/* 1. Who Built For (Dark) */}
      <Section dark>
        <SectionHeader title="Who Our Medical Record Review Services Are Built For" dark />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Building, title: "Mass Tort and High‑Volume PI Practices", desc: "For Mass Tort and high‑volume PI/MVA dockets, standardized medical record review gives you:", items: ["Consistent criteria for what “ready for settlement” or “ready for trial” means across hundreds or thousands of files.", "Portfolio‑level insight into which cases are strong, weak, or borderline.", "A scalable way to support co‑counsel, referring firms, and expert teams with clean, comparable medical summaries."] },
            { icon: Scale, title: "Firms with Complex Single‑Event Cases", desc: "Serious malpractice, catastrophic injury, environmental exposure, and complex liability cases all require deep medical analysis. Our clinicians and analysts provide:", items: ["Causation‑focused review of records and exposures", "Standard‑of‑care context (within the limits of your experts’ jurisdictions)", "Clear articulation of how pre‑existing conditions and co‑morbidities intersect with the alleged injury"] },
            { icon: Target, title: "Legal Marketing Firms and Aggregators", desc: "Legal marketing firms and aggregators primarily need fast, credible screening: proof of use, proof of injury, and obvious disqualifiers for cases coming out of instant retrieval flows like SettLiT, ConnectMD, and YourCaseWorks. Our minimal‑review service is built for exactly that, so you can demonstrate case quality to law‑firm clients without paying for full litigation‑ready analysis on every lead.", items: [] }
          ].map((card, i) => (
            <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#16161a] p-8 rounded-2xl border border-white/10 shadow-sm hover:border-[#FF9A28] transition-all">
              <card.icon className="text-[#FF9A28] mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
              <p className="text-slate-400 mb-6 text-sm">{card.desc}</p>
              <ul className="space-y-3">
                {card.items.map((item, j) => <li key={j} className="text-xs text-slate-500 flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#FF9A28]" />{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 2. Experience (White) */}
      <Section>
        <SectionHeader title="15+ Years of Medical Record Review Experience Across Mass Torts and Case Types" />
        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-slate-600 mb-12 max-w-3xl">
        AdvanceEdge’s medical record review team has been supporting plaintiff‑side litigations since 2011, starting with early Mass Torts like asbestos and transvaginal mesh/sling cases and evolving through more than a decade of new drugs, devices, and environmental matters.
<br/><br/>
Over the last 15 years, our reviewers have worked on:

        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Pharmaceutical and drug-related matters", desc: "Chronic-use medications, black-box warning drugs, multi-drug regimens." },
            { title: "Defective products and environmental exposures", desc: "including agrochemical and industrial exposures, where latency and mixed exposures complicate causation." },
            { title: "Defective devices and implants", desc: "such as orthopedic implants and 3M earplugs and other 3M‑related devices, where proof of correct use and proof of failure both matter." },
            { title: "Agrochemical and environmental torts", desc: " including products like Roundup, Paraquat, and related exposures where epidemiology, exposure duration, and risk factors matter." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
              <h4 className="text-[#FF9A28] font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </motion.div>
            
          ))}
        </div>
        <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-slate-900 mb-12 max-w-3xl pt-10">
        After thousands of reviews, spotting what should be there but isn’t - missing records, unexplained gaps, suspicious timelines - has become second nature, and that is often where the biggest risks and opportunities in a case are hiding.

        </motion.p>
      </Section>

      {/* 3. Compliance (Dark) */}
      <Section dark>
        <SectionHeader title="Compliance, Security, and PHI Protection in Medical Record Review" dark />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-slate-400 leading-relaxed">Medical record review involves PHI at scale. Workflows are designed to align with law‑firm‑grade security and privacy expectations.</p>
            {[
              { icon: Lock, text: "Encrypted environments for storage and transmission" },
              { icon: FileCheck, text: "Role‑based access so only assigned reviewers see PHI for specific matters" },
              { icon: History, text: "Audit logs capturing who accessed records and when" },
              { icon: ClipboardCheck, text: "Outputs limited to what your team actually needs for litigation, not unnecessary duplication of the full chart" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center p-4 bg-[#16161a] border border-white/10 rounded-lg">
                <item.icon className="text-[#FF9A28]" />
                <span className="text-slate-300 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
       
          <div className=" ">
          <img 
          src="/medical-review/phi-protection.webp" 
          alt="Accounting and financial records" 
          className="w-full h-full object-cover rounded-3xl "
        />
          </div>
          <p className="text-slate-400 leading-relaxed">Medical record review involves PHI at scale. Workflows are designed to align with law‑firm‑grade security and privacy expectations.</p>
            
        </div>
      </Section>

      {/* 4. Human-Led AI-Assisted (White) */}
      <Section>
        <SectionHeader title="Human‑Led, AI‑Assisted Medical Record Review" />
        <p className="text-slate-700 leading-relaxed pb-10">AI tools are powerful, but in litigation, credibility and nuance still win. Our approach:</p>
            
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "", desc: "Use AI for OCR, sorting, de‑duplication, and routing so humans can focus on thinking." },
            { title: "", desc: "Use AI to help detect repeated patterns (e.g., recurring diagnoses, providers, exposures) that clinicians then validate." },
            { title: "", desc: "Keep all clinical interpretation and legal relevance decisions in the hands of humans." }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 border border-slate-200 rounded-2xl shadow-sm">
              <BrainCircuit className="text-[#FF9A28] mb-6" size={32} />
              <h4 className="text-slate-900 font-bold mb-3">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-slate-900 leading-relaxed pt-10">That gives you the efficiency benefits of AI while preserving the judgment and explainability that courts and opposing counsel expect.</p>
         
      </Section>

      {/* 5. Workflow (Dark) */}
      <Section dark>
        <SectionHeader title="Part of a Connected Medical Evidence Workflow" dark />
        <p className="text-[#94a3b8] leading-relaxed pb-10">On its own, a medical record review clarifies individual cases. Paired with other AdvanceEdge services, it becomes part of a connected medical evidence pipeline:</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: "01", t: "", d: "Intake & Contact Center captures structured data on injuries and treatment" },
            { n: "02", t: "", d: "Case Qualification decides which matters deserve attorney time." },
            { n: "03", t: "", d: "Medical Record Retrieval obtains complete records from providers, pharmacies, copy services, and digital platforms."},
            { n: "04", t: "", d: "Medical Record Review turns those records into timelines, issue lists, and damage analysis." },
            { n: "05", t: "", d: "Litigation Support & Back‑Office uses those outputs to drive discovery, settlement, and trial preparation." }
          ].map((s, i) => (
            <div key={i} className="bg-[#16161a] p-6 rounded-xl border border-white/10 hover:border-[#FF9A28] transition-colors group">
              <div className="text-2xl font-bold text-[#FF9A28] mb-4">{s.n}</div>
              <h4 className="font-bold text-white mb-2">{s.t}</h4>
              <p className="text-slate-400 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[#94a3b8] leading-relaxed pt-10">That’s what it means for AdvanceEdge to operate as your legal intake and operations partner, not just a standalone review vendor.</p>

      </Section>


            {/* 6. Workflow (Dark) */}
            <Section >
        <SectionHeader title="What Better Medical Record Review Delivers"  />
        <p className="text-slate-900 leading-relaxed pb-10">When medical record review becomes a defined process instead of an ad‑hoc task, firms typically see:</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Faster, more confident case decisions", d: "Attorneys can decide whether to advance, settle, or exit a case based on clear, structured evidence." },
            { n: "02", t: "More consistent valuations", d: "Settlement ranges, and trial posture are grounded in standardized, comparable summaries rather than scattered notes." },
            { n: "03", t: "Better use of attorney and expert time", d: "Lawyers and experts focus on strategy, argument, and opinion, not basic chart review"},
            { n: "04", t: "Cleaner communication with clients, co‑counsel, and decision‑makers", d: "You can explain strengths and weaknesses in plain language backed by precise references to the record." },
          ].map((s, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-[#FF9A28] transition-colors group">
              <CheckCircle2 className="shrink-0 text-[#FF9A28]" />
              <h4 className="font-bold text-black mb-2">{s.t}</h4>
              <p className="text-slate-700 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
       
      </Section>

  

    </div>
  );
}