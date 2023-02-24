import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import photo from "../../img/photo.jpg";
import { themeContext } from "../../Context";
//import { motion } from "framer-motion";


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}></span>
        <img height="310px" width="250px" src={photo} alt="" />
        <a href="https://drive.google.com/file/d/11ZmsW3WYHmzfsvgwI9FUiKtPdD3CYYpt/view?usp=sharing" download>
          <br />
          <button className="button s-button">Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition} >
          <Card
            heading={"Hello, Nice to have you here!"}
            detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque laboriosam quidem architecto delectus consequuntur pariatur perferendis facere molestias illo laudantium aspernatur minus natus suscipit veritatis consectetur, vel sequi odit ut? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos et sint ipsa labore illo excepturi fugit, laborum, magnam impedit ab voluptatem facilis ipsum voluptas commodi in, sapiente quam tempora neque."}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;

