import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChemicalsSection.css';

const ChemicalsSection = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/chemical-blog');
  };

  return (
    <section className="chemicals-section">
      <div className="chemicals-container">
        <div className="chemicals-content">
          <div className="chemicals-text-content">
            <div className="chemicals-label">Unitum Chemicals</div>
            <h2 className="chemicals-title">
              Leading Supplier of Quality Chemical <br /> Solutions
            </h2>
            
            <p className="chemicals-description">
              Unitum Chemicals is a leading supplier of high-quality chemical solutions, catering to a diverse range of industries. Known for our commitment to excellence and innovation, we provide top-tier products that meet stringent industry standards.
            </p>
            
            <p className="chemicals-description">
              Our extensive portfolio includes a variety of chemicals essential for industrial processes, ensuring efficiency and reliability for our clients. Partner with Unitum Chemicals for trusted solutions that drive success and sustainability in your operations.
            </p>
          </div>
          
          <button className="know-more-button" onClick={handleKnowMoreClick}>
            Know More
            <span className="know-more-arrow">▶</span>
          </button>
        </div>
        
        <div className="chemicals-image">
          <img src={process.env.PUBLIC_URL + "/images/chemical/chemicalimage1.jpg"} alt="Chemical facility" />
        </div>
      </div>
    </section>
  );
};

export default ChemicalsSection;
