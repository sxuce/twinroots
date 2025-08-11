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
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-6 md:px-6 md:py-8 pt-20 md:pt-8">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Product Images - Mobile First */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-80 h-80 md:w-96 md:h-96 border border-border overflow-hidden bg-white rounded-lg shadow-sm flex items-center justify-center">
              <img
                src={product.images[selectedImage].url}
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-contain p-4"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {product.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`w-12 h-12 md:w-16 md:h-16 border-2 overflow-hidden rounded transition-all ${
                      selectedImage === index 
                        ? 'border-rose-gold' 
                        : 'border-border hover:border-rose-gold/50'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6 text-center md:text-left px-4 md:px-0">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-rose-gold mb-3 leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl md:text-3xl text-rose-gold font-bold mb-4">
                {product.currency} {product.price}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                {product.description}
              </p>
            </div>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div className="w-full">
                <h3 className="text-sm font-semibold text-foreground mb-3">Color</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      disabled={!variant.available}
                      className={`px-4 py-2 rounded border transition-all text-sm ${
                        selectedVariant.id === variant.id
                          ? 'border-rose-gold bg-rose-gold text-background'
                          : variant.available
                          ? 'border-border hover:border-rose-gold'
                          : 'border-border opacity-50 cursor-not-allowed'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            <div className="w-full">
              <h3 className="text-sm font-semibold text-foreground mb-3">Size</h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border transition-all text-sm ${
                      selectedSize === size
                        ? 'border-rose-gold bg-rose-gold text-background'
                        : 'border-border hover:border-rose-gold'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="w-full">
              <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold">Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 border border-border rounded hover:border-rose-gold flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 border border-border rounded hover:border-rose-gold flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <Button
                  onClick={handleAddToCart}
                  className="px-8 py-4 bg-rose-gold hover:bg-rose-gold/80 text-background font-bold text-lg w-full max-w-md"
                  disabled={product.soldOut}
                >
                  {product.soldOut ? 'Sold Out' : 'Add to Cart'}
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center w-full">
              <Button variant="outline" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Save
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>

            {/* Product Details */}
            {(product.materials.length > 0 || product.care.length > 0) && (
              <div className="w-full text-center md:text-left border-t border-border pt-6">
                {product.materials.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Materials</h4>
                    <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                      {product.materials.map((material, index) => (
                        <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {product.care.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Care Instructions</h4>
                    <div className="flex flex-wrap gap-1 justify-center md:justify-start">
                      {product.care.map((instruction, index) => (
                        <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                          {instruction}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
