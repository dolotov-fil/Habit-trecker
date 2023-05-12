import React from "react";

import "./Style.css";
import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/btnDarkMode";

export default function Navbar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const normaLink = "nav-list__link ";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Habit</strong>  tracker 
          </NavLink>

         <BtnDarkMode/>

          <li className="nav-list__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normaLink)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? activeLink : normaLink)}
            >
              Habit
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? activeLink : normaLink)}
            >
              Cabinet
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? activeLink : normaLink)}
            >
              Sign in
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
}
