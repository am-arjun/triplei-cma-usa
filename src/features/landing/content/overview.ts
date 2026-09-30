import plusTwoStudent from '@/design-system/images/audience/plus-two-student.png'
import graduate from '@/design-system/images/audience/graduate.png'
import workingProfessional from '@/design-system/images/audience/working-professional.png'

export interface AudienceItem {
  image: string
  title: string
}

export const overview = {
  title: 'CMA USA: your global passport to a finance career',
  intro: 'A globally recognised credential that opens doors in India, the Gulf, Singapore and the USA.',
  audienceTitle: 'This is for you if you are',
  problem: {
    emoji: '😟',
    title: 'The problem',
    description:
      'A degree alone rarely gets you into a finance leadership track. Employers look for a qualification that proves you can analyse costs, plan budgets, and support decisions.',
  },
  outcome: {
    emoji: '🚀',
    title: 'Where CMA USA takes you',
    description:
      'Two exams. A globally recognised credential from the Institute of Management Accountants (IMA), USA. And a clear path to roles in finance, FP&A, costing and management across multinational companies.',
  },
}

export const audience: AudienceItem[] = [
  { image: plusTwoStudent, title: 'A +2 completed student' },
  { image: graduate, title: 'A graduate' },
  { image: workingProfessional, title: 'A working professional' },
]
