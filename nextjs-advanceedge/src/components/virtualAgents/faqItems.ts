// Shared by the FAQ section (what visitors see) and the page's FAQ data for Google,
// so the two always match. Kept outside the "use client" component so the
// server-rendered page can read it.

export interface FaqItem {
  id: number;
  question: string;
  answer:
    | string
    | {
        intro?: string;
        answerPoints?: string[];
        summary?: string;
      };
}

export const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "What are Virtual Agents, and how can they help law firms?",
    answer: "Virtual Agents are legal support professionals who handle tasks like case research, client intake, document review, and marketing. They help law firms save time, reduce costs, and improve efficiency without hiring full-time staff.",
  },
  {
    id: 2,
    question: "What types of Virtual Agents do you offer?",
    answer: {
      intro: "We provide:",
      answerPoints: [
        "Virtual Attorneys – Case review & legal research",
        "Super Paralegals – Document preparation & e-filing",
        "Marketing Experts – SEO, PPC & lead generation",
        "Web Developers – Legal website & CRM integration",
      ],
      summary: "Each agent is skilled, experienced, and trained for law firm needs.",
    },
  },
  {
    id: 3,
    question: "How can a Virtual Attorney assist my law firm?",
    answer: "A Virtual Attorney provides legal research, case law analysis, demand letter drafting, and document review, ensuring firms stay productive without hiring full-time lawyers.",
  },
  {
    id: 4,
    question: "How does hiring a Virtual Agent save law firms money?",
    answer: "Virtual Agents reduce overhead costs by handling legal tasks remotely without requiring office space, benefits, or full-time salaries—allowing law firms to scale operations efficiently.",
  },
  {
    id: 5,
    question: "What are the key benefits of hiring Virtual Agents for legal support?",
    answer: {
      answerPoints: [
        "Cost savings – No in-house hiring expenses",
        "Scalability – Hire agents as needed",
        "Expertise – Specialized legal professionals",
        "Efficiency – Faster case processing & lead handling",
      ],
      summary: "Virtual Agents streamline law firm operations and increase productivity.",
    },
  },
  {
    id: 6,
    question: "How do Virtual Agents improve client intake for law firms?",
    answer: {
      intro: "Virtual Agents optimize client intake by:",
      answerPoints: [
        "Handling inquiries via phone, chat, and email",
        "Pre-screening potential clients based on case criteria",
        "Managing appointment scheduling & follow-ups",
      ],
      summary: "This ensures qualified leads and a smooth client onboarding process.",
    },
  },
];

/** Flattens a structured answer into plain text for Google's FAQ data. */
export function faqAnswerText(answer: FaqItem["answer"]): string {
  if (typeof answer === "string") return answer;
  return [
    answer.intro,
    ...(answer.answerPoints ?? []).map((point) => `• ${point}`),
    answer.summary,
  ]
    .filter(Boolean)
    .join("\n");
}