import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { searchProducts, Product } from '../lib/products'
import { Link } from 'react-router-dom'

interface SearchBarProps {
  placeholder?: string
  className?: string
}

export default function SearchBar({ placeholder = "Search products...", className = "" }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchProducts(query)
      setResults(searchResults)
      setIsOpen(true)
      setFocusedIndex(-1)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          setFocusedIndex(prev => 
            prev < results.length - 1 ? prev + 1 : prev
          )
          break
        case 'ArrowUp':
          event.preventDefault()
          setFocusedIndex(prev => prev > 0 ? prev - 1 : -1)
          break
        case 'Enter':
          event.preventDefault()
          if (focusedIndex >= 0 && results[focusedIndex]) {
            handleResultClick(results[focusedIndex])
          }
          break
        case 'Escape':
          setIsOpen(false)
          inputRef.current?.blur()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, focusedIndex])

  const navigate = (window as any).navigate || undefined;
  const handleResultClick = (product: Product) => {
    setQuery('')
    setIsOpen(false)
    setFocusedIndex(-1)
    // Navigate to product page using React Router if available
    if (navigate) {
      navigate(`/product/${product.id}`)
    } else {
      window.location.href = `/product/${product.id}`
    }
  }

  const handleClear = () => {
    setQuery('')
    setIsOpen(false)
    setFocusedIndex(-1)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((product, index) => (
            <div
              key={product.id}
              onClick={() => handleResultClick(product)}
              className={`p-3 cursor-pointer transition-colors ${
                index === focusedIndex 
                  ? 'bg-rose-gold/10 border-l-2 border-rose-gold' 
                  : 'hover:bg-muted'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border border-border rounded overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {product.category} • {product.currency} {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 p-4">
          <p className="text-sm text-muted-foreground text-center">
            No products found for "{query}"
          </p>
        </div>
      )}
    </div>
  )
}
