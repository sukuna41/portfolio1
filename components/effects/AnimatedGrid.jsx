"use client";

import "./AnimatedGrid.css";

const AnimatedGrid = () => {
  return (
    <div className="animated-grid">
      <div className="grid-line horizontal"></div>
      <div className="grid-line vertical"></div>
      <div className="grid-dots"></div>
    </div>
  );
};

export default AnimatedGrid;
