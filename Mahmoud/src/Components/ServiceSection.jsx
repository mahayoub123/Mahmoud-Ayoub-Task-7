import React from "react";
import "../CSS/ServiceSection.css";
import cardImg from "../assets/imges/serviceIcon1_2.svg";
import cardImg2 from "../assets/imges/serviceIcon1_3.svg";
import cardImg3 from "../assets/imges/serviceIcon1_4.svg";
import cardImg4 from "../assets/imges/serviceIcon1_1.svg";
import javaScriptVedio from "../assets/vedio/Learn JavaScript In Arabic 2021 - _059 - Function Return And Use Cases(360P).mp4";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <>
      <section className="serviceContainer">
        <div className="serviceTextStyling">
          <h1>Our Services</h1>
          <h2 className="titleSize">Elvating Business With IT Ingunity</h2>
        </div>
        <div className="arrowContainer">
          <span className="serviceArrowsIconStyle">
            <FaArrowLeft />
          </span>
          <span className="serviceArrowsIconStyle2">
            <FaArrowRight />
          </span>
        </div>

        <section className="cardGroup">
          <div className="cardContainer wooCommerce">
            <img src={cardImg} alt="woo commerce" />
            <h5 className="cardTitleStyle"> Woo Commerce</h5>
            <p className="textStyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              assumenda consequatur dolorum cumque nihil odio iste placeat quae
              error nesciunt
            </p>
            <button className="btnStyle">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
          <div className="cardContainer crmSoulution">
            <img src={cardImg2} alt="CRM Soulution" />
            <h5 className="cardTitleStyle"> CRM Soulution</h5>
            <p className="textStyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              assumenda consequatur dolorum cumque nihil odio iste placeat quae
              error nesciunt
            </p>
            <button className="btnStyle">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
          <div className="cardContainer">
            <img src={cardImg3} alt="Web Designe" />
            <h5 className="cardTitleStyle "> Web Designe</h5>
            <p className="textStyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              assumenda consequatur dolorum cumque nihil odio iste placeat quae
              error nesciunt
            </p>
            <button className="btnStyle">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
          <div className="cardContainer dataGourdSentienal">
            <img src={cardImg4} alt="Data Gourd Sentienal" />
            <h5 className="cardTitleStyle"> Data Gourd Sentinal</h5>
            <p className="textStyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              assumenda consequatur dolorum cumque nihil odio iste placeat quae
              error nesciunt
            </p>
            <button className="btnStyle">
              Read More <MdKeyboardDoubleArrowRight />
            </button>
          </div>
        </section>
      </section>
      <section className="vedioContainer">
        <video src={javaScriptVedio} className="vedioStyle"></video>
      </section>
      <section className="informationContainer">
        <div className="virticalStyling">
          <span className="numberIcon">
            <RiNumber1 />
          </span>

          <h5 className="title">Requirments</h5>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
            alias, nostrum, explicabo asperiores et ex voluptatibus quidem vel
            quo soluta magni
          </p>
        </div>
        <div className="virticalStyling">
          <span className="numberIcon">
            <RiNumber2 />
          </span>

          <h5 className="title">UI/UX</h5>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
            alias, nostrum, explicabo asperiores et ex voluptatibus quidem vel
            quo soluta magni
          </p>
        </div>
        <div className="virticalStyling">
          <span className="numberIcon">
            <RiNumber3 />
          </span>
          <h5 className="title">Prototupe</h5>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
            alias, nostrum, explicabo asperiores et ex voluptatibus quidem vel
            quo soluta magni
          </p>
        </div>
        <div className="virticalStyling">
          <span className="numberIcon">
            <RiNumber4 />
          </span>
          <h5 className="title">Drvelopment</h5>
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum
            alias, nostrum, explicabo asperiores et ex voluptatibus quidem vel
            quo soluta magni
          </p>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
