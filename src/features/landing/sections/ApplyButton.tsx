import { IconArrowUpRight } from '@tabler/icons-react'
import { Button, type ButtonSize, type ButtonVariant } from '@/design-system'
import { useApplyModal } from '../ApplyModal'
import { applyCta } from '../content/ctas'

export interface ApplyButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  isFullWidth?: boolean
  /** Defaults to "Apply For Scholarship". */
  label?: string
}

export function ApplyButton({ variant = 'primary', size = 'lg', isFullWidth, label = applyCta.label }: ApplyButtonProps) {
  const openApply = useApplyModal()
  return (
    <Button
      onClick={() => openApply('apply')}
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      className="cm-btn"
      aria-haspopup="dialog"
      rightIcon={
        <span className="cm-btn-arrow" aria-hidden="true">
          <IconArrowUpRight size={size === 'sm' ? 12 : 16} stroke={2.25} />
        </span>
      }
    >
      {label}
    </Button>
  )
}
