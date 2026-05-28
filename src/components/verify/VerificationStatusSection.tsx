import type { InternRecord } from '../../types/intern'
import { VerifiedBadge } from './VerifiedBadge'

interface VerificationStatusSectionProps {
  intern: InternRecord
  verifiedAt?: string
}

export function VerificationStatusSection({ intern, verifiedAt }: VerificationStatusSectionProps) {
  const isVerified = intern.status === 'Verified'

  return (
    <section className="rounded-xl border border-base-300 bg-base-100 p-5 md:p-6">
      <h2 className="mb-4 text-lg font-semibold">Verification Status</h2>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {isVerified ? <VerifiedBadge /> : (
          <span className="badge badge-warning">{intern.status}</span>
        )}
        <div className="text-base-content/70 text-sm">
          <p>
            Certificate <span className="font-mono font-semibold">{intern.certificateId}</span>
          </p>
          {verifiedAt && (
            <p className="mt-1">Verified on: {verifiedAt}</p>
          )}
        </div>
      </div>
      {isVerified && (
        <p className="text-success mt-4 text-sm font-medium">
          This credential is authentic and registered in our records.
        </p>
      )}
    </section>
  )
}
