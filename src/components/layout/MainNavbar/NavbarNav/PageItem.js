import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function PageItem() {
  const [active, setActive] = useState("home");

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname.substring(1));
  }, [location]);

  return (
    <div className="page-item-container">
      <ul className="custome-page-items">
        <NavLink className="no-style" to="/">
          <li className={`p-item ${active === "" && "active-page-item"}`}>
            Home
          </li>
        </NavLink>
        <NavLink to="/categories">
          <li
            className={`p-item ${
              active === "categories" && "active-page-item"
            }`}
          >
            Category
          </li>
        </NavLink>
        <NavLink to="/products">
          <li
            className={`p-item ${active === "products" && "active-page-item"}`}
          >
            Product
          </li>
        </NavLink>
        <NavLink to="/products">
          <li
            className={`p-item ${active === "products" && "active-page-item"}`}
          >
            About us
          </li>
        </NavLink>
        <NavLink to="/products">
          <li
            className={`p-item ${active === "products" && "active-page-item"}`}
          >
            Contact us
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default PageItem;
