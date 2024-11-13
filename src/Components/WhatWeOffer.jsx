import React from 'react';
import heading from '../Assets/heading.png';

const WhatWeOffer = () => {
    return (
        <div className='what-we-offer'>
            <img src={heading} alt="heading" />
            <h2>Services</h2>
            <h3>What we offer</h3>
            <div className="card-container">
                <div className="card" id="delivery" data-aos="fade-up" data-aos-delay="100">
                    <div className="border-span"></div>
                    <div className="card-content">
                        <h3>End-to-End Delivery</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <a href="#">Read more →</a>
                    </div>
                </div>

                <div className="card" id="freight" data-aos="fade-up" data-aos-delay="200">
                    <div className="border-span"></div>
                    <div className="card-content">
                        <h3>Priority Air Freight</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <a href="#">Read more →</a>
                    </div>
                </div>

                <div className="card" id="warehousing" data-aos="fade-up" data-aos-delay="300">
                    <div className="border-span"></div>
                    <div className="card-content">
                        <h3>Warehousing</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <a href="#">Read more →</a>
                    </div>
                </div>

                <div className="card request-quote" data-aos="fade-up" data-aos-delay="400">
                    <div className="card-content">
                        <h3>Request a quote</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <a href="#">Request →</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;
