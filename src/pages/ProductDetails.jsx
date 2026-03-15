import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ArrowLeft, CheckCircle2, ShieldCheck, Info, MessageSquare, Clock, FlaskConical, Stethoscope, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Product not found</h2>
        <Link to="/products" className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-slate-500 hover:text-emerald-600 transition-colors font-bold"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 rounded-[3rem] p-12 aspect-square flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-emerald-100 shadow-sm">
              <span className="text-emerald-700 font-black text-lg">{product.type}</span>
            </div>
          </motion.div>

          {/* Product Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-emerald-600 font-bold uppercase tracking-widest text-xs">
                <ShieldCheck size={16} />
                <span>Quality Assured Formulation</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">{product.name}</h1>
              <p className="text-xl text-emerald-600 font-medium italic">{product.tagline}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-slate-900 font-bold">
                <Info size={20} className="text-emerald-600" />
                <span>Description</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-slate-900 font-bold">
                <FlaskConical size={20} className="text-emerald-600" />
                <span>Key Ingredients </span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-slate-700 leading-relaxed font-medium">{product.composition}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-slate-900 font-bold">
                <Stethoscope size={20} className="text-emerald-600" />
                <span>Indications / Uses</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-slate-700 leading-relaxed">{product.indications}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-slate-900 font-bold">
                <Clock size={20} className="text-emerald-600" />
                <span>Dosage Instructions</span>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <p className="text-emerald-900 font-bold text-lg">{product.dosage}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-slate-900 font-bold">
                <AlertTriangle size={20} className="text-emerald-600" />
                <span>Safety Information</span>
              </div>
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <p className="text-red-900 text-sm leading-relaxed">{product.safety}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-slate-900 font-bold">
                <CheckCircle2 size={20} className="text-emerald-600" />
                <span>Key Benefits</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                    <CheckCircle2 size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <Link 
                to="/contact"
                className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all flex items-center space-x-2 shadow-xl shadow-emerald-100"
              >
                <MessageSquare size={20} />
                <span>Inquire Now</span>
              </Link>
              <a 
                href={`https://wa.me/919876543210?text=I'm interested in ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-emerald-600 text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all flex items-center space-x-2"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h3 className="text-2xl font-bold text-slate-900 mb-12">Other Healthcare Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.filter(p => p.id !== id).slice(0, 3).map(p => (
            <Link 
              key={p.id} 
              to={`/products/${p.id}`}
              className="bg-white p-6 rounded-3xl border border-emerald-50 hover:border-emerald-200 hover:shadow-xl transition-all group"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-emerald-50 mb-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{p.name}</h4>
              <p className="text-xs text-slate-500 mt-1">{p.type}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
