import type { Product } from '../types/product';

const PRODUCTS: Product[] = [
  {
    id: 'cinnamon-essential-oil',
    name: 'Cinnamon Essential Oil',
    description:
      'Discover the warmth and power of 100% natural cinnamon essential oil, known for its stimulating and purifying properties.',
    price: 120,
    priceCents: 12000,
    currency: 'MAD',
    image: '/assets/product-1.jpg',
    category: 'oil',
    ingredients: ['Cinnamon Bark'],
    benefits: ['Stimulates circulation', 'Eases muscle tension', 'Purifying properties'],
    inStock: true,
    featured: true,
  },
  {
    id: 'lavender-essential-oil',
    name: 'Lavender Essential Oil',
    description:
      'Experience the calming power of 100% natural lavender essential oil, ideal for relaxation and aromatherapy.',
    price: 95,
    priceCents: 9500,
    currency: 'MAD',
    image: '/assets/product-2.jpg',
    category: 'oil',
    ingredients: ['Lavender Flowers'],
    benefits: ['Relieves stress', 'Improves sleep quality', 'Calms the mind'],
    inStock: true,
    featured: true,
  },
  {
    id: 'lemon-essential-oil',
    name: 'Lemon Essential Oil',
    description:
      'Refreshing and energizing 100% natural lemon essential oil, perfect for skincare and aromatherapy.',
    price: 85,
    priceCents: 8500,
    currency: 'MAD',
    image: '/assets/product-3.jpg',
    category: 'oil',
    ingredients: ['Lemon Peel'],
    benefits: ['Boosts mood', 'Purifies the air', 'Supports clear skin'],
    inStock: true,
    featured: false,
  },
  {
    id: 'clove-essential-oil',
    name: 'Clove Essential Oil',
    description:
      'Warming and protective 100% natural clove essential oil, known for antibacterial and soothing properties.',
    price: 140,
    priceCents: 14000,
    currency: 'MAD',
    image: '/assets/product-4.jpg',
    category: 'oil',
    ingredients: ['Clove Buds'],
    benefits: ['Relieves muscle tension', 'Freshens breath', 'Supports wellness'],
    inStock: true,
    featured: false,
  },
  {
    id: 'peppermint-essential-oil',
    name: 'Peppermint Essential Oil',
    description:
      'Cooling and soothing 100% natural peppermint oil, ideal for aromatherapy, massage, and skincare.',
    price: 110,
    priceCents: 11000,
    currency: 'MAD',
    image: '/assets/product-5.jpg',
    category: 'oil',
    ingredients: ['Peppermint Leaves'],
    benefits: ['Relieves headaches', 'Reduces muscle tension', 'Boosts mental clarity'],
    inStock: true,
    featured: false,
  },
];

export const getProducts = (): Product[] => PRODUCTS;

export const getFeaturedProducts = (): Product[] => PRODUCTS.filter((product) => product.featured);

export const getProductById = (id: string): Product | undefined =>
  PRODUCTS.find((product) => product.id === id);

export const getProductsByCategory = (category: string): Product[] =>
  PRODUCTS.filter((product) => product.category === category);

export default PRODUCTS;
