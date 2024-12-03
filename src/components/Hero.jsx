import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
  <div className="container-hero">
   <div className="hero-text-img">
    <div className="text-content">

      <h1>The <span className="highlight">Smart</span><br /> Choice For <span className="highlight">Future</span></h1>
      <p>
        Elearn is a global training provider based across the UK that <br /> specializes 
        in accredited and bespoke training courses. We crush <br /> the...
      </p>
      <div className="search-box">
        <input type="text" placeholder="Search for a location..." />
        <button>Continue</button>
      </div>
     
    </div>
    <div className="image-content">
      <img src="/src/assets/images/OBJECTS.png" alt="Illustration" />
      
    </div>
    
 </div>
    
  </div>

    </section>
  );
};

export default Hero;
