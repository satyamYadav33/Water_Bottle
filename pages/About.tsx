
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white w-full">
      {/* Hero Header */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <img src="https://picsum.photos/seed/about_hero/1000/1000" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Our Story</h1>
          <p className="text-xl text-gray-400 max-w-xl">We started with a simple question: why should sustainability compromise elegance?</p>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black">Redefining Purity.</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2021, Satemades Bottles was born out of a desire for a hydration solution that was as clear as the water it held. We noticed the market was saturated with heavy, opaque metal bottles or cheap, toxic plastics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team spent 18 months researching materials before settling on our signature medical-grade borosilicate glass. It's the only material that guarantees a pure taste while standing up to the rigors of daily life.
              </p>
              <div className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-water/10 rounded-xl flex items-center justify-center text-water"><Award size={24}/></div>
                  <div>
                    <h4 className="font-bold">Award Winning Design</h4>
                    <p className="text-sm text-gray-500">Recognized for excellence in sustainable lifestyle products.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/about_2/800/800" alt="Process" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16">The Values That Drive Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Uncompromising Sustainability", desc: "Every component of our bottle is 100% recyclable. We don't just reduce plastic; we eliminate it from our lifecycle." },
              { icon: Heart, title: "Customer First", desc: "We build for you. Your feedback drives our product iterations and service improvements every single day." },
              { icon: Globe, title: "Global Impact", desc: "For every bottle sold, we fund the removal of 2kg of ocean-bound plastic in partnership with global NGOs." }
            ].map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-water text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-water/20">
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - simplified */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16">Join the Movement</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
            We are more than a brand; we are a community of thousands dedicated to a cleaner, healthier planet.
          </p>
          <div className="flex justify-center gap-4">
             <img src="https://i.pravatar.cc/100?u=1" className="w-16 h-16 rounded-full border-4 border-white shadow-md -mr-4" />
             <img src="https://i.pravatar.cc/100?u=2" className="w-16 h-16 rounded-full border-4 border-white shadow-md -mr-4" />
             <img src="https://i.pravatar.cc/100?u=3" className="w-16 h-16 rounded-full border-4 border-white shadow-md -mr-4" />
             <img src="https://i.pravatar.cc/100?u=4" className="w-16 h-16 rounded-full border-4 border-white shadow-md -mr-4" />
             <div className="w-16 h-16 rounded-full border-4 border-white shadow-md bg-water text-white flex items-center justify-center font-bold text-sm">50k+</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
