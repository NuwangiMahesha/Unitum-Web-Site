import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-left">
              <Logo />
              <div className="footer-contact">
                <p className="footer-email">
                  <a href="mailto:inquiries@unitum.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    inquiries@unitum.com
                  </a>
                </p>
                <p className="footer-phone">
                  <a href="tel:+94773795797" style={{ color: 'inherit', textDecoration: 'none' }}>
                    +94 773795797
                  </a>
                </p>
                <p className="footer-company">Unitum (Pvt) Ltd.</p>
                <p className="footer-address">
                  No 315, 5th Floor, Aitken Spence Tower 1,<br />
                  Vauxhall Street, Colombo 02,<br />
                  Sri Lanka.
                </p>
              </div>
            </div>

            <div className="footer-center">
              {/* Address removed as requested */}
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-heading">Our Offerings</h4>
                <ul className="footer-list">
                  <li><Link to="/unitum-essence" className="footer-link-button">Unitum</Link></li>
                  <li><Link to="/calcium-carbonate" className="footer-link-button">Unitum Chemicals</Link></li>
                  <li><Link to="/pink-rock-salt" className="footer-link-button">Unitum Salt</Link></li>
                  <li><Link to="/dairy-products" className="footer-link-button">Unitum Food Solutions</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Company</h4>
                <ul className="footer-list">
                  <li><Link to="/about-us" className="footer-link-button">About us</Link></li>
                  <li><Link to="/contact" className="footer-link-button">Contact</Link></li>
                  <li><Link to="/community" className="footer-link-button">Community</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">© 2025 Unitum. All rights reserved.</p>
            <button onClick={scrollToTop} className="footer-back-to-top">Back to top</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
