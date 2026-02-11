import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <>
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Stay Informed with Unitum
            </h2>
            <p className="cta-description">
              Join us to make a positive impact on each other and the world.
            </p>
          </div>
          <div className="cta-action">
            <button className="cta-button" onClick={handleContactClick}>
              <span>Contact</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
