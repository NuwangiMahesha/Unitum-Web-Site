import React from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
  const industries = [
    { 
      name: 'Dairy & Milk Products', 
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop&crop=center'
    },
    { 
      name: 'Salt & Seasonings', 
      image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=200&h=200&fit=crop&crop=center'
    },
    { 
      name: 'Food Processing', 
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200&h=200&fit=crop&crop=center'
    },
    { 
      name: 'Bakery Products', 
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop&crop=center'
    },
    { 
      name: 'Beverages', 
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop&crop=center'
    },
    { 
      name: 'Paint & Coatings', 
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=200&h=200&fit=crop&crop=center'
    },
    { 
      name: 'Pharmaceuticals', 
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop&crop=center'
    },
    { 
      name: 'Personal Care', 
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop&crop=center'
    }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="section-header">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">Providing quality ingredients across diverse sectors</p>
        </div>
        <div className="partners-scroll">
          {industries.map((industry, index) => (
            <div key={`industry-${index}`} className="industry-card">
              <div className="industry-icon">
                <img src={industry.image} alt={industry.name} />
              </div>
              <h3 className="industry-name">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
