import { Link } from "react-router-dom";
import { company } from "../../data/company";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content border-t border-primary/20 safe-area">
      {/* Top Footer Grid */}
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-3 sm:px-4 py-8 sm:py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt={`${company.name} logo`}
              className="h-8 w-8 flex-shrink-0"
            />
            <span className="text-lg sm:text-xl font-bold leading-tight tracking-tight text-white">
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
            <p className="break-all">GSTIN: {company.gst}</p>
            <p className="break-all">CIN: {company.cin}</p>
            <p>Certification: {company.certification}</p>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div>
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-primary/20 pb-2">
            Company
          </h3>
          <ul className="space-y-3 sm:space-y-2.5 text-xs text-neutral-content/70">
            <li>
              <Link
                to="/"
                className="hover:text-primary transition-colors py-1.5 sm:py-0 block"
              >
                Home Page
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-primary transition-colors py-1.5 sm:py-0 block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-primary transition-colors py-1.5 sm:py-0 block"
              >
                Product Catalogue
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors py-1.5 sm:py-0 block"
              >
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
          <ul className="space-y-3 sm:space-y-2.5 text-xs text-neutral-content/70">
            <li>
              <Link
                to="/careers"
                className="hover:text-primary transition-colors py-1.5 sm:py-0 block"
              >
                Internship Program
              </Link>
            </li>
            <li>
              <Link
                to="/careers/apply"
                className="hover:text-primary transition-colors py-1.5 sm:py-0 block"
              >
                Apply Online
              </Link>
            </li>
            <li>
              <Link
                to="/verify"
                className="hover:text-primary transition-colors py-1.5 sm:py-0 block"
              >
                Certificate Verification
              </Link>
            </li>
            <li>
              <span className="badge badge-primary badge-xs rounded text-[9px] font-bold p-1 bg-primary/20 border-primary text-primary inline-block">
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
            <p className="leading-relaxed break-words">{company.address}</p>
            <p className="border-t border-neutral-content/10 pt-2">
              <strong className="block">Director:</strong>
              <span className="block">{company.director}</span>
            </p>
            <p>
              <strong className="block">Contact:</strong>{" "}
              <a
                href={`tel:+91${company.phone}`}
                className="hover:text-primary transition-colors font-mono py-1.5 sm:py-0 block"
              >
                +91 {company.phone}
              </a>
            </p>
            <p>
              <strong className="block">Email:</strong>{" "}
              <a
                href="mailto:info@agarwalelectropower.com"
                className="hover:text-primary transition-colors font-mono break-all py-1.5 sm:py-0 block"
              >
                info@agarwalelectropower.com
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-neutral-focus border-t border-neutral-content/10 py-5 text-center text-xs text-neutral-content/50 safe-area">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2">
          <p className="break-words">
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="text-[10px] text-neutral-content/40">
            Brand MILAN POWER · Digitally Verified Verification System
          </p>
        </div>
      </div>
    </footer>
  );
}
