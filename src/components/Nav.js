import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { Container } from "react-bootstrap";
import NavItem from "./NavItem";

const navitems = [
  { path: "/", child: "Home" },
  { path: "/shop", child: "Shop" },
  { path: "/brands", child: "Brands" },
  { path: "/contact", child: "Contact" },
  { path: "/search", child: <FiSearch /> },
];

export const Nav = () => {
  const location = useLocation();
  return (
    <div className="navbar-wrapper">
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
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              {navitems.map((item, count) => (
                <NavItem key={count} navItem={item} />
              ))}
              <li>
                <Link
                  to="/login"
                  state={{ from: location }}
                  className="nav-link"
                >
                  <FiUser />
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link">
                  <FiShoppingCart />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
};
export default Nav;
