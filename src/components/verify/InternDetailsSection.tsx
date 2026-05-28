import type { InternRecord } from '../../types/intern'
import { maskEmail, maskMobile } from '../../utils/maskContact'

interface InternDetailsSectionProps {
  intern: InternRecord
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[140px_1fr]">
      <dt className="text-base-content/60 text-sm font-medium">{label}</dt>
      <dd className="text-sm">{value}</dd>
    </div>
  )
}

export function InternDetailsSection({ intern }: InternDetailsSectionProps) {
  return (
    <section className="rounded-xl border border-base-300 bg-base-100 p-5 md:p-6">
      <h2 className="mb-4 text-lg font-semibold">Intern Details</h2>
      <dl className="space-y-3">
        <DetailRow label="Full Name" value={intern.name} />
        <DetailRow label="Father's Name" value={intern.fatherName} />
        <DetailRow label="Date of Birth" value={intern.dob} />
        <DetailRow label="Address" value={intern.address} />
        <DetailRow label="Role" value={intern.role} />
      </dl>

      {(intern.mobile || intern.email) && (
        <div className="border-base-300 mt-5 border-t pt-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-base-content/70">
            Contact
          </h3>
          <dl className="space-y-3">
            {intern.mobile && (
              <DetailRow label="Mobile" value={maskMobile(intern.mobile)} />
            )}
            {intern.email && (
              <DetailRow label="Email" value={maskEmail(intern.email)} />
            )}
          </dl>
        </div>
      )}
    </section>
  )
}
