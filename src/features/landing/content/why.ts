import type { TableRow } from './benefits'

export const why = {
  title: 'Why Triple i is Kerala’s choice for CMA USA',
  columns: ['Reason', 'What it means for you'] as const,
}

export const whyRows: TableRow[] = [
  {
    title: 'Proven results',
    description: 'Top scorers of 460, 450, and 440 in CMA USA 2025, and students clearing Part 1 and Part 2 on their first attempt',
  },
  { title: 'Mentors who guide you', description: 'Mentorship from CMA professionals' },
  { title: 'Learn your way', description: 'Offline, live, and recorded classes, so you never miss a lesson' },
  { title: 'Built for the exam', description: 'Triple-i custom workbook, mock tests, and doubt-clearing and revision sessions' },
  { title: 'Career outcomes', description: '2,200+ students placed in MNCs and a 3,600+ alumni network' },
]
