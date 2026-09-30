import { footer } from './content/footer'
import { faqs } from './content/faqs'
import { hero } from './content/hero'
import { phone } from './content/nav'

const organization = {
  '@type': 'EducationalOrganization',
  name: 'Triple i Commerce Academy',
  telephone: phone.href.replace('tel:', ''),
  email: footer.contact.email.label,
  address: footer.branches.items.map((city) => ({ '@type': 'PostalAddress', addressLocality: city, addressRegion: 'Kerala', addressCountry: 'IN' })),
}

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    organization,
    {
      '@type': 'Course',
      name: 'CMA USA (Certified Management Accountant)',
      description: hero.description,
      provider: { '@type': 'EducationalOrganization', name: organization.name },
      educationalCredentialAwarded: 'Certified Management Accountant (CMA), Institute of Management Accountants (IMA), USA',
      hasCourseInstance: { '@type': 'CourseInstance', courseMode: ['Onsite', 'Online', 'Blended'] },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
    },
  ],
}

/** JSON-LD for rich results. Rendered into the prerendered HTML. */
export function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
}
