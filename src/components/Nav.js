import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { Container } from "react-bootstrap";

export const Nav = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <Container>
        <Link to="/" className="navbar-brand">
          <img
            src="/images/logo/logo.png"
            alt="logo"
            className=" w-50 d-sm-block responsive-img"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/brands" className="nav-link">
                Brands
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/search" className="nav-link">
                <FiSearch />
              </Link>
            </li>
            <li>
              <Link to="/login" state={{ from: location }} className="nav-link">
                <FiUser />
              </Link>
            </li>
            <li>
              <Link to="/card" className="nav-link">
                <FiShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
export default Nav;
