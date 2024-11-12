import React from "react";
import "../CSS/Fetuared.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import blogImg from "../assets/imges/blogThumb1_2.webp";
import blogProfile from "../assets/imges/blogProfile1_2.webp";
import blogProfile2 from "../assets/imges/blogProfile1_3.webp";
import blogProfile3 from "../assets/imges/blogProfile1_1.webp";
import blogImg2 from "../assets/imges/blogThumb1_3.webp";
import blogImg3 from "../assets/imges/blogThumb1_1.webp";
const Fetuared = () => {
  return (
    <section>
      <div className="feturedContainer">
        <div>
          <h2 className="fetuaredTitleStyle">BLOG & NEWS</h2>
          <p className="fetuaredTitleStyle2">Fetuared News And Insights</p>
        </div>
      </div>
      <div className="arrowContainer">
        <span className="arrowIconStyle2">
          <FaArrowLeft />
        </span>
        <span className="arrowIconStyle">
          <FaArrowRight />
        </span>
      </div>
      <div className="blogsContainer">
        <div className="blogContainer">
          <div className="blogImgStyle2">
            <img src={blogImg} alt="blog1" />
          </div>

          <div className="blogCardContainer2">
            <div className="cardTitleContainer">
              <p className="cardParStyle">Uncatigorised</p>
              <p className="dateStyle"> March 14,2024</p>
            </div>
            <div className="cardParStyle2">
              <p>Best And Fastest Data Sever Ever</p>
            </div>

            <div className="personalProfileContainer">
              <img src={blogProfile} alt="blogProfile" />
              <div className="blogInfoStyling">
                <p className="infoBlogStyle">Admin</p>
                <p className="infoBlogStyle2">CO-Founder</p>
              </div>
              <span>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="blogContainer">
          <div className="blogImgStyle">
            <img src={blogImg2} alt="blog2" />
          </div>

          <div className="blogCardContainer">
            <div className="cardTitleContainer">
              <p className="cardParStyle">Technology</p>
              <p className="dateStyle"> March 29,2024</p>
            </div>
            <div>
              <p className="cardParStyle2">
                Life Won't One Beast Air Over Above All
              </p>
            </div>

            <div className="personalProfileContainer">
              <img src={blogProfile2} alt="blogProfile" />
              <div className="blogInfoStyling">
                <p className="infoBlogStyle">Admin</p>
                <p className="infoBlogStyle2">CO-Founder</p>
              </div>
              <span>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="blogContainer">
          <div className="blogImgStyle">
            <img src={blogImg3} alt="" />
          </div>

          <div className="blogCardContainer">
            <div className="cardTitleContainer">
              <p className="cardParStyle">Shared Hosting</p>
              <p className="dateStyle"> March 29,2024</p>
            </div>
            <div>
              <p className="cardParStyle2">
                Attentive Was Born In 2015 Help Sales Teams
              </p>
            </div>

            <div className="personalProfileContainer">
              <img src={blogProfile3} alt="blogProfile" />
              <div className="blogInfoStyling">
                <p className="infoBlogStyle">Admin</p>
                <p className="infoBlogStyle2">CO-Founder</p>
              </div>
              <span>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fetuared;
