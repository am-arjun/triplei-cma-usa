import { IconArrowRight } from '@tabler/icons-react'
import { Container } from '@/design-system'
import { audience, overview } from '../content/overview'
import { ApplyButton } from './ApplyButton'
import { CounselingButton } from './CounselingButton'
import { SectionHead } from './SectionHead'

export function Overview() {
  return (
    <section id="cma-usa" className="cm-section" aria-labelledby="cma-usa-title">
      <Container>
        <SectionHead id="cma-usa-title" title={overview.title} intro={overview.intro} />

        <h3 className="cm-subhead">{overview.audienceTitle}</h3>
        <ul className="cm-people" data-reveal="stagger">
          {audience.map((item) => (
            <li key={item.title} className="cm-person">
              <span className="cm-person-halo">
                <img src={item.image} alt="" width={120} height={120} loading="lazy" />
              </span>
              <h4>{item.title}</h4>
              <ApplyButton size="md" variant="secondary" />
            </li>
          ))}
        </ul>

        <div className="cm-shift" data-reveal="stagger">
          <article className="cm-shift-from">
            <span className="cm-emoji" aria-hidden="true">
              {overview.problem.emoji}
            </span>
            <h3 className="cm-card-title">{overview.problem.title}</h3>
            <p className="cm-card-text">{overview.problem.description}</p>
          </article>
          <span className="cm-shift-arrow" aria-hidden="true">
            <IconArrowRight size={22} stroke={2.5} />
          </span>
          <article className="cm-shift-to">
            <span className="cm-emoji" aria-hidden="true">
              {overview.outcome.emoji}
            </span>
            <h3 className="cm-card-title">{overview.outcome.title}</h3>
            <p className="cm-card-text">{overview.outcome.description}</p>
          </article>
        </div>

        <div className="cm-actions cm-actions--center" data-reveal="up">
          <CounselingButton variant="primary" />
        </div>
      </Container>
    </section>
  )
}
