import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const GridOverlay = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05
  });
  return (
    <div className="business-grid">
      <div className="grid-overlay">
        <div className="grid-item grid-item-outline"></div>
        <div className="grid-item grid-item-outline"></div>
        <div className="grid-item grid-item-bordered">
          <h2 ref={ref}>
            {inView && (
              <CountUp duration={4} start={0} end={300} />
            )}
            +
          </h2>
          <p>Workers in team</p>
        </div>
        <div className="grid-item grid-item-outline"></div>
        <div className="grid-item grid-item-bordered">
          <h2 ref={ref}>
            {inView && (
              <CountUp duration={4} start={0} end={290} />
            )}
            +
          </h2>
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
          <h2 ref={ref}>
            {inView && (
              <CountUp duration={4} start={0} end={200} />
            )}
            +
          </h2>
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
          <h2 ref={ref}>
            {inView && (
              <CountUp duration={4} start={0} end={100} />
            )}
            +
          </h2>
          <p>Awards won</p>
        </div>
        <div className="grid-item grid-item-outline"></div>
      </div>
    </div>
  );
};

export default GridOverlay;
