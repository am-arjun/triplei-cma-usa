import { useEffect, useState } from 'react'
import { IconBrandWhatsapp, IconPhone } from '@tabler/icons-react'
import { applyCta } from '../content/ctas'
import { phone, whatsapp } from '../content/nav'
import { ApplyButton } from './ApplyButton'

/** Phone-only bottom bar: apply, call, WhatsApp. Hides while the form is on screen. */
export function StickyCtaBar() {
  const [isFormVisible, setIsFormVisible] = useState(true)

  useEffect(() => {
    const form = document.getElementById(applyCta.formId)
    if (!form) return
    const observer = new IntersectionObserver(([entry]) => setIsFormVisible(entry.isIntersecting))
    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="cm-sticky" data-hidden={isFormVisible}>
      <div className="flex-1">
        <ApplyButton isFullWidth />
      </div>
      <a href={phone.href} aria-label={`Call ${phone.label}`} className="cm-sticky-icon">
        <IconPhone size={20} stroke={1.75} />
      </a>
      <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" aria-label={whatsapp.label} className="cm-sticky-icon cm-sticky-icon--wa">
        <IconBrandWhatsapp size={22} stroke={1.75} />
      </a>
    </div>
  )
}
