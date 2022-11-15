import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink className="nav__link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/news">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/music">
            Music
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
