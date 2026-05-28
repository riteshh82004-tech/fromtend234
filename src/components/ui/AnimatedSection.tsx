import type { ReactNode } from 'react'
import { fadeIn, slideUp, staggerDelay } from '../../utils/animations'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fade' | 'slide'
  delayIndex?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = 'slide',
  delayIndex = 0,
  className = '',
}: AnimatedSectionProps) {
  const animClass = animation === 'fade' ? fadeIn : slideUp
  const delay = staggerDelay(delayIndex)

  return <section className={`${animClass} ${delay} ${className}`}>{children}</section>
}
