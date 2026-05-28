import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { company } from "../data/company";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { COMPANY_SHORT_NAME } from "../utils/constants";

export function Verify() {
  const [certificateId, setCertificateId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = certificateId.trim();
    if (trimmed) {
      navigate(`/verify/${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <AnimatedSection animation="fade" className="text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <img src="/logo.png" alt="" className="h-12 w-12" />
          <div className="text-left">
            <h1 className="text-2xl font-bold md:text-3xl">
              {COMPANY_SHORT_NAME}
            </h1>
            <p className="text-base-content/60 text-sm">
              Certificate Verification
            </p>
          </div>
        </div>
        <p className="text-base-content/70 mx-auto mt-4 max-w-lg">
          Confirm the authenticity of internship certificates issued by{" "}
          {company.name}. Enter the certificate ID from your credential or scan
          its QR code.
        </p>
      </AnimatedSection>

      <AnimatedSection delayIndex={1} className="mt-10">
        <div className="card bg-base-100 mx-auto max-w-lg border border-base-300 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-lg">Look Up Certificate</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label" htmlFor="certificateId">
                  <span className="label-text font-medium">Certificate ID</span>
                </label>
                <input
                  id="certificateId"
                  type="text"
                  placeholder="e.g. SPT2026001"
                  className="input input-bordered w-full font-mono uppercase"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Verify Certificate
              </button>
            </form>
          </div>
        </div>
        <p className="text-base-content/50 mt-4 text-center text-xs">
          GSTIN {company.gst} · {company.addressLines[1]}
        </p>
      </AnimatedSection>
    </div>
  );
}
