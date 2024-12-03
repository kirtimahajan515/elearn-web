import React from "react";
import "./TrackCard.css";

const TrackCard = ({ image, name, title, description, subject, socials }) => {
  return (
    <div className="track-card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
        <p className="card-subject">{subject}</p>
        <div className="card-socials">
          {socials.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
