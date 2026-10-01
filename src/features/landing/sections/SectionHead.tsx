export interface SectionHeadProps {
  id: string
  title: string
  intro?: string
  align?: 'center' | 'left'
}

/** Section heading: h2 + optional intro. */
export function SectionHead({ id, title, intro, align = 'center' }: SectionHeadProps) {
  return (
    <header className={`cm-head cm-head--${align}`} data-reveal="up">
      <h2 id={id} className="cm-h2">
        {title}
      </h2>
      {intro && <p className="cm-intro">{intro}</p>}
    </header>
  )
}
