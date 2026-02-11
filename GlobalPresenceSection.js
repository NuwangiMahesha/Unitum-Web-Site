import React from 'react';
import './GlobalPresenceSection.css';

const GlobalPresenceSection = () => {
  return (
    <section className="global-presence-section">
      <div className="global-presence-container">
        <div className="global-presence-content">
          <div className="global-presence-label">Our Global Presence</div>
          <h2 className="global-presence-title">
            Sourced from the world's purest origins
          </h2>
        </div>
        
        <div className="global-presence-map">
          <img src={process.env.PUBLIC_URL + "/images/GlobalPresence/sriLankaImage.png?v=2"} alt="Global Presence Map" />
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
