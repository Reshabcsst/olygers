import React from 'react';

const GridOverlay = () => {
  return (
    <div className="business-grid">
    <div className="grid-overlay">
    <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-bordered">
        <h2>300+</h2>
        <p>Workers in team</p>
      </div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-bordered">
        <h2>290</h2>
        <p>Satisfied clients</p>
      </div>

      {/* Add empty grid items for outlined cells */}
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-main">
        <h2>Our Business Mission is <br /> Client's Satisfaction</h2>
      </div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-bordered">
        <h2>200+</h2>
        <p>Projects done</p>
      </div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-outline"></div>
      <div className="grid-item grid-item-bordered">
        <h2>100+</h2>
        <p>Awards won</p>
      </div>
      <div className="grid-item grid-item-outline"></div>
    </div>
  </div>
  );
};

export default GridOverlay;
