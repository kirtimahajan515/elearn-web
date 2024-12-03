import React from "react";
import "./Card.css";

const Card = () => {
  return (
      <div className="outer">

      <div className="inner">

    <div className="card">
      <img
        src="/src/assets/images/image 5.png"
        alt="Course Thumbnail"
        className="card-image"
        />
      <div className="card-content">
        <p className="card-category">UI/UX Design</p>
        <h3 className="card-title">UI/UX Design for Beginners</h3>
        <p className="card-price">$98</p>
        <div className="card-info">
          <span>22hr 30min</span>
          <span>•</span>
          <span>34 Courses</span>
          <span>•</span>
          <span>250 Sales</span>
        </div>
        <button className="card-button">Join Course</button>
      </div>
    </div>
        </div>
        </div>
  );
};

export default Card;
