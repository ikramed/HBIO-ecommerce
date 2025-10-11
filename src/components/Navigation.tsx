import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cart';

const Navigation: React.FC = () => {
  const location = useLocation();
  const totalItems = useCartStore(state => state.totalItems);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-emerald-600">Hbio</div>
            <span className="text-sm text-gray-500 hidden sm:block">Beauté naturelle</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/products"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/products') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Produits
            </Link>
            <Link
              to="/company"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/company') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Entreprise
            </Link>
            <Link
              to="/support"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/support') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Assistance
            </Link>
            <Link
              to="/legal"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/legal') 
                  ? 'text-emerald-600 border-b-2 border-emerald-600 pb-1' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              Mentions légales
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;