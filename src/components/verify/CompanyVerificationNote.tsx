import { company } from '../../data/company'
import { COMPANY_VERIFICATION_NOTE } from '../../data/interns'

export function CompanyVerificationNote() {
  return (
    <section className="bg-primary/5 border-primary/20 rounded-xl border-2 border-dashed p-5 md:p-6">
      <h2 className="mb-2 text-lg font-semibold">Company Verification Note</h2>
      <p className="text-base-content/80 text-sm leading-relaxed">{COMPANY_VERIFICATION_NOTE}</p>
      <p className="text-base-content/50 mt-3 text-xs">
        {company.name} · {company.director}, {company.directorRole} · GSTIN {company.gst}
      </p>
    </section>
  )
}
