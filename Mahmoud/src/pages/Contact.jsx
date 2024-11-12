import React from "react";
import NavAbout from "../Components/NavAbout";
import SecondFooter from "../Components/SecondFooter";
import { AddressMap } from "../Components/AdressMap";
import StartContactingUs from "../Components/StartContactingUs";
import AboutContactBox from "../Components/AboutContactBox";

const Contact = () => {
  return (
    <div>
      <NavAbout />
      <StartContactingUs />
      <AddressMap />
      <AboutContactBox />
      <SecondFooter />
    </div>
  );
};

export default Contact;
