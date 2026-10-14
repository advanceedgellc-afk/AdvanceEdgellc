// Shared by the FAQ section (what visitors see) and the page's FAQ data for Google,
// so the two always match. Kept outside the "use client" component so the
// server-rendered page can read it.
export const faqItems = [
  {
    id: 1,
    question:
      "What is the difference between regular bookkeeping and law firm bookkeeping?",
    answer:
      "Regular bookkeeping focuses on recording income and expenses and producing financial statements. Law firm bookkeeping must also support trust accounting, IOLTA rules, client ledgers, three-way reconciliations and matter level cost tracking in line with state bar requirements.",
  },
  {
    id: 2,
    question:
      "Can you really handle both my law firm books and my real estate investments?",
    answer:
      "Yes. Several of our clients are attorneys who also invest in real estate. We maintain separate but coordinated ledgers for the firm and for each property or entity, respect trust and IOLTA rules for client funds and present a joined-up view of cash flow and profitability that covers both sides of your financial life.",
  },
  {
    id: 3,
    question:
      "How often do you reconcile trust accounts and bank accounts?",
    answer:
      "For trust and IOLTA accounts, we perform full three-way reconciliations at least monthly, matching bank statements, trust ledgers and the sum of client ledgers, in line with common bar guidance. Operating and property accounts are reconciled on a schedule that fits your transaction volume, usually monthly.",
  },
  {
    id: 4,
    question:
      "Do we have to change our accounting software to work with you?",
    answer:
      "In most cases, no. We work inside widely used accounting and legal platforms including QuickBooks Online, Xero, Clio, LeanLaw, CosmoLex and common real estate or property management tools. If there are gaps or limitations, we discuss options with you rather than forcing a single system.",
  },
  {
    id: 5,
    question: "How do we get started?",
    answer:
      "We start with a short discovery call and a light review of your existing books, trust accounts and real estate entities. From there we propose a scope and cadence, agree on a simple checklist of what happens each month and then begin with a structured onboarding and clean up phase if needed.",
  },
];