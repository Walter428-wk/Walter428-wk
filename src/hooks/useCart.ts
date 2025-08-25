import { useState, useEffect } from 'react';
import { CartItem, Product } from '../types';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, selectedSize: string, selectedColor: string, quantity = 1) => {
    const existingItem = cartItems.find(
      item => item.product.id === product.id && 
               item.selectedSize === selectedSize && 
               item.selectedColor === selectedColor
    );

    if (existingItem) {
      setCartItems(items =>
        items.map(item =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${selectedSize}-${selectedColor}-${Date.now()}`,
        product,
        quantity,
        selectedSize,
        selectedColor
      };
      setCartItems(items => [...items, newItem]);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice
  };
};