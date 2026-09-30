import { Button, type ButtonSize, type ButtonVariant } from '@/design-system'
import { useApplyModal } from '../ApplyModal'
import { counselingCta } from '../content/ctas'

/** "Schedule free counseling" — opens the lead form popup. */
export function CounselingButton({ variant = 'secondary', size = 'lg' }: { variant?: ButtonVariant; size?: ButtonSize }) {
  const openApply = useApplyModal()
  return (
    <Button variant={variant} size={size} className="cm-btn" aria-haspopup="dialog" onClick={() => openApply('counseling')}>
      {counselingCta.label}
    </Button>
  )
}
