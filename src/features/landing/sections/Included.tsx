import { IconCheck } from '@tabler/icons-react'
import { Container } from '@/design-system'
import { included } from '../content/included'
import { ApplyButton } from './ApplyButton'

export function Included() {
  return (
    <section id="included" className="cm-section" aria-labelledby="included-title">
      <Container>
        <div className="cm-promo">
          <div className="cm-promo-copy" data-reveal="up">
            <h2 id="included-title" className="cm-h2">
              {included.title}
            </h2>
            <ApplyButton />
            <img className="cm-promo-art" src={included.image} alt="" width={900} height={680} loading="lazy" />
          </div>
          <ul className="cm-ticks" data-reveal="stagger">
            {included.items.map((item) => (
              <li key={item}>
                <span className="cm-tick" aria-hidden="true">
                  <IconCheck size={14} stroke={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
