import * as React from 'react'
import { cn } from '@/lib/cn'

export type ButtonVariant = 'primary' | 'inverted' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

type BaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  isFullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined }
type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-[var(--lp-btn-height-sm)] px-[var(--spacing-md)] gap-[var(--spacing-2xs)] text-[length:var(--text-xs)]',
  md: 'h-[var(--lp-btn-height)] px-[var(--spacing-3xl)] gap-[var(--spacing-xs)] text-[length:var(--text-sm)]',
  lg: 'h-[var(--lp-btn-height-lg)] px-[var(--spacing-4xl)] gap-[var(--spacing-sm)] text-[length:var(--text-md)]',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--col-surface-brand-default)] text-[var(--col-content-primary-static)] shadow-[var(--elevation-btn)] hover:bg-[var(--btn-primary-surface-hover)]',
  inverted:
    'bg-[var(--prim-white)] text-[var(--prim-neutral-900)] shadow-[var(--elevation-btn)] hover:bg-[var(--prim-neutral-50)]',
  secondary:
    'bg-[var(--col-btn-secondary-surface-default)] text-[var(--col-btn-secondary-content-default)] border border-[var(--col-stroke-secondary)] shadow-[var(--elevation-btn)] hover:bg-[var(--col-btn-secondary-surface-hover)]',
  ghost:
    'bg-transparent text-[var(--col-content-primary-default)] hover:bg-[var(--col-btn-quaternary-surface-hover)]',
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      variant = 'primary',
      size = 'md',
      isFullWidth = false,
      leftIcon,
      rightIcon,
      className,
      children,
      ...rest
    } = props

    const classes = cn(
      'inline-flex items-center justify-center shrink-0 whitespace-nowrap select-none cursor-pointer',
      'font-medium leading-none rounded-[var(--lp-btn-radius)]',
      'transition-colors duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-standard)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--col-btn-primary-surface-focused)]',
      sizeClasses[size],
      variantClasses[variant],
      isFullWidth && 'w-full',
      className,
    )

    const content = (
      <>
        {leftIcon && <span className="flex items-center shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="flex items-center shrink-0">{rightIcon}</span>}
      </>
    )

    if ('href' in rest && rest.href !== undefined) {
      const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...anchorProps}>
          {content}
        </a>
      )
    }

    const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonProps.type ?? 'button'}
        className={classes}
        {...buttonProps}
      >
        {content}
      </button>
    )
  },
)
