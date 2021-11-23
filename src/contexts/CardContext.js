import React, { useState, createContext } from "react";

export const CardContext = createContext();

export const CardProvider = (props) => {
  const [cardItems, setCardItems] = useState([]);

  const addToCard = (newItem) => {
    const flag = cardItems.find((item) => item.id == newItem.id);
    if (flag) {
      flag.quantity = flag.quantity + 1;
    } else {
      const cardItem = {
        id: newItem.id,
        name: newItem.name,
        image_link: newItem.image_link,
        price: newItem.price,
        quantity: 1,
      };
      setCardItems([...cardItems, cardItem]);
    }
  };
  const emptyCard = () => {
    setCardItems([]);
  };
  const removeItem = (id) => {
    setCardItems(cardItems.filter((item) => item.id != id));
  };
  const getTotal = () => {
    const amounts = cardItems.map((item) => item.price * item.quantity);

    const total = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    return total;
  };
  return (
    <CardContext.Provider
      value={{ cardItems, addToCard, removeItem, getTotal, emptyCard }}
    >
      {props.children}
    </CardContext.Provider>
  );
};
