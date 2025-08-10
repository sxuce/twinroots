import { useState } from 'react'
import { ChevronDown, Filter } from 'lucide-react'
import { Button } from './ui/button'

interface ProductSortProps {
  selectedSort: string
  onSortChange: (sort: string) => void
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' }
]

const filterOptions = [
  { value: 'all', label: 'All Products' },
  { value: 'available', label: 'Available Only' },
  { value: 'sale', label: 'On Sale' },
  { value: 'new', label: 'New Arrivals' },
  { value: 'featured', label: 'Featured' }
]

export default function ProductSort({ 
  selectedSort, 
  onSortChange, 
  selectedFilter, 
  onFilterChange 
}: ProductSortProps) {
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showFilterDropdown, setShowFilterDropdown] = useState(false)

  return (
    <div className="flex items-center gap-4 mb-6">
      {/* Sort Dropdown */}
      <div className="relative">
        <Button
          variant="outline"
          onClick={() => setShowSortDropdown(!showSortDropdown)}
          className="flex items-center gap-2 border-border hover:border-rose-gold"
        >
          Sort by: {sortOptions.find(opt => opt.value === selectedSort)?.label}
          <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
        </Button>
        
        {showSortDropdown && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-lg z-10">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSortChange(option.value)
                  setShowSortDropdown(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                  selectedSort === option.value ? 'text-rose-gold bg-rose-gold/10' : 'text-foreground'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter Dropdown */}
      <div className="relative">
        <Button
          variant="outline"
          onClick={() => setShowFilterDropdown(!showFilterDropdown)}
          className="flex items-center gap-2 border-border hover:border-rose-gold"
        >
          <Filter className="w-4 h-4" />
          {filterOptions.find(opt => opt.value === selectedFilter)?.label}
          <ChevronDown className={`w-4 h-4 transition-transform ${showFilterDropdown ? 'rotate-180' : ''}`} />
        </Button>
        
        {showFilterDropdown && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-lg z-10">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onFilterChange(option.value)
                  setShowFilterDropdown(false)
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                  selectedFilter === option.value ? 'text-rose-gold bg-rose-gold/10' : 'text-foreground'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {(selectedSort !== 'newest' || selectedFilter !== 'all') && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Active filters:</span>
          {selectedSort !== 'newest' && (
            <span className="px-2 py-1 bg-muted rounded text-xs">
              {sortOptions.find(opt => opt.value === selectedSort)?.label}
            </span>
          )}
          {selectedFilter !== 'all' && (
            <span className="px-2 py-1 bg-muted rounded text-xs">
              {filterOptions.find(opt => opt.value === selectedFilter)?.label}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
