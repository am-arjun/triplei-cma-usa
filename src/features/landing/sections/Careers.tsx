import { IconBriefcase, IconChevronRight, IconMapPin } from '@tabler/icons-react'
import { Container } from '@/design-system'
import { careers, salary } from '../content/careers'
import { SectionHead } from './SectionHead'

export function Careers() {
  const marker = `${salary.markerAt * 100}%`
  return (
    <section id="careers" className="cm-section" aria-labelledby="careers-title">
      <Container>
        <SectionHead id="careers-title" title={careers.title} />

        <article className="cm-salary-card">
          <div>
            <h3 className="cm-label">{salary.heading}</h3>
            <p className="cm-salary-label">{salary.label}</p>
            <p className="cm-salary">{salary.value}</p>
          </div>
          <div className="cm-salary-range">
            <div className="cm-scale" role="img" aria-label={`Range ${salary.min} to ${salary.max}, average ${salary.value}`}>
              <span className="cm-scale-fill" style={{ width: marker }} />
              <span className="cm-scale-marker" style={{ left: marker }} />
            </div>
            <div className="cm-scale-ends" aria-hidden="true">
              <span>{salary.min}</span>
              <span>{salary.max}</span>
            </div>
          </div>
        </article>

        <div className="cm-grid cm-grid--2" style={{ marginTop: 'var(--atomic-24)' }}>
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
