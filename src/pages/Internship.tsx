import { Link } from "react-router-dom";
import { company } from "../data/company";
import {
  FAQ_ITEMS,
  INTERNSHIP_BENEFITS,
  INTERNSHIP_DURATION_LABEL,
  INTERNSHIP_ROLE,
  INTERNSHIP_STEPS,
} from "../utils/constants";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";

export function Internship() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 py-8 sm:py-12 md:py-16 safe-area">
      <AnimatedSection animation="fade">
        <SectionHeading
          title="Internship Program"
          subtitle={`${company.internshipProgram} · ${INTERNSHIP_DURATION_LABEL}`}
        />
      </AnimatedSection>

      <AnimatedSection delayIndex={1} className="mb-12 sm:mb-14 md:mb-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">
              Program Overview
            </h3>
            <p className="text-base-content/70 leading-relaxed text-sm sm:text-base">
              {company.name} offers an on-site internship for aspiring
              accounting professionals. Interns work at our registered office in
              Ramchandrapura Industrial Area, Sitapura Extension, Jaipur,
              supporting finance, billing, inventory, and distribution
              documentation for our power tools and electrical equipment
              business.
            </p>
            <h3 className="mb-3 sm:mb-4 mt-6 sm:mt-8 text-lg sm:text-xl font-semibold">
              Role
            </h3>
            <p className="text-primary mb-3 sm:mb-4 font-semibold text-sm sm:text-base">
              {INTERNSHIP_ROLE}
            </p>
            <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">
              Eligibility
            </h3>
            <ul className="text-base-content/70 list-inside list-disc space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              <li>Students or graduates in Commerce, Accounting, or BBA</li>
              <li>Strong attention to detail and MS Excel skills</li>
              <li>Available for full-time on-site work in Jaipur</li>
              <li>Commitment for the full program duration</li>
            </ul>
          </div>
          <Card>
            <div className="card-body">
              <h3 className="card-title text-base sm:text-lg">
                What You&apos;ll Gain
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {INTERNSHIP_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex gap-2 text-xs sm:text-sm">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="card-actions mt-4 sm:mt-6 flex flex-col gap-2">
                <Button to="/careers/apply" className="btn-wide">
                  Apply for Internship
                </Button>
                <Link
                  to="/verify"
                  className="link link-primary text-center text-xs sm:text-sm py-2 block"
                >
                  Certificate Verification →
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection delayIndex={2} className="mb-12 sm:mb-14 md:mb-16">
        <h3 className="mb-6 sm:mb-8 text-center text-xl sm:text-2xl font-semibold">
          How It Works
        </h3>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INTERNSHIP_STEPS.map((step) => (
            <Card key={step.step} hover>
              <div className="card-body items-center text-center">
                <div className="bg-primary text-primary-content flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full text-xs sm:text-sm font-bold">
                  {step.step}
                </div>
                <h4 className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base">
                  {step.title}
                </h4>
                <p className="text-base-content/60 text-xs sm:text-sm">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection
        delayIndex={3}
        className="mb-12 sm:mb-14 md:mb-16 text-center"
      >
        <p className="text-base-content/60 mb-4 sm:mb-6 text-xs sm:text-sm">
          Program director: {company.director}, {company.directorRole}
        </p>
        <Button to="/careers/apply">Apply Now</Button>
      </AnimatedSection>

      <AnimatedSection delayIndex={3}>
        <h3 className="mb-4 sm:mb-6 text-center text-xl sm:text-2xl font-semibold">
          FAQ
        </h3>
        <div className="mx-auto max-w-3xl divide-y divide-base-300 rounded-lg sm:rounded-xl border border-base-300">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.question}
              className="collapse-arrow collapse text-sm sm:text-base"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-medium py-3 sm:py-4 px-3 sm:px-4">
                {item.question}
              </div>
              <div className="collapse-content px-3 sm:px-4 pb-3 sm:pb-4">
                <p className="text-base-content/70 text-xs sm:text-sm">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
