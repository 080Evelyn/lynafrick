import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [add, setAdd] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setAdd(JSON.parse(savedCart));
    }
  }, []);

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(add));
  }, [add]);

  const addToCart = (product) => {
    // setAdd((prevItems) => [...prevItems, product]);
    setAdd((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    // setAdd((prevItems) => prevItems.filter((item) => item.id !== product.id));
    setAdd((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);

      if (existingProduct && existingProduct.quantity > 1) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevItems.filter((item) => item.id !== product.id);
      }
    });
  };

  const clearCart = () => {
    setAdd([]);
  };

  const value = {
    addToCart,
    removeFromCart,
    clearCart,
    cartItems: add,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
