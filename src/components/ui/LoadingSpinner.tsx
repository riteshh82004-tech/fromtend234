interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'loading-sm',
  md: 'loading-md',
  lg: 'loading-lg',
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  return (
    <span
      className={`loading loading-spinner loading-primary ${sizeMap[size]} ${className}`}
      aria-label="Loading"
    />
  )
}
