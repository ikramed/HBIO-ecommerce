import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useProducts, type ProductFilters } from '../hooks/useProducts';

const categories = ['all', 'cream', 'oil', 'serum', 'extract', 'mask'] as const;

type CategoryKey = (typeof categories)[number];

type SortOption = 'name' | 'price-low' | 'price-high' | 'category';

const categoryLabels: Record<CategoryKey, string> = {
  all: 'Tous',
  cream: 'Crèmes',
  oil: 'Huiles',
  serum: 'Sérums',
  extract: 'Extraits',
  mask: 'Masques',
};

const getCategoryLabel = (category: string) =>
  categoryLabels[category as CategoryKey] ?? category;

const sortProducts = (products: ReturnType<typeof useProducts>, sortBy: SortOption) => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.priceCents - b.priceCents;
      case 'price-high':
        return b.priceCents - a.priceCents;
      case 'category':
        return a.category.localeCompare(b.category);
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });
};

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');

  const products = useProducts({
    search: searchTerm || undefined,
    category: selectedCategory,
    sort: sortBy.replace('-', '_') as ProductFilters['sort'],
  });

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSortBy('name');
  };

  const sortedProducts = useMemo(() => sortProducts(products, sortBy), [products, sortBy]);

  const getCategoryCount = (category: CategoryKey) => {
    if (category === 'all') return products.length;
    return products.filter((product) => product.category === category).length;
  };

  const resultsLabel = `${sortedProducts.length} produit${sortedProducts.length > 1 ? 's' : ''} trouvé${
    sortedProducts.length > 1 ? 's' : ''
  }`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Produits de beauté naturels
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre collection complète de crèmes, huiles, sérums et extraits naturels,
              élaborés à partir des meilleurs ingrédients que la nature a à offrir.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Recherchez un produit, un ingrédient..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as CategoryKey)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'Toutes les catégories' : getCategoryLabel(category)} ({
                      getCategoryCount(category)
                    })
                  </option>
                ))}
              </select>
            </div>

            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="name">Trier par nom</option>
                <option value="price-low">Prix : du plus bas au plus élevé</option>
                <option value="price-high">Prix : du plus élevé au plus bas</option>
                <option value="category">Catégorie</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'Tous' : getCategoryLabel(category)}
                <span className="ml-1 text-xs opacity-75">({getCategoryCount(category)})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {searchTerm
              ? 'Résultats de la recherche'
              : selectedCategory === 'all'
              ? 'Tous les produits'
              : getCategoryLabel(selectedCategory)}
          </h2>
          <p className="text-gray-600">{resultsLabel}</p>
        </div>

        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun produit trouvé</h3>
            <p className="text-gray-600 mb-6">
              Modifiez vos termes de recherche ou vos filtres pour trouver le produit idéal.
            </p>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>

      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">La promesse Hbio</h2>
            <p className="text-xl text-gray-600">
              Chaque produit est élaboré avec soin et reflète notre engagement envers une beauté naturelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Approvisionnement éthique',
                description:
                  'Nous collaborons avec des fournisseurs durables qui partagent nos valeurs de responsabilité environnementale et de commerce équitable.',
              },
              {
                title: 'Testé en laboratoire',
                description:
                  'Chaque formule est soumise à des tests rigoureux pour garantir pureté, efficacité et sécurité pour tous les types de peau.',
              },
              {
                title: 'Satisfait ou remboursé',
                description:
                  'Pas convaincu ? Notre garantie de remboursement sous 30 jours témoigne de la confiance que nous portons à nos soins.',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;