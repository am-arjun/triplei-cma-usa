import { IconCheck } from '@tabler/icons-react'
import { Container } from '@/design-system'
import { included } from '../content/included'
import { ApplyButton } from './ApplyButton'

export function Included() {
  return (
    <section id="included" className="cm-section" aria-labelledby="included-title">
      <Container>
        <div className="cm-promo">
          <div className="cm-promo-copy">
            <h2 id="included-title" className="cm-h2">
              {included.title}
            </h2>
            <ApplyButton />
          </div>
          <ul className="cm-ticks">
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
