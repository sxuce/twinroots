import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Archive from './pages/Archive';
import RetailStores from './pages/RetailStores';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import TermsOfService from './pages/TermsOfService';
import { CartProvider } from './contexts/CartContext';
import './globals.css';
import { useCart } from './contexts/CartContext';

import { useEffect, useState } from 'react';
function AppLayout() {
  const { state } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/twinroots/home';
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Scroll to top on route change for mobile devices
  useEffect(() => {
    if (window.innerWidth <= 768) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setSidebarOpen(false); // Close sidebar on route change
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <div className="flex flex-col md:flex-row">
        {!isHome && (
          <Sidebar
            cartItems={state?.itemCount ?? 0}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}
        <div className="flex-1">
          <Navigation />
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Routes location={location}>
                  <Route path="/twinroots/" element={<Navigate to="/twinroots/home" replace />} />
                  <Route path="/twinroots/home" element={<HomePage />} />
                  <Route path="/twinroots/shop" element={<Shop />} />
                  <Route path="/twinroots/product/:productId" element={<ProductDetail />} />
                  <Route path="/twinroots/archive" element={<Archive />} />
                  <Route path="/twinroots/retail-stores" element={<RetailStores />} />
                  <Route path="/twinroots/contact" element={<Contact />} />
                  <Route path="/twinroots/shipping" element={<Shipping />} />
                  <Route path="/twinroots/terms" element={<TermsOfService />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;