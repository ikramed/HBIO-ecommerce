import type { ProductCategory } from './api';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceCents: number;
  currency: string;
  image: string;
  category: ProductCategory;
  ingredients: string[];
  benefits: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  subtotalCents: number;
  totalPrice: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}