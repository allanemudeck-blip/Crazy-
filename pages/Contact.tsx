
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Loader2, CheckCircle } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../constants';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzdpwvvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact Message: ${formData.subject} from ${formData.name}`
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', subject: 'General Inquiry', message: '' });
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-slate-900 leading-tight">Get in <span className="text-orange-600">Touch</span></h1>
              <p className="text-lg text-slate-500">
                Whether you're planning a hotel event, a corporate lunch, or just want to say hi, our team is here to help.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Phone / WhatsApp", val: RESTAURANT_CONFIG.whatsapp, color: "bg-green-100 text-green-700" },
                { icon: Mail, title: "Email", val: RESTAURANT_CONFIG.email, color: "bg-blue-100 text-blue-700" },
                { icon: MapPin, title: "Our Location", val: RESTAURANT_CONFIG.location, color: "bg-red-100 text-red-700" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-orange-600 rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer" onClick={() => window.open(`https://wa.me/${RESTAURANT_CONFIG.whatsapp.replace('+', '')}`, '_blank')}>
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold">Fast Lane Ordering</h3>
                <p className="opacity-90">Skip the website and chat directly with our counter staff for instant service.</p>
                <div className="inline-flex items-center space-x-2 font-bold bg-white text-orange-600 px-6 py-2 rounded-xl group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                  <span>Open WhatsApp</span>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-12 transition-transform">
                <MessageCircle className="w-24 h-24" />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="inline-flex p-6 bg-green-100 rounded-full text-green-600">
                  <CheckCircle className="w-16 h-16" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500">Thank you for reaching out. Our team will get back to you shortly.</p>
                </div>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none" 
                        placeholder="John" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none" 
                        placeholder="+256..." 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Subject</label>
                    <select 
                      name="subject"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option>General Inquiry</option>
                      <option>Hotel Partnership</option>
                      <option>Large Group Order</option>
                      <option>Complaints/Feedback</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Your Message</label>
                    <textarea 
                      required
                      name="message"
                      rows={4} 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-orange-500 outline-none resize-none" 
                      placeholder="Tell us how we can help..." 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-800 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
