import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cart';

const formatCurrency = (cents: number) =>
  (cents / 100).toLocaleString('fr-FR', { style: 'currency', currency: 'MAD' });

const Cart: React.FC = () => {
  const { items, totalItems, subtotalCents, updateQuantity, removeItem, clearCart } = useCartStore();
  const taxCents = Math.round(subtotalCents * 0.08);
  const totalCents = subtotalCents + taxCents;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="text-8xl mb-6">🛒</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Votre panier est vide</h1>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez nos soins naturels et ajoutez vos favoris à votre panier !
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 hover:scale-105"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Voir la boutique
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              to="/products"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continuer mes achats
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Panier</h1>
            <p className="text-gray-600">{totalItems} article{totalItems > 1 ? 's' : ''} dans votre panier</p>
          </div>
          
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors duration-200"
            >
              Vider le panier
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg hover:opacity-75 transition-opacity"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {item.product.description}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-500 capitalize">
                        Catégorie : {item.product.category}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Price Controls */}
                  <div className="flex flex-col items-end space-y-3">
                    <div className="text-lg font-bold text-gray-900">
                      {formatCurrency(item.product.priceCents * item.quantity)}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      
                      <span className="w-12 text-center bg-gray-50 border border-gray-200 rounded px-3 py-1 text-sm font-medium">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Résumé de commande</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total ({totalItems} article{totalItems > 1 ? 's' : ''})</span>
                  <span>{formatCurrency(subtotalCents)}</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Livraison</span>
                  <span className="text-emerald-600 font-medium">Gratuite</span>
                </div>
                
                <div className="flex justify-between text-gray-600">
                  <span>Taxes (8 %)</span>
                  <span>{formatCurrency(taxCents)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total TTC</span>
                    <span>{formatCurrency(totalCents)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 px-6 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                Passer au paiement
              </button>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Démonstration : aucun paiement réel ne sera effectué.
              </p>

              {/* Features */}
              <div className="mt-6 pt-6 border-t space-y-3">
                {[
                  '🚚 Livraison offerte sur toutes les commandes',
                  '🔒 Paiement sécurisé',
                  '↩️ Garantie satisfaite ou remboursé 30 jours',
                  '🌿 Ingrédients 100 % naturels'
                ].map((feature, index) => (
                  <div key={index} className="text-sm text-gray-600">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;