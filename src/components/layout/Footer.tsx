import { Link } from 'react-router-dom'
import { company } from '../../data/company'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral text-neutral-content border-t border-primary/20">
      {/* Top Footer Grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt={`${company.name} logo`} className="h-8 w-8" />
            <span className="text-xl font-bold leading-tight tracking-tight text-white">
              {company.brand}
            </span>
          </div>
          <p className="text-neutral-content/80 text-xs font-semibold leading-relaxed">
            {company.name}
          </p>
          <p className="text-neutral-content/60 text-xs leading-relaxed">
            {company.overview}
          </p>
          <div className="space-y-1 font-mono text-[10px] text-neutral-content/50">
            <p>GSTIN: {company.gst}</p>
            <p>CIN: {company.cin}</p>
            <p>Certification: {company.certification}</p>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-primary/20 pb-2">
            Company
          </h3>
          <ul className="space-y-2.5 text-xs text-neutral-content/70">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary transition-colors">
                Product Catalogue
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Inquiry & Quotes
              </Link>
            </li>
          </ul>
        </div>

        {/* Career & Verification */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-primary/20 pb-2">
            Careers
          </h3>
          <ul className="space-y-2.5 text-xs text-neutral-content/70">
            <li>
              <Link to="/careers" className="hover:text-primary transition-colors">
                Internship Program
              </Link>
            </li>
            <li>
              <Link to="/careers/apply" className="hover:text-primary transition-colors">
                Apply Online
              </Link>
            </li>
            <li>
              <Link to="/verify" className="hover:text-primary transition-colors">
                Certificate Verification
              </Link>
            </li>
            <li>
              <span className="badge badge-primary badge-xs rounded text-[9px] font-bold p-1 bg-primary/20 border-primary text-primary">
                Digital Verification Active
              </span>
            </li>
          </ul>
        </div>

        {/* Contact details */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-primary/20 pb-2">
            Head Office
          </h3>
          <address className="space-y-3 text-xs text-neutral-content/70 not-italic">
            <p className="leading-relaxed">
              {company.address}
            </p>
            <p className="border-t border-neutral-content/10 pt-2">
              <strong>Director:</strong> {company.director}
            </p>
            <p>
              <strong>Contact:</strong>{' '}
              <a href={`tel:+91${company.phone}`} className="hover:text-primary transition-colors font-mono">
                +91 {company.phone}
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@agarwalelectropower.com" className="hover:text-primary transition-colors font-mono">
                info@agarwalelectropower.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-neutral-focus border-t border-neutral-content/10 py-5 text-center text-xs text-neutral-content/50">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p className="text-[10px] text-neutral-content/40">
            Brand MILAN POWER · Digitally Verified Verification System
          </p>
        </div>
      </div>
    </footer>
  )
}
