import React from "react";
import SecondFooter from "../Components/SecondFooter";
import NavAbout from "../Components/NavAbout";
import AboutUs from "../Components/AboutUs";
import TeamMembers from "../Components/TeamMembers";
import AboutContactBox from "../Components/AboutContactBox";
const About = () => {
  return (
    <div>
      <NavAbout />
      <AboutUs />
      <TeamMembers />
      <AboutContactBox />
      <SecondFooter />
    </div>
  );
};

export default About;
