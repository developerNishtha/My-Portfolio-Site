import React, { useContext } from "react";
import "../Project/Project.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import foodDelivery from "../../img/foodDelivery.jpg";
import keeperApp from "../../img/keeperApp.jpg";
import weatherApp from "../../img/weatherApp.jpg";
import HMS from "../../img/HMS.jpeg";
import todoList from "../../img/todoList.jpeg";
import { themeContext } from "../../Context";

const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="project" id="project">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Projects</span>

      {/* slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="project-slider">
        <SwiperSlide>
          <img src={foodDelivery} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={keeperApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={todoList} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={weatherApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HMS} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
