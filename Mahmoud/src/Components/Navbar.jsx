import React, { useState } from "react";
import logo from "../assets/imges/logo.svg";
import "../CSS/Navbar.css";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navStyle">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div className="linksContainer">
        <ul className={menuOpen ? "open" : ""}>
          <li className="linkStyle">
            <a href="#">Home</a>
          </li>
          <li className="linkStyle">
            <a href="#">About</a>
          </li>
          <li className="linkStyle">
            <a href="#">Services</a>
          </li>
          <li className="linkStyle">
            <a href="#">Blog</a>
          </li>
          <li className="linkStyle">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <span className="iconStyle">
        <CiSearch />
      </span>
      <span
        className="menuIcon"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <IoMenu />
      </span>
      <span className="secondIconStyle">
        <FaShoppingCart />
      </span>
      <div className="buttonStyle">
        <button>
          GET A QUOTE
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
