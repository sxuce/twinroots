export default function Upcoming() {
  const upcomingProducts = [
    {
      id: 'up1',
      name: 'Spring Collection 2024',
      description: 'New arrivals coming this spring',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500',
      releaseDate: 'March 2024'
    },
    {
      id: 'up2',
      name: 'Limited Edition Denim',
      description: 'Exclusive handcrafted denim pieces',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      releaseDate: 'April 2024'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-gold mb-4">UPCOMING</h1>
          <p className="text-muted-foreground text-lg">Stay ahead with our upcoming releases</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingProducts.map((product) => (
            <div key={product.id} className="border border-border rounded-lg overflow-hidden bg-muted hover:border-rose-gold transition-colors">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <span className="text-rose-gold font-medium">{product.releaseDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
