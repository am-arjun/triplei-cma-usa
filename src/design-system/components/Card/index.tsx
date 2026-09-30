import * as React from 'react'
import { cn } from '@/lib/cn'

export type CardRadius = 'md' | 'lg' | 'xl'
export type CardPadding = 'none' | 'md' | 'lg'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: CardRadius
  padding?: CardPadding
  hasBorder?: boolean
  hasShadow?: boolean
}

const radiusValue: Record<CardRadius, string> = {
  md: 'var(--lp-card-radius)',
  lg: 'var(--lp-card-radius-lg)',
  xl: 'var(--lp-card-radius-xl)',
}

const paddingValue: Record<CardPadding, string> = {
  none: '0',
  md: 'var(--lp-card-padding)',
  lg: 'var(--lp-card-padding-lg)',
}

export function Card({
  radius = 'md',
  padding = 'md',
  hasBorder = false,
  hasShadow = false,
  className,
  style,
  ...props
}: CardProps) {
  return (
    <div
      className={cn('relative', className)}
      style={{
        background: 'var(--col-surface-primary-default)',
        color: 'var(--col-content-primary-default)',
        borderRadius: radiusValue[radius],
        padding: paddingValue[padding],
        border: hasBorder ? '1px solid var(--col-stroke-primary)' : undefined,
        boxShadow: hasShadow ? 'var(--lp-card-shadow)' : undefined,
        ...style,
      }}
      {...props}
    />
  )
}
