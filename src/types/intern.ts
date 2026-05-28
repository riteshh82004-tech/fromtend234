export type InternStatus = 'Verified' | 'Pending' | 'Revoked'

export interface InternRecord {
  slug: string
  certificateId: string
  status: InternStatus
  name: string
  fatherName: string
  dob: string
  mobile?: string
  email?: string
  address: string
  role: string
  internshipStart: string
  internshipEnd: string
  internshipDuration: string
  photo: string
  signature: string
  program: string
  issuedAt: string
}
