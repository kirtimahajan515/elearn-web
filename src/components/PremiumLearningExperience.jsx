import React from "react";
import "./PremiumLearningExperience.css"; // Import the CSS file

// Image Component
const ImageSection = ({ src, alt }) => {
  return (
    <div className="image-section">
      <img src={src} alt={alt} className="image" />
    </div>
  );
};

// Text Section Component
const TextSection = () => {
  return (
    <div className="text-section">
      <h1 className="heading">
        Premium <span className="highlight">Learning</span> Experience
      </h1>
      <div className="feature">
        <div className="icon"></div>
        <div>
          <h3 className="feature-heading">Easily Accessible</h3>
          <p className="feature-description">
            Learning will feel very comfortable with Courslab.
          </p>
        </div>
      </div>
      <div className="feature">
        <div className="icon"></div>
        <div>
          <h3 className="feature-heading">Fun Learning Experience</h3>
          <p className="feature-description">
            Learning will feel very comfortable with Courslab.
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Layout Component
const PremiumLearningExperience = () => {
  return (
    <div className="container">
      <ImageSection src="/src/assets/images/OBJECTS (3).png" alt="Learning Illustration" />
      <TextSection />
    </div>
  );
};

export default PremiumLearningExperience;