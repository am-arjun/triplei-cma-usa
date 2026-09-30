export interface Faq {
  id: string
  question: string
  answer: string
}

export const faqSection = {
  title: 'Frequently Asked Questions',
}

export const faqs: Faq[] = [
  {
    id: 'who-can-join',
    question: 'Who can join CMA USA?',
    answer: '+2 completed students, graduates, and working professionals. A bachelor’s degree is required for the final certification.',
  },
  {
    id: 'duration',
    question: 'How long does it take?',
    answer:
      'Typically 8–12 months for the two exams, depending on your pace. The certification also requires 24 months of relevant work experience, which you can complete before or after the exams.',
  },
  {
    id: 'study-while-working',
    question: 'Can I study while working?',
    answer: 'Yes. Live, recorded, and offline classes let you learn around your schedule.',
  },
  {
    id: 'jobs',
    question: 'What jobs can I get?',
    answer:
      'Financial Analyst, Management Accountant, FP&A Specialist, Cost Accountant and CFO-track roles in India, the Gulf, Singapore, and the USA.',
  },
]
