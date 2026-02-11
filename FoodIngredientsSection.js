import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodIngredientsSection.css';

const FoodIngredientsSection = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/dairy-products');
  };

  return (
    <section className="food-ingredients-section">
      <div className="food-ingredients-container">
        <div className="food-ingredients-content">
          <div className="food-ingredients-label">Unitum Food Ingredients</div>
          <h2 className="food-ingredients-title">
            Premium Food Ingredients for Global Excellence
          </h2>
          
          <p className="food-ingredients-description">
            Unitum provides high-quality food ingredients to manufacturers in the dairy, confectionery, and food & beverage sectors. By sourcing from the world's finest producers, we ensure every ingredient meets strict standards of quality, safety, and reliability.
          </p>
          
          <p className="food-ingredients-description">
            Built on our values of quality, service, and trust, Unitum delivers end-to-end solutions- from sourcing and logistics to technical support- helping clients bring exceptional products to market. With global reach and local expertise, we are a trusted partner for manufacturers seeking consistent, premium, and sustainable food ingredients.
          </p>
          
          <button className="know-more-button mt-30" onClick={handleKnowMoreClick}>
            Know More <span className="know-more-arrow">▶</span>
          </button>
        </div>
        
        <div className="food-ingredients-image">
          <img src={process.env.PUBLIC_URL + "/images/FoodIngrediants/foodIngrediants.jpg"} alt="Food Ingredients" />
        </div>
      </div>
    </section>
  );
};

export default FoodIngredientsSection;
