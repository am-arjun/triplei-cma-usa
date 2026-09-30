import * as React from 'react'
import { cn } from '@/lib/cn'

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export function Container({ className, style, ...props }: ContainerProps) {
  return (
    <div
      className={cn('w-full mx-auto', className)}
      style={{
        maxWidth: 'var(--lp-container-max)',
        paddingLeft: 'var(--lp-container-px)',
        paddingRight: 'var(--lp-container-px)',
        ...style,
      }}
      {...props}
    />
  )
}
