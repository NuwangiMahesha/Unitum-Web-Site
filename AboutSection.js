import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/unitum-essence');
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <p className="about-label">About Us</p>
          <h2 className="about-title">
            Premium resources,<br />
            supplied globally.
          </h2>
          
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p className="feature-text">Global supplier of premium resources</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p className="feature-text">Committed to quality and integrity</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <p className="feature-text">Driven by innovation and reliability</p>
            </div>
          </div>

          <button className="know-more-button" onClick={handleKnowMoreClick}>
            Know More <span className="know-more-arrow">▶</span>
          </button>
        </div>

        <div className="about-images">
          <div className="image-large">
            <img src="/images/aboutUsSection/aboutus2.jpg" alt="Office view" />
          </div>
          <div className="image-small">
            <img src="/images/aboutUsSection/aboutus1.jpg" alt="Office interior" />
          </div>
          <div className="image-small-right">
            <img src="/images/aboutUsSection/aboutus3.jpg" alt="Team collaboration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
