import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartPulse, Award, MessageSquare } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import HeroImage from '../components/HeroImage';

export default function Home() {
  const featuredProducts = PRODUCTS;

  const stats = [
    { label: '100% Herbal', value: '100%' },
    { label: 'GMP Certified', value: 'GMP' },
    { label: 'AYUSH Approved', value: 'AYUSH' },
    { label: 'Quality Assured', value: 'QA' },
  ];

  const benefits = [
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Herbal Formulation', desc: 'Pure natural ingredients for safe healing.' },
    { icon: <HeartPulse className="w-8 h-8" />, title: 'Doctor Recommended', desc: 'Trusted by healthcare professionals.' },
    { icon: <Award className="w-8 h-8" />, title: 'High Quality Mfg', desc: 'State-of-the-art manufacturing facilities.' },
    { icon: <CheckCircle2 className="w-8 h-8" />, title: 'Safe and Effective', desc: 'Proven results with zero side effects.' },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-emerald-900 rounded-[3rem] overflow-hidden min-h-[600px] flex items-center">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
              <HeroImage />
            </div>
            
            <div className="relative z-10 px-8 md:px-16 lg:px-24 py-20 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-100 text-xs font-bold uppercase tracking-widest">Innovation of Healthcare</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  Innovation of <span className="text-emerald-400">Healthcare</span>
                </h1>
                
                <p className="text-emerald-100/80 text-lg md:text-xl leading-relaxed max-w-xl">
                  Bio Life Pharma is dedicated to revolutionizing healthcare through natural, herbal formulations that are safe, effective, and backed by science.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/products"
                    className="bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all flex items-center space-x-2 shadow-xl shadow-emerald-900/50"
                  >
                    <span>View Products</span>
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    to="/about"
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-32 h-32 rounded-full border-4 border-emerald-100 flex items-center justify-center relative group">
                <div className="absolute inset-2 rounded-full border-2 border-emerald-500 border-dashed animate-[spin_10s_linear_infinite]"></div>
                <span className="text-2xl font-black text-emerald-900">{stat.value}</span>
              </div>
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Our Portfolio</h2>
            <h3 className="text-4xl font-bold text-slate-900">Featured Products</h3>
          </div>
          <Link to="/products" className="text-emerald-600 font-bold flex items-center space-x-2 hover:underline">
            <span>View All Products</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-emerald-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                See what we provide to <br />
                <span className="text-emerald-600">keep you healthy</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                With world-class preventive, prescriptive & curative medical practices, Bio Life Pharma has been at the helm of nurturing healthy living since the turn of the new century.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="text-emerald-600 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                      {benefit.icon}
                    </div>
                    <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                    <p className="text-sm text-slate-500">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-emerald-600 rounded-[3rem] overflow-hidden aspect-square shadow-2xl shadow-emerald-200">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                  alt="Doctor"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs space-y-4">
                <div className="flex items-center space-x-2 text-emerald-600">
                  <ShieldCheck size={24} />
                  <span className="font-bold">Quality Assured</span>
                </div>
                <p className="text-sm text-slate-500">Every product undergoes rigorous testing to ensure maximum safety and efficacy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10">
            Have questions about our products?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto relative z-10">
            Our team of experts is here to help you find the right healthcare solutions for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all flex items-center space-x-2"
            >
              <MessageSquare size={20} />
              <span>Contact Us Now</span>
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all flex items-center space-x-2"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
