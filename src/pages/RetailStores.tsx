import { Button } from '../components/ui/button'

export default function RetailStores() {
  const stores = [
    {
      id: 1,
      name: 'Twin Roots NYC',
      address: '123 Fashion Street, Design District, New York, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Sat: 10AM-8PM, Sun: 12PM-6PM',
      image: 'https://images.unsplash.com/photo-1634888523664-249f901e0019?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0cmVldHdlYXIlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      name: 'Twin Roots LA',
      address: '456 Style Avenue, Fashion District, Los Angeles, CA 90015',
      phone: '+1 (555) 987-6543',
      hours: 'Mon-Sat: 11AM-9PM, Sun: 12PM-7PM',
      image: 'https://images.unsplash.com/photo-1577394656992-0f7bf88485c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0cmVldHdlYXIlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      name: 'Twin Roots London',
      address: '789 Design Lane, Shoreditch, London, UK E1 6AA',
      phone: '+44 20 1234 5678',
      hours: 'Mon-Sat: 10AM-7PM, Sun: 12PM-6PM',
      image: 'https://images.unsplash.com/photo-1553811526-27486ddd0258?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0d2VhciUyMHN0b3JlfGVufDB8fDB8fHww'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-gold mb-4">RETAIL STORES</h1>
          <p className="text-muted-foreground text-lg">Visit us in person at our flagship locations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div key={store.id} className="border border-border rounded-lg overflow-hidden bg-muted hover:border-rose-gold transition-colors">
              <img 
                src={store.image} 
                alt={store.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{store.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{store.address}</p>
                  <p>{store.phone}</p>
                  <p className="text-rose-gold font-medium">{store.hours}</p>
                </div>
                <Button className="w-full mt-4 bg-rose-gold text-background hover:bg-rose-gold-dark transition-colors">
                  Get Directions
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
