import us from '@/design-system/images/flags/us.svg'
import india from '@/design-system/images/flags/in.svg'
import qa from '@/design-system/images/flags/qa.svg'
import ae from '@/design-system/images/flags/ae.svg'
import sg from '@/design-system/images/flags/sg.svg'
import sa from '@/design-system/images/flags/sa.svg'

export const careers = {
  title: 'Careers open to a Certified Management Accountant',
  rolesTitle: 'Job roles',
  roles: ['Financial Analyst', 'Management Accountant', 'FP&A Specialist', 'Cost Accountant', 'CFO'],
  countriesTitle: 'Countries with CMA opportunities',
  countries: [
    { name: 'United States', flag: us },
    { name: 'India', flag: india },
    { name: 'Qatar', flag: qa },
    { name: 'United Arab Emirates', flag: ae },
    { name: 'Singapore', flag: sg },
    { name: 'Saudi Arabia', flag: sa },
  ],
}

export const salary = {
  heading: 'Salary',
  label: 'Average salary',
  value: '₹24 LPA',
  min: '₹8 LPA',
  max: '₹64 LPA',
  /** Position of the average marker along the range, 0–1: (24 − 8) / (64 − 8) */
  markerAt: 16 / 56,
}
