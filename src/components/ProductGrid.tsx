import ProductCard from './ProductCard'
import { getProductsByCategory, Product } from '../lib/products'

interface ProductGridProps {
  selectedCategory: string
}

export default function ProductGrid({ selectedCategory }: ProductGridProps) {
  const filteredProducts = getProductsByCategory(selectedCategory)

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-serif text-rose-gold mb-2">
          {selectedCategory === 'ALL' ? 'ALL PRODUCTS' : selectedCategory}
        </h2>
        <p className="text-muted-foreground">
          {filteredProducts.length} items available
        </p>
      </div>
      
      <div className="grid grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}