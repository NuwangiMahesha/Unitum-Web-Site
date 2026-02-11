import React from 'react';
import Navigation from '../components/Navigation';
import './ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      image: "/images/serviceSection/serviceimage1.png",
      title: "Global Sourcing Excellence",
      description: "Connecting you with premium suppliers worldwide for quality ingredients.",
      date: "AUGUST 8, 2023",
      readTime: "2 MIN READ",
      featured: true
    },
    {
      image: "/images/serviceSection/serviceimage2.png",
      title: "Quality Assurance & Testing",
      description: "Rigorous testing protocols ensuring every product meets international standards.",
      date: "AUGUST 8, 2023",
      readTime: "2 MIN READ",
      featured: true
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
    },
    {
      image: "/images/serviceSection/serviceimage1.png",
      title: "Regulatory Compliance",
      description: "Ensuring all products meet local and international regulatory standards.",
      date: "AUGUST 8, 2023",
      readTime: "2 MIN READ"
    },
    {
      image: "/images/serviceSection/serviceimage2.png",
      title: "Custom Solutions",
      description: "Tailored ingredient solutions designed for your specific requirements.",
      date: "AUGUST 8, 2023",
      readTime: "2 MIN READ"
    }
  ];

  return (
    <div className="services-page">
      <Navigation />
      
      <div className="services-page-container">
        <div className="services-page-header">
          <h1 className="services-page-title">Latest from our team</h1>
        </div>
        
        <div className="services-page-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-page-card ${service.featured ? 'featured' : ''}`}>
              <div className="service-page-image">
                <img src={process.env.PUBLIC_URL + service.image} alt={service.title} />
              </div>
              <div className="service-page-content">
                <h3 className="service-page-card-title">{service.title}</h3>
                <p className="service-page-description">{service.description}</p>
                <div className="service-page-meta">
                  <span className="service-page-date">{service.date}</span>
                  <span className="service-page-read-time">{service.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
