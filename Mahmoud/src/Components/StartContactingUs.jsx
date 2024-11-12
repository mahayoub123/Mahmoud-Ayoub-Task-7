import React from "react";
import "../CSS/StartContactingUs.css";
import aboutImg from "../assets/imges/breadcrumb.webp";
import girlImg from "../assets/imges/video.webp";
import { CiLocationOn } from "react-icons/ci";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
const StartContactingUs = () => {
  return (
    <section>
      <div className="responsiveImgSize">
        <img src={aboutImg} alt="aboutImg" />
      </div>
      <div className="sectionStyle">
        <div className="contactBox">
          <div className="ContactBoxflexDecoration">
            <div className="coulmnStyling">
              <p className="boxTitleStyle">Call Us 7/24</p>
              <p className="informationStyling">+208-555-0112</p>
            </div>
            <span className="bgStyling">
              <span className="iconBoxStyling">
                <CiLocationOn />
              </span>
            </span>
          </div>
          <div className="ContactBoxflexDecoration">
            <div className="coulmnStyling">
              <p className="boxTitleStyle"> Male A Quote</p>
              <p className="informationStyling">infotech@gmail.com</p>
            </div>
            <span className="bgStyling">
              <span className="iconBoxStyling">
                <BsFillEnvelopeAtFill />
              </span>
            </span>
          </div>
          <div className="ContactBoxflexDecoration">
            <div className="coulmnStyling">
              <p className="boxTitleStyle">Location</p>
              <p className="informationStyling">4517 Washimgtone ave.</p>
            </div>
            <span className="bgStyling">
              <span className="iconBoxStyling">
                <BsFillTelephoneOutboundFill />
              </span>
            </span>
          </div>
          <div className="girlImgStyle">
            <img src={girlImg} alt="girl" />
          </div>
        </div>
        <div className="FormAndContentStyle">
          <div>
            <h3 className="contactTitleSize">Ready To Get Started</h3>
            <p className="contentClor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quae itaque sit accusamus odit obcaecati vel iste minima eaque
              provident. Temporibus, mollitia
            </p>
          </div>
          <div>
            <form>
              <div className="InputStyling">
                <p className="formTextStyle">Your Name*</p>
                <input type="text" />
                <p className="formTextStyle">Your Email*</p>
                <input type="text" />
              </div>
              <p className="formTextStyle">Your Message*</p>
              <input type="textarea" className="textAreaStyle" />
              <div className="buttonStyle3">
                <button>
                  Send Message
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartContactingUs;
