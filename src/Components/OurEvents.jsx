import React, { useEffect, useState } from 'react';
import img from '../Assets/ls.png';
import img1 from '../Assets/ev1.jpg';
import img2 from '../Assets/ev2.jpg';
import l1 from '../Assets/logo1.png';
import l2 from '../Assets/logo2.jpg';
import l4 from '../Assets/logo4.avif';

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

const Logos = [
    {
        img: l1
    },
    {
        img: l2
    },
    {
        img: l4
    },
    {
        img: l1
    },
    {
        img: l2
    },
    {
        img: l4
    }
]

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
            setIsFading(false);
        }, 300);
    };

    // Auto slide for Above section after 5 seconds if no manual change
    useEffect(() => {
        const autoSlideTimer = setInterval(() => {
            changeSlide('next');
        }, 5000);

        return () => clearInterval(autoSlideTimer);
    }, []);





    // Auto Scroll
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");

                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);
    return (
        <>
            <div
                className="events"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-anchor-placement="center-center"
            >
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

            <div className="lwr scroller" data-speed="mid">
                <div className="scroller__inner">
                    {Logos.map((item, index) => (
                        <div key={index} className="box">
                            <img src={item.img} alt={`Logo ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurEvents;
