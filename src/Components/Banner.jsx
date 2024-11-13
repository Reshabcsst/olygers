import React from 'react';
import video from '../Assets/bannervid.mp4';

const Banner = () => {
    const text = "Fast & Reliable    Logistics Services";

    // Split the text into characters and spaces
    const splitText = text.split('').map((char, index) => {
        return char === ' ' ? { type: 'space' } : { type: 'text', content: char };
    });

    return (
        <div className="main">
            <video className='vid' autoPlay width='100%' loop muted playsInline src={video}></video>
            <div className="in">
                <h1>
                    {splitText.map((item, index) => {
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
                <h2>
                    We deliver your package in no time & it has grown into of the world’s
                    leading logistics providers
                </h2>
            </div>
            <div className="overlay"></div>
        </div >
    );
};

export default Banner;
