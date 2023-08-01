import React, { useContext } from "react";
import "../Services/Services.css";
import Card from "../Card/Card";
import work_photo from "../../img/work_photo.jpg";
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
        <img height="300px" width="400px" src={work_photo} alt="" />
        <a
          href="https://drive.google.com/file/d/1XuD5F8fIMZH5d66OF1pHsgyeYu7ggtcv/view?usp=drive_link"
          download
        >
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
          transition={transition}
        >
          <Card
            heading={"Hello, Nice to have you here!"}
            detail_1={
              "Hello, I am Nishtha Shah a full stack developer with a passion for creating robust and scalable web applications. With a solid background in both front-end and back-end development. I pride myself on my ability to communicate effectively with both technical and non-technical stakeholders, which helps ensure that everyone is on the same page throughout the development process."
            }
            detail_2={
              "I am also a strong believer in the power of teamwork. I enjoy collaborating with others to achieve a shared goal and I believe that the best results come from working together. Also, I am a dedicated and motivated developer who is always looking for new challenges and opportunities to learn and grow."
            }
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
