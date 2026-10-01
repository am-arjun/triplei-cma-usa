import type { Icon } from '@tabler/icons-react'
import { IconBriefcase, IconCheck, IconSchool, IconUsers } from '@tabler/icons-react'
import { BrandLogo } from '@/design-system'
import { hero, heroPhotos, stats } from '../content/hero'
import { getStartedCta } from '../content/ctas'
import { navLinks } from '../content/nav'
import { ApplyButton } from './ApplyButton'
import { ApplyPanel } from './ApplyPanel'
import { CounselingButton } from './CounselingButton'
import { ThemeToggle } from './ThemeToggle'

const statIcons: Icon[] = [IconUsers, IconBriefcase, IconSchool]

export function Hero() {
  return (
    <section id="top" className="cm-hero-wrap" aria-labelledby="hero-title">
      <div className="cm-hero">
        <header className="cm-nav">
          <a href="#top" aria-label="Triple i Commerce Academy — home" className="flex items-center">
            <BrandLogo height={24} />
          </a>
          <nav aria-label="Primary" className="cm-nav-pill">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="cm-nav-end">
            <ThemeToggle />
            <ApplyButton size="md" label={getStartedCta.label} />
          </div>
        </header>

        <div className="cm-hero-banner" aria-hidden="true">
          {heroPhotos.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.alt} width={560} height={700} />
          ))}
        </div>

        <div className="cm-hero-copy">
          <h1 id="hero-title" className="cm-h1">
            {hero.title.lead}
            <span className="cm-h1-accent">{hero.title.highlight}</span>
          </h1>
          <p className="cm-lead">{hero.description}</p>
          <div className="cm-actions cm-actions--center">
            <ApplyButton />
            <CounselingButton />
          </div>
          <ul className="cm-pills">
            {hero.keyPoints.map((point) => (
              <li key={point}>
                <IconCheck size={14} stroke={3} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="cm-stage">
          <div className="cm-photos" aria-hidden="true">
            {heroPhotos.map((photo, index) => (
              <div key={photo.src} className={`cm-photo cm-photo--${index + 1}`}>
                <img src={photo.src} alt={photo.alt} width={280} height={350} loading="lazy" />
              </div>
            ))}
          </div>
          <dl className="cm-floats">
            {stats.map((stat, index) => {
              const StatIcon = statIcons[index]
              return (
                <div key={stat.label} className={`cm-float cm-float--${index + 1}`}>
                  <span className="cm-tile" aria-hidden="true">
                    <StatIcon size={20} stroke={2} />
                  </span>
                  <span className="flex flex-col">
                    <dd>{stat.value}</dd>
                    <dt>{stat.label}</dt>
                  </span>
                </div>
              )
            })}
          </dl>
          <ApplyPanel />
        </div>
      </div>
    </section>
  )
}
