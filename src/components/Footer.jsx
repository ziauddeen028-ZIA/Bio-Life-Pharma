
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity inline-block bg-white p-2 rounded-xl"
            >
              <Logo />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed">
              Innovation of Healthcare. We are dedicated to providing high-quality
              pharmaceutical solutions for a healthier life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-500 transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-emerald-500 transition-colors">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-emerald-500 transition-colors">
                  Our Products
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-emerald-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white font-bold mb-6">Certifications</h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>GMP Certified</span>
              </li>

              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>Quality Tested</span>
              </li>

              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>Safe Packaging</span>
              </li>

              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span>Recyclable Packaging</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Details</h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-500 shrink-0" />
                <span>
                  Amartharaj Nagar, Sriperumbudur, Chennai - 600069,
                  Tamil Nadu, India
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span>+91 8925357013</span>
              </li>

              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span>biolifepharma2025@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Bio Life Pharma. All rights reserved.
            Innovation of Healthcare.
          </p>
        </div>

      </div>
    </footer>
  );
}

