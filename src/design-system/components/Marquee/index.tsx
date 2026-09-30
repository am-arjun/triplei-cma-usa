import * as React from 'react'
import { cn } from '@/lib/cn'

export interface MarqueeProps {
  children: React.ReactNode
  direction?: 'forward' | 'reverse'
  durationSeconds?: number
  gap?: string
  className?: string
}

/** Infinite horizontal scroller. Content is rendered twice so the loop is seamless. */
export function Marquee({ children, direction = 'forward', durationSeconds = 40, gap = 'var(--spacing-2xl)', className }: MarqueeProps) {
  const track = (isClone: boolean) => (
    <div className="flex shrink-0" style={{ gap, paddingRight: gap }} aria-hidden={isClone || undefined}>
      {children}
    </div>
  )
  return (
    <div className={cn('lp-marquee w-full overflow-hidden', className)}>
      <div
        className="lp-marquee-track"
        data-direction={direction}
        style={{ ['--lp-marquee-duration' as string]: `${durationSeconds}s` }}
      >
        {track(false)}
        {track(true)}
      </div>
    </div>
  )
}
