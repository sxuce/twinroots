import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Archive from './pages/Archive'
import Lookbook from './pages/Lookbook'
import Upcoming from './pages/Upcoming'
import Stickers from './pages/Stickers'
import RetailStores from './pages/RetailStores'
import Contact from './pages/Contact'
import Jobs from './pages/Jobs'
import Shipping from './pages/Shipping'
import TermsOfService from './pages/TermsOfService'
import { CartProvider } from './contexts/CartContext'
// ...existing imports...
import { useCart } from './contexts/CartContext';

function App() {
  const { state } = useCart();
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground font-mono">
        <div className="flex">
          <Sidebar cartItems={state?.itemCount ?? 0} />
          <div className="flex-1 ml-80">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/lookbook" element={<Lookbook />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="/stickers" element={<Stickers />} />
                <Route path="/retail-stores" element={<RetailStores />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/jobs" element={<Jobs />} />
                  <Route path="/shipping" element={<Shipping />} />
                  <Route path="/terms" element={<TermsOfService />} />
                </Routes>
              </main>
              
              <Footer />
            </div>
          </div>
        </div>
    </Router>
  );
}

export default App