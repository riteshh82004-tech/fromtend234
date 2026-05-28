import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import type { InternshipApplicationForm } from '../types'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { company } from '../data/company'
import { CAREERS_EMAIL, INTERNSHIP_PROGRAM } from '../utils/constants'

const initialForm: InternshipApplicationForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  university: '',
  major: '',
  graduationYear: '',
  linkedIn: '',
  coverLetter: '',
}

export function InternshipApply() {
  const [form, setForm] = useState<InternshipApplicationForm>(initialForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const update =
    (field: keyof InternshipApplicationForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1400))
    setLoading(false)
    setSubmitted(true)
    setForm(initialForm)
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
        <AnimatedSection animation="fade" className="text-center">
          <div className="bg-success/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-success h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold">Application Received</h1>
          <p className="text-base-content/70 mx-auto mt-4 max-w-md">
            Thank you for applying to {company.name}. Our HR team will review your application and
            respond within 5–7 business days.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/careers" className="btn btn-outline">
              Back to Careers
            </Link>
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
          </div>
        </AnimatedSection>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <AnimatedSection animation="fade">
        <nav className="text-base-content/60 mb-6 text-sm">
          <Link to="/careers" className="link link-hover">
            Careers
          </Link>
          <span className="mx-2">/</span>
          <span>Apply</span>
        </nav>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Internship Application
        </h1>
        <p className="text-base-content/70 mt-3 leading-relaxed">
          Apply for {INTERNSHIP_PROGRAM}. All fields marked with * are required.
        </p>
      </AnimatedSection>

      <AnimatedSection delayIndex={1} className="mt-10">
        <form onSubmit={handleSubmit} className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body gap-6">
            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold">Personal Information</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="form-control">
                  <label className="label" htmlFor="firstName">
                    <span className="label-text">First Name *</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="input input-bordered w-full"
                    value={form.firstName}
                    onChange={update('firstName')}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="lastName">
                    <span className="label-text">Last Name *</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="input input-bordered w-full"
                    value={form.lastName}
                    onChange={update('lastName')}
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="form-control">
                  <label className="label" htmlFor="email">
                    <span className="label-text">Email *</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input input-bordered w-full"
                    value={form.email}
                    onChange={update('email')}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="phone">
                    <span className="label-text">Phone *</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="input input-bordered w-full"
                    value={form.phone}
                    onChange={update('phone')}
                    required
                    disabled={loading}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold">Education</legend>
              <div className="form-control">
                <label className="label" htmlFor="university">
                  <span className="label-text">University / College *</span>
                </label>
                <input
                  id="university"
                  type="text"
                  className="input input-bordered w-full"
                  value={form.university}
                  onChange={update('university')}
                  required
                  disabled={loading}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="form-control">
                  <label className="label" htmlFor="major">
                    <span className="label-text">Major / Field (e.g. B.Com, Accounting) *</span>
                  </label>
                  <input
                    id="major"
                    type="text"
                    className="input input-bordered w-full"
                    value={form.major}
                    onChange={update('major')}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-control">
                  <label className="label" htmlFor="graduationYear">
                    <span className="label-text">Expected Graduation *</span>
                  </label>
                  <select
                    id="graduationYear"
                    className="select select-bordered w-full"
                    value={form.graduationYear}
                    onChange={update('graduationYear')}
                    required
                    disabled={loading}
                  >
                    <option value="" disabled>
                      Select year
                    </option>
                    {['2025', '2026', '2027', '2028', '2029'].map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="linkedIn">
                  <span className="label-text">LinkedIn Profile</span>
                </label>
                <input
                  id="linkedIn"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="input input-bordered w-full"
                  value={form.linkedIn}
                  onChange={update('linkedIn')}
                  disabled={loading}
                />
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold">Application Statement</legend>
              <div className="form-control">
                <label className="label" htmlFor="coverLetter">
                  <span className="label-text">
                    Why are you interested in Agarwal Electropower and this internship? *
                  </span>
                </label>
                <textarea
                  id="coverLetter"
                  className="textarea textarea-bordered h-36 w-full"
                  placeholder="Tell us about your interest in accounting and our electropower business…"
                  value={form.coverLetter}
                  onChange={update('coverLetter')}
                  required
                  disabled={loading}
                  minLength={100}
                />
                <label className="label">
                  <span className="label-text-alt text-base-content/50">Minimum 100 characters</span>
                </label>
              </div>
            </fieldset>

            <p className="text-base-content/50 text-xs">
              By submitting, you agree to our processing of your data for recruitment purposes.
              Questions? Email{' '}
              <a href={`mailto:${CAREERS_EMAIL}`} className="link">
                {CAREERS_EMAIL}
              </a>
            </p>

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Submitting…
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
              <Link to="/careers" className="btn btn-ghost">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </AnimatedSection>
    </div>
  )
}
