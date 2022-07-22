import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

const CartList = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <ul role="list" className="-my-6 divide-y divide-gray-200">
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
export default CartList;
