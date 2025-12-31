
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { ChevronLeft, ChevronRight, CreditCard, ShieldCheck, Truck, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [step, setStep] = useState(1);
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="py-32 text-center container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <button onClick={() => navigate('/products')} className="text-water font-bold">Return to shop</button>
      </div>
    );
  }

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handlePlaceOrder = () => {
    // Simulate API call
    setTimeout(() => {
      clearCart();
      setStep(4);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Stepper */}
        {step < 4 && (
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map(i => (
              <React.Fragment key={i}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= i ? 'bg-water text-white shadow-lg shadow-water/20' : 'bg-white text-gray-300'}`}>
                  {i}
                </div>
                {i < 3 && <div className={`w-16 md:w-24 h-1 mx-2 rounded-full ${step > i ? 'bg-water' : 'bg-gray-200'}`}></div>}
              </React.Fragment>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                    <Truck size={28} className="text-water" /> Shipping Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Address</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" required />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">City</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">ZIP Code</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" />
                    </div>
                    <div className="space-y-2 col-span-2 md:col-span-1">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Country</label>
                      <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                    <Truck size={28} className="text-water" /> Shipping Method
                  </h2>
                  <div className="space-y-4">
                    {[
                      { id: 'std', name: 'Standard Shipping', time: '3-5 business days', price: 0 },
                      { id: 'exp', name: 'Express Delivery', time: '1-2 business days', price: 15 },
                      { id: 'over', name: 'Overnight Purity', time: 'Next day by 10am', price: 35 }
                    ].map(method => (
                      <label key={method.id} className="flex items-center justify-between p-6 border rounded-2xl cursor-pointer hover:border-water transition-all group">
                        <div className="flex items-center gap-4">
                          <input type="radio" name="shipping" defaultChecked={method.id === 'std'} className="accent-water w-5 h-5" />
                          <div>
                            <p className="font-bold">{method.name}</p>
                            <p className="text-sm text-gray-500">{method.time}</p>
                          </div>
                        </div>
                        <span className="font-bold text-water">{method.price === 0 ? 'FREE' : `$${method.price}`}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
                    <CreditCard size={28} className="text-water" /> Secure Payment
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cardholder Name</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Card Number</label>
                      <div className="relative">
                        <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" placeholder="0000 0000 0000 0000" />
                        <ShieldCheck className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" size={18} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Expiry Date</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">CVV</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-water" placeholder="123" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl flex gap-3 items-center mt-8">
                    <ShieldCheck className="text-blue-600" size={24} />
                    <p className="text-xs text-blue-800">Your payment information is encrypted and processed securely. We never store your card details.</p>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Package size={40} />
                  </div>
                  <h2 className="text-4xl font-black">Order Confirmed!</h2>
                  <p className="text-gray-500">Your Satemades Bottles are being prepared for shipment. <br />Order #SAT-{Math.floor(Math.random() * 90000) + 10000}</p>
                  <div className="pt-8">
                    <button 
                      onClick={() => navigate('/')}
                      className="bg-water text-white px-8 py-4 rounded-full font-bold hover:bg-water/90 transition-all"
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {step < 4 && (
                <div className="mt-12 flex justify-between">
                  <button 
                    onClick={prevStep}
                    disabled={step === 1}
                    className={`flex items-center gap-2 font-bold ${step === 1 ? 'text-gray-300' : 'text-gray-500 hover:text-water'}`}
                  >
                    <ChevronLeft size={20} /> Back
                  </button>
                  {step < 3 ? (
                    <button 
                      onClick={nextStep}
                      className="bg-water text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-water/90 transition-all shadow-lg shadow-water/20"
                    >
                      Continue <ChevronRight size={20} />
                    </button>
                  ) : (
                    <button 
                      onClick={handlePlaceOrder}
                      className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-black transition-all shadow-xl"
                    >
                      Place My Order <ShieldCheck size={20} />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar Summary */}
          {step < 4 && (
            <div className="space-y-6">
              <div className="bg-white rounded-[2rem] p-8 shadow-sm">
                <h3 className="text-lg font-black mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  {cart.map(item => (
                    <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 truncate w-32">{item.name}</p>
                          <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{item.quantity}x {item.selectedSize}</p>
                        </div>
                      </div>
                      <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 font-medium">Subtotal</span>
                    <span className="font-bold text-gray-800">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 font-medium">Shipping</span>
                    <span className="font-bold text-gray-800">FREE</span>
                  </div>
                  <div className="flex justify-between text-xl font-black pt-4 border-t border-gray-50">
                    <span className="text-gray-900">Total</span>
                    <span className="text-water">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 border border-white/50 backdrop-blur-md rounded-[2rem] p-6">
                <h4 className="font-bold text-sm mb-2 flex items-center gap-2"><Droplets size={16} className="text-water" /> Satemades Impact</h4>
                <p className="text-xs text-gray-500 leading-relaxed">This order saves approximately 14 single-use plastic bottles from entering our oceans. Thank you for making a difference.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Droplets = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 16.3c2.2 0 4-1.8 4-4 0-3.3-4-8-4-8s-4 4.7-4 8c0 2.2 1.8 4 4 4z"/><path d="M17 16.3c2.2 0 4-1.8 4-4 0-3.3-4-8-4-8s-4 4.7-4 8c0 2.2 1.8 4 4 4z"/>
  </svg>
);

export default Checkout;
