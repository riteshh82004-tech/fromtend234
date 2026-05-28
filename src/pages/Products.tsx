import { useEffect, useState, useMemo } from "react";
import { ProductGrid } from "../components/products/ProductGrid";
import { PRODUCTS, PRODUCT_CATEGORIES } from "../utils/products";

const ITEMS_PER_PAGE = 12;

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  // Reset page when filters change
  useEffect(() => {
    setLoading(true);
    setCurrentPage(1);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  // Filter products based on search query and selected category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subCategory.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Get total count of products per category for the sidebar
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PRODUCTS.length };
    PRODUCT_CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = PRODUCTS.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Calculate paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: 250, behavior: "smooth" });
    setTimeout(() => setLoading(false), 200);
  };

  return (
    <div className="bg-base-200/50 min-h-screen safe-area">
      {/* Product Banner */}
      <div className="bg-neutral text-neutral-content py-8 sm:py-12 md:py-16 border-b-4 border-primary">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm">
              MILAN POWER Catalogue
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-1 sm:mt-2 tracking-tight">
              Industrial Electrical Products
            </h1>
            <p className="text-neutral-content/75 text-xs sm:text-sm md:text-base mt-2 max-w-2xl mx-auto md:mx-0">
              Explore our dynamic catalogue of switches, MCBs, wires, cables,
              lighting, and accessories certified for peak safety and
              performance.
            </p>
          </div>
          <div className="bg-neutral-focus border border-neutral-content/20 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-inner shrink-0 text-center">
            <p className="text-xs text-neutral-content/60 font-semibold uppercase">
              Total Catalogued
            </p>
            <p className="text-3xl font-black text-primary mt-1">
              {PRODUCTS.length}+ Items
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Category Card */}
              <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden rounded-xl">
                <div className="bg-primary/5 px-4 py-3 border-b border-base-300 flex items-center justify-between">
                  <h3 className="font-bold text-sm text-base-content uppercase tracking-wider">
                    Categories
                  </h3>
                  <span className="badge badge-primary badge-sm font-semibold">
                    {PRODUCT_CATEGORIES.length - 1}
                  </span>
                </div>
                <div className="p-3">
                  <nav className="flex flex-col gap-1">
                    {PRODUCT_CATEGORIES.map((cat) => {
                      const isActive = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all text-left ${
                            isActive
                              ? "bg-primary text-primary-content shadow-md"
                              : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                          }`}
                          onClick={() => setSelectedCategory(cat)}
                        >
                          <span>{cat}</span>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                              isActive
                                ? "bg-primary-content/20 text-primary-content"
                                : "bg-base-200 text-base-content/50 group-hover:bg-base-300"
                            }`}
                          >
                            {categoryCounts[cat] || 0}
                          </span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Company Badges / Certifications */}
              <div className="card bg-base-100 border border-base-300 p-5 shadow-sm rounded-xl">
                <h4 className="font-bold text-xs uppercase text-base-content/50 mb-3 tracking-wider">
                  Quality Assurance
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center text-success shrink-0 font-extrabold text-xs">
                      ISO
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">
                        ISO 9001:2000
                      </p>
                      <p className="text-[10px] text-base-content/50">
                        Certified Standards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center text-warning shrink-0 font-extrabold text-xs">
                      ★
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">
                        MILAN POWER
                      </p>
                      <p className="text-[10px] text-base-content/50">
                        Official Distributor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Listing Main */}
          <main className="flex-grow space-y-6">
            {/* Search and Sort Toolbar */}
            <div className="card bg-base-100 border border-base-300 p-4 shadow-sm rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-grow max-w-md w-full">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/40">
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
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search switches, cables, MCBs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input input-bordered w-full pl-10 focus:input-primary rounded-lg text-sm bg-base-200/50"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-base-content/40 hover:text-base-content"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Status information */}
              <div className="text-xs text-base-content/60 font-medium md:text-right shrink-0">
                Showing{" "}
                <span className="font-bold text-base-content">
                  {filteredProducts.length}
                </span>{" "}
                of{" "}
                <span className="font-bold text-base-content">
                  {PRODUCTS.length}
                </span>{" "}
                products
              </div>
            </div>

            {/* Product Grid Component */}
            <div className="min-h-[400px]">
              <ProductGrid products={paginatedProducts} loading={loading} />
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && !loading && (
              <div className="flex justify-center mt-10">
                <div className="join border border-base-300 bg-base-100 shadow-sm p-1 rounded-xl">
                  <button
                    type="button"
                    className="join-item btn btn-sm btn-ghost"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    « Prev
                  </button>
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNumber = idx + 1;
                    return (
                      <button
                        key={pageNumber}
                        type="button"
                        className={`join-item btn btn-sm ${
                          currentPage === pageNumber
                            ? "btn-primary text-primary-content shadow"
                            : "btn-ghost"
                        }`}
                        onClick={() => handlePageChange(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    className="join-item btn btn-sm btn-ghost"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next »
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
