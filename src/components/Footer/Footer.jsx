import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { UilEnvelopeAlt } from '@iconscout/react-unicons'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <div className="f-details">
            <UilEnvelopeAlt color="white" size={"3rem"} />
            <span>/shahnishtha0902@gmail.com</span>
          </div>
          <div className="f-details">
          <Insta color="white" size={"3rem"} />
            <span>/nishtha_shah09</span>
          </div>
          <div className="f-details">
          <Gitub color="white" size={"3rem"} />
            <span >/developerNishtha</span>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default Footer;
