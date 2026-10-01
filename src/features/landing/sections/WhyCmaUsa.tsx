import { Container } from '@/design-system'
import { benefitRows, benefits } from '../content/benefits'
import { ApplyButton } from './ApplyButton'
import { SectionHead } from './SectionHead'

export function WhyCmaUsa() {
  return (
    <section id="why-cma-usa" className="cm-section cm-section--tint" aria-labelledby="why-cma-usa-title">
      <Container className="cm-split">
        <div className="cm-split-rail" data-reveal="up">
          <SectionHead id="why-cma-usa-title" title={benefits.title} align="left" />
          <ApplyButton />
          <img className="cm-rail-art" src={benefits.illustration} alt="" width={900} height={509} loading="lazy" />
        </div>
        <table className="cm-rows">
          <thead className="sr-only">
            <tr>
              <th scope="col">{benefits.columns[0]}</th>
              <th scope="col">{benefits.columns[1]}</th>
            </tr>
          </thead>
          <tbody data-reveal="stagger">
            {benefitRows.map((row, index) => (
              <tr key={row.title}>
                <td className="cm-rows-num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </td>
                <th scope="row">{row.title}</th>
                <td className="cm-rows-text">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  )
}
