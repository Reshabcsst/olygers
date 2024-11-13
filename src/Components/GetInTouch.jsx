import React from 'react';
import { SlArrowRight } from 'react-icons/sl';
import video from '../Assets/GetInTouchBg.mp4'
import { useInView } from 'react-intersection-observer';

const GetInTouch = () => {
  const text = "Optimize your Logistics Today with our expert Solutions";

  const splitText = text.split('').map((char, index) => {
    return char === ' ' ? { type: 'space' } : { type: 'text', content: char };
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05
  });
  return (
    <div className="get-in-touch-section">
      <video
        src={video}
        type="video/mp4"
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="left-section">
        <div className="cta">
          <button className="cta-button">Let's get in touch</button>

          <h1 ref={ref}>
            {inView && splitText.map((item, index) => {
              if (item.type === 'space') {
                return <span key={index} className="space" />;
              }

              return (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  {item.content}
                </span>
              );
            })}
          </h1>


        </div>
      </div>

      <div className="right-section" data-aos="zoom-out-left">
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
          <button type="submit" className="enquire-button">Enquire now <span><SlArrowRight /></span></button>
        </form>
      </div>
    </div>

  );
};

export default GetInTouch;

