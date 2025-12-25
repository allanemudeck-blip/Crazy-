
import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, Phone, Mail, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 p-1.5 rounded-lg">
                <UtensilsCrossed className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Crazy<span className="text-amber-500">Chicken</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Uganda's premier destination for finger-licking chicken, 
              cheesy pizzas, and heartwarming African teas. 
              Service excellence since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/menu" className="hover:text-orange-500 transition-colors">Full Menu</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/menu" className="hover:text-orange-500 transition-colors">Popular Deals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>{RESTAURANT_CONFIG.whatsapp}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>{RESTAURANT_CONFIG.email}</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>{RESTAURANT_CONFIG.location}</span>
              </li>
            </ul>
          </div>

          {/* Payments */}
          <div>
            <h4 className="text-white font-semibold mb-6">Payment Options</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 p-2 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
              <div className="bg-white/5 p-2 rounded flex items-center justify-center text-[10px] font-bold">MASTERCARD</div>
              <div className="bg-white/5 p-2 rounded flex items-center justify-center text-[10px] font-bold">MTN MOMO</div>
              <div className="bg-white/5 p-2 rounded flex items-center justify-center text-[10px] font-bold">AIRTEL MONEY</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:row justify-between items-center space-y-4 sm:space-y-0 text-xs">
          <p>© 2024 Crazy Chicken Restaurant. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
