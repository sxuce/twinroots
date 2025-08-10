import { Button } from './ui/button'
import { Input } from './ui/input'

export default function Footer() {
  const footerLinks = [
  'shop', 'archive', 'shipping', 'contact', 'retail-stores'
  ]

  return (
    <footer className="border-t border-border p-4 md:p-6 mt-12 bg-muted">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
        <div className="flex flex-wrap gap-4 md:gap-8 mb-4 md:mb-0">
          {footerLinks.map((link) => (
            <a 
              key={link}
              href={`/twinroots/${link}`}
              className="hover:text-rose-gold transition-colors text-sm text-muted-foreground uppercase tracking-wide px-2 py-1"
            >
              {link.replace('-', ' ')}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Input 
            placeholder="notify me on updates"
            className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-rose-gold focus:ring-rose-gold w-full md:w-auto"
          />
          <Button 
            variant="outline"
            className="bg-background border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors"
          >
            →
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs text-muted-foreground">
        <a href="/twinroots/terms" className="hover:text-rose-gold transition-colors px-2 py-1">terms of service</a>
        <span className="text-rose-gold">•</span>
        <a href="/twinroots/legal" className="hover:text-rose-gold transition-colors px-2 py-1">legal notice</a>
        <span className="text-rose-gold">•</span>
        <a href="/twinroots/privacy" className="hover:text-rose-gold transition-colors px-2 py-1">privacy</a>
        <span className="text-rose-gold">•</span>
        <a href="/twinroots/refund" className="hover:text-rose-gold transition-colors px-2 py-1">refund</a>
      </div>
      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 Twin Roots. Cultivating style, one root at a time.
        </p>
      </div>
    </footer>
  )
}