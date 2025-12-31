
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-water rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">SATEMADES</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Satemades Bottles is dedicated to providing high-quality, transparent water bottles that promote a healthy and sustainable lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-water transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-water transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-water transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-water transition-colors">All Products</Link></li>
              <li><Link to="/products?cat=Sports" className="hover:text-water transition-colors">Sports Collection</Link></li>
              <li><Link to="/products?cat=Infuser" className="hover:text-water transition-colors">Infuser Bottles</Link></li>
              <li><Link to="/products?cat=Limited" className="hover:text-water transition-colors">Limited Edition</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-water transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-water transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-water transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-water transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-water" />
                <span>123 Purity Lane, Crystal City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-water" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-water" />
                <span>hello@satemades.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; 2024 Satemades Bottles. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
