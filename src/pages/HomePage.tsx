import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen md:min-h-[80vh] px-2 py-8 md:px-4 md:py-12 text-center bg-gradient-to-br from-background via-muted to-rose-gold/10">
      <img src="/twinroots/logo.png" alt="Twin Roots Logo" className="w-20 h-20 md:w-32 md:h-32 mb-4 md:mb-6 drop-shadow-lg" />
      <h1 className="text-3xl md:text-6xl font-extrabold text-rose-gold mb-3 md:mb-4 tracking-tight leading-tight">Twin Roots</h1>
      <p className="text-base md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-xs md:max-w-xl mx-auto leading-relaxed">
        Cultivating style, one root at a time.<br className="hidden md:block" />
        Discover unique fashion, curated collections,<br className="hidden md:block" />
        and timeless pieces for every season.
      </p>
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-xs md:max-w-none mx-auto mb-8 md:mb-10">
        <Link to="/twinroots/shop" className="px-6 py-3 rounded bg-rose-gold text-background font-bold text-base md:text-lg shadow-lg hover:bg-rose-gold/80 transition w-full md:w-auto text-center">Shop Now</Link>
        <Link to="/twinroots/archive" className="px-6 py-3 rounded border border-rose-gold text-rose-gold font-bold text-base md:text-lg shadow-lg hover:bg-muted transition w-full md:w-auto text-center">View Archive</Link>
        <Link to="/twinroots/contact" className="px-6 py-3 rounded border border-rose-gold text-rose-gold font-bold text-base md:text-lg shadow-lg hover:bg-muted transition w-full md:w-auto text-center">Contact Us</Link>
      </div>
      <div className="mt-8 md:mt-12 text-xs md:text-sm text-muted-foreground w-full max-w-xs md:max-w-none mx-auto">
        <span className="block mb-2">Follow us on social media for updates and inspiration.</span>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4 justify-center mt-2">
          <a href="#" className="hover:text-rose-gold py-2 px-4 rounded transition">Instagram</a>
          <a href="#" className="hover:text-rose-gold py-2 px-4 rounded transition">Twitter</a>
          <a href="#" className="hover:text-rose-gold py-2 px-4 rounded transition">Pinterest</a>
        </div>
      </div>
    </div>
  );
}
