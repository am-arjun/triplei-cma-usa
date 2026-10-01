import illustration from '@/design-system/images/why-illustration.png'

export interface TableRow {
  title: string
  description: string
}

export const benefits = {
  title: 'Why students choose CMA USA',
  columns: ['Benefit', 'What it means for you'] as const,
  /** Decorative brand illustration shown in the sticky rail on desktop. */
  illustration,
}

export const benefitRows: TableRow[] = [
  { title: 'Only 2 exams', description: 'Finish in as little as 8–12 months, at your own pace' },
  { title: 'Global recognition', description: 'Work in the USA, India, UAE, Qatar, Singapore, and Saudi Arabia' },
  { title: 'Management-level roles', description: 'Move into Financial Analyst, FP&A, Cost Accountant, and CFO-track roles' },
  { title: 'Three exam windows a year', description: 'Jan–Feb, May–Jun and Sep–Oct, so you never wait long for your next attempt' },
  { title: 'Study while you work', description: 'Live, recorded, and offline classes fit around your day' },
]
