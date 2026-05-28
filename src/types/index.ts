export type ProductCategory = string

export interface Product {
  id: number | string
  name: string
  subCategory: string
  category: string
  description: string
  image: string
  url: string
  specs?: string
  badge?: string
  featured?: boolean
  brand?: string
}

export interface NavItem {
  label: string
  path: string
}

export interface VerifyResponse {
  valid: boolean
  certificateId: string
  holderName?: string
  program?: string
  issuedAt?: string
}

export interface VerifyRequest {
  certificateId: string
  lastName?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface InternshipApplicationForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  university: string
  major: string
  graduationYear: string
  linkedIn: string
  coverLetter: string
}

export type VerifyStatus = 'idle' | 'loading' | 'success' | 'error'

export type ThemeName = 'corporate' | 'business'
