import React from "react";
import { Link } from "react-router-dom";

const NavbarItems = ({ isMenuOpen }) => {
  return (
    <nav className={`${isMenuOpen ? "custom-nav-open" : "custom-nav"}`}>
      <ul className="navbar-menu-list">
        <li className="nav-link navbar-menu-list-items">
          <Link className="a-custom" to="/">
            Home
          </Link>
        </li>
        <li className="nav-link navbar-menu-list-items">
          <Link className="a-custom" to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-link navbar-menu-list-items dropdown">
          <span className="a-custom">Services</span>
          <ul className="dropdown-menu">
            <li>
              <Link
                to="/VirtualAssistant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Virtual Assistant
              </Link>
            </li>
            <li className="nav-link navbar-menu-list-items">
              <Link
                to="/WebsiteDevelopment"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Development
              </Link>
            </li>
            <li className="nav-link navbar-menu-list-items">
              <Link
                to="/HRManagement"
                target="_blank"
                rel="noopener noreferrer"
              >
                HR Management
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-link navbar-menu-list-items">
          <Link className="a-custom" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarItems;
