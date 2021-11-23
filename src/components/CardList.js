import React, { useContext } from "react";
import { CardContext } from "../contexts/CardContext";
import CardItem from "./CardItem";

const CardList = () => {
  const { cardItems } = useContext(CardContext);
  return (
    <ul role="list" className="-my-6 divide-y divide-gray-200">
      {cardItems.map((product) => (
        <CardItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
export default CardList;
