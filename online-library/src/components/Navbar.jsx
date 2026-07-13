import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "#ff6b6b",
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">Online Library</div>

      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            end
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/books"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Browse
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Add Book
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;