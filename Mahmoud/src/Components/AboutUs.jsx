import React from "react";
import "../CSS/AboutUs.css";
import aboutImg from "../assets/imges/breadcrumb.webp";
import Astik from "../assets/imges/asterisk.svg";
const AboutUs = () => {
  return (
    <section>
      <div className="aboutImgContainer">
        <img src={aboutImg} alt="aboutImg" />
      </div>
      <section className="aboutUsContainer">
        <div className="flexDecoration">
          <img src={Astik} alt="star" />
          <h3 className="responsiveFontSize">Cyber Security</h3>
        </div>
        <div className="flexDecoration ">
          <img src={Astik} alt="star" />
          <h3 className="responsiveStyle">IT Soulution</h3>
        </div>
        <div className="flexDecoration">
          <img src={Astik} alt="star" className="responsiveStyle" />
          <h3 className="responsiveStyle">Technology</h3>
        </div>
        <div className="flexDecoration">
          <img src={Astik} alt="star" className="responsiveStyle" />
          <h3 className="responsiveStyle">Data Secure</h3>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
