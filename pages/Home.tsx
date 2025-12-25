
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, CheckCircle2, Coffee } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

export const Home: React.FC = () => {
  const featured = MENU_ITEMS.filter(item => item.popular).slice(0, 3);

  return (
    <div className="space-y-12 md:space-y-20 pb-20">
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-slate-900 img-placeholder" />
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Crazy Chicken Feast"
          onLoad={(e) => (e.currentTarget.parentElement?.querySelector('.img-placeholder') as HTMLElement)?.classList.add('hidden')}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl space-y-6 text-white">
            <div className="inline-flex items-center space-x-2 bg-orange-600/90 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-4 h-4" />
              <span>Top Rated in Uganda</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
              Crazy Flavors,<br />
              <span className="text-amber-400">Serious</span> Quality.
            </h1>
            <p className="text-lg text-slate-200">
              From our famous grilled chicken to artisan pizzas and traditional African tea. Experience the best of Ugandan hospitality.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/menu" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center space-x-2 group shadow-xl shadow-orange-600/30"
              >
                <span>Order Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-center border border-white/30 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Clock, label: "Fast Delivery", sub: "Under 30 mins" },
            { icon: CheckCircle2, label: "Fresh Daily", sub: "Local Ingredients" },
            { icon: MapPin, label: "Central Location", sub: "Kampala Heart" },
            { icon: Star, label: "4.9 Rating", sub: "2000+ Reviews" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center space-y-2">
              <div className="p-3 bg-amber-100 rounded-full">
                <item.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-bold text-slate-800">{item.label}</h4>
              <p className="text-xs text-slate-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Fan Favorites</h2>
            <p className="text-slate-500">Most loved meals by our loyal customers.</p>
          </div>
          <Link to="/menu" className="text-orange-600 font-bold hover:underline hidden sm:block">
            View All Menu
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
              <div className="h-64 relative overflow-hidden bg-amber-50">
                <div className="absolute inset-0 img-placeholder" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                  onLoad={(e) => (e.currentTarget.parentElement?.querySelector('.img-placeholder') as HTMLElement)?.classList.add('hidden')}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-20">
                  Popular
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-orange-600 font-bold text-lg">UGX {product.price.toLocaleString()}</span>
                  <Link 
                    to="/menu" 
                    className="bg-amber-100 text-orange-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-orange-600 hover:text-white transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tea Heritage Section */}
      <section className="bg-amber-100/50 py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 text-orange-600 font-bold tracking-widest uppercase text-sm">
                <Coffee className="w-5 h-5" />
                <span>The Heart of our Kitchen</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Authentic African <br />
                Tea Traditions
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Experience the warmth of Ugandan hospitality through our carefully brewed teas. From hand-crushed ginger infusions to our signature creamy milk tea, every cup is a journey home.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-amber-200/50">
                  <p className="font-bold text-slate-900">Slow Brewed</p>
                  <p className="text-sm text-slate-500">For maximum flavor</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-amber-200/50">
                  <p className="font-bold text-slate-900">Fresh Milk</p>
                  <p className="text-sm text-slate-500">From local farms</p>
                </div>
              </div>
              <Link 
                to="/menu" 
                className="inline-flex items-center space-x-2 text-orange-600 font-bold group"
              >
                <span>Explore Drink Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-3xl shadow-lg overflow-hidden h-64 bg-amber-100">
                   <div className="absolute inset-0 img-placeholder" />
                   <img src="https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500 relative z-10" alt="Pouring Tea" onLoad={(e) => (e.currentTarget.parentElement?.querySelector('.img-placeholder') as HTMLElement)?.classList.add('hidden')} />
                </div>
                <div className="relative rounded-3xl shadow-lg overflow-hidden h-48 bg-amber-100">
                   <div className="absolute inset-0 img-placeholder" />
                   <img src="https://images.unsplash.com/photo-1594631252845-29fc458695d6?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500 relative z-10" alt="Milk Tea" onLoad={(e) => (e.currentTarget.parentElement?.querySelector('.img-placeholder') as HTMLElement)?.classList.add('hidden')} />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative rounded-3xl shadow-lg overflow-hidden h-64 bg-amber-100">
                   <div className="absolute inset-0 img-placeholder" />
                   <img src="https://images.unsplash.com/photo-1544787210-2213d84ad964?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500 relative z-10" alt="Spiced Tea" onLoad={(e) => (e.currentTarget.parentElement?.querySelector('.img-placeholder') as HTMLElement)?.classList.add('hidden')} />
                </div>
                <div className="relative rounded-3xl shadow-lg overflow-hidden h-48 bg-amber-100">
                   <div className="absolute inset-0 img-placeholder" />
                   <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500 relative z-10" alt="Black Tea" onLoad={(e) => (e.currentTarget.parentElement?.querySelector('.img-placeholder') as HTMLElement)?.classList.add('hidden')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Plan a Celebration at Crazy Chicken</h2>
            <p className="text-orange-100 text-lg">
              We offer exclusive group packages and hotel delivery for parties, corporate events, and family gatherings. 
              Let us handle the food while you make memories.
            </p>
            <div className="flex space-x-4">
              <Link to="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-amber-50 transition-colors">
                Enquire Now
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block bg-orange-700">
            <div className="absolute inset-0 img-placeholder opacity-20" />
            <img 
              src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80" 
              className="w-full h-full object-cover mix-blend-multiply opacity-50 relative z-10"
              alt="Platter"
              onLoad={(e) => (e.currentTarget.parentElement?.querySelector('.img-placeholder') as HTMLElement)?.classList.add('hidden')}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
