import React from "react";
import "../CSS/Feedback.css";
import { FaStar } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import profileImg from "../assets/imges/testiThumb3_1.webp";
import profileImg2 from "../assets/imges/testiThumb3_2.webp";
import profileImg3 from "../assets/imges/testiThumb3_3.webp";

const Feedback = () => {
  return (
    <>
      <section>
        <h2 className="feedbackTitleStyle">TESTMONALS</h2>
        <p className="feedbackTitleStyle2">Our Latest Client Feedback</p>
        <div className="feedbackGeneralContainer">
          <div className="feedbackContainer">
            <div className="iconContainer">
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <IoMdStarOutline />
              </span>
            </div>
            <p className="infornatioonStyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              consequatur sit reprehenderit animi assumenda pariatur quaerat
              accusantium quis recusandae, est id accusamus quae debitis dolor.
            </p>
            <div className="profileInfoContainer">
              <img src={profileImg} alt="profile" />
              <div className="personInfoContainer">
                <p>Kristan Watson</p>
                <p className="infornatioonStyle">Web Designer</p>
              </div>
            </div>
          </div>
          <div className="feedbackContainer2 ">
            <div className="iconContainer">
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <IoMdStarOutline />
              </span>
            </div>
            <p className="infornatioonStyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              consequatur sit reprehenderit animi assumenda pariatur quaerat
              accusantium quis recusandae, est id accusamus quae debitis dolor.
            </p>
            <div className="profileInfoContainer">
              <img src={profileImg2} alt="profile" />
              <div className="personInfoContainer">
                <p className="informationStyling">Thersa Webb</p>
                <p className="informationStyling">Tech enthausist</p>
              </div>
            </div>
          </div>

          <div className="feedbackContainer">
            <div className="iconContainer">
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <FaStar />
              </span>
              <span className="iconColor">
                <IoMdStarOutline />
              </span>
            </div>
            <p className="infornatioonStyle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              consequatur sit reprehenderit animi assumenda pariatur quaerat
              accusantium quis recusandae, est id accusamus quae debitis dolor.
            </p>
            <div className="profileInfoContainer">
              <img src={profileImg3} alt="profile" />
              <div className="personInfoContainer">
                <p>Ronald Richards</p>
                <p className="infornatioonStyle">Web Enterorenur</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shaoeStyle"></div>
      </section>
    </>
  );
};

export default Feedback;
