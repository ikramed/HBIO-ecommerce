import { create } from 'zustand';
import { CartState, CartItem, Product } from '../types/product';

const calculateTotals = (items: CartItem[]) => {
  const subtotalCents = items.reduce((sum, item) => sum + item.product.priceCents * item.quantity, 0);
  return {
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotalCents,
    totalPrice: subtotalCents / 100,
  };
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  totalItems: 0,
  subtotalCents: 0,
  totalPrice: 0,

  addItem: (product: Product, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.product.id === product.id);

      const updatedItems = existingItem
        ? state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...state.items, { product, quantity }];

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    });
  },

  removeItem: (productId: string) => {
    set((state) => {
      const updatedItems = state.items.filter((item) => item.product.id !== productId);

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    });
  },

  updateQuantity: (productId: string, quantity: number) => {
    set((state) => {
      if (quantity <= 0) {
        return get().removeItem(productId);
      }

      const updatedItems = state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );

      return {
        ...state,
        items: updatedItems,
        ...calculateTotals(updatedItems),
      };
    });
  },

  clearCart: () => {
    set({
      items: [],
      totalItems: 0,
      subtotalCents: 0,
      totalPrice: 0,
    });
  },
}));
