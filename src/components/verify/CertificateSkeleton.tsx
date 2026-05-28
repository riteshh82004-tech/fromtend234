export function CertificateSkeleton() {
  return (
    <div className="mx-auto max-w-4xl animate-pulse px-4 py-12">
      <div className="skeleton mb-6 h-10 w-64 mx-auto" />
      <div className="card bg-base-100 border border-base-300">
        <div className="card-body gap-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
            <div className="skeleton h-40 w-32 shrink-0 rounded-lg" />
            <div className="w-full space-y-3">
              <div className="skeleton h-8 w-3/4" />
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-5/6" />
              <div className="skeleton h-4 w-2/3" />
            </div>
          </div>
          <div className="divider" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="skeleton h-24 w-full rounded-lg" />
            <div className="skeleton h-24 w-full rounded-lg" />
          </div>
          <div className="skeleton h-32 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
