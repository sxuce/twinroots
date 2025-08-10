import { useState } from 'react'
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { Button } from './ui/button'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { state, dispatch } = useCart()
  const [isRemoving, setIsRemoving] = useState<string | null>(null)

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setIsRemoving(itemId)
      setTimeout(() => {
        dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId } })
        setIsRemoving(null)
      }, 200)
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity: newQuantity } })
    }
  }

  const handleRemoveItem = (itemId: string) => {
    setIsRemoving(itemId)
    setTimeout(() => {
      dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId } })
      setIsRemoving(null)
    }, 200)
  }

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-serif text-rose-gold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">Start shopping to add items to your cart</p>
                <Button 
                  onClick={onClose}
                  className="bg-rose-gold hover:bg-rose-gold/90 text-background"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className={`border border-border rounded-lg p-4 bg-muted transition-all duration-200 ${
                      isRemoving === item.id ? 'opacity-50 scale-95' : ''
                    }`}
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 border border-border rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm mb-1 truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2">
                          {item.variant.name} • Size {item.size}
                        </p>
                        <p className="text-sm font-mono text-rose-gold">
                          €{item.product.price}
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-1 hover:bg-background rounded transition-colors text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border border-border hover:border-rose-gold rounded flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border border-border hover:border-rose-gold rounded flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-sm font-mono text-rose-gold">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total</span>
                <span className="text-xl font-mono text-rose-gold">
                  €{state.total.toFixed(2)}
                </span>
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={handleClearCart}
                  variant="outline"
                  className="flex-1 border-border hover:border-destructive hover:text-destructive"
                >
                  Clear Cart
                </Button>
                <Button className="flex-1 bg-rose-gold hover:bg-rose-gold/90 text-background">
                  Checkout
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                Free shipping on orders over €150
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
