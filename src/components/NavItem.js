import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ navItem }) => {
  return (
    <li className="nav-item">
      <Link to={navItem.path} className="nav-link">
        {navItem.child}
      </Link>
    </li>
  );
};
export default NavItem;
