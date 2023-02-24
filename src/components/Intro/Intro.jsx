import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import photo from "../../img/photo.jpg";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import codeForces from "../../img/codeForces.png";
import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  // const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am</span>
          <span>Nishtha Shah</span>
          <span>
            Full Stack Developer.
          </span>
        </div>
        
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/developerNishtha"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/nishtha-shah-b0909b212/"><img src={LinkedIn} alt="" /></a>
          <a href="https://codeforces.com/profile/shahnishtha0902"><img src={codeForces} alt="" /></a>

        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        {/* <img src={Vector2} alt="" /> */}
        {/* <img src={photo} alt="" /> */}
      </div>
    </div>
  );
};

export default Intro;
