import { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product, ProductVariant } from '../lib/products'

interface CartItem {
  id: string
  product: Product
  variant: ProductVariant
  size: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; variant: ProductVariant; size: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
} | null>(null)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, size, quantity } = action.payload
      const itemId = `${product.id}-${variant.id}-${size}`
      
      const existingItemIndex = state.items.findIndex(item => item.id === itemId)
      
      if (existingItemIndex >= 0) {
        // Update existing item quantity
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex].quantity += quantity
        
        return {
          ...state,
          items: updatedItems,
          total: state.total + (product.price * quantity),
          itemCount: state.itemCount + quantity
        }
      } else {
        // Add new item
        const newItem: CartItem = {
          id: itemId,
          product,
          variant,
          size,
          quantity
        }
        
        return {
          ...state,
          items: [...state.items, newItem],
          total: state.total + (product.price * quantity),
          itemCount: state.itemCount + quantity
        }
      }
    }
    
    case 'REMOVE_ITEM': {
      const item = state.items.find(item => item.id === action.payload.id)
      if (!item) return state
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
        total: state.total - (item.product.price * item.quantity),
        itemCount: state.itemCount - item.quantity
      }
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      const itemIndex = state.items.findIndex(item => item.id === id)
      
      if (itemIndex === -1) return state
      
      const item = state.items[itemIndex]
      const quantityDiff = quantity - item.quantity
      
      const updatedItems = [...state.items]
      updatedItems[itemIndex] = { ...item, quantity }
      
      return {
        ...state,
        items: updatedItems,
        total: state.total + (item.product.price * quantityDiff),
        itemCount: state.itemCount + quantityDiff
      }
    }
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0,
        itemCount: 0
      }
    
    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
