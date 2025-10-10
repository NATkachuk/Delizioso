import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface CartItem {
  [key: string]: number;
}

interface Item {
  id: number;
  price: number;
}

export interface CardContextType {
  cart: CartItem;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalItems: () => number;
  getTotalPrice: (items: Item[]) => number;
}

export const CardContext = createContext<CardContextType | undefined>(undefined);

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem>({});

  const addToCart = (itemId: number): void => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: number): void => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalItems = (): number => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalPrice = (items: Item[]): number => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = items.find((i) => i.id === parseInt(itemId));
      return item ? total + item.price * quantity : total;
    }, 0);
  };

  return (
    <CardContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItems, getTotalPrice }}>
      {children}
    </CardContext.Provider>
  );
};