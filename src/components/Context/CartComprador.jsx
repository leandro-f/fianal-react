import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext({});

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    comprador: {
      nombre: "agus lean",
      cel: "123344444",
      email: "aguslea@hotmail.com",
    },
    items: [],
    total: 0,
    
  });

  const addItem = (item, quantity) => {
    const { items } = cart;
    const index = items.findIndex((i) => i.item.id === item.id);

    if (index > -1) {
      items[index].quantity += quantity;
    } else {
      items.push({
        item,
        quantity,
      });
    }

    const newTotal = items.reduce((acc, item) => acc + item.quantity * item.item.precio, 0);

    setCart({
      ...cart,
      items,
      total: newTotal, 
      isEmpty: false,
    });
  };

  const removerItem = (itemId) => {
    setCart((prevCart) => {
       const updatedItems = prevCart.items.filter((item) => item.item.id !== itemId);
       const updatedTotal = updatedItems.reduce((acc, item) => acc + item.quantity * item.item.precio, 0);
       const isEmpty = updatedItems.length === 0; 
       return { ...prevCart, items: updatedItems, total: updatedTotal };
    });
  };

  const clear = () => {
    setCart((prevValues) => ({
      ...prevValues,
      items: [],
      total: 0,
    }));
  };

  const getTotal = () => {
    const { items } = cart;
    return items.reduce((acc, item) => acc + item.quantity * item.item.precio, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removerItem,
        clear,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

