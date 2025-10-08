import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/devlogo.png"
const Header = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu (used when a link is clicked)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <NavLink to="/" className="logo-container" onClick={closeMenu}>
            {/* <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="svglogodev"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="#007BFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="#007BFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="#007BFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <img src={logo} alt="" className="imgHeader" />
            <span className="logo-text">Devronic</span>
          </NavLink>
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="main-nav">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Products
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
            {/* <NavLink to="/careers" className="nav-link">
              Careers
            </NavLink> */}
            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>
          </nav>

          {/* Burger Menu Icon - Shown only on mobile */}
          <button
            className={`burger-menu ${isMenuOpen ? "is-active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Panel - Slides in from the side */}
      <div className={`mobile-nav ${isMenuOpen ? "mobile-nav-open" : ""}`}>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-link" onClick={closeMenu}>
          Products
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>
          About Us
        </NavLink>
        {/* <NavLink to="/careers" className="nav-link" onClick={closeMenu}>
          Careers
        </NavLink> */}
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </div>
    </>
  );
};

export default Header;
