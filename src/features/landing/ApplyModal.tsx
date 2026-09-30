import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { Modal } from '@/design-system'
import { applyCta, counselingCta } from './content/ctas'
import { ApplyForm } from './sections/ApplyForm'

export type ApplyIntent = 'apply' | 'counseling'

const titles: Record<ApplyIntent, string> = {
  apply: applyCta.label,
  counseling: counselingCta.label,
}

const ApplyModalContext = createContext<(intent: ApplyIntent) => void>(() => undefined)

/** Every CTA on the page opens the lead form in this popup. */
export function ApplyModalProvider({ children }: { children: ReactNode }) {
  const [intent, setIntent] = useState<ApplyIntent | null>(null)
  // Remount the form on every open so a previous submission's thank-you doesn't linger.
  const [openCount, setOpenCount] = useState(0)
  const open = useCallback((next: ApplyIntent) => {
    setIntent(next)
    setOpenCount((count) => count + 1)
  }, [])
  const close = useCallback(() => setIntent(null), [])
  const value = useMemo(() => open, [open])

  return (
    <ApplyModalContext.Provider value={value}>
      {children}
      <Modal isOpen={intent !== null} onClose={close} title={intent ? titles[intent] : ''}>
        {intent && <ApplyForm key={openCount} formId={`popup-${intent}`} />}
      </Modal>
    </ApplyModalContext.Provider>
  )
}

export function useApplyModal() {
  return useContext(ApplyModalContext)
}
