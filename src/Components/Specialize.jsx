import React, { useState } from 'react';
import head from '../Assets/heading.png';
import lft from '../Assets/lftdot.png';
import rht from '../Assets/rhtdot.png';

const contentData = [
  {
    title: "Supply Chain Solutions",
    description: "At Olygers, we offer end-to-end supply chain solutions tailored to meet the diverse needs of businesses across various industries. Our integrated services streamline the entire logistics process, from sourcing raw materials to delivering finished goods to your customers, ensuring efficiency and reliability at every stage.",
    bgClass: "supply-chain-bg",
  },
  {
    title: "Warehousing",
    description: "At Olygers, we offer end-to-end supply chain solutions tailored to meet the diverse needs of businesses across various industries. Our integrated services streamline the entire logistics process, from sourcing raw materials to delivering finished goods to your customers, ensuring efficiency and reliability at every stage.",
    bgClass: "warehousing-bg",
  },
  {
    title: "Transport",
    description: "At Olygers, we offer end-to-end supply chain solutions tailored to meet the diverse needs of businesses across various industries. Our integrated services streamline the entire logistics process, from sourcing raw materials to delivering finished goods to your customers, ensuring efficiency and reliability at every stage.",
    bgClass: "transport-bg",
  },
];

const Specialize = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="specialize-container">
      <div className="specialize-left" data-aos="fade-right">
        <img src={head} alt="heading" />
        <h2>We Specialize in</h2>
        <p>
          At Olygers, we provide comprehensive logistics solutions, specializing in supply chain management, freight forwarding, warehousing, and distribution.
        </p>
        {contentData.map((content, index) => (
          <button
            key={index}
            className={`special-button ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            {content.title}
          </button>
        ))}
      </div>

      <div className={`specialize-right ${contentData[selectedIndex].bgClass}`}>
        <img className="lft1" src={lft} alt="lftdot" />
        <img className="rht1" src={rht} alt="rhtdot" />
        <div className="specialize-image-content">
          <p>{contentData[selectedIndex].description}</p>
          <button className="know-more-button">Know more</button>
        </div>
      </div>
    </div>
  );
};

export default Specialize;
