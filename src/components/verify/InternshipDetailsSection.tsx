import type { InternRecord } from '../../types/intern'
import { INTERNSHIP_PERIOD } from '../../data/interns'

interface InternshipDetailsSectionProps {
  intern: InternRecord
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[160px_1fr]">
      <dt className="text-base-content/60 text-sm font-medium">{label}</dt>
      <dd className="text-sm font-medium">{value}</dd>
    </div>
  )
}

export function InternshipDetailsSection({ intern }: InternshipDetailsSectionProps) {
  return (
    <section className="rounded-xl border border-base-300 bg-base-100 p-5 md:p-6">
      <h2 className="mb-4 text-lg font-semibold">Internship Details</h2>
      <dl className="space-y-3">
        <DetailRow label="Program" value={intern.program} />
        <DetailRow label="Start Date" value={intern.internshipStart} />
        <DetailRow label="End Date" value={intern.internshipEnd} />
        <DetailRow label="Duration" value={intern.internshipDuration} />
        
        <DetailRow label="Certificate ID" value={intern.certificateId} />
        <DetailRow label="Issued On" value={intern.issuedAt} />
      </dl>
    </section>
  )
}
