/** Mask a 10-digit mobile as +91 89******9644 (first 2 + last 4 visible). */
export function maskMobile(mobile: string): string {
  const digits = mobile.replace(/\D/g, '')
  const ten = digits.length >= 10 ? digits.slice(-10) : digits
  if (ten.length < 6) return `+91 ${ten}`
  const first2 = ten.slice(0, 2)
  const last4 = ten.slice(-4)
  const hidden = ten.length - 6
  return `+91 ${first2}${'*'.repeat(hidden)}${last4}`
}

/** Mask email local part: first 2 + last 4 characters before @. */
export function maskEmail(email: string): string {
  const at = email.indexOf('@')
  if (at <= 0) return email
  const local = email.slice(0, at)
  const domain = email.slice(at)
  if (local.length <= 6) return `${local[0] ?? ''}***${domain}`
  const first2 = local.slice(0, 2)
  const last4 = local.slice(-4)
  const hidden = local.length - 6
  return `${first2}${'*'.repeat(hidden)}${last4}${domain}`
}
