import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import './CalciumCarbonatePage.css';

const CalciumCarbonatePage = () => {
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
    <div className="calcium-carbonate-page">
      <Navigation />
      
      <main className="calcium-carbonate-main">
        <div className="calcium-carbonate-container">
          {/* Title Section */}
          <div className="calcium-carbonate-title-section">
            <h1 className="calcium-carbonate-title">
              Unitum Chemicals
            </h1>
          </div>
          
          {/* Image Section */}
          <div className="calcium-carbonate-image-section">
            <img 
              src="/images/chemical/unical_calcium_powder_image_7.jpg" 
              alt="Calcium Carbonate Manufacturing Facility" 
              className="calcium-carbonate-image"
            />
          </div>
        </div>

        {/* Approach Section */}
        <div className="calcium-carbonate-approach-section">
          <div className="calcium-carbonate-approach-title-container">
            <h2 className="calcium-carbonate-approach-title">Approach</h2>
          </div>
          
          <div className="calcium-carbonate-approach-description-container">
            <p className="calcium-carbonate-approach-description">
              Unitum Chemicals (Pvt) Limited is a key player in the production and supply of high-quality value-added Calcium Carbonate Powder, a critical raw material used extensively across paint, PVC, polymer, and rubber industries.
            </p>
            <p className="calcium-carbonate-approach-description">
              Marketed under the trusted brand name UNICAL®, our product has become a preferred choice among industry leaders due to its superior quality, consistency, and performance-enhancing properties.
            </p>
          </div>
        </div>

        {/* Our Principal Section */}
        <div id="calcium-carbonate-powder" className="calcium-carbonate-principal-section">
          <div className="calcium-carbonate-principal-content">
            <div className="calcium-carbonate-principal-text">
              <h3 className="calcium-carbonate-principal-subtitle">Our Chemical Solutions</h3>
              <h2 className="calcium-carbonate-principal-title">
                UNICAL Calcium<br />
                Carbonate Powder<br />
                (CaCO3)
              </h2>
              <p className="calcium-carbonate-principal-description">
                Our range of calcium carbonate powder is manufactured according to international specifications in our state of art manufacturing facility using the finest raw materials from our very own selected mines.
              </p>
              <p className="calcium-carbonate-principal-description">
                Our Ground calcium carbonate powder is manufactured to meet the best expectations of manufacturers of Paint, Rubber and engineering raw material manufacturers In Sri Lanka. We have been able to meet the highest standards of our clients while providing them with cost effective and timely delivery solutions.
              </p>
            </div>
            <div className="calcium-carbonate-principal-image">
              <img 
                src="/images/chemical/unical_calcium_powder_image_2.jpg" 
                alt="Calcium Carbonate Mining Site" 
                className="calcium-carbonate-principal-img"
              />
            </div>
          </div>
        </div>

        {/* Coated Calcium Carbonate Section */}
        <div id="coated-calcium-carbonate" className="calcium-carbonate-coated-section">
          <div className="calcium-carbonate-coated-content">
            <div className="calcium-carbonate-coated-text">
              <h3 className="calcium-carbonate-coated-subtitle">Our Chemical Solutions</h3>
              <h2 className="calcium-carbonate-coated-title">
                UNICAL Coated Calcium<br />
                Carbonate Powder
              </h2>
              <div className="calcium-carbonate-coated-description-container">
                <p className="calcium-carbonate-coated-description">
                  Our range of Coated Calcium Carbonate powder is manufactured according to international standard specifications in order to meet the requirements of the manufacturers of plastic, PVC, Packaging & rubber products. UNICAL CaCO3 product range has been able to meet the best expectation of our clients with its particle shape, micronized fineness & hardness.
                </p>
                <p className="calcium-carbonate-coated-description">
                  The particle size our product range starts from 5 Micron up to 55 Micron which is manufactured according to our customer requirement.
                </p>
              </div>
            </div>
            <div className="calcium-carbonate-coated-image">
              <img 
                src="/images/chemical/unical_calcium_powder_image_3.jpg" 
                alt="Coated Calcium Carbonate Powder" 
                className="calcium-carbonate-coated-img"
              />
            </div>
          </div>
        </div>

        {/* Wall Coating Solutions Section */}
        <div id="wall-coating-solutions" className="calcium-carbonate-wall-coating-section">
          <div className="calcium-carbonate-wall-coating-content">
            <div className="calcium-carbonate-wall-coating-text">
              <h3 className="calcium-carbonate-wall-coating-subtitle">Our Chemical Solutions</h3>
              <h2 className="calcium-carbonate-wall-coating-title">
                UNICAL Wall Coating<br />
                Solutions
              </h2>
              <div className="calcium-carbonate-wall-coating-description-container">
                <p className="calcium-carbonate-wall-coating-description">
                  Calcium Carbonate powder is the main ingredient for manufacturing skim coat & filler for wall coating solutions. Currently Unitum Chemicals acts as the exclusive manufacturer of S-Lon Kansai Paint in Sri Lanka in manufacturing its total Skim coat product range.
                </p>
                <p className="calcium-carbonate-wall-coating-description">
                  Our UNICAL CaCO3 powder range is manufactured according to the requirements of manufacturers of Skim Coat, Filler and other related products.
                </p>
              </div>
            </div>
            <div className="calcium-carbonate-wall-coating-image">
              <img 
                src="/images/chemical/unical_calcium_powder_image_4.jpg" 
                alt="Wall Coating Solutions" 
                className="calcium-carbonate-wall-coating-img"
              />
            </div>
          </div>
        </div>

        {/* Manufacturing Solutions Section */}
        <div id="manufacturing-solutions" className="calcium-carbonate-manufacturing-section">
          <div className="calcium-carbonate-manufacturing-content">
            <div className="calcium-carbonate-manufacturing-text">
              <h3 className="calcium-carbonate-manufacturing-subtitle">Our Chemical Solutions</h3>
              <h2 className="calcium-carbonate-manufacturing-title">
                UNICAL Manufacturing<br />
                Solutions
              </h2>
              <div className="calcium-carbonate-manufacturing-description-container">
                <p className="calcium-carbonate-manufacturing-description">
                  Calcium Carbonate powder is the main ingredient for manufacturing skim coat & filler for wall coating solutions. Currently Unitum Chemicals acts as the exclusive manufacturer of S-Lon Kansai Paint in Sri Lanka in manufacturing its total Skim coat product range.
                </p>
                <p className="calcium-carbonate-manufacturing-description">
                  Our UNICAL CaCO3 powder range is manufactured according to the requirements of manufacturers of Skim Coat, Filler and other related products.
                </p>
              </div>
            </div>
            <div className="calcium-carbonate-manufacturing-image">
              <img 
                src="/images/chemical/unical_calcium_powder_image_5.jpg" 
                alt="Manufacturing Solutions" 
                className="calcium-carbonate-manufacturing-img"
              />
            </div>
          </div>
        </div>

        {/* Full Width Image Section */}
        <div className="calcium-carbonate-fullwidth-section">
          <img 
            src="/images/chemical/unical_calcium_powder_image_6.png" 
            alt="Unitum Manufacturing Facility" 
            className="calcium-carbonate-fullwidth-image"
          />
        </div>
      </main>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default CalciumCarbonatePage;