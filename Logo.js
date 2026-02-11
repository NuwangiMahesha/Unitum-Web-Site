import React from 'react';
import './Logo.css';

const Logo = ({ variant = 'light' }) => {
  // Use the same logo for both variants since we have one logo.png
  // The logo should work on both light and dark backgrounds
  return (
    <div className="logo">
      <img 
        src="/images/logo/logo.png" 
        alt="Unitum Logo" 
        className={`logo-image logo-${variant}`} 
      />
    </div>
  );
};

export default Logo;