import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServiceSection from "../Components/ServiceSection";
import Pricing from "../Components/pricing";
import ContactUs from "../Components/ContactUs";
import Feedback from "../Components/Feedback";
import Fetuared from "../Components/Fetuared";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceSection />
      <Pricing />
      <ContactUs />
      <Feedback />
      <Fetuared />
      <Footer />
    </div>
  );
};

export default Home;
