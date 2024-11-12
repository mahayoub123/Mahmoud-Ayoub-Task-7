import React from "react";
import pricingIcon from "../assets/imges/pricingIcon1_2.svg";
import pricingLogo from "../assets/imges/pricingIcon1_1.svg";
import pricingImg from "../assets/imges/pricingShape1_2.webp";
import pricingImg2 from "../assets/imges/pricingShape1_1.webp";
import "../CSS/Pricing.css";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
const Pricing = () => {
  return (
    <>
      <section>
        <div className="priceImgStyle ">
          <img src={pricingImg} alt="priceShape1" />
        </div>

        <h2 className="priceTitleStyle">Our Pricing</h2>
        <p className="pricingTextStyle">Our Awesome Plans</p>
        <div className="rowDecoration">
          <button className="PricingBtn">Monthly</button>
          <button className="secondPricingBtn">Yrarly</button>
          <img src={pricingIcon} alt="icon" className="iconSize" />
          <button className="thirdPricingBtn">Save 25%</button>
        </div>
      </section>
      <section className="plansContainer">
        <div className="secondPhotoStyle">
          <img src={pricingImg2} alt=" photo" />
        </div>
        <div className="planStyle">
          <div className="PlanContainer">
            <div className="planContentStyle">
              <p>Regular Plan</p>
              <p>Price 49$/Month</p>
            </div>

            <img src={pricingLogo} alt=" icon2" />
          </div>
          <div>
            <div className="planContentDecoration">
              <div className="verticalContent">
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  100GB SSD Storge
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  Weekly Backup
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  Unlimted Free SSL
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  24/7 System Montoring
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  Free Domain (9.99$ Value)
                </p>
                <p className="text">
                  <span className="icon2">
                    <ImCross />
                  </span>
                  Frame 164236
                </p>
                <p className="text">
                  <span className="icon2">
                    <ImCross />
                  </span>
                  20+ Payment Methods
                </p>
              </div>
              <div className="icons">
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
              </div>
            </div>
            <button className="btnPlan">
              GET STARTED NOW
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="planStyle">
          <div className="PlanContainer2">
            <div className="planContentStyle">
              <p>Regular Plan</p>
              <p>Price 49$/Month</p>
            </div>

            <img src={pricingLogo} alt=" icon2" />
          </div>

          <div>
            <div className="planContentDecoration">
              <div className="verticalContent">
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  100GB SSD Storge
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  Weekly Backup
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  Unlimted Free SSL
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  24/7 System Montoring
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  Free Domain (9.99$ Value)
                </p>
                <p className="text">
                  <span className="icon2">
                    <ImCross />
                  </span>
                  Frame 164236
                </p>
                <p className="text">
                  <span className="icon2">
                    <ImCross />
                  </span>
                  20+ Payment Methods
                </p>
              </div>
              <div className="icons">
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
              </div>
            </div>
            <button className="btnPlan2">
              GET STARTED NOW
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="planStyle">
          <div className="PlanContainer">
            <div className="planContentStyle">
              <p>Regular Plan</p>
              <p>Price 49$/Month</p>
            </div>

            <img src={pricingLogo} alt=" icon2" />
          </div>

          <div>
            <div className="planContentDecoration">
              <div className="verticalContent">
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  100GB SSD Storge
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  Weekly Backup
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  Unlimted Free SSL
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  24/7 System Montoring
                </p>
                <p className="text">
                  <span className="icon">
                    <FaCheck />
                  </span>
                  Free Domain (9.99$ Value)
                </p>
                <p className="text">
                  <span className="icon2">
                    <ImCross />
                  </span>
                  Frame 164236
                </p>
                <p className="text">
                  <span className="icon2">
                    <ImCross />
                  </span>
                  20+ Payment Methods
                </p>
              </div>
              <div className="icons">
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
                <span>
                  <CiCircleQuestion />
                </span>
              </div>
            </div>
            <button className="btnPlan">
              GET STARTED NOW
              <span>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
