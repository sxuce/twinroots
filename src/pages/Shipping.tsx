export default function Shipping() {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      price: '€8.00',
      time: '3-5 business days',
      description: 'Standard delivery within Europe'
    },
    {
      name: 'Express Shipping',
      price: '€15.00',
      time: '1-2 business days',
      description: 'Fast delivery for urgent orders'
    },
    {
      name: 'International Shipping',
      price: '€25.00',
      time: '7-14 business days',
      description: 'Worldwide delivery available'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-gold mb-4">SHIPPING</h1>
          <p className="text-muted-foreground text-lg">Fast and reliable shipping to your doorstep</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {shippingOptions.map((option, index) => (
            <div key={index} className="border border-border rounded-lg p-6 bg-muted hover:border-rose-gold transition-colors">
              <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
              <div className="text-2xl font-bold text-rose-gold mb-2">{option.price}</div>
              <div className="text-sm text-muted-foreground mb-2">{option.time}</div>
              <p className="text-sm">{option.description}</p>
            </div>
          ))}
        </div>
        
        <div className="border border-border rounded-lg p-6 bg-muted">
          <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• Orders are processed within 1-2 business days</p>
            <p>• Tracking information will be sent via email</p>
            <p>• Free shipping on orders over €150</p>
            <p>• Returns accepted within 30 days</p>
            <p>• Contact us for any shipping inquiries</p>
          </div>
        </div>
      </div>
    </div>
  )
}
