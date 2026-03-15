import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Leaf, Recycle, Users } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Leaf className="text-emerald-600" />, title: '100% Herbal', desc: 'We believe in the power of nature to heal and restore health.' },
    { icon: <ShieldCheck className="text-emerald-600" />, title: 'Quality First', desc: 'Rigorous testing and GMP standards are at our core.' },
    { icon: <Recycle className="text-emerald-600" />, title: 'Sustainable', desc: 'Recyclable packaging for a healthier planet.' },
    { icon: <Award className="text-emerald-600" />, title: 'Certified', desc: 'AYUSH approved and GMP certified manufacturing.' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-emerald-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">About Bio Life Pharma</h1>
          <p className="text-emerald-600 font-bold uppercase tracking-widest">Innovation of Healthcare</p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission to Revolutionize Healthcare</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Bio Life Pharma was founded with a clear vision: to bridge the gap between traditional herbal wisdom and modern pharmaceutical science. We are dedicated to discovering and developing innovative healthcare solutions that improve the quality of life for people worldwide.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our products are the result of extensive research and a deep commitment to purity. We use only the finest natural ingredients, processed in state-of-the-art facilities that adhere to the highest international quality standards.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=1000" 
              alt="Herbal Research" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm">Our Core Values</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">What Drives Us Every Day</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-white font-bold text-xl mb-4">{value.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
