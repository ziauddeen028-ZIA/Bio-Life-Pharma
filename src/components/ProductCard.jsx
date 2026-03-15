import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Pill } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-emerald-100/50 border border-emerald-50 group"
    >
      <div className="relative h-64 overflow-hidden bg-emerald-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.type}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2">
          {product.tagline}
        </p>
        
        <Link
          to={`/products/${product.id}`}
          className="inline-flex items-center space-x-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
