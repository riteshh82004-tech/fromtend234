import type { InternRecord } from '../types/intern'

export declare const interns: InternRecord[]
export declare function getInternById(id: string): InternRecord | undefined
export declare function getVerificationUrl(slug: string): string
export declare const COMPANY_VERIFICATION_NOTE: string
export declare const INTERNSHIP_PERIOD: {
  start: string
  end: string
  label: string
}
