import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { COMPANY_NAME } from '../utils/constants'

interface VerifyNotFoundProps {
  attemptedId?: string
}

export function VerifyNotFound({ attemptedId }: VerifyNotFoundProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
      <AnimatedSection animation="fade" className="text-center">
        <div className="bg-error/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-error h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-bold">Certificate Not Found</h1>
        <p className="text-base-content/70 mx-auto mt-4 max-w-md">
          {attemptedId ? (
            <>
              No verified certificate exists for{' '}
              <span className="font-mono font-semibold">{attemptedId}</span> in the{' '}
              {COMPANY_NAME} registry.
            </>
          ) : (
            <>The requested certificate could not be located in our registry.</>
          )}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/verify" className="btn btn-primary">
            Search Again
          </Link>
          <Link to="/careers" className="btn btn-outline">
            Careers
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}
