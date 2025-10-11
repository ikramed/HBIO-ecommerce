import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Company from './pages/Company';
import Support from './pages/Support';
import Legal from './pages/Legal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/company" element={<Company />} />
            <Route path="/support" element={<Support />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;