import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types/product';
import { useCartStore } from '../store/cart';

const categoryLabels: Record<Product['category'], string> = {
  cream: 'Crème',
  oil: 'Huile',
  serum: 'Sérum',
  extract: 'Extrait',
  mask: 'Masque',
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore(state => state.addItem);
  const [isAdding, setIsAdding] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    setIsAdding(true);
    
    setTimeout(() => {
      addItem(product);
      setIsAdding(false);
      setShowAddedMessage(true);
      
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 2000);
    }, 600);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cream':
        return 'bg-pink-100 text-pink-800';
      case 'oil':
        return 'bg-amber-100 text-amber-800';
      case 'serum':
        return 'bg-purple-100 text-purple-800';
      case 'extract':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isFeatured = ['herb-aloe-cleanser', 'rose-hip-serum'].includes(product.id);
  const categoryLabel = useMemo(() => categoryLabels[product.category] ?? product.category, [product.category]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-emerald-300 relative">
          {/* Featured Badge */}
          {isFeatured && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="absolute top-2 left-2 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1 shadow-lg"
            >
              <Sparkles className="w-3 h-3" />
              SÉLECTION
            </motion.div>
          )}

          {/* Product Image */}
          <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
            <motion.img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            
            {!product.inStock && (
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg">
                Rupture de stock
              </div>
            )}
            <div
              className={`absolute bottom-3 right-3 text-xs px-3 py-1.5 rounded-full font-bold capitalize shadow-lg ${getCategoryColor(
                product.category
              )}`}
            >
              {categoryLabel}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-200 leading-tight">
                {product.name}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {product.description}
              </p>
            </div>

            {/* Rating (simulated) */}
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 text-yellow-400 fill-current" 
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-2 font-medium">(4,8)</span>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-1.5">
              {product.benefits.slice(0, 2).map((benefit, index) => (
                <span 
                  key={index}
                  className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full font-medium"
                >
                  {benefit}
                </span>
              ))}
              {product.benefits.length > 2 && (
                <span className="text-xs text-gray-500 font-medium">
                  +{product.benefits.length - 2} de plus
                </span>
              )}
            </div>

            {/* Price and Add to Cart */}
            <div className="flex items-center justify-between pt-2">
              <div className="font-bold text-2xl text-gray-900">
                {product.price.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: product.currency,
                  minimumFractionDigits: 2,
                })}
              </div>
              
              <motion.button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdding}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg ${
                  product.inStock
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-xl'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <motion.div
                  animate={isAdding ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <ShoppingCart className="h-4 w-4" />
                </motion.div>
                {isAdding ? 'Ajout en cours...' : product.inStock ? 'Ajouter au panier' : 'Indisponible'}
              </motion.button>
            </div>

            {/* Added Message */}
            <AnimatePresence>
              {showAddedMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  className="absolute top-4 left-4 right-4 bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-lg text-center shadow-lg z-30"
                >
                  ✓ Ajouté au panier !
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;