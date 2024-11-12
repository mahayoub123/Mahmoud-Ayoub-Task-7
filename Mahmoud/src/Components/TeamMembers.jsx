import React from "react";
import "../CSS/TeamMembers.css";
import { FaArrowRight } from "react-icons/fa";
import memberImg from "../assets/imges/04.webp";
import memberImg2 from "../assets/imges/05.webp";
import memberImg3 from "../assets/imges/06.webp";
import memberImg4 from "../assets/imges/07.webp";

const TeamMembers = () => {
  return (
    <section>
      <div className="TeamMembersContainer">
        <div className="containerStyle">
          <h2 className="teamMenbersTitleStyle">TEAM MEMBERS</h2>
          <p className="teamMenbersTitleStyle2">Our Dedicoted Team Members</p>
        </div>
        <div className="buttonStyle2">
          <button>
            All Members
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="MembersFlexDecoration">
        <div className="memberImgContainer">
          <img src={memberImg} alt="member" />
          <p className="memberInformationStyling">Masirul Islam</p>
          <p className="titleInformationStyling">Web Designer</p>
        </div>
        <div className="memberImgContainer">
          <img src={memberImg2} alt="member2" />
          <p className="memberInformationStyling">Jessica Mardol</p>
          <p className="titleInformationStyling">Cyber Expert</p>
        </div>
        <div className="memberImgContainer">
          <img src={memberImg3} alt="member3" />
          <p className="memberInformationStyling">Arnold Himmingway</p>
          <p className="titleInformationStyling">Web Expert</p>
        </div>

        <div className="memberImgContainer">
          <img src={memberImg4} alt="member4" />
          <p className="memberInformationStyling">Shikon Houqe</p>
          <p className="titleInformationStyling">Data Analist</p>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
