import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import './DairyProductsPage.css';

const DairyProductsPage = () => {
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
    <div className="dairy-products-page">
      <Navigation />
      
      <main className="dairy-products-main">
        {/* Top Bar Section */}
        <div className="dairy-products-top-bar">
          {/* This can be used for breadcrumbs or additional navigation if needed */}
        </div>
        
        <div className="dairy-products-container">
          {/* Title Section */}
          <div className="dairy-products-title-section">
            <h1 className="dairy-products-title">
              Delivering Global<br />
              Dairy Excellence
            </h1>
          </div>
          
          {/* Image Section */}
          <div className="dairy-products-image-section">
            <img 
              src="/images/FoodIngrediants/milkimageMain.jpg" 
              alt="Dairy Products Manufacturing Facility" 
              className="dairy-products-image"
            />
          </div>
        </div>

        {/* Approach Section */}
        <div className="dairy-products-approach-section">
          <div className="dairy-products-approach-title-container">
            <h2 className="dairy-products-approach-title">Approach</h2>
          </div>
          
          <div className="dairy-products-approach-description-container">
            <p className="dairy-products-approach-description">
              Unitum has strategically diversified into the food ingredients sector, becoming a key supplier of premium dairy-based ingredients to Sri Lankan manufacturers in the confectionery, dairy processing, and food & beverage industries.
            </p>
            <p className="dairy-products-approach-description">
              Building on the company's core values of quality, reliability, and service, Unitum has positioned itself as a trusted partner to many of the country's leading food producers.
            </p>
          </div>
        </div>

        {/* Whole Milk Powder Section */}
        <div id="whole-milk-powder" className="dairy-products-wmp-section">
          <div className="dairy-products-wmp-content">
            <div className="dairy-products-wmp-text">
              <h3 className="dairy-products-wmp-subtitle">Our Dairy Solutions</h3>
              <h2 className="dairy-products-wmp-title">
                Whole Milk Powder –<br />
                Open Country
              </h2>
              <div className="dairy-products-wmp-description-container">
                <p className="dairy-products-wmp-description">
                  Unitum was formerly the sole representative in Sri Lanka for the world's second-largest whole milk powder producer headquartered in New Zealand a nation globally recognized for excellence in dairy production. During this partnership, Unitum achieved up to 40% market share in Sri Lanka's WMP sector, particularly within the retail segment and confectionery manufacturing.
                </p>
              </div>
            </div>
            <div className="dairy-products-wmp-image">
              <img 
                src="/images/FoodIngrediants/milkimage1.jpg" 
                alt="Open Country Whole Milk Powder" 
                className="dairy-products-wmp-img"
              />
            </div>
          </div>
        </div>

        {/* Skim Milk Powder Section */}
        <div id="skim-milk-powder" className="dairy-products-smp-section">
          <div className="dairy-products-smp-content">
            <div className="dairy-products-smp-text">
              <h3 className="dairy-products-smp-subtitle">Our Dairy Solutions</h3>
              <h2 className="dairy-products-smp-title">
                Skim Milk Powder<br />
                (SMP)
              </h2>
              <div className="dairy-products-smp-description-container">
                <p className="dairy-products-smp-description">
                  Unitum sources skim milk powder from globally certified dairy producers across New Zealand, the USA, Latin America, and India. Our SMP is widely utilized in:
                </p>
                <ul className="dairy-products-smp-list">
                  <li>Low-fat dairy formulations</li>
                  <li>Tea and coffee whiteners</li>
                  <li>Dry blends and nutrition products</li>
                  <li>Ice cream, yogurt, and dessert manufacturing</li>
                </ul>
                <p className="dairy-products-smp-description">
                  With low-fat content and high protein stability, Unitum's SMP offers cost-effective performance and nutritional value across diverse applications.
                </p>
              </div>
            </div>
            <div className="dairy-products-smp-image">
              <img 
                src="/images/FoodIngrediants/milkimage2.jpg" 
                alt="Ornua Skim Milk Powder" 
                className="dairy-products-smp-img"
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

export default DairyProductsPage;