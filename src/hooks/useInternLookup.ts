import { useEffect, useState } from 'react'
import { getInternById } from '../data/interns'
import type { InternRecord } from '../types/intern'

type LookupState =
  | { status: 'loading' }
  | { status: 'found'; intern: InternRecord }
  | { status: 'not_found' }

export function useInternLookup(id: string | undefined) {
  const [state, setState] = useState<LookupState>({ status: 'loading' })

  useEffect(() => {
    if (!id) {
      setState({ status: 'not_found' })
      return
    }

    setState({ status: 'loading' })
    const timer = setTimeout(() => {
      const intern = getInternById(id) as InternRecord | undefined
      if (intern) {
        setState({ status: 'found', intern })
      } else {
        setState({ status: 'not_found' })
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [id])

  return state
}
