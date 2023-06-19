import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode, faBars } from "@fortawesome/free-solid-svg-icons"; // Updated import statement
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <FontAwesomeIcon icon={faNode} className="mr-2" /> {/* Updated icon */}
        Arman
      </a>
      <div
        id="menu"
        className={`hamburger-icon ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="/#education" className="nav-link">
              Education
            </a>
          </li>
          <li>
            <a href="/#work" className="nav-link">
              Work
            </a>
          </li>
          <li>
            <a href="/#experience" className="nav-link">
              Experience
            </a>
          </li>
          <li>
            <a href="/#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
