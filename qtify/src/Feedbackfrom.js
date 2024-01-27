import React from "react";
import "./Navbar.css";

function Feedbackfrom() {
  const handleFeedbackClick = () => {
    console.log("Feedback button clicked");
  };

  return (
    <div>
      <button className="feedback">Feedback</button>
    </div>
  );
}
export default Feedbackfrom;
