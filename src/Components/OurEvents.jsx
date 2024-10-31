import React from 'react';
import img from '../Assets/ls.png';

const OurEvents = () => {
    return (
        <>
            <div className='events'>
                <div className="lft">
                    <button className='fb'>Our Event</button>
                    <p className='ft'>Reliable</p>
                    <span>Cargo shipping</span>
                    <p className='lt'>Made Simple</p>
                    <button className='rm'>Read more</button>
                    <div className="team-arrows">
                        <button className="arrow-left">&larr;</button>
                        <button className="arrow-right">&rarr;</button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${img})` }} className="rht">
                </div>
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
