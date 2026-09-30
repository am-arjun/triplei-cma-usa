import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { IconX } from '@tabler/icons-react'
import { pauseSmoothScroll, resumeSmoothScroll } from '@/lib/smoothScroll'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

/** Medium modal (480px). Portals to <body> so it renders in the light token scope. */
export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    pauseSmoothScroll()
    panelRef.current?.querySelector<HTMLElement>('input, button')?.focus()
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      resumeSmoothScroll()
      previouslyFocused?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="lp-modal-overlay fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'var(--lp-modal-overlay)', padding: 'var(--spacing-2xl)' }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-lenis-prevent
        className="lp-modal-panel relative w-full overflow-y-auto"
        style={{
          maxWidth: 'var(--lp-modal-width)',
          minWidth: 'min(var(--lp-modal-min-width), 100%)',
          maxHeight: '90vh',
          background: 'var(--col-surface-primary-default)',
          color: 'var(--col-content-primary-default)',
          borderRadius: 'var(--lp-card-radius-lg)',
          padding: 'var(--lp-card-padding)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute flex items-center justify-center cursor-pointer bg-transparent transition-colors hover:bg-[var(--col-btn-quaternary-surface-hover)]"
          style={{
            top: 'var(--spacing-lg)',
            right: 'var(--spacing-lg)',
            width: 'var(--atomic-32)',
            height: 'var(--atomic-32)',
            borderRadius: 'var(--cr-surface-full)',
            color: 'var(--col-icon-secondary-default)',
            transitionDuration: 'var(--motion-duration-fast)',
          }}
        >
          <IconX size={18} stroke={2} />
        </button>
        <h3
          id={titleId}
          className="text-center"
          style={{
            margin: 0,
            marginBottom: 'var(--lp-gap-md)',
            paddingLeft: 'var(--atomic-32)',
            paddingRight: 'var(--atomic-32)',
            fontSize: 'var(--text-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            lineHeight: 'var(--lp-lh-snug)',
          }}
        >
          {title}
        </h3>
        {children}
      </div>
    </div>,
    document.body,
  )
}
