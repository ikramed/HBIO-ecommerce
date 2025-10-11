import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProducts } from '../hooks/useProducts';
import { useCartStore } from '../store/cart';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const products = useProducts();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Produit introuvable</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg"
        >
          Retour
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      addItem(product, quantity); // إضافة المنتج مع العدد المختار
      setShowAddedMessage(true);
      setTimeout(() => setShowAddedMessage(false), 3000);
    }, 800);
  };

  const formatCurrency = (cents: number) =>
    (cents / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'MAD' });

  return (
    <div className="min-h-screen bg-white p-8">
      <motion.button onClick={() => navigate(-1)} whileHover={{ x: -5 }} className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-medium">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Retour
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.img src={product.image} alt={product.name} className="w-full rounded-2xl" />
        <motion.div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400" />
            ))}
            <span className="ml-3 text-gray-600">(4,8) • 127 avis</span>
          </div>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="text-3xl font-bold mb-6">{formatCurrency(product.priceCents)}</div>

          <div className="flex items-center space-x-6 mb-6">
            <label className="text-lg font-medium">Quantité :</label>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="border-2 border-gray-300 rounded-xl px-4 py-3 text-lg">
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-3 px-8 py-5 text-xl font-bold rounded-xl bg-emerald-600 text-white"
          >
            <ShoppingCart className="h-7 w-7" />
            {isAddingToCart ? 'Ajout en cours...' : `Ajouter ${quantity} au panier – ${formatCurrency(product.priceCents * quantity)}`}
          </motion.button>

          <AnimatePresence>
            {showAddedMessage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center text-green-800 mt-4"
              >
                <Check className="h-6 w-6 mr-3 text-green-600" />
                <span className="font-semibold">
                  {quantity} article{quantity > 1 ? 's' : ''} ajouté{quantity > 1 ? 's' : ''} au panier !
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
