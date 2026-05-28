import janveePhoto from '../assets/interns/janvee-saini.jpeg'
import janveeSignature from '../assets/interns/janvee-saini-signature.jpeg'
import tamannaPhoto from '../assets/interns/tamanna.jpeg'
import tamannaSignature from '../assets/interns/tamanna-signature.jpeg'
import priyankaPhoto from '../assets/interns/priyanka-verma.jpeg'
import priyankaSignature from '../assets/interns/priyanka-verma-signature.jpeg'
import { company } from './company'

/** @typedef {'Verified' | 'Pending' | 'Revoked'} InternStatus */

/**
 * @typedef {Object} InternRecord
 * @property {string} slug
 * @property {string} certificateId
 * @property {InternStatus} status
 * @property {string} name
 * @property {string} fatherName
 * @property {string} dob
 * @property {string} [mobile]
 * @property {string} [email]
 * @property {string} address
 * @property {string} role
 * @property {string} internshipStart
 * @property {string} internshipEnd
 * @property {string} internshipDuration
 * @property {string} photo
 * @property {string} signature
 * @property {string} program
 * @property {string} issuedAt
 */

const INTERNSHIP_DURATION = '120h (4-7pm mon-sat) over 2 months'
const ROLE = company.internshipRole
const PROGRAM = company.internshipProgram

/** @type {InternRecord[]} */
export const interns = [
  {
    slug: 'intrn2026-1845',
    certificateId: 'INTRN20261845',
    status: 'Verified',
    name: 'Janvee Saini',
    fatherName: 'Hanuman Saini',
    dob: '29/10/2006',
    mobile: '8949299644',
    email: 'janhvisaini5@gmail.com',
    address:
      'Plot no. 9 Diwan Ji Ki Kothi, Suraj Nagar, Civil Lines, Sodala, Ajmer Road, Jaipur',
    role: ROLE,
    internshipStart: '1 February 2026',
    internshipEnd: '30 March 2026',
    internshipDuration: INTERNSHIP_DURATION,
    photo: janveePhoto,
    signature: janveeSignature,
    program: PROGRAM,
    issuedAt: '30 March 2026',
  },
  {
    slug: 'intrn2026-6273',
    certificateId: 'INTRN20266273',
    status: 'Verified',
    name: 'Tamanna',
    fatherName: 'Farooq Ali',
    dob: '14/12/2004',
    mobile: '6367485290',
    email: 'tamanna@gmail.com',
    address: 'Bangla No 14, Raj Bhawan Circle, Civil Lines, Jaipur',
    role: ROLE,
    internshipStart: '1 February 2026',
    internshipEnd: '30 March 2026',
    internshipDuration: INTERNSHIP_DURATION,
    photo: tamannaPhoto,
    signature: tamannaSignature,
    program: PROGRAM,
    issuedAt: '30 March 2026',
  },
  {
    slug: 'intrn2026-8916',
    certificateId: 'INTRN20268916',
    status: 'Verified',
    name: 'Priyanka Verma',
    fatherName: 'Mr. Kaluram Verma',
    dob: '3 January 2005',
    mobile: '9166879469',
    email: 'krverma440@gmail.com',
    address: 'Plot no 49, Ambedkar Colony, Ashokpura, Sodala, Jaipur',
    role: ROLE,
    internshipStart: '1 February 2026',
    internshipEnd: '30 March 2026',
    internshipDuration: INTERNSHIP_DURATION,
    photo: priyankaPhoto,
    signature: priyankaSignature,
    program: PROGRAM,
    issuedAt: '30 March 2026',
  },
]

/**
 * @param {string} id Route param: slug or certificate ID (case-insensitive)
 * @returns {InternRecord | undefined}
 */
export function getInternById(id) {
  if (!id) return undefined
  const normalized = id.trim().toLowerCase()
  return interns.find(
    (intern) =>
      intern.slug.toLowerCase() === normalized ||
      intern.certificateId.toLowerCase() === normalized,
  )
}

/**
 * @param {string} slug
 * @returns {string}
 */
export function getVerificationUrl(slug) {
  const base =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'http://localhost:5173'
  return `${base}/verify/${slug}`
}

export const COMPANY_VERIFICATION_NOTE = `This certificate has been digitally verified by Agarwal Electropower Pvt. Ltd.`

export const INTERNSHIP_PERIOD = {
  start: '1 February 2026',
  end: '30 March 2026',
  label: INTERNSHIP_DURATION,
}
