import { useParams } from 'react-router-dom'
import { CertificateCard } from '../components/verify/CertificateCard'
import { CertificateSkeleton } from '../components/verify/CertificateSkeleton'
import { useInternLookup } from '../hooks/useInternLookup'
import { VerifyNotFound } from './VerifyNotFound'

export function VerifyCertificate() {
  const { id } = useParams<{ id: string }>()
  const state = useInternLookup(id)

  if (state.status === 'loading') {
    return <CertificateSkeleton />
  }

  if (state.status === 'not_found') {
    return <VerifyNotFound attemptedId={id} />
  }

  return <CertificateCard intern={state.intern} />
}
