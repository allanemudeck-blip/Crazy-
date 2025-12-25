
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../constants';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hello Crazy Chicken! I'd like to place an order.");
    window.open(`https://wa.me/${RESTAURANT_CONFIG.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center space-x-2 group"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-semibold">
        Chat with Us
      </span>
    </button>
  );
};
