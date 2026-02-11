import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import './CommunityPage.css';

const CommunityPage = () => {
  return (
    <div className="community-page">
      <Navigation />
      <main className="community-main">
        {/* Hero Section */}
        <section className="community-hero">
          <img
            src="/images/community/communityimage1.jpg"
            alt="Community volunteers"
            className="hero-background"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">
              Transforming lives through<br />
              technology education
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section className="community-about-section">
          <div className="about-content">
            <div className="about-text">
              <p className="about-label">About</p>
              <h2 className="about-title">Why we started?</h2>
              <p className="about-description">
                Supporting communities through education, health,
                and sustainability initiatives is key to fostering positive
                change. By promoting development, wellbeing, and
                responsible practices, these efforts aim to create a
                lasting impact and improve the quality of life for those
                they touch.
              </p>
            </div>
            <div className="about-image">
              <img
                src="/images/community/communityimage2.jpg"
                alt="Community Green Space Initiative"
                className="about-img"
              />
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </div>
  );
};

export default CommunityPage;
