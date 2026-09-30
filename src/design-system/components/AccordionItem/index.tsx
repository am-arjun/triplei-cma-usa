import { IconChevronDown } from '@tabler/icons-react'

export interface AccordionItemProps {
  id: string
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export function AccordionItem({ id, question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div style={{ borderBottom: '1px solid var(--col-stroke-primary)' }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        className="flex w-full items-center justify-between text-left cursor-pointer bg-transparent"
        style={{
          paddingTop: 'var(--lp-gap-lg)',
          paddingBottom: 'var(--lp-gap-lg)',
          gap: 'var(--spacing-2xl)',
          color: 'var(--col-content-primary-default)',
        }}
      >
        <span
          style={{
            fontSize: 'var(--lp-text-question)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: 'var(--lp-lh-snug)',
          }}
        >
          {question}
        </span>
        <span
          className="flex items-center justify-center shrink-0"
          style={{
            width: 'var(--atomic-32)',
            height: 'var(--atomic-32)',
            borderRadius: 'var(--cr-surface-full)',
            background: 'var(--col-surface-tertiary-default)',
            color: 'var(--col-icon-secondary-default)',
            transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform var(--motion-duration-fast) var(--motion-ease-standard)',
          }}
          aria-hidden="true"
        >
          <IconChevronDown size={16} stroke={2} />
        </span>
      </button>
      <div className="lp-collapse" data-open={isOpen} id={`${id}-panel`} role="region" aria-hidden={!isOpen}>
        <div>
          <p
            style={{
              margin: 0,
              paddingBottom: 'var(--lp-gap-md)',
              maxWidth: 'var(--atomic-1000)',
              fontSize: 'var(--text-base)',
              lineHeight: 'var(--lp-lh-body)',
              color: 'var(--col-content-secondary-default)',
            }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
