import * as React from 'react'

export interface FieldShellProps {
  id: string
  label: string
  error?: string
  headIcon?: React.ReactNode
  tailIcon?: React.ReactNode
  /** `filled` = borderless grey pill (marketing forms); `outline` = DS default */
  appearance?: 'outline' | 'filled'
  children: React.ReactNode
}

/** Shared label + 38px pill frame + inline error used by TextField and SelectField. */
export function FieldShell({ id, label, error, headIcon, tailIcon, appearance = 'outline', children }: FieldShellProps) {
  const isFilled = appearance === 'filled'
  return (
    <div className="flex flex-col" style={{ gap: 'var(--spacing-xs)' }}>
      <label
        htmlFor={id}
        style={{
          fontSize: 'var(--text-3xs)',
          lineHeight: 'var(--type-line-height-xxs)',
          color: 'var(--col-content-secondary-default)',
        }}
      >
        {label}
      </label>
      <div
        className="relative flex items-center w-full transition-colors"
        style={{
          height: 'var(--lp-input-height)',
          borderRadius: 'var(--lp-input-radius)',
          border: `1px solid ${error ? 'var(--col-stroke-destructive)' : isFilled ? 'transparent' : 'var(--col-stroke-secondary)'}`,
          // --lp-field-bg lets the page pick a field tone that contrasts with its card (see landing-page.css .dark)
          background: isFilled ? 'var(--lp-field-bg, var(--col-surface-secondary-default))' : 'var(--col-bg-primary)',
          transitionDuration: 'var(--motion-duration-fast)',
        }}
      >
        {headIcon && (
          <span
            className="absolute flex items-center pointer-events-none"
            style={{ left: 'var(--spacing-xl)', color: 'var(--col-icon-secondary-default)' }}
            aria-hidden="true"
          >
            {headIcon}
          </span>
        )}
        {children}
        {tailIcon && (
          <span
            className="absolute flex items-center pointer-events-none"
            style={{ right: 'var(--spacing-xl)', color: 'var(--col-icon-secondary-default)' }}
            aria-hidden="true"
          >
            {tailIcon}
          </span>
        )}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          style={{ fontSize: 'var(--text-2xs)', color: 'var(--col-content-error-default)', margin: 0 }}
        >
          {error}
        </p>
      )}
    </div>
  )
}
