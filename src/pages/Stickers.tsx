export default function Stickers() {
  const stickers = [
    {
      id: 1,
      name: 'Twin Roots Logo Sticker',
      price: '€3.00',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500',
      description: 'Classic logo sticker for your laptop, phone, or anywhere'
    },
    {
      id: 2,
      name: 'Cultivating Style Sticker',
      price: '€3.00',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      description: 'Our signature tagline in elegant typography'
    },
    {
      id: 3,
      name: 'Minimalist Design Sticker',
      price: '€3.00',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500',
      description: 'Clean, simple design for the minimalist in you'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-gold mb-4">STICKERS</h1>
          <p className="text-muted-foreground text-lg">Express your style with our premium stickers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stickers.map((sticker) => (
            <div key={sticker.id} className="border border-border rounded-lg overflow-hidden bg-muted hover:border-rose-gold transition-colors">
              <img 
                src={sticker.image} 
                alt={sticker.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{sticker.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{sticker.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-rose-gold">{sticker.price}</span>
                  <button className="px-4 py-2 bg-rose-gold text-background rounded hover:bg-rose-gold-dark transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
