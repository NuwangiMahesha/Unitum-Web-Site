import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesSection.css';

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/blog');
  };

  const handleServiceCardClick = (serviceTitle) => {
    navigate('/chemical-blog');
  };

  const handleKeyPress = (event, serviceTitle) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleServiceCardClick(serviceTitle);
    }
  };

  const services = [
    {
      image: "/images/serviceSection/serviceimage1.png",
      title: "Global Sourcing Excellence",
      description: "Connecting you with premium suppliers worldwide for quality ingredients.",
      date: "AUGUST 8, 2023",
      readTime: "2 MIN READ"
    },
    {
      image: "/images/serviceSection/serviceimage2.png",
      title: "Quality Assurance & Testing",
      description: "Rigorous testing protocols ensuring every product meets international standards.",
      date: "AUGUST 8, 2023",
      readTime: "2 MIN READ"
    },
    {
      image: "/images/serviceSection/serviceimage3.png",
      title: "Supply Chain Management",
      description: "Seamless logistics and timely delivery to meet your operational needs.",
      date: "AUGUST 8, 2023",
      readTime: "2 MIN READ"
    },
    {
      image: "/images/serviceSection/serviceimage4.png",
      title: "Technical Support & Consultation",
      description: "Expert guidance to optimize your product formulations and processes.",
      date: "AUGUST 8, 2023",
      readTime: "2 MIN READ"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-heading">Latest from our team</h2>
          <button className="know-more-button" onClick={handleKnowMoreClick}>
            Know More <span className="know-more-arrow">▶</span>
          </button>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              onClick={() => handleServiceCardClick(service.title)}
              onKeyPress={(e) => handleKeyPress(e, service.title)}
              tabIndex={0}
              role="button"
              aria-label={`Navigate to ${service.title} article`}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-image">
                <img src={process.env.PUBLIC_URL + service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-meta">
                  <span className="service-date">{service.date}</span>
                  <span className="service-read-time">{service.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
