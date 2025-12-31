
import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, Search, X } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Newest');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const categories = ['All', 'Classic', 'Sports', 'Infuser', 'Limited'];

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      if (sortBy === 'Top Rated') return b.rating - a.rating;
      return 0; // Default: Newest/None
    });
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Area */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Our Collection</h1>
          <p className="text-gray-500 max-w-2xl">Discover premium hydration solutions tailored for every aspect of your life—from the morning jog to the evening wind-down.</p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-start lg:items-center justify-between sticky top-20 z-30 bg-gray-50/80 backdrop-blur-md py-4 -mx-4 px-4 rounded-xl">
          {/* Categories Desktop */}
          <div className="hidden lg:flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-water text-white shadow-lg shadow-water/20' 
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            {/* Search */}
            <div className="relative flex-grow sm:flex-grow-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search bottles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-full text-sm focus:outline-none focus:border-water shadow-sm"
              />
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:block">Sort By</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-100 px-4 py-3 rounded-xl text-sm font-bold focus:outline-none shadow-sm cursor-pointer"
              >
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>

            {/* Mobile Filters Trigger */}
            <button 
              className="lg:hidden p-3 bg-white border border-gray-100 rounded-xl shadow-sm text-gray-600"
              onClick={() => setIsFilterDrawerOpen(true)}
            >
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-32 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search size={32} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-bold">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or search query.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-6 text-water font-bold hover:underline"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Overlay Placeholder logic - simplified for this code structure */}
      {isFilterDrawerOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 lg:hidden" onClick={() => setIsFilterDrawerOpen(false)}>
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setIsFilterDrawerOpen(false)}><X size={24}/></button>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-widest">Category</h3>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-4 py-3 rounded-xl font-medium ${activeCategory === cat ? 'bg-water/10 text-water' : 'hover:bg-gray-50'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
