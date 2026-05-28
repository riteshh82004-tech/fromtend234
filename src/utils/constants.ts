import type { NavItem } from '../types'
import { company } from '../data/company'

export const COMPANY_NAME = company.name
export const COMPANY_SHORT_NAME = company.shortName
export const COMPANY_TAGLINE = company.tagline
export const COMPANY_INDUSTRY = company.industry
export const COMPANY_DIRECTOR = company.director
export const COMPANY_DIRECTOR_ROLE = company.directorRole
export const COMPANY_GST = company.gst
export const COMPANY_WEBSITE = company.website

export const CONTACT_EMAIL = 'info@agarwalelectropower.com'
export const CAREERS_EMAIL = 'careers@agarwalelectropower.com'
export const CONTACT_PHONE = '+91 89492 09644'
export const CONTACT_ADDRESS = company.address

export const INTERNSHIP_ROLE = company.internshipRole
export const INTERNSHIP_PROGRAM = company.internshipProgram

export const INTERNSHIP_START = '1 February 2026'
export const INTERNSHIP_END = '30 March 2026'
export const INTERNSHIP_DURATION_LABEL = '1 February 2026 – 30 March 2026'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
]

export const FOOTER_LINKS = {
  company: [
    { label: 'About Company', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Careers', path: '/careers' },
  ],
  support: [
    { label: 'Contact', path: '/contact' },
    { label: 'Request Quote', path: '/contact' },
    { label: 'Certificate Verification', path: '/verify' },
  ],
}

export const STATS = [
  { value: '51-100', label: 'Employees' },
  { value: 'ISO Certified', label: 'ISO 9001:2000' },
  { value: '25-100 Cr', label: 'Turnover' },
  { value: 'Since 2013', label: 'Established' },
]

export const ABOUT_INTRO = [
  `${company.name} is a Jaipur-based industrial electrical products company specializing in premium electrical switches, MCB boxes, cables, wires, LED products, conduit pipes, air coolers, and industrial accessories under our flagship brand, ${company.brand}.`,
  `Operating as a Trader - Wholesaler/Distributor from our facility at ${company.addressLines[0]}, Sitapura Extension, Jaipur, we are an ${company.certification} certified entity committed to the highest quality, safety, and durability standards.`,
  `Established in 2013, we serve a vast network of commercial and retail clients, combining distribution excellence with hands-on learning via the ${company.internshipProgram} to shape the future of industrial finance and operations.`,
]

export const COMPANY_VALUES = [
  {
    title: 'Quality Electropower Products',
    description:
      'We source and distribute reliable power tools and electrical equipment meeting industrial standards.',
  },
  {
    title: 'Distribution Excellence',
    description:
      'Our network serves fabricators, workshops, and retail channels with timely supply and technical support.',
  },
  {
    title: 'Professional Development',
    description:
      'Structured on-site internships—including Assistant Accountant roles—build career-ready talent.',
  },
]

export const COMPANY_MILESTONES = [
  {
    level: 1,
    title: 'Foundation',
    description: `${company.shortName} incorporated as a private limited electropower distribution company in Rajasthan.`,
  },
  {
    level: 2,
    title: 'Industrial Expansion',
    description:
      'Established and expanded operations at Ramchandrapura Industrial Area, Sitapura Extension, Jaipur.',
  },
  {
    level: 3,
    title: 'GST Compliance',
    description: `Registered under GST (${company.gst}) for industrial equipment and power tools distribution.`,
  },
  {
    level: 4,
    title: 'Talent & Verification',
    description: `Launched ${company.internshipProgram} with digital certificate verification for interns.`,
  },
]

export const INTERNSHIP_BENEFITS = [
  'On-site training at our Sitapura Extension, Jaipur facility',
  'Hands-on experience in accounting, billing, and inventory documentation',
  'Mentorship from finance and operations leadership',
  'Exposure to power tools distribution and industrial workflows',
  'Certificate upon successful completion with QR verification',
]

export const INTERNSHIP_STEPS = [
  {
    step: 1,
    title: 'Submit Application',
    description: 'Complete the online application with your academic details.',
  },
  {
    step: 2,
    title: 'Interview',
    description: 'Shortlisted candidates meet our HR and finance team in Jaipur.',
  },
  {
    step: 3,
    title: 'Onboarding',
    description: 'Orientation at G1-2333, Ramchandrapura Industrial Area, Sitapura.',
  },
  {
    step: 4,
    title: 'On-Site Assignment',
    description: `${company.internshipRole} duties through 30 March 2026.`,
  },
]

export const FAQ_ITEMS = [
  {
    question: 'What is the internship role?',
    answer: `Interns are placed as ${company.internshipRole} at our Jaipur headquarters.`,
  },
  {
    question: 'What are the internship dates?',
    answer: `The program runs from ${INTERNSHIP_START} to ${INTERNSHIP_END}.`,
  },
  {
    question: 'Where is the company located?',
    answer: company.address,
  },
  {
    question: 'How do I verify a certificate?',
    answer:
      'Visit the Certificate Verification page from the Internship Program section, or scan the QR code on your certificate.',
  },
]
