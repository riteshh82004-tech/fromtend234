export const fadeIn = 'animate-fade-in opacity-0'
export const slideUp = 'animate-slide-up opacity-0'

export function staggerDelay(index: number): string {
  const delays = ['', 'animation-delay-100', 'animation-delay-200', 'animation-delay-300']
  return delays[Math.min(index, delays.length - 1)]
}
