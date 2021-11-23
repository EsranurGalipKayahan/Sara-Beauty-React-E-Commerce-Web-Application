import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { CardContext } from "../contexts/CardContext";

const Checkout = () => {
  const { emptyCard } = useContext(CardContext);
  useEffect(() => {
    emptyCard();
  }, []);
  return (
    <div className="row align-items-center justify-content-between">
      <div className="col-md">
        <img
          src={"/images/cargo.png"}
          className="img-fluid responsive-img w-2/3"
          alt="cargo"
        />
      </div>
      <div className="col-md p-5">
        <p>Your product is shipped by</p>
        <img src="/images/dhl.png" alt="dhl" className="responsive w-50 mt-3" />
        <p className="font-bold mt-3">Tracking code : </p>
        <p className=" mt-3">{uuidv4()}</p>

        <a
          href="https://www.dhl.com/nl-en/home/tracking.html"
          target={"_blank"}
        >
          <button className="mt-6 w-full bg-gray-800 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-800 customized-btn">
            Track
          </button>
        </a>
      </div>
    </div>
  );
};
export default Checkout;
