import * as React from 'react'
import { cn } from '@/lib/cn'

export type SectionTone = 'light' | 'dark' | 'brand' | 'brand-subtle'
export type SectionPadding = 'none' | 'sm' | 'md'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone
  paddingY?: SectionPadding
}

const paddingValue: Record<SectionPadding, string> = {
  none: '0',
  sm: 'var(--lp-section-py-sm)',
  md: 'var(--lp-section-py)',
}

/**
 * Page section. `tone="dark"` scopes the DS dark-mode tokens to this section
 * (and re-asserts the brand so --col-*-brand stays Triple i orange inside it).
 */
export function Section({ tone = 'light', paddingY = 'md', className, style, children, ...props }: SectionProps) {
  const isDark = tone === 'dark'
  const isBrand = tone === 'brand'

  return (
    <section
      className={cn('relative w-full', isDark && 'dark', isBrand && 'lp-arcs', className)}
      data-brand={isDark ? 'triplei' : undefined}
      style={{
        paddingTop: paddingValue[paddingY],
        paddingBottom: paddingValue[paddingY],
        background: isBrand
          ? undefined
          : tone === 'brand-subtle'
            ? 'var(--col-surface-brand-subtle)'
            : 'var(--col-bg-primary)',
        color: isBrand ? 'var(--col-content-primary-static)' : 'var(--col-content-primary-default)',
        ...style,
      }}
      {...props}
    >
      {children}
    </section>
  )
}
