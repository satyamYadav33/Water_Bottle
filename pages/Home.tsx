
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Leaf, ShieldCheck, Zap, Thermometer, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/hero_bottle/1920/1080?blur=2" 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-water font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Premium Hydration
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]"
            >
              Crystal Clear. <br />
              <span className="text-water">Perfectly Pure.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed"
            >
              Satemades Bottles redefine your drinking experience. Sustainable, elegant, and designed for those who value every drop.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products" className="bg-water text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-water/30">
                Shop Collection <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Built for Excellence</h2>
            <p className="text-gray-500">Every Satemades bottle is crafted with precision, using the highest grade materials to ensure purity and durability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Droplets, title: "100% BPA Free", desc: "Food-grade materials that keep your water tasting like water." },
              { icon: Thermometer, title: "Temp Retention", desc: "Advanced insulation keeps drinks cold for 24h or hot for 12h." },
              { icon: Leaf, title: "Eco-Friendly", desc: "Sustainable design reducing ocean plastic one bottle at a time." },
              { icon: ShieldCheck, title: "Leak-Proof", desc: "Precision engineering prevents even the smallest leaks." },
              { icon: Sparkles, title: "Crystal Clarity", desc: "High-grade borosilicate glass for unmatched transparency." },
              { icon: Zap, title: "Lightweight", desc: "Designed for the go, without adding unnecessary weight." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl border border-gray-100 hover:border-water/20 hover:shadow-2xl hover:shadow-water/5 transition-all bg-white"
              >
                <div className="w-14 h-14 bg-water/10 text-water rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-water font-bold text-sm tracking-widest uppercase mb-2 block">The Collection</span>
              <h2 className="text-3xl md:text-4xl font-black">Find Your Perfect Match</h2>
            </div>
            <Link to="/products" className="text-water font-bold flex items-center gap-2 hover:underline">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src="https://picsum.photos/seed/lifestyle1/800/1000" alt="Lifestyle" className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-water/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-black leading-tight">More Than Just a Bottle, <br /><span className="text-water">It's a Lifestyle choice.</span></h2>
              <p className="text-gray-500 leading-relaxed">
                At Satemades, we believe hydration should be an effortless, premium experience. Our bottles are designed in California and crafted globally using ethical manufacturing processes.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-3xl font-black text-water mb-1">50k+</h4>
                  <p className="text-sm text-gray-400 font-medium">Happy Hydrators</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-water mb-1">1M+</h4>
                  <p className="text-sm text-gray-400 font-medium">Plastics Saved</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-water mb-1">100%</h4>
                  <p className="text-sm text-gray-400 font-medium">Recyclable Material</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-water mb-1">24/7</h4>
                  <p className="text-sm text-gray-400 font-medium">Purity Guaranteed</p>
                </div>
              </div>

              <Link to="/about" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all">
                Learn Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-water/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black mb-4">What Our Community Says</h2>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-[2rem] shadow-sm relative border border-white">
                <p className="italic text-gray-600 mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-gray-900">{t.name}</h5>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Verified Buyer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-water/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-water/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Stay Hydrated. <br />Stay Updated.</h2>
              <p className="text-gray-400 mb-10">Subscribe to our newsletter for exclusive drops, eco-tips, and 15% off your first order.</p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-water transition-colors"
                  required
                />
                <button type="submit" className="bg-water text-white px-8 py-4 rounded-full font-bold hover:bg-water/90 transition-all whitespace-nowrap shadow-lg shadow-water/20">
                  Join The Wave
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fix: Use React.FC to properly handle reserved 'key' prop when rendering in a map
const Star: React.FC<{ size: number; className: string }> = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Home;
