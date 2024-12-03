import React from 'react';
import './Navbar.css'; // Make sure to create the CSS file and link it here

const Navbar = () => {
  return (
    <nav className="navbar">
     
      <div className="logo-container">
        <img src="/src/assets/images/logo.png" alt="Book Store Logo" className="logo" />
      
        <span className="brand-name">Book Store</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About us</li>
        <li>Courses</li>
        <li>Our Service</li>
        <li>Contact us</li>
         <li> <button className="sign-in-button">Sign in</button></li>
      </ul>
   
    </nav>
  );
};

export default Navbar;
