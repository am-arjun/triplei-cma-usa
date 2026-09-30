import * as React from 'react'
import { cn } from '@/lib/cn'

export type IconBadgeSize = 'md' | 'lg'

export interface IconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: IconBadgeSize
  children: React.ReactNode
}

/** Circular brand-tinted icon well used on feature and journey cards. */
export function IconBadge({ size = 'md', className, style, children, ...props }: IconBadgeProps) {
  const dimension = size === 'lg' ? 'var(--lp-icon-badge-lg)' : 'var(--lp-icon-badge)'
  return (
    <span
      className={cn('inline-flex items-center justify-center shrink-0', className)}
      style={{
        width: dimension,
        height: dimension,
        borderRadius: 'var(--cr-surface-full)',
        background: 'var(--col-surface-brand-subtle)',
        color: 'var(--col-icon-brand-default)',
        ...style,
      }}
      aria-hidden="true"
      {...props}
    >
      {children}
    </span>
  )
}
