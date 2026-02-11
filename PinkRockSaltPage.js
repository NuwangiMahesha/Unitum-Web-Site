import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import './PinkRockSaltPage.css';

const PinkRockSaltPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to hash anchor if present in URL
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="pink-rock-salt-page">
      <Navigation />
      
      <main className="pink-rock-salt-main">
        {/* Top Bar Section */}
        <div className="pink-rock-salt-top-bar">
          {/* This can be used for breadcrumbs or additional navigation if needed */}
        </div>
        
        <div className="pink-rock-salt-container">
          {/* Title Section */}
          <div className="pink-rock-salt-title-section">
            <h1 className="pink-rock-salt-title">
              Premium pink<br />
              Rock salt processing
            </h1>
          </div>
          
          {/* Image Section */}
          <div className="pink-rock-salt-image-section">
            <img 
              src="/images/saultSection/pink_sault_image_1.jpg" 
              alt="Premium Pink Rock Salt Processing Facility" 
              className="pink-rock-salt-image"
            />
          </div>
        </div>

        {/* Approach Section */}
        <div className="pink-rock-salt-approach-section">
          <div className="pink-rock-salt-approach-title-container">
            <h2 className="pink-rock-salt-approach-title">Approach</h2>
          </div>
          
          <div className="pink-rock-salt-approach-description-container">
            <p className="pink-rock-salt-approach-description">
              In recent years, consumer awareness around health and wellness has driven a growing demand for natural and mineral-rich food products.
            </p>
            <p className="pink-rock-salt-approach-description">
              Among these, Pink Rock Salt, commonly known as Himalayan Pink Salt, has gained widespread popularity for its unique mineral content and perceived health benefits. Renowned for its striking pink hue and rich mineral composition, pink salt is favored by health-conscious consumers who seek natural alternatives to regular table salt.
            </p>
          </div>
        </div>

        {/* Salt Lumps Section */}
        <div id="salt-lumps" className="pink-rock-salt-lumps-section">
          <div className="pink-rock-salt-lumps-content">
            <div className="pink-rock-salt-lumps-text">
              <h2 className="pink-rock-salt-lumps-title">Salt Lumps</h2>
              <div className="pink-rock-salt-lumps-description-container">
                <p className="pink-rock-salt-lumps-description">
                  Naturally formed pink rock salt in its raw, unprocessed state, ideal for grinders, decorative use, gourmet applications, and further industrial processing.
                </p>
              </div>
            </div>
            <div className="pink-rock-salt-lumps-image">
              <img 
                src="/images/saultSection/pink_sault_image_2.jpg" 
                alt="Pink Rock Salt Lumps" 
                className="pink-rock-salt-lumps-img"
              />
            </div>
          </div>
        </div>

        {/* Fine Powder Section */}
        <div id="fine-powder" className="pink-rock-salt-powder-section">
          <div className="pink-rock-salt-powder-content">
            <div className="pink-rock-salt-powder-text">
              <h2 className="pink-rock-salt-powder-title">Fine Powder</h2>
              <div className="pink-rock-salt-powder-description-container">
                <p className="pink-rock-salt-powder-description">
                  Precisely milled pink salt with a smooth consistency, designed for easy solubility and use in food processing, packaged products, and culinary applications.
                </p>
              </div>
            </div>
            <div className="pink-rock-salt-powder-image">
              <img 
                src="/images/saultSection/pink_sault_image_3.jpg" 
                alt="Pink Rock Salt Fine Powder" 
                className="pink-rock-salt-powder-img"
              />
            </div>
          </div>
        </div>

        {/* Free-Flow Salt Section */}
        <div id="free-flow-salt" className="pink-rock-salt-freeflow-section">
          <div className="pink-rock-salt-freeflow-content">
            <div className="pink-rock-salt-freeflow-text">
              <h2 className="pink-rock-salt-freeflow-title">Free-Flow Salt</h2>
              <div className="pink-rock-salt-freeflow-description-container">
                <p className="pink-rock-salt-freeflow-description">
                  Specially processed pink salt engineered to prevent clumping, ensuring smooth flow and consistent dosing in retail packaging and large-scale manufacturing.
                </p>
              </div>
            </div>
            <div className="pink-rock-salt-freeflow-image">
              <img 
                src="/images/saultSection/pink_sault_image_4.jpg" 
                alt="Pink Rock Salt Free-Flow Salt" 
                className="pink-rock-salt-freeflow-img"
              />
            </div>
          </div>
        </div>

        {/* Granules Section */}
        <div id="granules" className="pink-rock-salt-granules-section">
          <div className="pink-rock-salt-granules-content">
            <div className="pink-rock-salt-granules-text">
              <h2 className="pink-rock-salt-granules-title">Granules</h2>
              <div className="pink-rock-salt-granules-description-container">
                <p className="pink-rock-salt-granules-description">
                  Evenly crushed pink salt with a uniform texture, suitable for food manufacturing, seasoning blends, and controlled dispensing applications.
                </p>
              </div>
            </div>
            <div className="pink-rock-salt-granules-image">
              <img 
                src="/images/saultSection/pink_sault_image_5.jpg" 
                alt="Pink Rock Salt Granules" 
                className="pink-rock-salt-granules-img"
              />
            </div>
          </div>
        </div>
      </main>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default PinkRockSaltPage;