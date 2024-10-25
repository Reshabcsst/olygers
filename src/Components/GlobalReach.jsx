import React from 'react';
import latinAmericaImg from '../Assets/Latin.png';
import southAsiaImg from '../Assets/Asia.png';
import gulfCountriesImg from '../Assets/Gulf.png';
import usaFlagImg from '../Assets/USA.png';
import italy from '../Assets/Italy.png';
import spain from '../Assets/Spain.png';

const GlobalReach = () => {
    return (
        <div className='globe-main'>
            <div className="lft">
                <div className="hd">
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
            <div className="card">
                <h2 className='h2'>What we specialize</h2>
                <h3 className='h3'>1. Sea Freight</h3>
                <p className='p'>Our sea freight services offer cost-effective and reliable shipping for businesses of all sizes.</p>
                <div className="btn">
                    <div className="lft">
                        <p>01/<span>06</span></p>
                    </div>
                    <div className="rht">
                        <button> &lt; | &gt; </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalReach
