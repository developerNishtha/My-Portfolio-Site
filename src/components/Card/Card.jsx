import React from "react";
import "./Card.css";

const Card = ({ heading, detail_1,detail_2, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <span style={{ fontWeight: 'bold' }}>{heading}</span>
      <span>{detail_1}</span>
      <span>{detail_2}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
