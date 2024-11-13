import React, { useState } from 'react';

const ServicesSection = () => {
    const [showAllQuestions, setShowAllQuestions] = useState(false);

    const questions = [
        { id: 1, text: 'Where is transportation services located?' },
        { id: 2, text: 'What are the types of transportation services?' },
        { id: 3, text: 'How can I track my shipment?' },
        { id: 4, text: 'What is the delivery time?' },
        { id: 5, text: 'How can I get in touch with support?' }
    ];

    const handleMouseEnter = () => {
        setShowAllQuestions(true);
    };

    const handleMouseLeave = () => {
        setShowAllQuestions(false);
    };

    return (
        <div className="services-section">
            <div
                className="container"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
            >
                <div className="heading">
                    <h1>We go the extra mile for you</h1>
                </div>
                <div
                    className="questions"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {questions.slice(0, showAllQuestions ? questions.length : 2).map((question, index) => (
                        <div className="question" key={question.id}>
                            <h2>{String(index + 1).padStart(2, '0')}</h2>
                            <h3>{question.text}</h3>
                            <p>Our transportation services are available worldwide. You can contact us for more information.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
