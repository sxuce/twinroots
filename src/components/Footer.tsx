import { Button } from './ui/button'
import { Input } from './ui/input'

export default function Footer() {
  const footerLinks = [
  'shop', 'archive', 'shipping', 'contact', 'retail-stores'
  ]

  return (
    <footer className="border-t border-border p-2 md:p-6 mt-8 md:mt-12 bg-muted hidden md:block">
      <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-8 gap-4 md:gap-6">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 mb-2 md:mb-0 w-full md:w-auto items-center justify-center">
          {footerLinks.map((link) => (
            <a 
              key={link}
              href={`/twinroots/${link}`}
              className="hover:text-rose-gold transition-colors text-xs md:text-sm text-muted-foreground uppercase tracking-wide px-2 py-1 text-center"
            >
              {link.replace('-', ' ')}
            </a>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto justify-center">
          <Input 
            placeholder="notify me on updates"
            className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-rose-gold focus:ring-rose-gold w-full md:w-auto mb-2 md:mb-0 text-center"
          />
          <Button 
            variant="outline"
            className="bg-background border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors w-full md:w-auto text-center"
          >
            →
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-4 text-xs text-muted-foreground items-center">
        <a href="/twinroots/terms" className="hover:text-rose-gold transition-colors px-2 py-1 text-center">terms of service</a>
        <span className="text-rose-gold">•</span>
        <a href="/twinroots/legal" className="hover:text-rose-gold transition-colors px-2 py-1 text-center">legal notice</a>
        <span className="text-rose-gold">•</span>
        <a href="/twinroots/privacy" className="hover:text-rose-gold transition-colors px-2 py-1 text-center">privacy</a>
        <span className="text-rose-gold">•</span>
        <a href="/twinroots/refund" className="hover:text-rose-gold transition-colors px-2 py-1 text-center">refund</a>
      </div>
      <div className="mt-4 md:mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 Twin Roots. Cultivating style, one root at a time.
        </p>
      </div>
    </footer>
  )
}