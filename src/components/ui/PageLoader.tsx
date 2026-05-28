import { LoadingSpinner } from './LoadingSpinner'

export function PageLoader() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <LoadingSpinner size="lg" />
      <p className="text-base-content/70 text-sm">Loading page…</p>
    </div>
  )
}
