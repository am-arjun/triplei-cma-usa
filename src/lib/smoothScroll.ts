import Lenis from 'lenis'

let lenis: Lenis | null = null

/**
 * Inertial page scrolling. Quick enough to feel responsive (≈0.9s settle),
 * skipped entirely for users who prefer reduced motion.
 */
export function startSmoothScroll(): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => undefined

  lenis = new Lenis({ duration: 0.9, easing: (t) => 1 - Math.pow(1 - t, 3), anchors: { offset: -16 }, wheelMultiplier: 1 })
  let frame = 0
  const raf = (time: number) => {
    lenis?.raf(time)
    frame = requestAnimationFrame(raf)
  }
  frame = requestAnimationFrame(raf)

  return () => {
    cancelAnimationFrame(frame)
    lenis?.destroy()
    lenis = null
  }
}

/** Freeze page scrolling while a modal is open. */
export function pauseSmoothScroll(): void {
  lenis?.stop()
}

export function resumeSmoothScroll(): void {
  lenis?.start()
}
