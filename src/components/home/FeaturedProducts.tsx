import { Link } from "react-router-dom";
import { getFeaturedProducts } from "../../utils/products";
import { ProductCard } from "../products/ProductCard";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedSection } from "../ui/AnimatedSection";

export function FeaturedProducts() {
  // Query 8 major highlight products from the dynamic catalogue
  const featured = getFeaturedProducts(8);

  return (
    <AnimatedSection className="bg-base-100 py-10 sm:py-16 md:py-24 safe-area">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <SectionHeading
          title="MILAN POWER Highlights"
          subtitle="Explore some of our major industrial electrical offerings, from heavy duty gear to household modular switches."
        />

        {/* Responsive grid for 8 cards (2 rows of 4) */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8 sm:mt-10 md:mt-12">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 sm:mt-12 md:mt-14 text-center">
          <Link
            to="/products"
            className="btn btn-primary btn-wide font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all min-h-[44px] sm:min-h-[40px]"
          >
            View Complete Catalogue ({featured.length}+ Items)
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
