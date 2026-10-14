// Shared by the FAQ section (what visitors see) and the page's FAQ data for Google,
// so the two always match. Kept outside the "use client" component so the
// server-rendered page can read it.
export const faqItems = [
  {
    id: 1,
    question: "How do you source and qualify potential claimants?",
    answer:
      "We use targeted marketing, data analytics, and AI-driven screening to identify and pre-qualify claimants. Leads undergo medical and legal verification, compliance checks, and eligibility screening to ensure high conversion potential.",
  },
  {
    id: 2,
    question: "How do you differentiate from other case acquisition providers?",
    answer:
      "We focus on quality, compliance, and performance. Our rigorous pre-qualification, exclusive lead options, and customized acquisition strategies ensure higher conversion rates and better ROI for your firm.",
  },
  {
    id: 3,
    question: "How do you ensure lead exclusivity and prevent saturation?",
    answer:
      "We offer fully exclusive or limited-share leads to prevent oversaturation. Our market analysis ensures claim viability, protecting your firm’s competitive advantage.",
  },
  {
    id: 4,
    question: "What pricing models do you offer?",
    answer:
      "We provide performance-based, flat-rate, and hybrid pricing to match your firm's needs. You pay only for pre-qualified leads, ensuring maximum ROI and predictable costs.",
  },
  {
    id: 5,
    question: "Can you accommodate firms with fluctuating case intake needs?",
    answer:
      "Yes! Our services are fully scalable, allowing firms to increase or decrease lead volume on demand with no long-term commitments.",
  },
  {
    id: 6,
    question: "How do you ensure compliance with legal advertising rules?",
    answer:
      "We strictly follow ABA, TCPA, HIPAA, and CAN-SPAM regulations. Our ethical marketing ensures full compliance, minimizing risk while maximizing lead quality.",
  },
];