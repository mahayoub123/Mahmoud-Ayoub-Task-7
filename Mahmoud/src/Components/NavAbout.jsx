import React, { useState } from "react";
import logo from "../assets/imges/logo.svg";
import "../CSS/Navbar.css";
import "../CSS/NavAbout.css";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import planeImg from "../assets/imges/plane.webp";

const NavAbout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="navStyle">
        <div>
          <img src={planeImg} alt="plane" />
        </div>
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
        <span className="secondIconStyle"></span>
        <span
          className="menuIcon2"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <IoMenu />
        </span>
        <div className="navBtnAboutStyle">
          <button>
            GET A QUOTE
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavAbout;
