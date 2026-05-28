import { useState } from "react";
import type { Product } from "../../types";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { getProductImageUrl } from "../../utils/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = getProductImageUrl(product.image);

  return (
    <>
      <Card
        hover
        className="h-full flex flex-col justify-between overflow-hidden border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary/30 group"
      >
        {/* Product Image Wrapper */}
        <figure className="relative bg-base-200 flex h-48 items-center justify-center p-6 overflow-hidden select-none">
          {product.badge && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-content uppercase tracking-wider shadow-sm">
              {product.badge}
            </span>
          )}
          <span className="absolute right-3 top-3 z-10 rounded bg-base-100/80 px-2 py-0.5 text-[10px] font-bold text-base-content/70 border border-base-300">
            {product.brand}
          </span>
          <img
            src={imageUrl}
            alt={product.name}
            loading="lazy"
            className="h-32 w-32 object-contain transition-transform duration-500 ease-out group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/500x500?text=Image+Not+Found";
            }}
          />
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-neutral/40 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button
              type="button"
              className="btn btn-primary btn-sm rounded-lg shadow-lg font-bold"
              onClick={() => setIsOpen(true)}
            >
              Quick View
            </button>
          </div>
        </figure>

        {/* Card Details */}
        <div className="card-body p-5 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                {product.category}
              </span>
              <span className="text-[10px] bg-base-200 text-base-content/60 px-2 py-0.5 rounded font-mono">
                {product.subCategory}
              </span>
            </div>
            <h3 className="card-title text-base font-bold line-clamp-2 text-base-content group-hover:text-primary transition-colors min-h-[3rem]">
              {product.name}
            </h3>
            <p className="text-base-content/70 text-xs line-clamp-2 mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-base-200">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                className="text-xs text-primary font-bold hover:underline"
                onClick={() => setIsOpen(true)}
              >
                View Details →
              </button>
              <Button
                to="/contact"
                variant="primary"
                className="btn-xs rounded py-1 px-3"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Quick View Modal */}
      {isOpen && (
        <div className="modal modal-open z-50">
          <div className="modal-box max-w-2xl bg-base-100 p-0 overflow-hidden rounded-2xl shadow-2xl border border-base-300">
            <div className="bg-primary px-6 py-4 flex justify-between items-center text-primary-content">
              <div className="flex items-center gap-2">
                <span className="badge badge-accent badge-sm font-bold uppercase tracking-wider">
                  {product.brand}
                </span>
                <h3 className="font-bold text-lg">Product Details</h3>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost text-primary-content"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Side: Product Image */}
              <div className="bg-base-200 rounded-xl flex items-center justify-center p-6 border border-base-300 relative select-none">
                {product.badge && (
                  <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-content uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
                <img
                  src={imageUrl}
                  alt={product.name}
                  className="max-h-60 max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/500x500?text=Image+Not+Found";
                  }}
                />
              </div>

              {/* Right Side: Product Information */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                    {product.category} &rsaquo; {product.subCategory}
                  </span>
                  <h2 className="text-xl font-extrabold text-base-content leading-snug mb-3">
                    {product.name}
                  </h2>
                  <p className="text-sm text-base-content/80 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  <div className="bg-base-200 rounded-lg p-3 border border-base-300">
                    <h4 className="text-xs font-bold uppercase text-base-content/50 mb-2 tracking-wider">
                      Technical Specifications
                    </h4>
                    <ul className="text-xs text-base-content/90 space-y-1.5 list-disc pl-4">
                      <li>
                        <strong>Brand:</strong> {product.brand}
                      </li>
                      <li>
                        <strong>Product Class:</strong> Industrial Wholesaler
                        Grade
                      </li>
                      <li>
                        <strong>Certification:</strong> ISO 9001:2000 Certified
                      </li>
                      <li>
                        <strong>Origin:</strong> Sitapura Industrial Area,
                        Jaipur
                      </li>
                      <li>
                        <strong>Status:</strong> Ready Stock / Wholesale
                        Distribution
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="modal-action mt-6 flex justify-end gap-2">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                  <Button
                    to="/contact"
                    variant="primary"
                    className="btn-sm rounded-lg"
                  >
                    Enquire Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="modal-backdrop bg-black/40"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}
    </>
  );
}
