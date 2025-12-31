
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  category: 'Classic' | 'Sports' | 'Infuser' | 'Limited';
  size: string[];
  colors: { name: string; hex: string }[];
  specs: {
    capacity: string;
    material: string;
    weight: string;
    dimensions: string;
  };
  features: string[];
  stock: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type AppTheme = 'light' | 'dark';
