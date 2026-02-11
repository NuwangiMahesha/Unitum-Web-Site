import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './ChemicalsPage.css';

const ChemicalsPage = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/about-us');
  };

  return (
    <div className="chemicals-page">
      <Navigation />
      
      <main className="chemicals-main">
        <div className="chemicals-container">
          <div className="chemicals-content">
            <div className="chemicals-label">Unitum Chemicals</div>
            <h1 className="chemicals-title">
              Leading Supplier of Quality Chemical Solutions
            </h1>
            <div className="chemicals-description-wrapper">
              <p className="chemicals-description">
                Unitum Chemicals is a leading supplier of high-quality chemical solutions, catering to a diverse range of 
                industries. Known for our commitment to excellence and innovation, we provide top-tier products that meet 
                stringent industry standards.
              </p>
              <p className="chemicals-description">
                Our extensive portfolio includes a variety of chemicals essential for industrial processes, ensuring efficiency and 
                reliability for our clients. Partner with Unitum Chemicals for trusted solutions that drive success and sustainability in 
                your operations.
              </p>
            </div>
            
            <button className="know-more-button mt-30" onClick={handleKnowMoreClick}>
              Know More <span className="know-more-arrow">▶</span>
            </button>
          </div>

          <div className="chemicals-hero-image">
            <img 
              src="/images/chemical/chemicalimage1.jpg" 
              alt="Chemical Industry Facility" 
              className="chemicals-image"
            />
          </div>
        </div>

        {/* Additional Content Sections */}
        <div className="chemicals-additional-content">
          <div className="chemicals-container">
            <div className="chemicals-meta">
              <span className="chemicals-date">APRIL 02/2023</span>
              <span className="chemicals-separator">•</span>
              <span className="chemicals-category">CATEGORY</span>
              <span className="chemicals-separator">•</span>
              <span className="chemicals-read-time">5 MIN READ</span>
            </div>

            {/* Introduction Section */}
            <section className="chemicals-section">
              <h2 className="chemicals-section-title">Introduction</h2>
              <p className="chemicals-text">
                Lorem ipsum dolor sit amet consectetur. Ultrices lorem tempus mollis nullam nulla non dolor nec mollis. 
                Rhoncus aliquam rhoncus tristique ut lacus donec. Amet lectus mi donec non suspendisse sapien vel sed. 
                A tellus tincidunt lorem tempor in. Tortor semper feugiat mi ultrices sit arcu tincidunt vel arcu.
              </p>
            </section>

            {/* Chemicals Section */}
            <section className="chemicals-section">
              <h2 className="chemicals-section-title">Chemicals</h2>
              <p className="chemicals-text">
                Lorem ipsum dolor sit amet consectetur. Ultrices lorem tempus mollis nullam nulla non dolor nec mollis. 
                Rhoncus aliquam rhoncus tristique ut lacus donec. Amet lectus mi donec non suspendisse sapien vel sed. 
                A tellus tincidunt lorem tempor in. Tortor semper feugiat mi ultrices sit arcu tincidunt vel arcu. Nulla 
                mauris massa molestie elit ut pellentesque.
              </p>
            </section>

            {/* Second Image */}
            <div className="chemicals-content-image">
              <img 
                src="/images/serviceSection/serviceimage2.png" 
                alt="Chemical Processing Equipment" 
                className="chemicals-image"
              />
            </div>

            {/* Dairy Products Section */}
            <section className="chemicals-section">
              <h2 className="chemicals-section-title">Dairy Products</h2>
              <p className="chemicals-text">
                Lorem ipsum dolor sit amet consectetur. Ultrices lorem tempus mollis nullam nulla non dolor nec mollis. 
                Rhoncus aliquam rhoncus tristique ut lacus donec. Amet lectus mi donec non suspendisse sapien vel sed. 
                A tellus tincidunt lorem tempor in. Tortor semper feugiat mi ultrices sit arcu tincidunt vel arcu. Nulla 
                mauris massa molestie elit ut pellentesque. Tincidunt amet lorem adipiscing fermentum nam sapien aliquam ante at. 
                Feugiat ut blandit dui vitae vitae. Lorem magna pharetra vel molestie porttitor.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChemicalsPage;