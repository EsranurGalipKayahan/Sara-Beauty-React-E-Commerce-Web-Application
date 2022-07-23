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
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const location = useLocation();

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light fixed-top justify-between">
      <Link to="/" className="navbar-brand">
            <img
              src="/images/logo/logo.png"
              alt="logo"
              className=" w-75 d-sm-block responsive-img pl-3"
            />
          </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON pr-3 space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 space-y-2 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
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
        </section>

        <ul className="DESKTOP-MENU hidden space-x-4 lg:flex">
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
      </nav>

    </div>

  );
};
export default Nav;
