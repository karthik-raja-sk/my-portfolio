import type { ReactNode } from 'react'
import type { IconType } from '@/types'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  className?: string
  icon?: IconType
  iconPosition?: 'left' | 'right'
  children: ReactNode
}

interface AnchorButtonProps extends BaseButtonProps {
  href: string
  download?: boolean
  target?: '_blank' | '_self'
  rel?: string
  onClick?: never
  type?: never
  disabled?: never
}

interface NativeButtonProps extends BaseButtonProps {
  href?: never
  target?: never
  rel?: never
  download?: never
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export type ButtonProps = AnchorButtonProps | NativeButtonProps

const baseStyles =
  'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-600 to-violet-600 text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-600/40',
  outline:
    'border border-brand-500/40 bg-brand-500/5 text-brand-700 hover:-translate-y-0.5 hover:border-brand-500/70 hover:bg-brand-500/10 dark:border-brand-400/40 dark:text-brand-300',
  ghost:
    'text-slate-600 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/10',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-sm sm:text-base',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className,
    icon: Icon,
    iconPosition = 'left',
    children,
  } = props

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className,
  )

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="size-4 shrink-0" aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="size-4 shrink-0" aria-hidden="true" />
      )}
    </>
  )

  if (props.href !== undefined) {
    return (
      <a
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
        download={props.download}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {content}
    </button>
  )
}
