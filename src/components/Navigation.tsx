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
  { path: '/shop', label: 'SHOP' },
  { path: '/archive', label: 'ARCHIVE' },
  { path: '/lookbook', label: 'LOOKBOOK' },
  { path: '/upcoming', label: 'UPCOMING' },
  { path: '/stickers', label: 'STICKERS' },
  { path: '/retail-stores', label: 'RETAIL' },
  { path: '/contact', label: 'CONTACT' },
  { path: '/jobs', label: 'JOBS' },
  { path: '/shipping', label: 'SHIPPING' },
  { path: '/terms', label: 'TERMS' }
]

export default function Navigation({ selectedCategory, onCategoryChange }: NavigationProps) {
  const location = useLocation()
  const [showCategories, setShowCategories] = useState(false)
  
  const isShopPage = location.pathname === '/' || location.pathname === '/shop'

  return (
    <div className="border-b border-border p-6 bg-muted">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Search Bar - Only show on shop page */}
          {isShopPage && (
            <div className="w-80">
              <SearchBar placeholder="Search products..." />
            </div>
          )}
          
          {/* Main Navigation Links */}
          <div className="flex gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-rose-gold transition-all-smooth ${
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