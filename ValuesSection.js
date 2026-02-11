import React from 'react';
import './ValuesSection.css';

const ValuesSection = () => {
  const values = [
    {
      title: "Quality",
      subtitle: "Excellence in Every Ingredient",
      description: "We deliver premium products that meet the highest international standards, ensuring superior performance and consistency."
    },
    {
      title: "Credibility",
      subtitle: "Trusted by Clients Worldwide",
      description: "Built on transparency, integrity, and long-term relationships with our partners and customers."
    },
    {
      title: "Reliability",
      subtitle: "Consistent and Dependable",
      description: "Ensuring timely supply and seamless service to meet the demands of global markets."
    },
    {
      title: "Innovation",
      subtitle: "Forward-Thinking Solutions",
      description: "Continuously improving processes and products to address evolving industry needs."
    },
    {
      title: "Sustainability",
      subtitle: "Responsibly Sourced, Eco-Friendly",
      description: "Promoting environmentally conscious practices and responsible sourcing across our operations."
    },
    {
      title: "Global Reach",
      subtitle: "Connecting Markets Across the Globe",
      description: "Leveraging a strong international network to deliver solutions reliably and efficiently."
    }
  ];

  return (
    <section id="community" className="values-section">
      <div className="values-container">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <h3 className="value-title">{value.title}</h3>
            <h4 className="value-subtitle">{value.subtitle}</h4>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
