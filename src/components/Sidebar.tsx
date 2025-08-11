import { Button } from './ui/button'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCart } from '../contexts/CartContext'
import Cart from './Cart'

interface SidebarProps {
  cartItems: number;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const sidebarLinks = [
  { path: '/twinroots/shop', label: 'SHOP', description: 'Browse our collection' },
  { path: '/twinroots/archive', label: 'ARCHIVE', description: 'Past collections' },
  { path: '/twinroots/retail-stores', label: 'RETAIL', description: 'Find us' },
  { path: '/twinroots/contact', label: 'CONTACT', description: 'Get in touch' },
  { path: '/twinroots/shipping', label: 'SHIPPING', description: 'Delivery info' },
  { path: '/twinroots/terms', label: 'TERMS', description: 'Legal information' }
];

export default function Sidebar({ cartItems, sidebarOpen, setSidebarOpen }: SidebarProps) {
  const location = useLocation()
  const [isCartOpen, setIsCartOpen] = useState(false)
  // sidebarOpen and setSidebarOpen now come from props
  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-[9999] p-3 bg-background border border-rose-gold rounded-lg shadow-lg"
        style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: 9999 }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Open sidebar"
      >
        <span className="block w-6 h-0.5 bg-rose-gold mb-1"></span>
        <span className="block w-6 h-0.5 bg-rose-gold mb-1"></span>
        <span className="block w-6 h-0.5 bg-rose-gold"></span>
      </button>

      <div
        className={`md:static md:w-64 w-full fixed left-0 top-0 h-full bg-background border-r border-border p-2 md:p-4 overflow-y-auto z-40 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="mb-4 md:mb-8">
          <div className="border border-rose-gold p-2 md:p-4 mb-4 md:mb-6 bg-muted hover:glow-rose-gold transition-all-smooth">
            <div className="text-center">
              <img 
                src="/twinroots/logo.png"
                alt="Twin Roots"
                className="w-20 h-20 md:w-full md:h-auto object-contain max-w-[120px] md:max-w-[180px] mx-auto"
              />
            </div>
          </div>
          <h2 className="text-lg md:text-xl font-mono text-muted-foreground mb-4 md:mb-8 tracking-wider text-center">CULTIVATING STYLE</h2>
        </div>
        {/* Navigation Links */}
        <div className="mb-4 md:mb-8">
          <h3 className="text-xs md:text-sm font-semibold text-rose-gold mb-2 md:mb-4 tracking-wide uppercase">Navigation</h3>
          <div className="space-y-1 md:space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block p-2 md:p-3 rounded border transition-all-smooth text-center md:text-left text-sm md:text-base ${
                  location.pathname === link.path
                    ? 'border-rose-gold bg-rose-gold/10 text-rose-gold'
                    : 'border-border hover:border-rose-gold hover:bg-muted'
                }`}
                onClick={() => {
                  if (window.innerWidth <= 768) setSidebarOpen(false);
                }}
              >
                <div className="font-medium text-xs md:text-sm">{link.label}</div>
                <div className="text-xs text-muted-foreground">{link.description}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="border border-rose-gold p-4 bg-muted hover:glow-rose-gold transition-all-smooth">
          <div className="flex flex-col md:flex-row justify-between items-center mb-2 gap-2">
            <span className="text-rose-gold font-semibold tracking-wide">CART</span>
            <span className="text-muted-foreground text-sm">€ | EUR</span>
          </div>
          <div className="text-sm mb-4 text-muted-foreground text-center md:text-left">
            {cartItems} Items
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Button 
              variant="outline" 
              className="bg-background border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors hover:glow-rose-gold"
              onClick={() => setIsCartOpen(true)}
            >
              cart
            </Button>
            <Link to="/twinroots/shop" className="w-full md:w-auto">
              <Button 
                variant="outline" 
                className="bg-background border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors hover:glow-rose-gold w-full"
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