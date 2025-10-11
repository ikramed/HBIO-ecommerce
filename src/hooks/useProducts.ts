import { useMemo } from 'react';
import PRODUCTS, {
  getFeaturedProducts,
  getProductById,
  getProducts,
  getProductsByCategory,
} from '../data/products';
import type { Product } from '../types/product';

export interface ProductFilters {
  search?: string;
  category?: string;
  sort?: 'name' | 'price-asc' | 'price-desc' | 'category';
}

const applyFilters = (products: Product[], filters: ProductFilters) => {
  let result = [...products];

  if (filters.search) {
    const term = filters.search.toLowerCase();
    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.ingredients.some((ingredient) => ingredient.toLowerCase().includes(term))
    );
  }

  if (filters.category && filters.category !== 'all') {
    result = result.filter((product) => product.category === filters.category);
  }

  if (filters.sort) {
    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.priceCents - b.priceCents);
        break;
      case 'price-desc':
        result.sort((a, b) => b.priceCents - a.priceCents);
        break;
      case 'category':
        result.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'name':
      default:
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }

  return result;
};

export function useProducts(filters: ProductFilters = {}) {
  return useMemo(() => applyFilters(PRODUCTS, filters), [filters]);
}

export function useProduct(id?: string) {
  return useMemo(() => (id ? getProductById(id) ?? null : null), [id]);
}

export function useFeaturedProducts() {
  return useMemo(() => getFeaturedProducts(), []);
}

export function useProductsByCategory(category: string) {
  return useMemo(() => getProductsByCategory(category), [category]);
}

export { getProducts };
