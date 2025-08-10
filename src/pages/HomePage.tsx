import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 text-center bg-gradient-to-br from-background via-muted to-rose-gold/10">
      <img src="./logo.png" alt="Twin Roots Logo" className="w-32 h-32 mb-6 drop-shadow-lg" />
      <h1 className="text-4xl md:text-6xl font-extrabold text-rose-gold mb-4 tracking-tight">Twin Roots</h1>
      <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-xl">
        Cultivating style, one root at a time. Discover unique fashion, curated collections, and timeless pieces for every season.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Link to="/twinroots/shop" className="px-8 py-3 rounded bg-rose-gold text-background font-bold text-lg shadow-lg hover:bg-rose-gold/80 transition">Shop Now</Link>
        <Link to="/twinroots/archive" className="px-8 py-3 rounded border border-rose-gold text-rose-gold font-bold text-lg shadow-lg hover:bg-muted transition">View Archive</Link>
        <Link to="/twinroots/contact" className="px-8 py-3 rounded border border-rose-gold text-rose-gold font-bold text-lg shadow-lg hover:bg-muted transition">Contact Us</Link>
      </div>
      <div className="mt-12 text-xs text-muted-foreground">
        <span>Follow us on social media for updates and inspiration.</span>
        <div className="flex gap-4 justify-center mt-2">
          <a href="#" className="hover:text-rose-gold">Instagram</a>
          <a href="#" className="hover:text-rose-gold">Twitter</a>
          <a href="#" className="hover:text-rose-gold">Pinterest</a>
        </div>
      </div>
    </div>
  );
}
