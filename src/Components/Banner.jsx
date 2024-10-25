import React from 'react';
import video from '../Assets/bannervid.mp4';

const Banner = () => {
    return (
        <div className="main">
            <video className='vid' autoPlay width='100%' loop muted playsInline src={video}></video>
            <div className="in">
                <h1>
                    Fast & Reliable
                    Logistics Services
                </h1>
                <h2>
                    We deliver your package in no time & it has grown into of the world’s
                    leading logistics providers
                </h2>
            </div>
            <div className="overlay"></div>
        </div>
    );
};

export default Banner;
