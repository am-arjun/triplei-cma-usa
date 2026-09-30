import * as React from 'react'
import { IconChevronDown } from '@tabler/icons-react'
import { cn } from '@/lib/cn'
import { FieldShell } from './FieldShell'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectFieldProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  id: string
  label: string
  placeholder: string
  options: SelectOption[]
  error?: string
  appearance?: 'outline' | 'filled'
  isPlaceholderSelected?: boolean
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(function SelectField(
  { id, label, placeholder, options, error, appearance, isPlaceholderSelected = true, className, ...selectProps },
  ref,
) {
  return (
    <FieldShell id={id} label={label} error={error} tailIcon={<IconChevronDown size={16} stroke={1.75} />} appearance={appearance}>
      <select
        ref={ref}
        id={id}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn('w-full h-full bg-transparent outline-none appearance-none cursor-pointer', className)}
        style={{
          paddingLeft: 'var(--spacing-xl)',
          paddingRight: 'var(--atomic-36)',
          fontSize: 'var(--text-xs)',
          color: isPlaceholderSelected ? 'var(--col-content-tertiary-default)' : 'var(--col-content-primary-default)',
          borderRadius: 'inherit',
        }}
        {...selectProps}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  )
})
