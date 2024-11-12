import React from "react";
import profileShape from "../assets/imges/profileShape1_1.webp";
import profileThumb from "../assets/imges/heroThumb1_1.webp";
import heroShape from "../assets/imges/heroShape1_3.webp";
import brandLogo1 from "../assets/imges/brandLogo1_1.svg";
import brandLogo2 from "../assets/imges/brandLogo1_2.svg";
import brandLogo3 from "../assets/imges/brandLogo1_3.svg";
import brandLogo4 from "../assets/imges/brandLogo1_4.svg";
import brandLogo5 from "../assets/imges/brandLogo1_5.svg";
import "../CSS/Hero.css";
import { CiWavePulse1 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <section className="heroContainer">
        <div className="verticalStyling">
          <div className="heroImgContainer">
            <img src={heroShape} alt="heroShape" className="heroShapeStyle" />
          </div>
          <div className="virtivalDecoration">
            <div className="secondBtnStyle">
              <button>
                <span className="iconStyle">
                  <CiWavePulse1 />
                </span>
                Evrey Thing You Need To Create A Wwbsite
              </button>
            </div>
            <div className="parStyle">
              <p>Business Innovation With IT Service Expertise</p>
            </div>
            <div className="contentStyle">
              <div className="firstPart">
                <p className="parStyle ">
                  <span>
                    <FaCheck />
                  </span>
                  Deployment and Support
                </p>
                <p className="parStyle">
                  <span>
                    <FaCheck />
                  </span>
                  Flexibility and adaptability
                </p>
              </div>
              <div className="secondPart">
                <p className="parStyle">
                  <span>
                    <FaCheck />
                  </span>
                  Descovery and Analasis
                </p>
                <p className="parStyle">
                  <span>
                    <FaCheck />
                  </span>
                  Compitative Advantage
                </p>
              </div>
            </div>
            <button className="thirdBtnStyle">
              Get Started
              <span className="thirdIconStyle">
                <FaArrowRight />
              </span>
            </button>
            <div className="imgContainer">
              <div className="partContainer">
                <div className="titleContainer">
                  <span className="iconStyling">
                    <FaStarHalfAlt />
                  </span>
                  <p className="titleDecoration">TrustPilot</p>
                </div>
                <div>
                  <img src={profileShape} alt="profile" />
                </div>
              </div>

              <div className="contentContainer">
                <div>
                  <div className="iconContainer">
                    <span className="fourthIconStyle">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </div>
                  <p className="parDecoration">450+reviews</p>
                </div>
              </div>
              <div>
                <div className="partContainer">
                  <p className="titleDecoration">Google</p>
                  <img src={profileShape} alt="profile" className="imgStyle" />
                </div>
                <div className="contentContainer">
                  <div className="iconContainer">
                    <span className="fourthIconStyle">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                  </div>
                  <p className="secondParDecoration">450+reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={profileThumb} alt="profilethumb" />
          </div>
        </div>
      </section>
      <section>
        <div className="brandContainer">
          <div className="contentFulContainer">
            <img
              src={brandLogo1}
              alt="contentful"
              className="brandPhotoStyle"
            />
          </div>
          <div className="cultureAmpContainer">
            <img
              src={brandLogo2}
              alt="cultureAmp"
              className="brandPhotoStyle"
            />
          </div>

          <div className="dropBoxConntainer">
            <img src={brandLogo3} alt="Dropbox" className="brandPhotoStyle" />
          </div>
          <div className="airTableContainer">
            <img src={brandLogo4} alt="Airtable" className="brandPhotoStyle" />
          </div>
          <div className="rozorParyContainer">
            <img src={brandLogo5} alt="RazorPay" className="brandPhotoStyle" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
