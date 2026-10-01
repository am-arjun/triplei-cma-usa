/**
 * Scroll-reveal. Elements opt in with `data-reveal="up"` (the element itself) or
 * `data-reveal="stagger"` (its direct children, each delayed by `--i`). Styles live
 * in landing-page.css under "Motion".
 *
 * Nothing is hidden until this runs, so prerendered HTML, no-JS and reduced-motion
 * visitors all get the finished layout.
 */
export function startReveal(): () => void {
  if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  for (const el of targets) {
    if (el.dataset.reveal === 'stagger') {
      Array.from(el.children).forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)))
    }
    el.dataset.revealState = 'armed'
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        ;(entry.target as HTMLElement).dataset.revealState = 'in'
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )
  targets.forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}
