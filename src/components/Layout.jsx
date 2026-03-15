import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
