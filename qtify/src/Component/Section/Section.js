// Section.js
import React from "react";
import "./Section.css"; // Import custom styling

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Section;
