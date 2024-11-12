import React from "react";
import "../CSS/Footer.css";
import { FaArrowRight } from "react-icons/fa";
import photoThumb from "../assets/imges/ctaThumb.webp";
import logofooter from "../assets/imges/logofooter.svg";
import footerImg from "../assets/imges/footerThumb1_1.webp";
import footerImg2 from "../assets/imges/footerThumb1_2.webp";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerStyle">
      <div className="contactContainer">
        <div className="footerPhotoStyle">
          <img src={photoThumb} alt="thumb" />
        </div>

        <p className="parContactStyle">Stay Connected With Cutting Edge IT</p>
        <button className="contactBtn">
          Talk To Specialist
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
      <div className="footerlinksContainer">
        <div className="footerVerticalDecoration">
          <div className="footerLogo">
            <img src={logofooter} alt="footerlogo" />
          </div>
          <p className="footerTextStyle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            tempora possimus doloribus mollitia ipsam? Laudantium voluptates,
            nam quasi quibusdam saepe deserunt quod.
          </p>
          <div className="footerIcons">
            <span className="linkStyle2">
              <a href="#">
                <FaFacebookF />
              </a>
            </span>
            <span className="linkStyle2">
              <a href="#">
                <FaTwitter />
              </a>
            </span>
            <span className="linkStyle2">
              <a href="#">
                <FaYoutube />
              </a>
            </span>
            <span className="linkStyle2">
              <a href="#">
                <FaInstagram />
              </a>
            </span>
          </div>
        </div>
        <div className="footerVerticalDecoration">
          <p className="footerTextStyle">Quick Links</p>
          <div>
            <div className="linkStyling">
              <span className="footerIconStyle">
                <MdKeyboardDoubleArrowRight />
              </span>
              <a href="#" className="linkStyle">
                ExTech About
              </a>
            </div>
            <div className="linkStyling">
              <span className="footerIconStyle">
                <MdKeyboardDoubleArrowRight />
              </span>
              <a href="#" className="linkStyle">
                Our Services
              </a>
            </div>
            <div className="linkStyling">
              <span className="footerIconStyle">
                <MdKeyboardDoubleArrowRight />
              </span>
              <a href="#" className="linkStyle">
                Our Blogs
              </a>
            </div>
            <div className="linkStyling">
              <span className="footerIconStyle">
                <MdKeyboardDoubleArrowRight />
              </span>
              <a href="#" className="linkStyle">
                FAQ's
              </a>
            </div>

            <div className="linkStyling">
              <span className="footerIconStyle">
                <MdKeyboardDoubleArrowRight />
              </span>
              <a href="#" className="linkStyle">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="footerImgContainer">
          <img src={footerImg} alt="" />
          <img src={footerImg2} alt="footerImg" />
        </div>
        <div className="speachContainer">
          <p className="footerTextStyle2">
            <span>
              <CiCalendarDate />
            </span>
            15th April,2024
          </p>
          <p className="footerTextStyle">
            Top5 Most Famous Technology Trend In 2024
          </p>
        </div>
        <div className="speachContainer2">
          <p className="footerTextStyle">
            Top5 Most Famous Technology Trend In 2024
          </p>
          <p className="footerTextStyle2">
            <span>
              <CiCalendarDate />
            </span>
            15th April,2024
          </p>
        </div>
        <div className="footerVerticalDecoration">
          <p className="footerTextStyle">Contact Us</p>
          <a href="#">
            <span className="footerIconStyle">
              <FaRegEnvelope />
            </span>
            <a href="#" className="footerTextStyle">
              info@example.com
            </a>
          </a>
          <p className="footerTextStyle">
            <span>
              <BsTelephone />
            </span>
            +208 -6666 -0112
          </p>
          <div className="inputStyle">
            <input type="text " placeholder="Your Email Adress" />
            <button className="formBtnStyle">
              <FaArrowRight />
            </button>
          </div>
          <div className="privicyStyle">
            <span className="footerTextStyle">
              <MdCheckBoxOutlineBlank />
            </span>
            <p className="footerTextStyle">
              I agree to the <span>Privcy Policy</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="copyRightsContainer">
        <p className="footerTextStyle">
          <span>
            <FaRegCopyright />
          </span>
          All Copyrigts 2024 by Extech
        </p>
        <a href="#" className="linkStyle">
          Terms and Condtion
        </a>
        <a href="#" className="linkStyle">
          Privcy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
