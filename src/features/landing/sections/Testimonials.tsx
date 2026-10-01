import { useCallback, useEffect, useState, type TransitionEvent } from 'react'
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react'
import { Container } from '@/design-system'
import { testimonials, testimonialsSection } from '../content/testimonials'
import { SectionHead } from './SectionHead'

const COPIES = 3
const AUTOPLAY_MS = 4500
const count = testimonials.length
/** The list is repeated so the centre card always has neighbours; we loop inside the middle copy. */
const slides = Array.from({ length: COPIES }, (_, copy) => testimonials.map((item) => ({ ...item, key: `${copy}-${item.id}` }))).flat()
const firstMiddle = count * Math.floor(COPIES / 2)

export function Testimonials() {
  const [index, setIndex] = useState(firstMiddle)
  const [isAnimated, setIsAnimated] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const goTo = useCallback((next: number) => {
    setIsAnimated(true)
    setIndex(next)
  }, [])

  useEffect(() => {
    if (!isPlaying || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setIsAnimated(true)
      setIndex((current) => current + 1)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [isPlaying, index])

  const onTrackTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'transform') return
    // Silently jump back into the middle copy so the loop never runs out.
    if (index >= firstMiddle + count || index < firstMiddle) {
      setIsAnimated(false)
      setIndex(firstMiddle + (((index - firstMiddle) % count) + count) % count)
    }
  }

  useEffect(() => {
    if (isAnimated) return
    const frame = requestAnimationFrame(() => setIsAnimated(true))
    return () => cancelAnimationFrame(frame)
  }, [isAnimated])

  return (
    <section id="testimonials" className="cm-section cm-section--tint cm-testimonials" aria-labelledby="testimonials-title">
      <Container>
        <SectionHead id="testimonials-title" title={testimonialsSection.title} />
      </Container>

      <div className="cm-carousel" data-reveal="up" aria-roledescription="carousel" aria-label={testimonialsSection.title}>
        <div
          className="cm-carousel-track"
          data-animated={isAnimated}
          style={{ ['--i' as string]: index }}
          onTransitionEnd={onTrackTransitionEnd}
        >
          {slides.map((slide, slideIndex) => {
            const isActive = slideIndex === index
            return (
              <figure
                key={slide.key}
                className="cm-slide"
                data-active={isActive}
                aria-hidden={!isActive}
                onClick={isActive ? undefined : () => goTo(slideIndex)}
              >
                <img
                  className="cm-slide-photo"
                  src={slide.image}
                  alt=""
                  width={600}
                  height={340}
                  loading="lazy"
                  style={{ objectPosition: slide.focus }}
                />
                <figcaption className="cm-slide-caption">
                  <blockquote>“{slide.quote}”</blockquote>
                  <p>
                    {slide.name}, {slide.result}
                  </p>
                </figcaption>
                {isActive && (
                  <button
                    type="button"
                    className="cm-slide-toggle"
                    onClick={() => setIsPlaying((playing) => !playing)}
                    aria-pressed={!isPlaying}
                    tabIndex={0}
                  >
                    {isPlaying ? <IconPlayerPauseFilled size={12} /> : <IconPlayerPlayFilled size={12} />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>
                )}
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
