
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 space-y-6">
        <div className="bg-amber-100 p-8 rounded-full">
          <ShoppingBag className="w-16 h-16 text-orange-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Your cart is empty</h2>
        <p className="text-slate-500 text-center max-w-sm">
          Hungry? Explore our menu and find something delicious to satisfy your cravings.
        </p>
        <Link 
          to="/menu" 
          className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors"
        >
          Go to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-10 flex items-center space-x-3">
        <ShoppingBag className="w-10 h-10 text-orange-600" />
        <span>Your Order</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Item List */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-100 flex items-center space-x-4 sm:space-x-6"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md" 
              />
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                    <p className="text-xs text-orange-600 font-bold uppercase tracking-widest">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-3 bg-slate-50 rounded-xl p-1 border border-slate-100">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                    >
                      <Minus className="w-4 h-4 text-slate-600" />
                    </button>
                    <span className="font-bold text-slate-900 min-w-[20px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                    >
                      <Plus className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                  <span className="font-bold text-slate-900">UGX {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}

          <Link to="/menu" className="inline-flex items-center text-orange-600 font-bold hover:underline space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Summary Card */}
        <div className="lg:sticky lg:top-32 h-fit">
          <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Summary</h3>
            
            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal ({totalItems} items)</span>
                <span className="text-slate-900 font-medium">UGX {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Delivery/Service</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-2xl font-bold text-orange-600">UGX {totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <Link 
              to="/checkout" 
              className="block w-full bg-orange-600 text-white text-center py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 active:scale-[0.98]"
            >
              Proceed to Checkout
            </Link>

            <div className="bg-amber-50 rounded-2xl p-4 flex items-center space-x-3 text-amber-800 text-xs">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
              </div>
              <p>Place your order now to get a priority delivery slot!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Star = ({ className }: { className: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
