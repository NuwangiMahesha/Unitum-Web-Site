import React from 'react';
import './ResourcesSection.css';

const ResourcesSection = () => {
  return (
    <section className="resources-section">
      <div className="resources-container">
        <div className="resources-content">
          <div className="resources-label">Unitum</div>
          <h2 className="resources-title">
            Supplying premium resources worldwide.
          </h2>
          
          <div className="resources-features">
            <div className="resource-card">
              <div className="resource-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.77 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/>
                </svg>
              </div>
              <div className="resource-text">
                Global supplier of premium resources
              </div>
            </div>
            
            <div className="resources-row">
              <div className="resource-card">
                <div className="resource-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12L11 14L15 10L20.59 4.58L22 6L15 13L11 9L9 12ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"/>
                  </svg>
                </div>
                <div className="resource-text">
                  Committed to quality <br /> and integrity
                </div>
              </div>
              
              <div className="resource-card">
                <div className="resource-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.12 11.45 11.82 12.17 11.1L13.41 9.85C13.78 9.48 14 8.995 14 8.5C14 7.67 13.33 7 12.5 7S11 7.67 11 8.5H9C9 6.57 10.57 5 12.5 5S16 6.57 16 8.5C16 9.38 15.64 10.19 15.07 11.25Z"/>
                  </svg>
                </div>
                <div className="resource-text">
                  Driven by innovation and reliability
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resources-image">
          <img src={process.env.PUBLIC_URL + "/images/section3/section3image.png"} alt="Team collaboration" />
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
