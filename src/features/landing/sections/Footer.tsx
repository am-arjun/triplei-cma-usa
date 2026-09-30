import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'
import { BrandLogo, Container } from '@/design-system'
import { footer } from '../content/footer'

export function Footer() {
  return (
    <footer id="contact" className="cm-footer">
      <Container>
        <div className="cm-footer-grid">
          <BrandLogo height={24} />
          <div>
            <h2 className="cm-label">{footer.branches.title}</h2>
            <ul>
              {footer.branches.items.map((branch) => (
                <li key={branch}>
                  <IconMapPin size={16} aria-hidden="true" />
                  {branch}
                </li>
              ))}
            </ul>
          </div>
          <address>
            <h2 className="cm-label">{footer.contact.title}</h2>
            <ul>
              <li>
                <a href={footer.contact.phone.href}>
                  <IconPhone size={16} aria-hidden="true" />
                  {footer.contact.phone.label}
                </a>
              </li>
              <li>
                <a href={footer.contact.email.href}>
                  <IconMail size={16} aria-hidden="true" />
                  {footer.contact.email.label}
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="cm-footer-legal">
          <span>{footer.copyright}</span>
          <ul>
            {footer.legal.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
