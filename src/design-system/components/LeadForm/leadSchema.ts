import { z } from 'zod'

export const qualificationOptions = [
  { value: 'plus-two-completed', label: '+2 completed' },
  { value: 'graduate', label: 'Graduate' },
  { value: 'working-professional', label: 'Working professional' },
]

const currentYear = new Date().getFullYear()

export const passOutYearOptions = Array.from({ length: 12 }, (_, index) => {
  const year = String(currentYear - 7 + index)
  return { value: year, label: year }
})

const name = z.string().trim().min(2, 'Please enter your name')
const mobile = z
  .string()
  .trim()
  .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')

export const leadSchema = z.object({
  name,
  mobile,
  email: z.string().trim().email('Enter a valid email address'),
  qualification: z.string().min(1, 'Select your qualification'),
  passOutYear: z.string().min(1, 'Select your pass out year'),
})
export type LeadFormValues = z.infer<typeof leadSchema>


const STORAGE_KEY = 'lp:leads'
const ATTRIBUTION_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid']

/** Campaign parameters from the landing URL, so each lead can be traced to its ad. */
function attribution(): Record<string, string> {
  const params = new URLSearchParams(window.location.search)
  return Object.fromEntries(ATTRIBUTION_KEYS.flatMap((key) => (params.get(key) ? [[key, params.get(key) as string]] : [])))
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Persists a lead. POSTs JSON to VITE_LEAD_ENDPOINT when it is set (CRM / webhook);
 * always keeps a local copy and fires a `generate_lead` dataLayer event for GTM / GA4.
 */
export async function saveLead(values: LeadFormValues, formId: string): Promise<void> {
  const lead = { ...values, form: formId, page: window.location.href, ...attribution(), submittedAt: new Date().toISOString() }

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as unknown[]
    existing.push(lead)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
  } catch {
    // storage unavailable (private mode) — the thank-you state still shows
  }

  window.dataLayer?.push({ event: 'generate_lead', form_id: formId })

  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined
  if (endpoint) {
    await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) }).catch(() => undefined)
  }
}
