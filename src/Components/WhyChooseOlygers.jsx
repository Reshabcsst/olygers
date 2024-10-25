import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const WhyChooseOlygers = () => {
  return (
    <div className='why-main'>
      <div className="lft">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
      <div className="rht">
      <div className="why-choose">
      <h1>Why Choose <span>Olygers?</span></h1>
      <p>
        At Olygers, we specialize in managing complex logistics, with a focus on Over-Dimensional Cargo (ODC)
        and global freight solutions. Our expertise, combined with a customer-first approach, ensures safe, timely,
        and cost-effective delivery for businesses of all sizes.
      </p>

      <div className="benefits">
        <div className="benefit-card">
          <FaCheckCircle className="check-icon" />
          <div className="benefit-info">
            <h2>Expertise in handling complex logistics and ODC.</h2>
          </div>
        </div>

        <div className="benefit-card">
          <FaCheckCircle className="check-icon" />
          <div className="benefit-info">
            <h2>Global network ensuring timely deliveries.</h2>
          </div>
        </div>

        <div className="benefit-card">
          <FaCheckCircle className="check-icon" />
          <div className="benefit-info">
            <h2>Tailored, cost-effective solutions for every business.</h2>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default WhyChooseOlygers;