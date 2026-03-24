import React from 'react';

function InfoCard({ icon, title, description }) {
  return (
    <div className="info-card">
      <div className="info-card-icon">{icon}</div>
      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-description">{description}</p>
    </div>
  );
}

export default InfoCard;
