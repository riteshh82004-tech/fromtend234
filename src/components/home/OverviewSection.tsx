import { company } from "../../data/company";
import { AnimatedSection } from "../ui/AnimatedSection";
import { Card } from "../ui/Card";

export function OverviewSection() {
  return (
    <AnimatedSection className="bg-base-200 py-10 sm:py-16 md:py-24 border-b border-base-300 safe-area">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Side: Brand Story & Overview */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <span className="text-primary font-bold uppercase tracking-wider text-xs block">
              Corporate Overview
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-base-content tracking-tight">
              A Trusted Partner in Industrial Electrical Distribution
            </h2>
            <p className="text-base-content/80 text-sm sm:text-base md:text-lg leading-relaxed">
              {company.overview} We are committed to supplying high-grade power
              equipment, residential modules, and transmission items that adhere
              to strict safety regulations.
            </p>
            <p className="text-base-content/70 text-xs sm:text-sm md:text-base leading-relaxed">
              As an established <strong>{company.businessType}</strong>, our
              operation runs from the heart of Jaipur's premier manufacturing
              zone—Ramchandrapura Industrial Area, Sitapura Extension. We bridge
              the gap between quality manufacturing and commercial supply chains
              throughout the region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4">
              <div className="flex gap-2 sm:gap-3">
                <div className="w-5 h-5 rounded-full bg-success/20 text-success flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-base-content">
                    100% Quality Audited
                  </h4>
                  <p className="text-xs text-base-content/60">
                    Strict compliance to fire-retardant and shockproof
                    standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <div className="w-5 h-5 rounded-full bg-success/20 text-success flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-base-content">
                    Bulk Supply Logistics
                  </h4>
                  <p className="text-xs text-base-content/60">
                    Wholesale distribution with optimized delivery times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Corporate Credentials Card */}
          <div className="lg:col-span-5">
            <Card className="bg-base-100 border border-base-300 p-4 sm:p-6 md:p-8 shadow-xl relative overflow-hidden rounded-lg sm:rounded-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />

              <h3 className="text-sm sm:text-base font-bold text-base-content mb-4 sm:mb-6 border-b border-base-300 pb-2 sm:pb-3 uppercase tracking-wider text-xs">
                Corporate Profile
              </h3>

              <div className="space-y-2.5 sm:space-y-4 text-xs sm:text-sm">
                <div className="flex justify-between items-center border-b border-base-200 pb-1.5 sm:pb-2">
                  <span className="text-base-content/50 font-medium">
                    Brand Name
                  </span>
                  <span className="font-extrabold text-primary">
                    {company.brand}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-base-200 pb-1.5 sm:pb-2">
                  <span className="text-base-content/50 font-medium">
                    Business Type
                  </span>
                  <span className="font-bold text-base-content">
                    {company.businessType}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-base-200 pb-1.5 sm:pb-2">
                  <span className="text-base-content/50 font-medium">
                    Certification
                  </span>
                  <span className="badge badge-success badge-sm font-bold text-white uppercase text-[10px]">
                    {company.certification}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-base-200 pb-1.5 sm:pb-2">
                  <span className="text-base-content/50 font-medium">
                    Corporate Director
                  </span>
                  <span className="font-bold text-base-content">
                    {company.director}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-base-200 pb-1.5 sm:pb-2">
                  <span className="text-base-content/50 font-medium">CIN</span>
                  <span className="font-mono text-xs font-bold text-base-content break-all">
                    {company.cin}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base-content/50 font-medium">
                    GSTIN
                  </span>
                  <span className="font-mono text-xs font-bold text-base-content break-all">
                    {company.gst}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
