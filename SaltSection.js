import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SaltSection.css';

const SaltSection = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/pink-rock-salt');
  };

  return (
    <section className="salt-section">
      <div className="salt-container">
        <div className="salt-image">
          <img src={process.env.PUBLIC_URL + "/images/saultSection/saultimage.png"} alt="Himalayan Pink Salt" />
        </div>
        
        <div className="salt-content">
          <div className="salt-label">Unitum Salt</div>
          <h2 className="salt-title">
            Pure Himalayan Pink Salt Processing
          </h2>
          
          <p className="salt-description">
            In recent years, consumer awareness around health and wellness has driven a growing demand for natural and high-quality food products.<br /><br />Unitum sources its ingredients from the purest deposits in the world, delivering trusted, premium solutions that meet the needs of health-conscious consumers and global markets.
          </p>
          
          <button className="know-more-button mt-30" onClick={handleKnowMoreClick}>
            Know More <span className="know-more-arrow">▶</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SaltSection;
