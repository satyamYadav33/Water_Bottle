
import { Product } from './types';

export const COLORS = {
  primary: '#00A8CC',
  primaryHover: '#0891B2',
  accent: '#10B981',
  text: '#1F2937',
  bg: '#F3F4F6',
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Crystal Clear Pure',
    tagline: 'The ultimate transparency.',
    description: 'Our flagship bottle, designed for those who value absolute purity. Made from premium food-grade borosilicate glass.',
    price: 34.99,
    rating: 4.8,
    reviewCount: 128,
    image: 'https://picsum.photos/seed/bottle1/600/800',
    gallery: [
      'https://picsum.photos/seed/bottle1/600/800',
      'https://picsum.photos/seed/bottle1_side/600/800',
      'https://picsum.photos/seed/bottle1_cap/600/800'
    ],
    category: 'Classic',
    size: ['500ml', '750ml', '1L'],
    colors: [
      { name: 'Crystal', hex: '#FFFFFF' },
      { name: 'Ocean', hex: '#00A8CC' },
      { name: 'Forest', hex: '#10B981' }
    ],
    specs: {
      capacity: '750ml',
      material: 'Borosilicate Glass',
      weight: '450g',
      dimensions: '25cm x 7cm'
    },
    features: ['100% BPA Free', 'Leak Proof', 'Easy to Clean', 'Lightweight'],
    stock: 50,
    isBestseller: true
  },
  {
    id: '2',
    name: 'Aqua Sports Pro',
    tagline: 'Endurance in every drop.',
    description: 'Designed for the active lifestyle. Ergonomic grip and high-impact resistance for your toughest workouts.',
    price: 45.00,
    originalPrice: 55.00,
    rating: 4.9,
    reviewCount: 85,
    image: 'https://picsum.photos/seed/bottle2/600/800',
    gallery: ['https://picsum.photos/seed/bottle2/600/800'],
    category: 'Sports',
    size: ['750ml', '1L'],
    colors: [
      { name: 'Stealth Black', hex: '#1F2937' },
      { name: 'Electric Blue', hex: '#3B82F6' }
    ],
    specs: {
      capacity: '1L',
      material: 'Impact-Resistant Polymer',
      weight: '320g',
      dimensions: '28cm x 8cm'
    },
    features: ['One-Hand Operation', 'Dust Cover', 'Impact Resistant', 'Lanyard Included'],
    stock: 30,
    isNew: true
  },
  {
    id: '3',
    name: 'Zen Infuser',
    tagline: 'Naturally flavored hydration.',
    description: 'The Zen Infuser allows you to add fresh fruits and herbs to your water, making hydration a delicious ritual.',
    price: 39.99,
    rating: 4.7,
    reviewCount: 210,
    image: 'https://picsum.photos/seed/bottle3/600/800',
    gallery: ['https://picsum.photos/seed/bottle3/600/800'],
    category: 'Infuser',
    size: ['600ml'],
    colors: [
      { name: 'Rose Quartz', hex: '#FBCFE8' },
      { name: 'Mint Leaf', hex: '#D1FAE5' }
    ],
    specs: {
      capacity: '600ml',
      material: 'Premium Glass & Steel',
      weight: '510g',
      dimensions: '24cm x 7.5cm'
    },
    features: ['Dual Filter System', 'Wide Mouth', 'Protective Silicone Sleeve', 'Detachable Infuser'],
    stock: 15
  },
  {
    id: '4',
    name: 'Midnight Aurora',
    tagline: 'Elegance in the dark.',
    description: 'A limited edition finish that shifts colors under different light. Truly a statement piece for your desk.',
    price: 89.00,
    rating: 5.0,
    reviewCount: 42,
    image: 'https://picsum.photos/seed/bottle4/600/800',
    gallery: ['https://picsum.photos/seed/bottle4/600/800'],
    category: 'Limited',
    size: ['750ml'],
    colors: [
      { name: 'Aurora', hex: '#4C1D95' }
    ],
    specs: {
      capacity: '750ml',
      material: 'Titanium-Reinforced Glass',
      weight: '480g',
      dimensions: '25cm x 7cm'
    },
    features: ['Individually Numbered', 'Limited Edition Box', 'Anti-Scratch Coating'],
    stock: 5,
    isNew: true
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The clarity of the glass is unmatched. It feels premium every time I take a sip. Best investment for my health this year!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "Finally, a bottle that doesn't leak in my gym bag. The Aqua Sports Pro is absolutely worth every penny.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: 3,
    name: "Emma Watts",
    text: "I love the infuser! It's so easy to clean and makes drinking water so much more enjoyable. The design is beautiful.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=emma"
  }
];
