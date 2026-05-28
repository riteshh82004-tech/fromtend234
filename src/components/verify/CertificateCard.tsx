import type { InternRecord } from "../../types/intern";
import { COMPANY_NAME } from "../../utils/constants";
import { CertificateQRCode } from "./CertificateQRCode";
import { CompanyVerificationNote } from "./CompanyVerificationNote";
import { InternDetailsSection } from "./InternDetailsSection";
import { InternshipDetailsSection } from "./InternshipDetailsSection";
import { VerificationStatusSection } from "./VerificationStatusSection";
import { VerifiedBadge } from "./VerifiedBadge";

interface CertificateCardProps {
  intern: InternRecord;
}

export function CertificateCard({ intern }: CertificateCardProps) {
  const verifiedDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="animate-fade-in mx-auto max-w-4xl px-3 sm:px-4 py-6 sm:py-8 md:py-12 safe-area">
      {/* Certificate header */}
      <header className="mb-6 sm:mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          <img src="/logo.png" alt="" className="h-10 sm:h-12 w-10 sm:w-12" />
          <div className="text-left">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest">
              Official Certificate
            </p>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              {COMPANY_NAME}
            </h1>
          </div>
        </div>
        <VerifiedBadge />
        <p className="text-base-content/60 mt-3 sm:mt-4 text-xs sm:text-sm">
          Digital Internship Completion Certificate
        </p>
      </header>

      {/* Main certificate body */}
      <div className="certificate-border overflow-hidden rounded-xl sm:rounded-2xl border-2 border-base-300 bg-base-100 shadow-xl">
        {/* Decorative top band */}
        <div className="bg-primary h-1.5 sm:h-2" aria-hidden />

        <div className="p-4 sm:p-6 md:p-10">
          {/* Hero row: photo, name, QR */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 border-b border-base-300 pb-6 sm:pb-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:items-start">
              <div className="ring-primary/20 overflow-hidden rounded-lg sm:rounded-xl border-2 border-base-300 shadow-md ring-4 flex-shrink-0">
                <img
                  src={intern.photo}
                  alt={`Photo of ${intern.name}`}
                  className="h-40 sm:h-44 w-32 sm:w-36 object-cover bg-base-200"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-base-content/60 text-xs sm:text-sm uppercase tracking-wide">
                  This is to certify that
                </p>
                <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-bold break-words">
                  {intern.name}
                </h2>
                <p className="text-primary mt-2 font-semibold text-sm">
                  {intern.role}
                </p>
                <p className="text-base-content/70 mt-1 text-xs sm:text-sm">
                  {intern.program}
                </p>
                <p className="text-base-content/50 mt-3 font-mono text-[11px] sm:text-xs break-all">
                  ID: {intern.certificateId}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <CertificateQRCode slug={intern.slug} />
            </div>
          </div>

          {/* Signature row */}
          <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 py-6 sm:py-8 sm:flex-row">
            <div className="text-center sm:text-left w-full sm:w-auto">
              <p className="text-base-content/60 mb-2 text-xs uppercase tracking-wide">
                Intern Signature
              </p>
              <img
                src={intern.signature}
                alt={`Signature of ${intern.name}`}
                className="mx-auto h-14 sm:h-16 w-40 sm:w-48 object-contain sm:mx-0"
              />
            </div>
            <div className="text-center sm:text-right w-full sm:w-auto">
              <p className="text-base-content/60 mb-2 text-xs uppercase tracking-wide">
                Authorized Signatory
              </p>
              <img
                src="/assets/company-signature.jpeg"
                alt="Company authorized signature"
                className="mx-auto h-14 sm:h-16 w-40 sm:w-48 object-contain sm:ml-auto sm:mr-0"
              />
              <p className="text-base-content/50 mt-2 text-xs">
                {COMPANY_NAME}
              </p>
            </div>
          </div>

          {/* Detail sections */}
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <InternDetailsSection intern={intern} />
            <InternshipDetailsSection intern={intern} />
          </div>

          <div className="mt-4 sm:mt-5 space-y-4 sm:space-y-5">
            <VerificationStatusSection
              intern={intern}
              verifiedAt={verifiedDate}
            />
            <CompanyVerificationNote />
          </div>
        </div>

        <div className="bg-base-200 border-t border-base-300 px-4 sm:px-6 py-2.5 sm:py-3 text-center">
          <p className="text-base-content/50 text-xs">
            Document generated electronically · Valid only when status shows
            Verified
          </p>
        </div>
      </div>
    </article>
  );
}
