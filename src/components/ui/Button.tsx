import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonBaseProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  loading?: boolean
  disabled?: boolean
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined
  to?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string
  href?: undefined
  type?: undefined
  onClick?: undefined
}

interface ButtonAsAnchor extends ButtonBaseProps {
  href: string
  to?: undefined
  type?: undefined
  onClick?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const classes = `btn ${variantClass[variant]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={classes}
      disabled={disabled || loading}
      onClick={props.onClick}
    >
      {loading && <span className="loading loading-spinner loading-sm" />}
      {children}
    </button>
  )
}
