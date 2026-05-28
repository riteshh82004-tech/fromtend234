import { company } from '../data/company'
import { MilestoneLevels } from '../components/about/MilestoneLevels'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Card } from '../components/ui/Card'
import { SectionHeading } from '../components/ui/SectionHeading'
import {
  ABOUT_INTRO,
  COMPANY_GST,
  COMPANY_NAME,
  COMPANY_VALUES,
  COMPANY_WEBSITE,
} from '../utils/constants'

export function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <AnimatedSection animation="fade">
        <SectionHeading
          title={`About ${COMPANY_NAME}`}
          subtitle={company.industry}
        />
      </AnimatedSection>

      <AnimatedSection delayIndex={1} className="mb-16">
        <div className="prose prose-lg max-w-none">
          {ABOUT_INTRO.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-base-content/80 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delayIndex={2} className="mb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <div className="card-body">
              <h3 className="card-title">Leadership</h3>
              <p className="text-2xl font-bold">{company.director}</p>
              <p className="text-base-content/70">{company.directorRole}</p>
              <p className="text-base-content/60 mt-4 text-sm">{company.name}</p>
            </div>
          </Card>
          <Card>
            <div className="card-body">
              <h3 className="card-title">Registered Office</h3>
              <address className="text-base-content/80 space-y-1 text-sm not-italic">
                {company.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
              <div className="divider my-2" />
              <p className="text-sm">
                <span className="font-medium">GSTIN:</span>{' '}
                <span className="font-mono">{COMPANY_GST}</span>
              </p>
              <p className="text-sm">
                <a href={COMPANY_WEBSITE} className="link link-primary" target="_blank" rel="noopener noreferrer">
                  {company.website.replace('https://', '')}
                </a>
              </p>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <AnimatedSection delayIndex={2} className="mb-16">
        <h3 className="mb-8 text-center text-2xl font-bold">Our Values</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {COMPANY_VALUES.map((value) => (
            <Card key={value.title} hover>
              <div className="card-body">
                <h4 className="card-title">{value.title}</h4>
                <p className="text-base-content/70">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delayIndex={3}>
        <SectionHeading
          title="Company Milestones"
          subtitle="Our growth path — one level at a time."
          className="mb-10"
        />
        <MilestoneLevels />
      </AnimatedSection>
    </div>
  )
}
