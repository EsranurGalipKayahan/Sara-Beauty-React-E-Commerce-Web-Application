import React, { useContext } from "react";
import { CardContext } from "../contexts/CardContext";
import { Link } from "react-router-dom";
import CardList from "../components/CardList";

const Card = ({ checkoutHandler }) => {
  const { cardItems, getTotal } = useContext(CardContext);
  return (
    <div className="w-screen max-w-md">
      <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
        <div className="mt-8">
          <div className="flow-root ">
            {cardItems.length > 0 ? <CardList /> : <h3>No product</h3>}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>€{getTotal()}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <button
            className="flex w-full justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-current customized-btn"
            onClick={checkoutHandler}
          >
            Checkout
          </button>
        </div>
        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
          <p>
            or{" "}
            <Link to="/shop">
              <button type="button" className=" font-medium ">
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
