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
      <span style={{ color: darkMode ? 'white' : '' }}>Projects</span>

      {/* slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="project-slider">
        <SwiperSlide>
          <button className="sliderButton"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/developerNishtha/Food-Delivery_App-Front-end-';
            }}
          > <img src={foodDelivery} alt="" /></button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="sliderButton"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/developerNishtha/Keeper-App';
            }}
          > <img src={keeperApp} alt="" /></button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="sliderButton"
            type="button" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/developerNishtha/To-Do-List';
            }}
          ><img src={todoList} alt="" /></button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="sliderButton"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/developerNishtha/Weather-app';
            }}
          > <img src={weatherApp} alt="" /></button>
        </SwiperSlide>
        <SwiperSlide>
          <button className="sliderButton"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://github.com/developerNishtha/Hospital-Management-System';
            }}
          > <img src={HMS} alt="" /></button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
