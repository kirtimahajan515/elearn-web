import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  const { text, name, role, avatar } = testimonial;

  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <img src={avatar} alt={name} className="testimonial-avatar" />
        <div className="author-info">
          <h4 className="author-name">{name}</h4>
          <p className="author-role">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
