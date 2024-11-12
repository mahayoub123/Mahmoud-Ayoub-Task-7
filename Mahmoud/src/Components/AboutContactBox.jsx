import React from "react";
import "../CSS/AboutContactBox.css";
import { CiLocationOn } from "react-icons/ci";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
const AboutContactBox = () => {
  return (
    <section>
      <div className="rowStyling">
        <div className="ContactBoxflexDecoration">
          <div className="coulmnStyling">
            <p className="boxTitleStyle">Adress</p>
            <p className="informationStyling">
              4648 Rocky Round Philifolphia PA
            </p>
          </div>
          <span className="bgStyling">
            <span className="iconBoxStyling">
              <CiLocationOn />
            </span>
          </span>
        </div>
        <div className="ContactBoxflexDecoration">
          <div className="coulmnStyling">
            <p className="boxTitleStyle">Send Email</p>
            <p className="informationStyling">info@example.com</p>
          </div>
          <span className="bgStyling">
            <span className="iconBoxStyling">
              <BsFillEnvelopeAtFill />
            </span>
          </span>
        </div>
        <div className="ContactBoxflexDecoration">
          <div className="coulmnStyling">
            <p className="boxTitleStyle">Call Emergency</p>
            <p className="informationStyling">+88 012366499</p>
          </div>
          <span className="bgStyling">
            <span className="iconBoxStyling">
              <BsFillTelephoneOutboundFill />
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutContactBox;
