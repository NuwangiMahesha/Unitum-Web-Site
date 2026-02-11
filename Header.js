import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <HeroSection />
    </header>
  );
};

export default Header;