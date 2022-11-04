import React from "react";
import star from "../images/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${props.img}`} alt="" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{props.rating}</span>
        <span>({props.reviewCount}) .</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="card--price">From ${props.price}</span> / person
      </p>
    </div>
  );
}
