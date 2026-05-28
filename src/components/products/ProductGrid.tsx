import type { Product } from '../../types'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
  loading?: boolean
}

function ProductSkeleton() {
  return (
    <div className="card bg-base-200 shadow-md">
      <div className="skeleton h-44 w-full rounded-t-2xl" />
      <div className="card-body gap-3">
        <div className="skeleton h-6 w-3/4" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-2/3" />
        <div className="skeleton h-8 w-24 ml-auto" />
      </div>
    </div>
  )
}

export function ProductGrid({ products, loading = false }: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-base-content/70 text-lg">No products match this category.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, i) => (
        <div
          key={product.id}
          className="animate-slide-up opacity-0"
          style={{ animationDelay: `${Math.min(i, 3) * 100}ms`, animationFillMode: 'forwards' }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
