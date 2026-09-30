import { IconBook, IconBriefcase, IconChalkboard, IconTrophy, IconUserStar } from '@tabler/icons-react'
import { Container } from '@/design-system'
import { why, whyRows } from '../content/why'
import { ApplyButton } from './ApplyButton'
import { SectionHead } from './SectionHead'

const icons = [IconTrophy, IconUserStar, IconChalkboard, IconBook, IconBriefcase]

export function WhyTripleI() {
  return (
    <section id="why-triple-i" className="cm-section cm-section--tint" aria-labelledby="why-triple-i-title">
      <Container>
        <SectionHead id="why-triple-i-title" title={why.title} />
        <ul className="cm-bento">
          {whyRows.map((row, index) => {
            const Icon = icons[index]
            return (
              <li key={row.title} className={index === 0 ? 'cm-tile-card cm-tile-card--hero' : 'cm-tile-card'}>
                <span className="cm-tile" aria-hidden="true">
                  <Icon size={22} stroke={2} />
                </span>
                <h3 className="cm-card-title">{row.title}</h3>
                <p className="cm-card-text">{row.description}</p>
              </li>
            )
          })}
        </ul>
        <div className="cm-actions cm-actions--center">
          <ApplyButton />
        </div>
      </Container>
    </section>
  )
}
