import { useEffect, useRef, useState } from 'react'
import { IconBriefcase, IconChevronRight, IconMapPin } from '@tabler/icons-react'
import { Container } from '@/design-system'
import { careers, salary } from '../content/careers'
import { SectionHead } from './SectionHead'

const COUNT_MS = 1400
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * idle  — final state, no motion (SSR, no JS, or reduced motion)
 * armed — JS is up and the card is still off-screen: bar empty, counter at 0
 * in    — scrolled into view: bar fills, marker slides, number counts up
 */
type Phase = 'idle' | 'armed' | 'in'

export function Careers() {
  const marker = `${salary.markerAt * 100}%`
  const cardRef = useRef<HTMLElement>(null)
  const [phase, setPhase] = useState<Phase>('idle')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const card = cardRef.current
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setPhase('armed')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setPhase('in')
        observer.disconnect()
      },
      { threshold: 0.5 },
    )
    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (phase !== 'in') return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_MS)
      setCount(Math.round(salary.amount * easeOut(t)))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [phase])

  const shown = phase === 'idle' ? salary.amount : count
  const progress = phase === 'armed' ? '0%' : marker

  return (
    <section id="careers" className="cm-section" aria-labelledby="careers-title">
      <Container>
        <SectionHead id="careers-title" title={careers.title} />

        <article ref={cardRef} className="cm-salary-card" data-phase={phase} data-reveal="up">
          <div>
            <h3 className="cm-label">{salary.heading}</h3>
            <p className="cm-salary-label">{salary.label}</p>
            <p className="cm-salary" aria-label={salary.value}>
              ₹{shown} {salary.unit}
            </p>
          </div>
          <div className="cm-salary-range">
            <div className="cm-scale" role="img" aria-label={`Range ${salary.min} to ${salary.max}, average ${salary.value}`}>
              <span className="cm-scale-fill" style={{ width: progress }} />
              <span className="cm-scale-marker" style={{ left: progress }} />
            </div>
            <div className="cm-scale-ends" aria-hidden="true">
              <span>{salary.min}</span>
              <span>{salary.max}</span>
            </div>
          </div>
        </article>

        <div className="cm-grid cm-grid--2" style={{ marginTop: 'var(--atomic-24)' }} data-reveal="stagger">
          <article className="cm-card">
            <h3 className="cm-card-head">
              <span className="cm-tile" aria-hidden="true">
                <IconBriefcase size={20} stroke={2} />
              </span>
              {careers.rolesTitle}
            </h3>
            <ul className="cm-list">
              {careers.roles.map((role) => (
                <li key={role}>
                  {role}
                  <IconChevronRight size={16} stroke={2} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </article>
          <article className="cm-card">
            <h3 className="cm-card-head">
              <span className="cm-tile" aria-hidden="true">
                <IconMapPin size={20} stroke={2} />
              </span>
              {careers.countriesTitle}
            </h3>
            <ul className="cm-list">
              {careers.countries.map((country) => (
                <li key={country.name}>
                  <span className="cm-country">
                    <img src={country.flag} alt="" width={24} height={24} loading="lazy" />
                    {country.name}
                  </span>
                  <IconChevronRight size={16} stroke={2} aria-hidden="true" />
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  )
}
