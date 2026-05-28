import { useState, type FormEvent } from "react";
import type { ContactForm } from "../types";
import { AnimatedSection } from "../components/ui/AnimatedSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { company } from "../data/company";

interface InquiryForm extends ContactForm {
  companyName: string;
  phone: string;
  productInterest: string;
}

const initialForm: InquiryForm = {
  name: "",
  email: "",
  companyName: "",
  phone: "",
  productInterest: "General Inquiry",
  subject: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    // Simulate sending to the frontend-only system
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setStatus("success");
    setForm(initialForm);
  };

  const update =
    (field: keyof InquiryForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <div className="bg-base-200/50 min-h-screen py-8 sm:py-12 md:py-16 safe-area">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <AnimatedSection animation="fade">
          <SectionHeading
            title="Contact Our Sales Office"
            subtitle="Connect with Agarwal Electropower Pvt. Ltd. for wholesale orders, dealership inquiries, and MILAN POWER product catalogues."
            className="mb-8 sm:mb-10 text-center"
          />
        </AnimatedSection>

        {/* Company Info Grid & Contact Form */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-12 mb-10 sm:mb-12">
          {/* Company Details Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <AnimatedSection delayIndex={1}>
              <div className="card bg-base-100 border border-base-300 p-4 sm:p-6 shadow-md rounded-xl sm:rounded-2xl space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    Registered Office & Factory Address
                  </h3>
                  <p className="text-base-content font-bold leading-relaxed text-sm sm:text-base break-words">
                    {company.address}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t border-base-300 pt-3 sm:pt-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest">
                      Director
                    </h4>
                    <p className="text-xs sm:text-sm font-extrabold text-base-content mt-0.5">
                      {company.director}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest">
                      Company Brand
                    </h4>
                    <p className="text-xs sm:text-sm font-extrabold text-primary mt-0.5">
                      {company.brand}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 border-t border-base-300 pt-3 sm:pt-4 font-mono">
                  <div>
                    <h4 className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest font-sans">
                      GST Number
                    </h4>
                    <p className="text-xs font-bold text-base-content mt-0.5 break-all">
                      {company.gst}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest font-sans">
                      CIN Number
                    </h4>
                    <p className="text-xs font-bold text-base-content mt-0.5 break-all">
                      {company.cin}
                    </p>
                  </div>
                </div>

                <div className="border-t border-base-300 pt-3 sm:pt-4 space-y-3">
                  <div>
                    <h4 className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest mb-1">
                      Direct Sales Line
                    </h4>
                    <a
                      href={`tel:+91${company.phone}`}
                      className="text-base sm:text-lg font-black text-primary hover:underline font-mono break-all"
                    >
                      +91 {company.phone}
                    </a>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-base-content/40 uppercase tracking-widest mb-1">
                      Email Inquiries
                    </h4>
                    <a
                      href="mailto:info@agarwalelectropower.com"
                      className="text-xs sm:text-sm font-bold text-base-content hover:underline font-mono break-all"
                    >
                      info@agarwalelectropower.com
                    </a>
                  </div>
                </div>

                <div className="bg-base-200 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-base-300 text-xs text-base-content/70">
                  <p className="font-bold mb-1">
                    Industrial Distribution Hours:
                  </p>
                  <p>Mon – Sat: 9:00 AM – 7:00 PM IST</p>
                  <p className="text-[10px] text-base-content/40 mt-1">
                    Closed on Sundays & National Holidays
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <AnimatedSection delayIndex={2}>
              <form
                onSubmit={handleSubmit}
                className="card bg-base-100 border border-base-300 shadow-md rounded-xl sm:rounded-2xl"
              >
                <div className="bg-primary/5 px-4 sm:px-6 py-3 sm:py-4 border-b border-base-300">
                  <h3 className="font-extrabold text-sm text-base-content uppercase tracking-wider">
                    Industrial Order & Dealer Inquiry Form
                  </h3>
                  <p className="text-xs text-base-content/60 mt-0.5">
                    Submit your request and our sales team will respond with a
                    quote.
                  </p>
                </div>

                <div className="card-body p-4 sm:p-6 gap-3 sm:gap-4">
                  {status === "success" && (
                    <div className="alert alert-success animate-fade-in text-xs sm:text-sm font-medium">
                      <span>
                        ✓ Thank you! Your quotation enquiry has been registered.
                        Our representative will contact you shortly.
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="form-control">
                      <label className="label py-2 sm:py-3" htmlFor="name">
                        <span className="label-text text-xs font-bold uppercase tracking-wider text-base-content/60">
                          Full Name *
                        </span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="input input-bordered input-sm rounded-lg text-base sm:text-sm"
                        value={form.name}
                        onChange={update("name")}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="form-control">
                      <label
                        className="label py-2 sm:py-3"
                        htmlFor="companyName"
                      >
                        <span className="label-text text-xs font-bold uppercase tracking-wider text-base-content/60">
                          Company / Firm Name
                        </span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        placeholder="Agarwal Electricals"
                        className="input input-bordered input-sm rounded-lg text-base sm:text-sm"
                        value={form.companyName}
                        onChange={update("companyName")}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div className="form-control">
                      <label className="label py-2 sm:py-3" htmlFor="email">
                        <span className="label-text text-xs font-bold uppercase tracking-wider text-base-content/60">
                          Email Address *
                        </span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="partner@company.com"
                        className="input input-bordered input-sm rounded-lg text-base sm:text-sm"
                        value={form.email}
                        onChange={update("email")}
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label py-2 sm:py-3" htmlFor="phone">
                        <span className="label-text text-xs font-bold uppercase tracking-wider text-base-content/60">
                          Contact Number *
                        </span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="8949209644"
                        className="input input-bordered input-sm rounded-lg text-base sm:text-sm"
                        value={form.phone}
                        onChange={update("phone")}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label
                      className="label py-2 sm:py-3"
                      htmlFor="productInterest"
                    >
                      <span className="label-text text-xs font-bold uppercase tracking-wider text-base-content/60">
                        Product of Interest *
                      </span>
                    </label>
                    <select
                      id="productInterest"
                      className="select select-bordered select-sm rounded-lg w-full text-xs sm:text-sm font-medium"
                      value={form.productInterest}
                      onChange={update("productInterest")}
                      required
                      disabled={loading}
                    >
                      <option value="General Inquiry">
                        General Business Inquiry
                      </option>
                      <option value="Switches & Sockets">
                        Modular Switches & Accessories
                      </option>
                      <option value="MCB & Distribution">
                        MCB & Distribution Boxes
                      </option>
                      <option value="Wires & Cables">Cables & Wires</option>
                      <option value="LED Lighting">
                        LED Bulbs & Panel Lights
                      </option>
                      <option value="Conduit & Junction Boxes">
                        PVC Conduit Pipes & Junctions
                      </option>
                      <option value="Coolers & Fans">
                        Air Coolers & Ceiling Fans
                      </option>
                      <option value="Dealership">
                        Dealership / Distributorship Opportunity
                      </option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label py-1" htmlFor="message">
                      <span className="label-text text-xs font-bold uppercase tracking-wider text-base-content/60">
                        Detailed Requirements *
                      </span>
                    </label>
                    <textarea
                      id="message"
                      placeholder="Please enter quantity and product specifications..."
                      className="textarea textarea-bordered rounded-lg h-24 text-sm"
                      value={form.message}
                      onChange={update("message")}
                      required
                      disabled={loading}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-xl font-bold mt-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner loading-sm" />
                        Submitting Enquiry…
                      </>
                    ) : (
                      "Request Wholesale Quote"
                    )}
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>

        {/* Map Section */}
        <AnimatedSection delayIndex={3} className="w-full">
          <div className="card bg-base-100 border border-base-300 p-5 shadow-md rounded-2xl">
            <h3 className="text-sm font-bold text-base-content uppercase tracking-wider mb-4">
              Factory Location Map (Sitapura Extension, Jaipur)
            </h3>
            {/* Embedded Google map centering Ramchandrapura Industrial Area */}
            <div className="overflow-hidden rounded-xl h-96 w-full border border-base-300 relative shadow-inner">
              <iframe
                title="Agarwal Electropower Factory Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8348616117366!2d75.8360212!3d26.7815049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9ac5c613e55%3A0xe54ef9be56b0f946!2sRamchandrapura%20Industrial%20Area%2C%20Sitapura%2C%20Jaipur%2C%20Rajasthan%20302022!5e0!3m2!1sen!2sin!4v1716492345678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
