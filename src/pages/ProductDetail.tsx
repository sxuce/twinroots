import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/button'
import ProductPage from '../components/ProductPage'
import Navigation from '../components/Navigation'
import Breadcrumb from '../components/Breadcrumb'
import { getProductById, Product, ProductVariant } from '../lib/products'
import { useCart } from '../contexts/CartContext'

export default function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { dispatch } = useCart()
  
  const product = productId ? getProductById(parseInt(productId)) : undefined

  const handleAddToCart = (product: Product, variant: ProductVariant, size: string, quantity: number) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { product, variant, size, quantity }
    })
    
    // Show success feedback (you could add a toast notification here)
    console.log('Added to cart:', { product, variant, size, quantity })
  }

  const handleBackToShop = () => {
    navigate('/twinroots/shop')
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="p-4 md:p-6">
          <Breadcrumb />
          <Button
            onClick={handleBackToShop}
            variant="outline"
            className="mb-4 md:mb-6 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors w-full md:w-auto text-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Button>
          <div className="text-center py-8 md:py-12">
            <h1 className="text-xl md:text-2xl font-serif text-rose-gold mb-2 md:mb-4">Product Not Found</h1>
            <p className="text-xs md:text-base text-muted-foreground">The product you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-4 md:p-6">
        <Breadcrumb />
        <Button
          onClick={handleBackToShop}
          variant="outline"
          className="mb-4 md:mb-6 border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors w-full md:w-auto text-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Button>
        <ProductPage 
          product={product}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  )
}
