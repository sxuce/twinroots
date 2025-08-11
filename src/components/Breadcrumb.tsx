import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  path: string
}

export default function Breadcrumb() {
  const location = useLocation()
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = []
    
    let currentPath = ''
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Convert segment to readable label
      let label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      // Special cases
      if (segment === 'shop') label = 'Shop'
      if (segment === 'retail-stores') label = 'Retail Stores'
      if (segment === 'terms') label = 'Terms of Service'
      
      breadcrumbs.push({
        label,
        path: currentPath
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbs = generateBreadcrumbs()
  
  if (breadcrumbs.length === 0) return null
  
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6 mt-12 md:mt-0">
      <Link 
        to="/twinroots/home" 
        className="flex items-center hover:text-rose-gold transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.path} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {index === breadcrumbs.length - 1 ? (
            <span className="text-foreground font-medium">{breadcrumb.label}</span>
          ) : (
            <Link 
              to={breadcrumb.path}
              className="hover:text-rose-gold transition-colors"
            >
              {breadcrumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
