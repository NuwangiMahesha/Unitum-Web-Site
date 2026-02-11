import React from 'react';
import { useNavigate } from 'react-router-dom';
import WorldMap from './WorldMap';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-green">Unitum</span><br />
            Connecting Quality, Globally
          </h1>
          <p className="hero-subtitle">
            Empowering Industries with Premium<br />
            Products and Unmatched Expertise.
          </p>
          <button className="hero-button" onClick={handleContactClick}>
            Connect with us
            <span className="button-arrow">▶</span>
          </button>
        </div>
        <div className="hero-visual">
          <WorldMap />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;