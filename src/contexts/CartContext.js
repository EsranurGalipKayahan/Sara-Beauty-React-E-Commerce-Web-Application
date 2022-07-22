import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    const flag = cartItems.find((item) => item.id == newItem.id);
    if (flag) {
      flag.quantity = flag.quantity + 1;
    } else {
      const cartItem = {
        id: newItem.id,
        name: newItem.name,
        image_link: newItem.image_link,
        price: newItem.price,
        quantity: 1,
      };
      setCartItems([...cartItems, cartItem]);
    }
  };
  const emptyCart = () => {
    setCartItems([]);
  };
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id != id));
  };
  const getTotal = () => {
    const amounts = cartItems.map((item) => item.price * item.quantity);

    const total = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    return total;
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeItem, getTotal, emptyCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
