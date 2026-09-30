import { applyCta } from '../content/ctas'
import { ApplyForm } from './ApplyForm'

/** Inline copy of the lead form in the hero. */
export function ApplyPanel() {
  return (
    <aside id={applyCta.formId} className="cm-panel" aria-labelledby={`${applyCta.formId}-title`}>
      <h2 id={`${applyCta.formId}-title`} className="cm-panel-title">
        {applyCta.label}
      </h2>
      <ApplyForm formId={applyCta.formId} />
    </aside>
  )
}
