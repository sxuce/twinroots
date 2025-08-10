import { useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import Navigation from '../components/Navigation'
import Breadcrumb from '../components/Breadcrumb'

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <Breadcrumb />
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-gold mb-4">SHOP</h1>
          <p className="text-muted-foreground text-lg">Discover our curated collection of premium fashion</p>
        </div>
        
        <ProductGrid selectedCategory={selectedCategory} />
      </div>
    </div>
  )
}
