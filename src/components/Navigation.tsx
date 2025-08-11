import { Search } from 'lucide-react'
import { Button } from './ui/button'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import SearchBar from './SearchBar'

interface NavigationProps {
  selectedCategory?: string
  onCategoryChange?: (category: string) => void
}

const categories = ['ALL', 'JORTS', 'TOPS', 'OUTERWEAR', 'PANTS', 'FOOTWEAR', 'ACCESS']

const navigationLinks = [
  { path: '/twinroots/shop', label: 'SHOP' },
  { path: '/twinroots/archive', label: 'ARCHIVE' },
  { path: '/twinroots/retail-stores', label: 'RETAIL' },
  { path: '/twinroots/contact', label: 'CONTACT' },
  { path: '/twinroots/shipping', label: 'SHIPPING' },
  { path: '/twinroots/terms', label: 'TERMS' }
]

export default function Navigation({ selectedCategory, onCategoryChange }: NavigationProps) {
  const location = useLocation()
  const [showCategories, setShowCategories] = useState(false)
  
  const isShopPage = location.pathname === '/twinroots/shop'

  return (
    <div className="border-b border-border p-2 md:p-6 bg-muted hidden md:block">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 w-full">
          {/* Home Button - Always visible, spaced */}
          <Link to="/twinroots/home" className="text-rose-gold font-bold px-2 py-1 text-base md:text-lg mb-2 md:mb-0">Home</Link>
          {/* Search Bar - Only show on shop page and not on mobile */}
          {isShopPage && (
            <div className="hidden md:block w-80 mb-2 md:mb-0">
              <SearchBar placeholder="Search products..." />
            </div>
          )}
          {/* Main Navigation Links */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 w-full">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-rose-gold transition-all-smooth px-2 py-1 text-sm md:text-base text-center ${
                  location.pathname === link.path 
                    ? 'text-rose-gold underline decoration-rose-gold text-shadow-rose-gold' 
                    : 'text-muted-foreground hover:scale-105'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Category Filter - Only show on shop page */}
          {isShopPage && (
            <div className="flex items-center gap-4">
              <span className="border border-rose-gold px-2 py-1 text-sm text-rose-gold bg-background hover:glow-rose-gold transition-all-smooth">PLAIN</span>
              <button 
                onClick={() => setShowCategories(!showCategories)}
                className="hover:text-rose-gold transition-all-smooth text-muted-foreground hover:scale-105"
              >
                filter
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Category Filter Dropdown */}
      {isShopPage && showCategories && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange?.(category)
                  setShowCategories(false)
                }}
                className={`hover:text-rose-gold transition-all-smooth ${
                  selectedCategory === category 
                    ? 'text-rose-gold underline decoration-rose-gold text-shadow-rose-gold' 
                    : 'text-muted-foreground hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}