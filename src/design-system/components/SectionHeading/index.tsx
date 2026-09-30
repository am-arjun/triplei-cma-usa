import * as React from 'react'
import { cn } from '@/lib/cn'

export interface SectionHeadingProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  className?: string
  subtitleMaxWidth?: number
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  as: Tag = 'h2',
  className,
  subtitleMaxWidth,
}: SectionHeadingProps) {
  return (
    <div
      className={cn('flex flex-col', align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}
      style={{ gap: 'var(--spacing-sm)' }}
    >
      <Tag
        style={{
          fontSize: 'var(--lp-text-h2)',
          fontWeight: 'var(--font-weight-semibold)',
          lineHeight: 'var(--lp-lh-tight)',
          letterSpacing: 'var(--lp-ls-tight)',
          color: 'inherit',
          margin: 0,
        }}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          style={{
            fontSize: 'var(--text-sm)',
            lineHeight: 'var(--lp-lh-body)',
            color: 'var(--col-content-secondary-default)',
            maxWidth: subtitleMaxWidth,
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
