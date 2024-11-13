import React, { useEffect, useState } from 'react';
import latinAmericaImg from '../Assets/Latin.png';
import southAsiaImg from '../Assets/Asia.png';
import gulfCountriesImg from '../Assets/Gulf.png';
import usaFlagImg from '../Assets/USA.png';
import italy from '../Assets/Italy.png';
import spain from '../Assets/Spain.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const GlobalReach = () => {
    const contentData = [
        {
            title: 'Sea Freight',
            description: 'Our sea freight services offer cost-effective and reliable shipping for businesses of all sizes.'
        },
        {
            title: 'Air Freight',
            description: 'Fast and efficient air freight solutions to meet urgent shipping needs across the globe.'
        },
        {
            title: 'Road Transport',
            description: 'Reliable road transport services for local and regional deliveries.'
        },
        {
            title: 'Warehousing',
            description: 'Secure warehousing solutions to store and manage your goods.'
        },
        {
            title: 'Customs Brokerage',
            description: 'Assistance with customs procedures and documentation to streamline the shipping process.'
        },
        {
            title: 'Supply Chain Solutions',
            description: 'Comprehensive supply chain solutions to optimize logistics for businesses.'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(false);

    const handleNext = () => {
        setAnimate(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
    };

    const handlePrevious = () => {
        setAnimate(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? contentData.length - 1 : prevIndex - 1
        );
    };


    // Auto-slide effect using useEffect
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3500);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const timeout = setTimeout(() => setAnimate(false), 500);
        return () => clearTimeout(timeout);
    }, [currentIndex]);

    const { title, description } = contentData[currentIndex];

    return (
        <div className='globe-main'>
            <div className="lft">
                <div className="hd" data-aos="fade-right">
                    <h2>Global Reach</h2>
                    <p>With a presence across multiple countries, we provide seamless
                        logistics solutions tailored to your business needs.</p>
                </div>

                <div className="st">
                    <div className="region-container">
                        <div className="region-item">
                            <div className="region-icon">
                                <img src={latinAmericaImg} alt="Latin America" />
                            </div>
                            <div className="region-label">
                                <span className="arrow">→</span>
                                Latin countries
                            </div>
                        </div>
                        <div className="region-item">
                            <div className="region-icon">
                                <img src={southAsiaImg} alt="South Asia" />
                            </div>
                            <div className="region-label">
                                <span className="arrow">→</span>
                                South Asia
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nd">
                    <div className="region-container">
                        <div className="region-item">
                            <div className="region-icon">
                                <img src={gulfCountriesImg} alt="Gulf Countries" />
                            </div>
                            <div className="region-label">
                                <span className="arrow">→</span>
                                Gulf countries
                            </div>
                        </div>
                        <div className="region-item">
                            <div className="region-icon">
                                <img src={usaFlagImg} alt="USA" />
                            </div>
                            <div className="region-label">
                                <span className="arrow">→</span>
                                USA
                            </div>
                        </div>
                        <div className="region-item">
                            <div className="region-icon">
                                <img src={italy} alt="Italy" />
                            </div>
                            <div className="region-label">
                                <span className="arrow">→</span>
                                Italy
                            </div>
                        </div>
                        <div className="region-item">
                            <div className="region-icon">
                                <img src={spain} alt="Spain" />
                            </div>
                            <div className="region-label">
                                <span className="arrow">→</span>
                                Spain
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card" data-aos="fade-up">
                <h2 className='h2'>What we specialize</h2>
                <h3 className={`h3 ${animate ? 'slide-up' : ''}`}>{currentIndex + 1}. {title}</h3>
                <p className={`p ${animate ? 'slide-up' : ''}`} >{description}</p>
                <div className="btn">
                    <div className="lft">
                        <p>{String(currentIndex + 1).padStart(2, '0')}/<span>{String(contentData.length).padStart(2, '0')}</span></p>
                    </div>
                    <div className="rht">
                        <button onClick={handlePrevious}> <IoIosArrowBack /> </button>
                        |
                        <button onClick={handleNext}> <IoIosArrowForward /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalReach
