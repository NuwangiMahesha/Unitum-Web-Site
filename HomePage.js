import React from 'react';
import './HomePage.css';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import PartnersSection from '../components/PartnersSection';
import ResourcesSection from '../components/ResourcesSection';
import ChemicalsSection from '../components/ChemicalsSection';
import SaltSection from '../components/SaltSection';
import FoodIngredientsSection from '../components/FoodIngredientsSection';
import GlobalPresenceSection from '../components/GlobalPresenceSection';
import ValuesSection from '../components/ValuesSection';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main id="main-content">
        <AboutSection />
        <PartnersSection />
        <ResourcesSection />
        <ChemicalsSection />
        <SaltSection />
        <FoodIngredientsSection />
        <GlobalPresenceSection />
        <ValuesSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
