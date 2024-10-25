import React from 'react';
import head from '../Assets/heading.png';
import lft from '../Assets/lftdot.png';
import rht from '../Assets/rhtdot.png';

const Specialize = () => {
  return (
    <div className="specialize-container">
      <div className="specialize-left">
        <img src={head} alt="heading" />
        <h2>We Specialize in</h2>
        <p>
          At Olygers, we provide comprehensive logistics solutions, specializing in supply chain management, freight forwarding, warehousing, and distribution.
        </p>
        <button className="special-button active">Supply Chain Solutions</button>
        <button className="special-button">Warehousing</button>
        <button className="special-button">Transport</button>
      </div>

      <div className="specialize-right">
        <img className='lft1' src={lft} alt="lftdot" />
        <img className='rht1' src={rht} alt="rhtdot" />
        <div className="specialize-image-content">
          <p>
            At Olygers, we offer end-to-end supply chain solutions tailored to meet the diverse needs of businesses across various industries. Our integrated services streamline the entire logistics process, from sourcing raw materials to delivering finished goods to your customers, ensuring efficiency and reliability at every stage.
          </p>
          <button className="know-more-button">Know more</button>
        </div>
      </div>
    </div>
  );
};

export default Specialize;

