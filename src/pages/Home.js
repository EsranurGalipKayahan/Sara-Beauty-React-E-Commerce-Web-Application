import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="d-sm-flex discover  align-items-center py-2 justify-content-between ">
      <img className="w-100 responsive-image" src="images/home.jpg" alt="" />
      <div className="shop-now-btn">
        <Link to="/shop">
          <button
            type="button"
            className="btn btn-light"
            data-mdb-ripple-color="dark"
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
