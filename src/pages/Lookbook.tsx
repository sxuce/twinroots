export default function Lookbook() {
  const lookbookImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500',
      title: 'Urban Street Style',
      season: 'Spring 2024'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      title: 'Denim Dreams',
      season: 'Spring 2024'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500',
      title: 'Minimalist Elegance',
      season: 'Spring 2024'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      title: 'Contemporary Classics',
      season: 'Spring 2024'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-gold mb-4">LOOKBOOK</h1>
          <p className="text-muted-foreground text-lg">Style inspiration and curated looks</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lookbookImages.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[3/4] border border-border overflow-hidden rounded-lg bg-muted hover:border-rose-gold transition-colors">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-rose-gold text-sm">{item.season}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
