import { company } from '../../data/company'
import { INTERNSHIP_DURATION_LABEL } from '../../utils/constants'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

export function CareersSection() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <div className="bg-base-200 flex flex-col items-start justify-between gap-6 rounded-xl border border-base-300 p-8 md:flex-row md:items-center md:p-10">
        <div className="max-w-xl">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Internship Program
          </span>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">{company.internshipProgram}</h2>
          <p className="text-base-content/70 mt-3">
            {INTERNSHIP_DURATION_LABEL} · On-site at our Sitapura Extension facility, Jaipur.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Button to="/careers" variant="outline">
            Program Details
          </Button>
          <Button to="/careers/apply">Apply Now</Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
