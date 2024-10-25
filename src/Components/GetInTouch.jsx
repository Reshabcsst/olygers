import React from 'react';
import { SlArrowRight } from 'react-icons/sl';

const GetInTouch = () => {
  return (
    <div className="get-in-touch-section">
    <div className="left-section">
      <div className="cta">
        <button className="cta-button">Let's get in touch</button>
        <h1>Optimize your Logistics Today with our expert Solutions</h1>
      </div>
    </div>
  
    <div className="right-section">
      <h2>Get In Touch</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" placeholder="Sayan saha" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Sayan.ccc78@gmail.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone no</label>
          <input type="tel" id="phone" placeholder="+91 8910795286" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Write down your thoughts</label>
          <textarea id="message" placeholder="write your message..." />
        </div>
        <button type="submit" className="enquire-button">Enquire now <span><SlArrowRight/></span></button>
      </form>
    </div>
  </div>
  
  );
};

export default GetInTouch;

