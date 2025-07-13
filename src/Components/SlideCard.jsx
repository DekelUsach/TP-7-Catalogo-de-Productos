
import React from "react";
import "./SlideCard.css"; 

function SlideCard({ image, headline, description }) {
  return (
    <div className="slide-card">
      <img src={image} alt={headline} className="slide-image" />
      <h3 className="slide-title">{headline}</h3>
      <p className="slide-description">{description}</p>
    </div>
  );
}

export default SlideCard;
