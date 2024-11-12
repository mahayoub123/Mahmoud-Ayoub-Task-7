import React from "react";
import "../CSS/ContactUs.css";
import contactImg from "../assets/imges/ctaThumb1_1.webp";
import { FaArrowRight } from "react-icons/fa";
const ContactUs = () => {
  return (
    <section className="contactContainer">
      <img src={contactImg} alt="contactus" />
      <div className="verTicalStyling">
        <h2 className="contactTitleStyle">CONTACT US</h2>
        <p className="parContactStyle">
          24/7 Expert Hosting Support Our Custmor Love
        </p>
      </div>
      <button className="contactBtn">
        Talk To Specialist
        <span>
          <FaArrowRight />
        </span>
      </button>
    </section>
  );
};

export default ContactUs;
