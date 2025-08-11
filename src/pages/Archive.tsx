export default function Archive() {
  const archivedCollections = [
    {
      id: 1,
      name: 'Winter 2023',
      description: 'Cozy winter essentials and layering pieces',
      image: 'https://i.ibb.co/SDs2b3R2/Image-August-11-2025-1-36-AM.png',
      year: '2023'
    },
    {
      id: 2,
      name: 'Fall 2023',
      description: 'Autumn colors and transitional styles',
      image: 'https://i.ibb.co/8LDVSZcK/Google-AI-Studio-2025-08-11-T00-41-53-058-Z.png',
      year: '2023'
    },
    {
      id: 3,
      name: 'Summer 2023',
      description: 'Light and breathable summer collection',
      image: 'https://i.ibb.co/5Xm7MC1r/Google-AI-Studio-2025-08-11-T00-40-59-354-Z.png',
      year: '2023'
    },
    {
      id: 4,
      name: 'Spring 2023',
      description: 'Fresh spring styles and new beginnings',
      image: 'https://i.ibb.co/ccc2BZJ8/Google-AI-Studio-2025-08-11-T00-40-03-124-Z.png',
      year: '2023'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-gold mb-4">ARCHIVE</h1>
          <p className="text-muted-foreground text-lg">Explore our past collections and timeless pieces</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {archivedCollections.map((collection) => (
            <div key={collection.id} className="border border-border rounded-lg overflow-hidden bg-muted hover:border-rose-gold transition-colors">
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{collection.name}</h3>
                  <span className="text-rose-gold font-medium">{collection.year}</span>
                </div>
                <p className="text-muted-foreground">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
