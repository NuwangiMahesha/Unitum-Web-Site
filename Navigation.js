import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSectionClick = (sectionId) => {
    // Close mobile menu
    setIsMenuOpen(false);

    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/' && location.pathname !== '/home') {
      navigate('/home');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL with hash
      window.history.pushState(null, '', `/home#${sectionId}`);
    }
  };

  const handleHomeClick = () => {
    setIsMenuOpen(false);
    navigate('/home');
  };

  const handleCommunityClick = () => {
    setIsMenuOpen(false);
    navigate('/community');
  };

  const handleAboutUsClick = () => {
    setIsMenuOpen(false);
    navigate('/about-us');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navigation">
        <div className="nav-container">
          <Link to="/home">
            <Logo />
          </Link>

          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li className="nav-item">
              <button onClick={handleHomeClick} className="nav-link nav-link-button">Home</button>
            </li>
            <li
              className="nav-item nav-item-dropdown"
              ref={dropdownRef}
            >
              <button onClick={toggleDropdown} className="nav-link nav-link-button">
                Business Division
                <span className={`dropdown-arrow ${isDropdownOpen ? 'dropdown-arrow-open' : ''}`}>▼</span>
              </button>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <Link to="/unitum-essence" onClick={() => setIsDropdownOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                      Unitum - HQ
                    </Link>
                  </div>

                  <div className="dropdown-columns">
                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">
                        <Link to="/calcium-carbonate" onClick={() => setIsDropdownOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                          Unitum Chemicals
                        </Link>
                      </h4>
                      <ul className="dropdown-list">
                        <li><Link to="/calcium-carbonate#calcium-carbonate-powder" onClick={() => setIsDropdownOpen(false)}>UNICAL Calcium Carbonate Powder (CaCO3)</Link></li>
                        <li><Link to="/calcium-carbonate#coated-calcium-carbonate" onClick={() => setIsDropdownOpen(false)}>UNICAL Coated Calcium Carbonate Powder</Link></li>
                        <li><Link to="/calcium-carbonate#wall-coating-solutions" onClick={() => setIsDropdownOpen(false)}>UNICAL Wall Coating Solutions</Link></li>
                        <li><Link to="/calcium-carbonate#manufacturing-solutions" onClick={() => setIsDropdownOpen(false)}>UNICAL Manufacturing Solutions</Link></li>
                      </ul>
                    </div>

                    <div className="dropdown-column">
                      <h4 className="dropdown-column-title">
                        <Link to="/dairy-products" onClick={() => setIsDropdownOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                          Unitum Food Solutions
                        </Link>
                      </h4>
                      <ul className="dropdown-list">
                        <li><Link to="/dairy-products#whole-milk-powder" onClick={() => setIsDropdownOpen(false)}>Whole Milk Powder – Open Country</Link></li>
                        <li><Link to="/dairy-products#skim-milk-powder" onClick={() => setIsDropdownOpen(false)}>Skim Milk Powder (SMP)</Link></li>
                        <li><Link to="/dairy-products#butter-cream-cheese" onClick={() => setIsDropdownOpen(false)}>Butter Cream and Cheese</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="dropdown-section">
                    <h4 className="dropdown-section-title">
                      <Link to="/pink-rock-salt" onClick={() => setIsDropdownOpen(false)} style={{ color: 'inherit', textDecoration: 'none' }}>
                        Unitum Salts
                      </Link>
                    </h4>
                    <ul className="dropdown-list">
                      <li><Link to="/pink-rock-salt#salt-lumps" onClick={() => setIsDropdownOpen(false)}>Salt Lumps</Link></li>
                      <li><Link to="/pink-rock-salt#fine-powder" onClick={() => setIsDropdownOpen(false)}>Fine Powder</Link></li>
                      <li><Link to="/pink-rock-salt#free-flow-salt" onClick={() => setIsDropdownOpen(false)}>Free-Flow Salt</Link></li>
                      <li><Link to="/pink-rock-salt#granules" onClick={() => setIsDropdownOpen(false)}>Granules</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item">
              <button onClick={handleCommunityClick} className="nav-link nav-link-button">Community</button>
            </li>
            <li className="nav-item">
              <button onClick={handleAboutUsClick} className="nav-link nav-link-button">About Us</button>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav-link-button">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;