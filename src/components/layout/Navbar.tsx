import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { company } from "../../data/company";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [careerDropdownOpen, setCareerDropdownOpen] = useState(false);

  // Handle ESC key to close menu and prevent background scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2.5 sm:py-2 text-sm font-medium transition-all min-h-[48px] sm:min-h-auto flex items-center ${
      isActive
        ? "bg-primary text-primary-content font-bold shadow-sm"
        : "text-base-content/80 hover:bg-base-200 hover:text-base-content"
    }`;

  const dropdownItemClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-4 py-3 sm:py-2 text-sm font-medium transition-all block min-h-[48px] sm:min-h-auto flex items-center ${
      isActive
        ? "bg-primary/10 text-primary font-bold"
        : "text-base-content/85 hover:bg-base-200 hover:text-base-content"
    }`;

  return (
    <header className="bg-base-100/90 sticky top-0 z-50 border-b border-base-300 backdrop-blur-md shadow-sm safe-area">
      <div className="navbar mx-auto max-w-7xl px-3 sm:px-4 h-16 sm:h-auto">
        <div className="navbar-start">
          {/* Mobile Hamburger Menu Trigger with Animation */}
          <button
            type="button"
            className="btn btn-ghost btn-square lg:hidden mr-1 min-h-[48px] w-12 h-12 flex items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* Hamburger to X Animation */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-6 h-6 transition-all duration-300 ease-out"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen
                    ? "rotate(90deg) scale(0.8)"
                    : "rotate(0deg) scale(1)",
                  pointerEvents: menuOpen ? "none" : "auto",
                }}
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* X Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-6 h-6 transition-all duration-300 ease-out"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen
                    ? "rotate(0deg) scale(1)"
                    : "rotate(-90deg) scale(0.8)",
                  pointerEvents: menuOpen ? "auto" : "none",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>

          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-2 px-1 py-1 hover:opacity-95 transition-opacity"
          >
            <img
              src="/logo.png"
              alt={`${company.name} logo`}
              className="h-6 w-6 flex-shrink-0"
            />

            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-black tracking-tight leading-tight text-base-content">
                {company.brand}
              </span>
              <span className="text-[8px] sm:text-[9px] font-bold text-base-content/50 uppercase tracking-widest mt-0.5">
                Agarwal Electropower
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <nav className="flex items-center gap-1.5">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/products" className={linkClass}>
              Products
            </NavLink>

            {/* Career Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCareerDropdownOpen(true)}
              onMouseLeave={() => setCareerDropdownOpen(false)}
            >
              <button
                type="button"
                className="rounded-lg px-3 py-2 text-sm font-medium transition-all text-base-content/80 hover:bg-base-200 hover:text-base-content flex items-center gap-1"
              >
                Career
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 mt-0.5 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{
                    transform: careerDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {careerDropdownOpen && (
                <div className="absolute left-0 mt-0 w-56 rounded-xl border border-base-300 bg-base-100 shadow-xl py-2 z-50 animate-fade-in">
                  <NavLink
                    to="/careers"
                    className={dropdownItemClass}
                    onClick={() => setCareerDropdownOpen(false)}
                  >
                    Internship Program
                  </NavLink>
                  <NavLink
                    to="/verify"
                    className={dropdownItemClass}
                    onClick={() => setCareerDropdownOpen(false)}
                  >
                    Certificate Verification
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={linkClass}>
              Contact Us
            </NavLink>
          </nav>
        </div>

        {/* Action Button & Theme Toggle */}
        <div className="navbar-end gap-2 sm:gap-2.5">
          <ThemeToggle />
          <Link
            to="/contact"
            className="btn btn-primary btn-sm sm:btn-md rounded-lg font-bold shadow-md hover:shadow-lg transition-all hidden sm:inline-flex min-h-[44px]"
          >
            Get Quotes
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Popup Modal */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden flex items-start justify-end pt-16 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onClick={() => setMenuOpen(false)}
        >
          {/* Backdrop with smooth transition */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ease-out"
            style={{
              animation: menuOpen
                ? "fadeIn 300ms ease-out"
                : "fadeOut 300ms ease-out",
            }}
            onClick={() => setMenuOpen(false)}
          />

          {/* Popup Box */}
          <nav
            className="relative bg-base-100 rounded-2xl border border-base-300/50 shadow-2xl w-full max-w-sm overflow-hidden"
            style={{
              animation: menuOpen
                ? "popupSlideDown 350ms cubic-bezier(0.16, 1, 0.3, 1)"
                : "popupSlideUp 300ms ease-in",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close Button */}
            <div className="bg-base-100/95 backdrop-blur-md border-b border-base-300/30 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt={company.name} className="h-5 w-5" />
                <span className="font-bold text-base tracking-tight">Menu</span>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-sm btn-square rounded-lg min-h-[40px] w-10 h-10 transition-all duration-300 hover:bg-base-200"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-1 px-4 py-4 max-h-[calc(100vh-280px)] overflow-y-auto">
              <NavLink
                to="/"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/products"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                Products
              </NavLink>

              {/* Mobile Submenu for Career */}
              <div className="border-l-2 border-base-300/50 pl-3 py-2 my-1 flex flex-col gap-1">
                <span className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest block px-2 mb-1">
                  Career
                </span>
                <NavLink
                  to="/careers"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Internship Program
                </NavLink>
                <NavLink
                  to="/verify"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Certificate Verification
                </NavLink>
              </div>

              <NavLink
                to="/contact"
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>

            {/* Action Button */}
            <div className="border-t border-base-300/30 px-4 py-4 bg-base-100/50 backdrop-blur-sm">
              <Link
                to="/contact"
                className="btn btn-primary w-full rounded-xl font-bold shadow-md min-h-[44px] text-sm transition-all duration-300 hover:shadow-lg active:scale-95"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            {/* Animations */}
            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }

              @keyframes fadeOut {
                from {
                  opacity: 1;
                }
                to {
                  opacity: 0;
                }
              }

              @keyframes popupSlideDown {
                from {
                  opacity: 0;
                  transform: translateY(-20px) scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }

              @keyframes popupSlideUp {
                from {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
                to {
                  opacity: 0;
                  transform: translateY(-20px) scale(0.95);
                }
              }
            `}</style>
          </nav>
        </div>
      )}
    </header>
  );
}
