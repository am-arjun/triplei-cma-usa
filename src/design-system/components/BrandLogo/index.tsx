import { cn } from '@/lib/cn'
import mark from '@/design-system/logos/triplei-mark.svg'
import logoDark from '@/design-system/logos/triplei-logo.svg'
import logoLight from '@/design-system/logos/triplei-logo-light.svg'

export interface BrandLogoProps {
  /** `wordmark` = orange bars + "TRIPLE i" (site header); `full` = DS lockup with "Commerce Academy" */
  variant?: 'wordmark' | 'full'
  tone?: 'dark' | 'light'
  height?: number
  className?: string
}

export function BrandLogo({ variant = 'wordmark', tone = 'dark', height = 24, className }: BrandLogoProps) {
  if (variant === 'full') {
    return (
      <img
        src={tone === 'light' ? logoLight : logoDark}
        alt="Triple i Commerce Academy"
        height={height}
        style={{ height, width: 'auto' }}
        className={className}
      />
    )
  }

  return (
    <span
      className={cn('inline-flex items-center', className)}
      style={{ gap: 'var(--spacing-xs)', height, color: tone === 'light' ? 'var(--col-content-primary-static)' : 'var(--col-content-primary-default)' }}
      role="img"
      aria-label="Triple i Commerce Academy"
    >
      <img src={mark} alt="" aria-hidden="true" style={{ height: height * 0.8, width: 'auto' }} />
      <span
        style={{
          fontSize: height * 0.8,
          fontWeight: 'var(--font-weight-bold)',
          lineHeight: 1,
          letterSpacing: 'var(--lp-ls-tight)',
          whiteSpace: 'nowrap',
        }}
      >
        TRIPLE i
      </span>
    </span>
  )
}
