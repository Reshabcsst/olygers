import React, { useState } from 'react';
import img from '../Assets/ls.png';
import img1 from '../Assets/fi.png';
import img2 from '../Assets/si.png';

const slides = [
    {
        img: img,
        title: "Reliable",
        subtitle: "Cargo shipping",
        description: "Made Simple",
    },
    {
        img: img1,
        title: "Fast",
        subtitle: "Express shipping",
        description: "Across the globe",
    },
    {
        img: img2,
        title: "Secure",
        subtitle: "Trusted by companies",
        description: "Worldwide",
    }
];

const OurEvents = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const changeSlide = (direction) => {
        setIsFading(true);

        // Delay slide change until fade-out is complete
        setTimeout(() => {
            setCurrentSlide((prevSlide) => {
                if (direction === 'next') {
                    return (prevSlide + 1) % slides.length;
                } else {
                    return prevSlide === 0 ? slides.length - 1 : prevSlide - 1;
                }
            });
            setIsFading(false); // Start fade-in effect
        }, 300); // Fade-out duration
    };
    return (
        <>
            <div className="events">
                <div className="lft">
                    <button className="fb">Our Event</button>
                    <p className={`ft ${isFading ? 'fade' : ''}`}>{slides[currentSlide].title}</p>
                    <span className={isFading ? 'fade' : ''}>{slides[currentSlide].subtitle}</span>
                    <p className={`lt ${isFading ? 'fade' : ''}`}>{slides[currentSlide].description}</p>
                    <button className="rm">Read more</button>
                    <div className="team-arrows">
                        <button onClick={() => changeSlide('prev')} className="arrow-left">&larr;</button>
                        <button onClick={() => changeSlide('next')} className="arrow-right">&rarr;</button>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${slides[currentSlide].img})` }}
                    className="rht"
                ></div>
            </div>
            <div className="lwr">
                <div className="box"><p>MxGTL</p></div>
                <div className="box"><p>MxGTL</p></div>
                <div className="box"><p>MxGTL</p></div>
            </div>
        </>
    );
};

export default OurEvents;
