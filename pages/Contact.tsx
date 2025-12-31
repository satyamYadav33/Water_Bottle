
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl font-black mb-6">Let's Connect</h1>
            <p className="text-xl text-gray-500">We'd love to hear from you. Our team is always here to chat about hydration, sustainability, or your order.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-white">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-water" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-water" placeholder="hello@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Subject</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-water" placeholder="What's this regarding?" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Message</label>
                  <textarea className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-water h-40 resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-water text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-water/90 transition-all shadow-xl shadow-water/20">
                  <Send size={20} /> Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between py-8">
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-water shadow-sm flex-shrink-0"><Mail size={24}/></div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Email Us</h4>
                    <p className="text-gray-500 mb-2 text-sm">For general inquiries and support.</p>
                    <a href="mailto:hello@satemades.com" className="text-water font-bold hover:underline">hello@satemades.com</a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-water shadow-sm flex-shrink-0"><Phone size={24}/></div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Call Us</h4>
                    <p className="text-gray-500 mb-2 text-sm">Mon-Fri from 9am to 6pm EST.</p>
                    <a href="tel:+15551234567" className="text-water font-bold hover:underline">+1 (555) 123-4567</a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-water shadow-sm flex-shrink-0"><MapPin size={24}/></div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Visit Us</h4>
                    <p className="text-gray-500 mb-2 text-sm">Come say hi at our HQ.</p>
                    <p className="text-gray-900 font-bold">123 Purity Lane, Crystal City, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t mt-12">
                <h4 className="font-black text-gray-400 uppercase tracking-widest text-xs mb-6">Follow Our Journey</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-400 hover:text-water transition-all hover:scale-110 shadow-sm"><Instagram size={20}/></a>
                  <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-400 hover:text-water transition-all hover:scale-110 shadow-sm"><Twitter size={20}/></a>
                  <a href="#" className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-400 hover:text-water transition-all hover:scale-110 shadow-sm"><Facebook size={20}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How do I clean my Satemades bottle?", a: "Most of our bottles are dishwasher safe, but we recommend hand-washing the caps and infusers with warm soapy water to preserve their longevity." },
              { q: "Is the glass fragile?", a: "We use high-grade borosilicate glass which is much stronger than standard glass. However, it is still glass! We recommend using our protective silicone sleeves for extra durability." },
              { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries worldwide. Shipping rates and times vary by location." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-gray-100 hover:border-water/20 transition-all">
                <h4 className="text-xl font-bold mb-4">{item.q}</h4>
                <p className="text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
