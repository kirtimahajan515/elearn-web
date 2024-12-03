import React from "react";
import "./CourseCard.css";

const CourseCard = () => {
  return (
    <div className="course-card">
      <div className="card-image">
        <img
          src="/src/assets/images/courseimg.png" // Replace with the correct path to your image
          alt="Course preview"
        />
      </div>
      <div className="card-content">
        <h4 className="course-category">UI/UX Design</h4>
        <h3 className="course-title">UI/UX Design for Beginners</h3>
        <div className="course-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
        </div>
        <p className="course-price">$98</p>
        <hr />
        <div className="course-meta">
          <span>⏱️ 22hr 30min</span>
          <span>📚 34 Courses</span>
          <span>💼 250 Sales</span>
        </div>
      </div>
      <div className="card-footer">
        <button className="join-course-button">Join Course</button>
      </div>
    </div>
  );
};

export default CourseCard;
