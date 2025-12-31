
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { useCart } from '../CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-water text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">New</span>
          )}
          {product.isBestseller && (
            <span className="bg-amber-400 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Bestseller</span>
          )}
        </div>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm opacity-0 group-hover:opacity-100">
          <Heart size={18} />
        </button>

        {/* Overlay Buttons */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2">
          <button 
            onClick={() => addToCart(product, product.size[0], product.colors[0].name)}
            className="flex-grow bg-water text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-water/90 transition-colors"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="p-3 bg-white text-gray-900 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={12} 
              className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} 
            />
          ))}
          <span className="text-[10px] text-gray-400 ml-1">({product.reviewCount})</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-water transition-colors">{product.name}</h3>
        </Link>
        <p className="text-xs text-gray-500 mb-3 truncate">{product.tagline}</p>
        
        <div className="flex items-center gap-2">
          <span className="text-lg font-black text-water">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
