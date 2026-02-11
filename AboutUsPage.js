import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <main className="about-us-main">
        {/* Hero Section with Navigation */}
        <section className="about-us-hero-full">
          <Navigation />
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <h1 className="hero-main-title">
                Discover Unitum<br />
                Core Values
              </h1>
              <p className="hero-main-description">
                At Unitum, we excel in Chemicals, Dairy Products, and Rock Salt.
              </p>
              <p className="hero-main-subtitle">
                Our core values ensure quality, trust, and reliability. Discover what sets us apart.
              </p>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="about-us-images-section">
          <div className="single-image-container">
            <img
              src="/images/aboutUsPage/aboutusMain.jpg"
              alt="Unitum facility"
              className="main-image"
            />
          </div>
        </section>

        {/* Vision Section */}
        <section className="about-us-vision-section">
          <div className="vision-container">
            <h2 className="vision-title">When Vision Meets Achievement</h2>
            <div className="vision-content">
              <div className="vision-column">
                <p className="vision-text">
                  To be a globally trusted partner, setting benchmarks in quality, innovation, and reliability across industries. By combining advanced technologies with deep expertise, the goal is to empower businesses to achieve operational excellence and sustainable growth.
                </p>
                <p className="vision-text">
                  Beyond business success, the focus is on creating positive impact- promoting ethical practices, sustainability, and community development to deliver long-term value to all stakeholders.
                </p>
              </div>
              <div className="vision-column">
                <p className="vision-text">
                  The aim is to be recognized internationally as a source of solutions that exceed expectations, drive innovation, and inspire confidence across every market served.
                </p>
                <p className="vision-text">
                  Ultimately, the vision is to bridge global standards with local expertise, building a legacy of excellence, integrity, and meaningful contribution to clients, partners, and communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Discussion Image Section */}
        <section className="about-us-discussion-section">
          <div className="discussion-image-container">
            <img
              src="/images/aboutUsPage/AboutUsDiscussion.jpg"
              alt="Unitum team discussion"
              className="discussion-image"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-us-mission-section">
          <div className="mission-container">
            <h2 className="mission-label">Our Mission</h2>
            <h3 className="mission-title">
              "Unitum supplies premium resources globally with a commitment to quality, integrity, and innovation."
            </h3>
            <div className="mission-content">
              <div className="mission-column">
                <p className="mission-text">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque non cras justo eu duis nec. Sed tristique vitae quis pharetra in gravida. Tincidunt tincidunt et est nibh neque Lorem ipsum dolor sit amet consectetur. Pellentesque non cras justo eu duis nec.
                </p>
              </div>
              <div className="mission-column">
                <p className="mission-text">
                  Lorem ipsum dolor sit amet consectetur. Pellentesque non cras justo eu duis nec. Sed tristique vitae quis pharetra in gravida. Tincidunt tincidunt et est nibh neque
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="about-us-global-section">
          <div className="global-container">
            <div className="global-text-content">
              <h2 className="global-label">Our Global Presence</h2>
              <h3 className="global-title">Sourced from the world's purest origins</h3>
            </div>
            <div className="global-map-container">
              <img
                src="/images/aboutUsPage/sriLankaImage.png?v=2"
                alt="Global presence map"
                className="global-map-image"
              />
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="about-us-leadership-section">
          <div className="leadership-container">
            <div className="leadership-header">
              <h2 className="leadership-label">Leadership Team</h2>
              <h3 className="leadership-title">Meet our visionaries</h3>
            </div>
            
            <div className="leadership-members">
              <div className="leader-card">
                <div className="leader-image-wrapper">
                  <img
                    src="/images/TeamMembers/teamMemberImage1.jpg"
                    alt="Deshabandu. Roshan Mahanama"
                    className="leader-image"
                  />
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">Deshabandu. Roshan Mahanama</h4>
                  <p className="leader-role">Chairman</p>
                  <p className="leader-description">
                    Mr. Roshan Mahanama is a respected national figure and former Captain of the Sri Lanka National Cricket Team. A member of the 1996 World Cup–winning squad, he brings strong leadership, discipline, and integrity to Unitum Lanka. His global experience includes roles with the ICC, BBC, Sri Lanka Cricket, and the World Health Organization (WHO). He was awarded the national title "Deshabandu" in recognition of his service to the nation.
                  </p>
                </div>
              </div>

              <div className="leader-card">
                <div className="leader-image-wrapper">
                  <img
                    src="/images/TeamMembers/teamMemberImage2.jpg"
                    alt="Kalindu Liyanage"
                    className="leader-image"
                  />
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">Kalindu Liyanage</h4>
                  <p className="leader-role">Director / Chief Executive Officer</p>
                  <p className="leader-description">
                    Mr. Kalindu Liyanage leads Unitum Lanka's strategy and growth as Director and CEO. He has strong expertise in auditing, management accounting, ERP systems, project management, and sales operations. He holds an MSc in Business Psychology (UK) and is an ACMA (UK) and CGMA. He was named Best Business Leader Under 30 at the PIM National Management Awards.
                  </p>
                </div>
              </div>

              <div className="leader-card">
                <div className="leader-image-wrapper">
                  <img
                    src="/images/TeamMembers/teamMemberImage3.jpg"
                    alt="Kalana Liyanage"
                    className="leader-image"
                  />
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">Kalana Liyanage</h4>
                  <p className="leader-role">Director / Chief Operating Officer</p>
                  <p className="leader-description">
                    Mr. Kalana Liyanage oversees operations at Unitum Lanka, with a strong background in plantation and agro-industrial sectors. He holds a BSc in Business Administration (USA) and a Diploma in Human Resource Management. He leads supply chain, production, and quality assurance to ensure efficient operations.
                  </p>
                </div>
              </div>

              <div className="leader-card">
                <div className="leader-image-wrapper">
                  <img
                    src="/images/TeamMembers/teamMemberImage4.jpg"
                    alt="Kaneel Liyanage"
                    className="leader-image"
                  />
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">Kaneel Liyanage</h4>
                  <p className="leader-role">Director</p>
                  <p className="leader-description">
                    Mr. Kaneel Liyanage is an experienced marketing and business development professional with exposure across multiple industries. He plays a key role in expanding Unitum Lanka's international presence and currently represents major Chinese construction companies in Europe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
