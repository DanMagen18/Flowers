import React from 'react';

function SectionTitle({ title, subtitle, centered = false }) {
  return (
    <div className={`section-title ${centered ? 'section-title-centered' : ''}`}>
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
