import type { Product } from '../types'
import catalogProducts from '../data/catalog.json'

export const IMAGE_BASE_URL = 'https://5.imimg.com/data5/SELLER/Default/2025/9/545669508/JG/PF/AX/5211600'

export function getProductImageUrl(imagePath: string): string {
  if (!imagePath) return 'https://placehold.co/500x500?text=No+Image'
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  const cleanedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  return `${IMAGE_BASE_URL}/${cleanedPath}`
}

function mapProductCategory(name: string): string {
  const n = name.toLowerCase()
  if (
    n.includes('switch') ||
    n.includes('socket') ||
    n.includes('bell') ||
    n.includes('combin') ||
    n.includes('connector') ||
    n.includes('gang box') ||
    n.includes('gangbox') ||
    n.includes('strip') ||
    n.includes('flex box') ||
    n.includes('tape')
  ) {
    return 'Switches & Sockets'
  }
  if (n.includes('mcb') || n.includes('breaker') || n.includes('changeover')) {
    return 'MCB & Distribution'
  }
  if (n.includes('cable') || n.includes('wire') || n.includes('jelly') || n.includes('clip') || n.includes('saddle') || n.includes('casing') || n.includes('trunking')) {
    return 'Wires & Cables'
  }
  if (
    n.includes('light') ||
    n.includes('bulb') ||
    n.includes('led') ||
    n.includes('cob') ||
    n.includes('flood') ||
    n.includes('concealed')
  ) {
    return 'LED Lighting'
  }
  if (
    n.includes('pipe') ||
    n.includes('band') ||
    n.includes('box') ||
    n.includes('junction') ||
    n.includes('metal')
  ) {
    return 'Conduit & Junction Boxes'
  }
  if (n.includes('cooler') || n.includes('fan') || n.includes('pump') || n.includes('rod')) {
    return 'Coolers & Fans'
  }
  return 'Electrical Accessories'
}

export const PRODUCTS: Product[] = (catalogProducts as any[]).map((p) => {
  const category = mapProductCategory(p.name)
  return {
    id: p.id,
    // The name field in catalog.json represents the group (e.g. "MCB BOX")
    // while description represents the specific product (e.g. "6 Way MCB Box")
    name: p.description || p.name,
    subCategory: p.name,
    category: category,
    description: p.description || p.name,
    image: p.image,
    url: p.url || '',
    brand: 'MILAN POWER',
    badge: p.id % 7 === 0 ? 'New' : p.id % 11 === 0 ? 'Best Seller' : undefined,
  }
})

export const PRODUCT_CATEGORIES = [
  'All',
  'Switches & Sockets',
  'MCB & Distribution',
  'Wires & Cables',
  'LED Lighting',
  'Conduit & Junction Boxes',
  'Coolers & Fans',
  'Electrical Accessories',
]

export function getFeaturedProducts(count = 8): Product[] {
  const featured: Product[] = []
  const categories = PRODUCT_CATEGORIES.filter((c) => c !== 'All')
  
  // Distribute featured products across categories for a diverse landing page
  categories.forEach((cat) => {
    const catProds = PRODUCTS.filter((p) => p.category === cat)
    if (catProds.length > 0) {
      featured.push(catProds[0])
      if (catProds.length > 1 && featured.length < count) {
        featured.push(catProds[1])
      }
    }
  })
  
  // Fallback if we don't have enough featured products
  if (featured.length < count) {
    PRODUCTS.forEach((p) => {
      if (!featured.find((f) => f.id === p.id) && featured.length < count) {
        featured.push(p)
      }
    })
  }
  
  return featured.slice(0, count)
}

export function filterProducts(category: string): Product[] {
  if (category === 'All') return PRODUCTS
  return PRODUCTS.filter((p) => p.category === category)
}
