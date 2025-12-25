
import React from 'react';
import { Target, Heart, ShieldCheck, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Kitchen"
        />
        <div className="relative z-20 text-center space-y-4 px-4">
          <h1 className="text-5xl font-bold">Our Story</h1>
          <p className="text-xl text-amber-200 font-medium">Serving happiness in every bite since 2015.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">It started with a simple obsession for <span className="text-orange-600 underline">Perfect Chicken.</span></h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Crazy Chicken began as a small roadside stall in Kampala with a secret family spice blend and a dream to provide the highest quality meals at accessible prices.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, we've grown into one of Uganda's most beloved food brands, serving hotels, businesses, and thousands of happy families every day. Our commitment to using fresh, locally sourced Ugandan ingredients remains unchanged.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-orange-600">50K+</p>
                <p className="text-sm text-slate-500">Happy Customers</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-orange-600">10+</p>
                <p className="text-sm text-slate-500">Secret Spices</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80" 
              className="rounded-[2.5rem] shadow-2xl"
              alt="Platter"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white p-6 rounded-3xl shadow-xl hidden sm:block">
              <Users className="w-8 h-8 mb-2" />
              <p className="font-bold text-sm">Community Led</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Target, 
              title: "Quality First", 
              desc: "We never compromise on the quality of our ingredients. Fresh chicken, premium oils, and real cheese only."
            },
            { 
              icon: Heart, 
              title: "Made with Love", 
              desc: "Every pizza is hand-stretched and every piece of chicken is marinated for 24 hours to ensure max flavor."
            },
            { 
              icon: ShieldCheck, 
              title: "Hygienic Prep", 
              desc: "We maintain international food safety standards in our kitchens to ensure your health and satisfaction."
            }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all border border-slate-100 text-center space-y-4">
              <div className="inline-flex p-4 bg-orange-100 rounded-2xl">
                <val.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
              <p className="text-slate-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
