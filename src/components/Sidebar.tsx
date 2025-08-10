import { Button } from './ui/button'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import Cart from './Cart'

interface SidebarProps {
  cartItems: number
}

const sidebarLinks = [
  { path: '/shop', label: 'SHOP', description: 'Browse our collection' },
  { path: '/archive', label: 'ARCHIVE', description: 'Past collections' },
  { path: '/lookbook', label: 'LOOKBOOK', description: 'Style inspiration' },
  { path: '/upcoming', label: 'UPCOMING', description: 'New arrivals' },
  { path: '/stickers', label: 'STICKERS', description: 'Accessories' },
  { path: '/retail-stores', label: 'RETAIL', description: 'Find us' },
  { path: '/contact', label: 'CONTACT', description: 'Get in touch' },
  { path: '/jobs', label: 'JOBS', description: 'Join our team' },
  { path: '/shipping', label: 'SHIPPING', description: 'Delivery info' },
  { path: '/terms', label: 'TERMS', description: 'Legal information' }
]

export default function Sidebar({ cartItems }: SidebarProps) {
  const location = useLocation()
  const { state } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <div className="fixed left-0 top-0 h-full w-80 bg-background border-r border-border p-6 overflow-y-auto">
        <div className="mb-8">
          <div className="border border-rose-gold p-4 mb-6 bg-muted hover:glow-rose-gold transition-all-smooth">
            <div className="text-center">
              <img 
                src="/logo.png"
                alt="Twin Roots"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <h2 className="text-xl font-mono text-muted-foreground mb-8 tracking-wider text-center">CULTIVATING STYLE</h2>
        </div>
        
        {/* Navigation Links */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-rose-gold mb-4 tracking-wide uppercase">Navigation</h3>
          <div className="space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block p-3 rounded border transition-all-smooth ${
                  location.pathname === link.path
                    ? 'border-rose-gold bg-rose-gold/10 text-rose-gold'
                    : 'border-border hover:border-rose-gold hover:bg-muted'
                }`}
              >
                <div className="font-medium text-sm">{link.label}</div>
                <div className="text-xs text-muted-foreground">{link.description}</div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Cart Section */}
        <div className="border border-rose-gold p-4 bg-muted hover:glow-rose-gold transition-all-smooth">
          <div className="flex justify-between items-center mb-2">
            <span className="text-rose-gold font-semibold tracking-wide">CART</span>
            <span className="text-muted-foreground text-sm">€ | EUR</span>
          </div>
          <div className="text-sm mb-4 text-muted-foreground">
            {state.itemCount} Items • €{state.total.toFixed(2)}
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1 bg-background border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors hover:glow-rose-gold"
              onClick={() => setIsCartOpen(true)}
            >
              cart
            </Button>
              <Link to="/shop" className="flex-1">
                <Button 
                  variant="outline" 
                  className="flex-1 bg-background border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors hover:glow-rose-gold"
                >
                  shop
                </Button>
              </Link>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}