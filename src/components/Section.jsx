import React from 'react';
import './Section.css';

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="info-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Section = ({ cardsInfo }) => {
  return (
    <div className="section-container">
      {cardsInfo.map((item, index) => (
        <InfoCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Section;
