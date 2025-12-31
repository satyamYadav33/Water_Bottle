
import React from 'react';
import { useCart } from '../CartContext';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="py-32 container mx-auto px-4 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <ShoppingBag size={40} className="text-gray-300" />
        </div>
        <h1 className="text-4xl font-black mb-4">Your cart is feeling light</h1>
        <p className="text-gray-500 mb-8">Time to add some crystal clear hydration to your life.</p>
        <Link to="/products" className="bg-water text-white px-8 py-4 rounded-full font-bold hover:bg-water/90 transition-all shadow-lg shadow-water/20">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-black mb-12">Shopping Cart ({totalItems})</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex-grow">
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm">
              <div className="p-8 space-y-8">
                {cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="w-full sm:w-32 aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{item.selectedSize} / {item.selectedColor}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="flex flex-wrap justify-between items-end mt-8">
                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)} className="p-2 text-gray-500 hover:text-water"><Minus size={16} /></button>
                          <span className="w-12 text-center font-black">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)} className="p-2 text-gray-500 hover:text-water"><Plus size={16} /></button>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400 font-bold mb-1">Total</p>
                          <p className="text-2xl font-black text-water">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm sticky top-32">
              <h3 className="text-xl font-black mb-8">Order Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="font-bold text-gray-900">FREE</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Estimated Tax</span>
                  <span className="font-bold text-gray-900">$0.00</span>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-3xl font-black text-water">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <button 
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-water text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-water/20 transition-all active:scale-95"
                >
                  Checkout Now <ArrowRight size={20} />
                </button>
                <Link to="/products" className="w-full block text-center py-4 text-gray-400 font-bold hover:text-water transition-colors">
                  Continue Shopping
                </Link>
              </div>

              {/* Promo Code placeholder */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Have a promo code?</p>
                <div className="flex gap-2">
                  <input type="text" className="flex-grow bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none" placeholder="Enter code" />
                  <button className="bg-gray-100 px-4 py-3 rounded-xl font-bold text-sm hover:bg-gray-200">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
