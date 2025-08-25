export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: 'men' | 'women' | 'kids' | 'accessories';
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  isNewArrival: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isAdmin?: boolean;
}

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sizes?: string[];
  search?: string;
}