import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './ServicesPage.css';

const BlogListPage = () => {
  const navigate = useNavigate();

  const handleBlogCardClick = () => {
    navigate('/chemical-blog');
  };

  const blogs = [
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
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className={`service-page-card ${blog.featured ? 'featured' : ''}`}
              onClick={handleBlogCardClick}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleBlogCardClick();
                }
              }}
              aria-label={`Read blog: ${blog.title}`}
            >
              <div className="service-page-image">
                <img src={process.env.PUBLIC_URL + blog.image} alt={blog.title} />
              </div>
              <div className="service-page-content">
                <h3 className="service-page-card-title">{blog.title}</h3>
                <p className="service-page-description">{blog.description}</p>
                <div className="service-page-meta">
                  <span className="service-page-date">{blog.date}</span>
                  <span className="service-page-read-time">{blog.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;