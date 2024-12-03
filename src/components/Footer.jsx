import React from "react";
import "./Footer.css";

const Footer = ({ sections }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {sections.map((section, index) => (
          <div className="footer-section" key={index}>
            <h3 className="footer-title">{section.title}</h3>
            <ul className="footer-list">
              {section.items.map((item, idx) => (
                <li key={idx} className="footer-item">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
