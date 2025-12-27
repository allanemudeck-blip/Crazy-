
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Truck, Hotel, Coffee, CheckCircle, MessageSquare, Loader2, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../constants';
import { supabase } from '../lib/supabase';

export const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deliveryType: 'Takeaway',
    roomNumber: '',
    payment: 'Mobile Money'
  });

  const handleWhatsAppOrder = () => {
    const itemsText = cart.map(item => `- ${item.name} (x${item.quantity})`).join('\n');
    const message = encodeURIComponent(
      `NEW ORDER\n----------\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${formData.deliveryType}${formData.roomNumber ? '\nRoom: ' + formData.roomNumber : ''}\nPayment: ${formData.payment}\n\nITEMS:\n${itemsText}\n----------\nTOTAL: UGX ${totalPrice.toLocaleString()}`
    );
    window.open(`https://wa.me/${RESTAURANT_CONFIG.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const itemsText = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');
    
    try {
      console.log('Saving order to table: orders...');
      const { error } = await supabase
        .from('orders')
        .insert([
          {
            customer_name: formData.name,
            phone_number: formData.phone, 
            delivery_type: formData.deliveryType,
            room_number: formData.roomNumber || null,
            payment_method: formData.payment,
            items: itemsText,
            total_price: totalPrice
          }
        ]);

      if (error) {
        console.error('Order Error:', error);
        alert(`Failed to save order: ${error.message}`);
        return;
      }

      handleWhatsAppOrder();
      setStep('success');
      clearCart();
    } catch (err: any) {
      alert(`System Error: ${err.message || 'Failed to process order.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'success') {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="bg-green-100 p-10 rounded-full">
          <CheckCircle className="w-24 h-24 text-green-600" />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-slate-900">Order Received!</h1>
          <p className="text-slate-500 max-w-md mx-auto">
            Your order has been recorded in our database. We will contact you shortly to confirm your pickup or delivery.
          </p>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-orange-700 transition-all shadow-lg"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
        <div className="bg-orange-600 p-8 text-white">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="opacity-90">Complete your order details below</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-10">
          <section className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="w-8 h-8 bg-amber-100 text-orange-600 rounded-full flex items-center justify-center text-sm">1</span>
              <span>Contact Information</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input 
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <input 
                  required
                  type="tel"
                  placeholder="+256..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="w-8 h-8 bg-amber-100 text-orange-600 rounded-full flex items-center justify-center text-sm">2</span>
              <span>Delivery Preference</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { id: 'Takeaway', icon: Truck, label: 'Takeaway' },
                { id: 'Dine-in', icon: Coffee, label: 'Dine-in' },
                { id: 'Hotel-Delivery', icon: Hotel, label: 'Hotel Delivery' }
              ].map(type => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFormData({...formData, deliveryType: type.id})}
                  className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${
                    formData.deliveryType === type.id 
                    ? 'border-orange-600 bg-orange-50 text-orange-700' 
                    : 'border-slate-100 hover:border-slate-200 text-slate-500'
                  }`}
                >
                  <type.icon className="w-6 h-6 mb-2" />
                  <span className="font-bold text-sm">{type.label}</span>
                </button>
              ))}
            </div>

            {formData.deliveryType === 'Hotel-Delivery' && (
              <div className="space-y-2 animate-in slide-in-from-top duration-300">
                <label className="text-sm font-semibold text-slate-700">Room Number / Suite</label>
                <input 
                  required
                  type="text"
                  placeholder="e.g. Room 402"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  value={formData.roomNumber}
                  onChange={e => setFormData({...formData, roomNumber: e.target.value})}
                />
              </div>
            )}
          </section>

          <section className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
              <span className="w-8 h-8 bg-amber-100 text-orange-600 rounded-full flex items-center justify-center text-sm">3</span>
              <span>Payment Method</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { id: 'Mobile Money', label: 'Airtel / MTN' },
                { id: 'Visa', label: 'Visa / Card' },
                { id: 'Virtual Card', label: 'Virtual Card' },
                { id: 'Cash', label: 'Cash' }
              ].map(method => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setFormData({...formData, payment: method.id})}
                  className={`p-3 rounded-xl border-2 text-xs font-bold transition-all text-center ${
                    formData.payment === method.id 
                    ? 'border-orange-600 bg-orange-50 text-orange-700' 
                    : 'border-slate-100 hover:border-slate-200 text-slate-500'
                  }`}
                >
                  {method.label}
                </button>
              ))}
            </div>

            {formData.payment === 'Mobile Money' && (
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start space-x-3 animate-in fade-in slide-in-from-top-2">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Info className="w-5 h-5 text-red-600" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-red-900">Airtel Money Preferred</p>
                  <p className="text-red-700">Please pay to: <span className="font-mono font-bold">{RESTAURANT_CONFIG.whatsapp}</span> (Airtel Money)</p>
                  <p className="text-red-600 text-xs mt-1">Include your name as reason during payment.</p>
                </div>
              </div>
            )}
          </section>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-slate-500 text-sm">Total to Pay</p>
              <p className="text-3xl font-bold text-orange-600">UGX {totalPrice.toLocaleString()}</p>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <MessageSquare className="w-6 h-6" />
                  <span>Confirm & Send via WhatsApp</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
