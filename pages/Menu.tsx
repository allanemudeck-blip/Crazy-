
import React, { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';
import { useCart } from '../context/CartContext';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const categories: (Category | 'All')[] = ['All', 'Chicken', 'Pizza', 'Burgers', 'Sides', 'Drinks'];

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 pt-12 pb-8 sticky top-16 sm:top-20 z-40 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Our Delicious Menu</h1>
            
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text"
                placeholder="Search for wings, burgers, tea..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex items-center space-x-3 overflow-x-auto hide-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30 scale-105' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
            {filteredItems.map((product) => (
              <div key={product.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col group">
                <div className="h-56 relative overflow-hidden bg-amber-50">
                  <div className="absolute inset-0 img-placeholder" />
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
                    onLoad={(e) => (e.currentTarget.parentElement?.querySelector('.img-placeholder') as HTMLElement)?.classList.add('hidden')}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-20" />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-orange-600 mb-1 block">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{product.description}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-slate-900 font-bold text-lg">UGX {product.price.toLocaleString()}</span>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-orange-600 text-white p-3 rounded-2xl hover:bg-orange-700 active:scale-95 transition-all shadow-md"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 space-y-4">
            <div className="inline-flex p-6 bg-slate-100 rounded-full">
              <ShoppingCart className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">No items found</h3>
            <p className="text-slate-500">Try adjusting your search or category filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};
