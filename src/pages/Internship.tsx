import { Link } from 'react-router-dom'
import { company } from '../data/company'
import {
  FAQ_ITEMS,
  INTERNSHIP_BENEFITS,
  INTERNSHIP_DURATION_LABEL,
  INTERNSHIP_ROLE,
  INTERNSHIP_STEPS,
} from '../utils/constants'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Internship() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <AnimatedSection animation="fade">
        <SectionHeading
          title="Internship Program"
          subtitle={`${company.internshipProgram} · ${INTERNSHIP_DURATION_LABEL}`}
        />
      </AnimatedSection>

      <AnimatedSection delayIndex={1} className="mb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Program Overview</h3>
            <p className="text-base-content/70 leading-relaxed">
              {company.name} offers an on-site internship for aspiring accounting professionals.
              Interns work at our registered office in Ramchandrapura Industrial Area, Sitapura
              Extension, Jaipur, supporting finance, billing, inventory, and distribution
              documentation for our power tools and electrical equipment business.
            </p>
            <h3 className="mb-4 mt-8 text-xl font-semibold">Role</h3>
            <p className="text-primary mb-4 font-semibold">{INTERNSHIP_ROLE}</p>
            <h3 className="mb-4 text-xl font-semibold">Eligibility</h3>
            <ul className="text-base-content/70 list-inside list-disc space-y-2">
              <li>Students or graduates in Commerce, Accounting, or BBA</li>
              <li>Strong attention to detail and MS Excel skills</li>
              <li>Available for full-time on-site work in Jaipur</li>
              <li>Commitment for the full program duration</li>
            </ul>
          </div>
          <Card>
            <div className="card-body">
              <h3 className="card-title">What You&apos;ll Gain</h3>
              <ul className="space-y-3">
                {INTERNSHIP_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex gap-2 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="card-actions mt-6 flex flex-col gap-2">
                <Button to="/careers/apply" className="btn-wide">
                  Apply for Internship
                </Button>
                <Link to="/verify" className="link link-primary text-center text-sm">
                  Certificate Verification →
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection delayIndex={2} className="mb-16">
        <h3 className="mb-8 text-center text-2xl font-semibold">How It Works</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INTERNSHIP_STEPS.map((step) => (
            <Card key={step.step} hover>
              <div className="card-body items-center text-center">
                <div className="bg-primary text-primary-content flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                  {step.step}
                </div>
                <h4 className="mt-3 font-semibold">{step.title}</h4>
                <p className="text-base-content/60 text-sm">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delayIndex={3} className="mb-16 text-center">
        <p className="text-base-content/60 mb-6 text-sm">
          Program director: {company.director}, {company.directorRole}
        </p>
        <Button to="/careers/apply">Apply Now</Button>
      </AnimatedSection>

      <AnimatedSection delayIndex={3}>
        <h3 className="mb-6 text-center text-2xl font-semibold">FAQ</h3>
        <div className="mx-auto max-w-3xl divide-y divide-base-300 rounded-xl border border-base-300">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="collapse-arrow collapse">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-medium">{item.question}</div>
              <div className="collapse-content">
                <p className="text-base-content/70 pb-2 text-sm">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
