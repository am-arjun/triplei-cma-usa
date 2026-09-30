import { IconChevronDown } from '@tabler/icons-react'
import { Container } from '@/design-system'
import { faqs, faqSection } from '../content/faqs'
import { CounselingButton } from './CounselingButton'
import { SectionHead } from './SectionHead'

/** Native <details> — answers are always in the HTML and work without JavaScript. */
export function Faqs() {
  return (
    <section id="faqs" className="cm-section" aria-labelledby="faqs-title">
      <Container className="cm-split">
        <div className="cm-split-rail">
          <SectionHead id="faqs-title" title={faqSection.title} align="left" />
          <CounselingButton variant="primary" />
        </div>
        <div className="cm-faqs">
          {faqs.map((faq, index) => (
            <details key={faq.id} className="cm-faq" open={index === 0}>
              <summary>
                <h3>{faq.question}</h3>
                <span className="cm-faq-icon" aria-hidden="true">
                  <IconChevronDown size={18} stroke={2.25} />
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
