import * as React from 'react'
import { cn } from '@/lib/cn'
import { FieldShell } from '../SelectField/FieldShell'

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string
  label: string
  headIcon?: React.ReactNode
  error?: string
  appearance?: 'outline' | 'filled'
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { id, label, headIcon, error, appearance, className, ...inputProps },
  ref,
) {
  return (
    <FieldShell id={id} label={label} error={error} headIcon={headIcon} appearance={appearance}>
      <input
        ref={ref}
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn('w-full h-full bg-transparent outline-none', className)}
        style={{
          paddingLeft: headIcon ? 'var(--atomic-36)' : 'var(--spacing-xl)',
          paddingRight: 'var(--spacing-xl)',
          fontSize: 'var(--text-xs)',
          color: 'var(--col-content-primary-default)',
          borderRadius: 'inherit',
        }}
        {...inputProps}
      />
    </FieldShell>
  )
})
