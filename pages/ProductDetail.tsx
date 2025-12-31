
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Shield, Truck, RefreshCw, ShoppingCart, Minus, Plus, ChevronRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { useCart } from '../CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div className="h-screen flex items-center justify-center">Product not found</div>;
  }

  const [selectedSize, setSelectedSize] = useState(product.size[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-12">
          <Link to="/" className="hover:text-water transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-water transition-colors">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          {/* Gallery */}
          <div className="flex-1 space-y-4">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100 shadow-inner">
              <motion.img 
                key={mainImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${mainImage === img ? 'border-water shadow-md' : 'border-transparent opacity-60'}`}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                {product.isNew && <span className="bg-water text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">New Arrival</span>}
                <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase">{product.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-500 font-medium mb-6">{product.tagline}</p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"} />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-400">({product.reviewCount} Reviews)</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-water">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-300 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-10 pb-8 border-b">
              {product.description}
            </p>

            <div className="space-y-8 mb-12">
              {/* Color Selection */}
              <div>
                <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Select Color: {selectedColor}</span>
                <div className="flex gap-4">
                  {product.colors.map(color => (
                    <button 
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 p-1 transition-all ${selectedColor === color.name ? 'border-water scale-110 shadow-lg' : 'border-transparent'}`}
                    >
                      <div className="w-full h-full rounded-full border border-gray-100" style={{ backgroundColor: color.hex }}></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Select Size: {selectedSize}</span>
                <div className="flex gap-3">
                  {product.size.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-xl font-bold border transition-all ${selectedSize === size ? 'bg-water border-water text-white shadow-lg shadow-water/20' : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Quantity</span>
                <div className="flex items-center bg-gray-50 rounded-2xl p-1 w-fit border border-gray-100">
                  <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-3 text-gray-500 hover:text-water transition-colors"><Minus size={18} /></button>
                  <span className="w-12 text-center font-black text-lg">{quantity}</span>
                  <button onClick={() => setQuantity(q => q+1)} className="p-3 text-gray-500 hover:text-water transition-colors"><Plus size={18} /></button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className="flex-grow bg-water text-white py-5 rounded-[2rem] font-black text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-water/30 transition-all active:scale-95"
              >
                <ShoppingCart size={22} />
                Add to Cart
              </button>
              <button className="px-8 bg-gray-900 text-white rounded-[2rem] font-black hover:bg-black transition-colors">
                Buy It Now
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t">
              <div className="flex items-center gap-3">
                <Shield className="text-water" size={20} />
                <span className="text-xs font-bold text-gray-500">2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="text-water" size={20} />
                <span className="text-xs font-bold text-gray-500">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="text-water" size={20} />
                <span className="text-xs font-bold text-gray-500">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs / Detailed Specs */}
        <section className="py-24 border-t">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-black mb-8">Product Features</h3>
                <ul className="space-y-4">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-water"></div>
                      <span className="text-gray-600 font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-black mb-8">Technical Specs</h3>
                <div className="space-y-4">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-gray-50 text-sm">
                      <span className="text-gray-400 font-bold uppercase tracking-widest">{key}</span>
                      <span className="text-gray-900 font-bold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
