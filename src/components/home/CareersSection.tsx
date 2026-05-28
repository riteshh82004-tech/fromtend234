import { company } from "../../data/company";
import { INTERNSHIP_DURATION_LABEL } from "../../utils/constants";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Button } from "../ui/Button";

export function CareersSection() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-3 sm:px-4 py-10 sm:py-16 md:py-20 safe-area">
      <div className="bg-base-200 flex flex-col items-start justify-between gap-4 sm:gap-6 rounded-lg sm:rounded-xl border border-base-300 p-4 sm:p-6 md:p-8 md:p-10 md:flex-row md:items-center">
        <div className="max-w-xl">
          <span className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Internship Program
          </span>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold">
            {company.internshipProgram}
          </h2>
          <p className="text-base-content/70 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
            {INTERNSHIP_DURATION_LABEL} · On-site at our Sitapura Extension
            facility, Jaipur.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
          <Button
            to="/careers"
            variant="outline"
            className="flex-1 sm:flex-initial"
          >
            Program Details
          </Button>
          <Button to="/careers/apply" className="flex-1 sm:flex-initial">
            Apply Now
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
