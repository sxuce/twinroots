import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-gold mb-4">CONTACT</h1>
          <p className="text-muted-foreground text-lg">Get in touch with our team</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4 bg-muted">
                <h4 className="font-medium text-rose-gold mb-2">Email</h4>
                <p className="text-muted-foreground">hello@twinroots.com</p>
              </div>
              <div className="border border-border rounded-lg p-4 bg-muted">
                <h4 className="font-medium text-rose-gold mb-2">Phone</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="border border-border rounded-lg p-4 bg-muted">
                <h4 className="font-medium text-rose-gold mb-2">Address</h4>
                <p className="text-muted-foreground">123 Fashion Street<br />Design District<br />New York, NY 10001</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input 
                  placeholder="Your name"
                  className="bg-background border-border text-foreground focus:border-rose-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background border-border text-foreground focus:border-rose-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  placeholder="Your message..."
                  rows={4}
                  className="w-full p-3 bg-background border border-border rounded-md text-foreground focus:border-rose-gold focus:outline-none resize-none"
                />
              </div>
              <Button className="w-full bg-rose-gold text-background hover:bg-rose-gold-dark transition-colors">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
