
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../CartContext';
import { Link, useNavigate } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag size={24} className="text-water" />
                My Cart
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Your cart is empty</h3>
                    <p className="text-gray-500">Looks like you haven't added anything yet.</p>
                  </div>
                  <button 
                    onClick={() => { setIsCartOpen(false); navigate('/products'); }}
                    className="bg-water text-white px-8 py-3 rounded-full font-medium hover:bg-water/90 transition-all"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900 leading-tight">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{item.selectedSize} / {item.selectedColor}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border rounded-full px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)} className="p-1 hover:text-water"><Minus size={14} /></button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)} className="p-1 hover:text-water"><Plus size={14} /></button>
                        </div>
                        <span className="font-bold text-water">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t space-y-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="text-2xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-400 text-center">Shipping and taxes calculated at checkout.</p>
                <div className="grid grid-cols-1 gap-3">
                  <button 
                    onClick={() => { setIsCartOpen(false); navigate('/checkout'); }}
                    className="w-full bg-water text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-water/20 transition-all flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout
                  </button>
                  <button 
                    onClick={() => { setIsCartOpen(false); navigate('/cart'); }}
                    className="w-full bg-white text-gray-900 py-3 rounded-xl font-bold border hover:bg-gray-50 transition-all"
                  >
                    View Cart
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
