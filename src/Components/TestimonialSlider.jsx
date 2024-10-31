import React, { useState, useEffect } from 'react';
import heading from '../Assets/heading.png';
import TestImg from '../Assets/Testimonialimg.png';

const testimonials = [
  {
    text: "Olygers has been an outstanding partner in managing our logistics needs. Their professionalism and reliability have consistently exceeded our expectations.",
    name: "Sarah L.",
    position: "Operations Manager",
    image: TestImg
  },
  {
    text: "We couldn't have asked for a better supply chain partner. Olygers delivered every step of the way, making our operations smoother and more efficient.",
    name: "John M.",
    position: "CEO",
    image: TestImg
  },
  {
    text: "Olygers provided us with seamless logistics solutions, ensuring we never had any delays in shipping. Exceptional service.",
    name: "Emily R.",
    position: "Logistics Head",
    image: TestImg
  }
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide after 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider">
      <img src={heading} alt="heading" />
      <h2>Testimonials</h2>
      <h3>What our client say</h3>
      <div className="slider-content">
        {/*  */}
        <img
          src={testimonials[currentSlide].image}
          alt={testimonials[currentSlide].name}
          className="client-image1"
        />
        <img
          src={testimonials[currentSlide].image}
          alt={testimonials[currentSlide].name}
          className="client-image2"
        />
        <img
          src={testimonials[currentSlide].image}
          alt={testimonials[currentSlide].name}
          className="client-image3"
        />
        <img
          src={testimonials[currentSlide].image}
          alt={testimonials[currentSlide].name}
          className="client-image4"
        />
        <img
          src={testimonials[currentSlide].image}
          alt={testimonials[currentSlide].name}
          className="client-image5"
        />
        <img
          src={testimonials[currentSlide].image}
          alt={testimonials[currentSlide].name}
          className="client-image6"
        />
        {/*  */}
        <div className="testimonial-text">
          <p>{testimonials[currentSlide].text}</p>
        </div>
        <div className="im">
          <img
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
            className="client-image"
          />
          <p>{testimonials[currentSlide].name}</p>,
          <p>{testimonials[currentSlide].position}</p>
        </div>
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;