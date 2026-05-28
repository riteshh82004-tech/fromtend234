import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`card bg-base-200 shadow-md ${hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
