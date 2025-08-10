import { useState } from 'react'
import { Button } from './ui/button'
import { Heart, Share2 } from 'lucide-react'
import { Product, ProductVariant } from '../lib/products'

interface ProductPageProps {
  product: Product
  onAddToCart?: (product: Product, variant: ProductVariant, size: string, quantity: number) => void
}

export default function ProductPage({ product, onAddToCart }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (onAddToCart && selectedVariant && selectedSize) {
      onAddToCart(product, selectedVariant, selectedSize, quantity)
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square border border-border overflow-hidden bg-muted">
            <img
              src={product.images[selectedImage].url}
              alt={product.images[selectedImage].alt}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square border-2 overflow-hidden transition-all ${
                  selectedImage === index 
                    ? 'border-rose-gold' 
                    : 'border-border hover:border-rose-gold/50'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-serif text-foreground mb-2">{product.name}</h1>
            <p className="text-2xl font-mono text-rose-gold mb-4">
              {product.currency} {product.price}
            </p>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Variants */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Color</h3>
            <div className="flex gap-2">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedVariant?.id === variant.id 
                      ? 'border-rose-gold scale-110' 
                      : 'border-border hover:border-rose-gold/50'
                  }`}
                  style={{ backgroundColor: variant.color }}
                  title={variant.name}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border transition-all ${
                    selectedSize === size 
                      ? 'border-rose-gold bg-rose-gold text-background' 
                      : 'border-border hover:border-rose-gold/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Quantity</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 border border-border hover:border-rose-gold transition-colors"
              >
                -
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 border border-border hover:border-rose-gold transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleAddToCart}
              disabled={product.soldOut}
              className="flex-1 bg-rose-gold hover:bg-rose-gold/90 text-background font-semibold py-3"
            >
              {product.soldOut ? 'SOLD OUT' : 'ADD TO CART'}
            </Button>
            <Button variant="outline" className="px-4 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="px-4 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          {/* Product Info */}
          <div className="space-y-4 pt-6 border-t border-border">
            {product.materials.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Materials</h3>
                <p className="text-sm text-muted-foreground">{product.materials.join(', ')}</p>
              </div>
            )}
            {product.care.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Care Instructions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {product.care.map((instruction, index) => (
                    <li key={index}>• {instruction}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
