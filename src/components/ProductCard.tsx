import { Link } from 'react-router-dom'
import { Product } from '../lib/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/twinroots/product/${product.id}`} className="block">
      <div className="relative group cursor-pointer">
        <div className="aspect-square border border-border overflow-hidden relative bg-white hover:border-rose-gold transition-all-smooth hover:glow-rose-gold">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {product.soldOut && (
            <div className="absolute inset-0 bg-background bg-opacity-80 flex items-center justify-center">
              <span className="text-rose-gold font-bold text-lg text-shadow-rose-gold">SOLD OUT</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="mt-2 p-2 group-hover:bg-muted transition-colors rounded">
          <h3 className="text-sm text-foreground font-medium group-hover:text-rose-gold transition-colors">{product.name}</h3>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-muted-foreground">{product.category}</p>
            <p className="text-sm font-mono text-rose-gold">
              {product.currency} {product.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}