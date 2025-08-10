import { Button } from './ui/button'
import { Input } from './ui/input'

export default function Footer() {
  const footerLinks = [
    'shop', 'upcoming', 'lookbook', 'archive', 'shipping', 
    'contact', 'retail stores', 'stickers', 'jobs'
  ]

  return (
    <footer className="border-t border-border p-6 mt-12 bg-muted">
      <div className="flex justify-between items-start mb-8">
        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <a 
              key={link}
              href="#"
              className="hover:text-rose-gold transition-colors text-sm text-muted-foreground uppercase tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-2">
          <Input 
            placeholder="notify me on updates"
            className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-rose-gold focus:ring-rose-gold"
          />
          <Button 
            variant="outline"
            className="bg-background border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors"
          >
            →
          </Button>
        </div>
      </div>
      
      <div className="flex justify-center gap-4 text-xs text-muted-foreground">
        <a href="#" className="hover:text-rose-gold transition-colors">terms of service</a>
        <span className="text-rose-gold">•</span>
        <a href="#" className="hover:text-rose-gold transition-colors">legal notice</a>
        <span className="text-rose-gold">•</span>
        <a href="#" className="hover:text-rose-gold transition-colors">privacy</a>
        <span className="text-rose-gold">•</span>
        <a href="#" className="hover:text-rose-gold transition-colors">refund</a>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 Twin Roots. Cultivating style, one root at a time.
        </p>
      </div>
    </footer>
  )
}