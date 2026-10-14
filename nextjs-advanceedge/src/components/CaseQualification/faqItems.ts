// Shared by the FAQ section (what visitors see) and the page's FAQ data for Google,
// so the two always match. Kept outside the "use client" component so the
// server-rendered page can read it.
export const faqItems = [
  {
    id: 1,
    question: "What is the difference between intake and case qualification?",
    answer:
      "Intake is about capturing information about who called, what happened, and basic facts. Case qualification is about deciding whether that matter fits your firm’s criteria and deserves attorney attention. In practice, that means adding structured filters, checks, and decision rules on top of raw intake data so you’re not treating every inquiry like it’s equal.",
  },
  {
    id: 2,
    question: "Do we need case qualification if we already have an internal intake team?",
    answer:
      "Yes, especially if attorneys are still reviewing a large volume of marginal files. Case qualification can sit behind your internal intake team, handling secondary QC, docket health reviews, and campaign/vendor reporting while your staff continues to answer calls and build relationships with clients. It’s an extra layer of control and clarity, not a replacement for your people.",
  },
  {
    id: 3,
    question: "Can you handle case qualification across multiple practice areas?",
    answer:
      "Yes. Criteria, scripts, and workflows are customized for each area you run: Mass Tort, PI, MVA, family, estate, immigration, and more. The same qualification engine can support all of them, as long as your rules are clear enough to implement and refine.",
  },
  {
    id: 4,
    question: "How does case qualification help legal marketing agencies?",
    answer:
      "Agencies are often blamed for “bad leads” when the real issues are intake coverage, inconsistent screening, or shifting criteria. A third‑party case qualification program gives agencies and their law‑firm clients a shared, objective layer that shows exactly how many leads became qualified opportunities, how many signed, and why some didn’t. That makes QBRs, renewals, and optimization decisions much easier.",
  },
  {
    id: 5,
    question: "How long does it take to implement a case qualification program?",
    answer:
      "For a single practice area with clear criteria, you can usually define rules, scripts, and workflows in a couple of weeks and start live qualification shortly after. For multi‑practice or multi‑campaign environments, implementation tends to be phased: start with one stream (e.g., Mass Tort campaigns), get that right, then expand.",
  },
  {
    id: 6,
    question: "What if our criteria change over time?",
    answer:
      "They will, and the program is built for that. When your risk tolerance, damage thresholds, or focus areas shift, the qualification rules are updated and tested. Reporting then shows you how those changes impact lead volume, case quality, and signed retainers over time, so adjustments are grounded in data, not guesswork.",
  },
];