import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    description: 'A timeless classic made from premium organic cotton. Perfect for everyday wear with its comfortable fit and breathable fabric.',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    category: 'men',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    inStock: true,
    featured: true,
    isNewArrival: false
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 79.99,
    description: 'Vintage-inspired denim jacket with a modern fit. Features classic button closure and multiple pockets.',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
    ],
    category: 'men',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black'],
    inStock: true,
    featured: true,
    isNewArrival: true
  },
  {
    id: '3',
    name: 'Summer Floral Dress',
    price: 59.99,
    description: 'Elegant floral dress perfect for summer occasions. Made from lightweight, breathable fabric with a flattering silhouette.',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
    ],
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Pink', 'Floral Blue'],
    inStock: true,
    featured: false,
    isNewArrival: true
  },
  {
    id: '4',
    name: 'Kids Superhero T-Shirt',
    price: 19.99,
    description: 'Fun superhero-themed t-shirt that kids will love. Soft cotton blend for all-day comfort.',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
    ],
    category: 'kids',
    sizes: ['2T', '3T', '4T', '5T', '6T'],
    colors: ['Red', 'Blue', 'Green'],
    inStock: true,
    featured: false,
    isNewArrival: false
  },
  {
    id: '5',
    name: 'Leather Crossbody Bag',
    price: 89.99,
    description: 'Premium leather crossbody bag with adjustable strap. Perfect for everyday use with multiple compartments.',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tan'],
    inStock: true,
    featured: true,
    isNewArrival: false
  },
  {
    id: '6',
    name: 'Wool Blend Sweater',
    price: 69.99,
    description: 'Cozy wool blend sweater perfect for cooler weather. Features a relaxed fit and ribbed details.',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
    ],
    category: 'women',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Navy', 'Burgundy'],
    inStock: true,
    featured: false,
    isNewArrival: true
  }
];