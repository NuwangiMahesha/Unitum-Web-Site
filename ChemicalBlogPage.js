import React from 'react';
import Navigation from '../components/Navigation';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import './ChemicalBlogPage.css';

const ChemicalBlogPage = () => {
  return (
    <div className="blog-page">
      <Navigation />
      
      <main className="blog-main">
        <div className="blog-container">
          <article className="blog-article">
            <header className="blog-header">
              <h1 className="blog-title">
                Navigating<br />
                the Chemical Industry<br />
                with Unitum
              </h1>
              
              <div className="blog-meta">
                <span className="blog-date">APRIL 6,2022</span>
                <span className="blog-separator">•</span>
                <span className="blog-category">CATEGORY</span>
                <span className="blog-separator">•</span>
                <span className="blog-read-time">5 MIN READ</span>
              </div>
            </header>

            <div className="blog-content">
              <div className="blog-image-container">
                <img 
                  src="/images/chemical/chemicalimage1.jpg" 
                  alt="Chemical Industry Manufacturing Facility"
                  className="blog-image"
                />
              </div>

              <section className="blog-section">
                <h2 className="section-title">Introduction</h2>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur. Ultrices tortor tristique mollis rutrum nulla non dolor nec mollis. 
                  Blandit aliquam rhoncus tristique ut lacus donec. Amet lectus ut donec non suspendisse sapien vel sed. 
                  A tellus tincidunt tellus tempor in. Tortor semper feugiat mi ultrices sit purus volutpat vel amet.
                </p>
              </section>

              <section className="blog-section">
                <h2 className="section-title">Chemicals</h2>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur. Ultrices tortor tristique mollis rutrum nulla non dolor nec mollis. 
                  Blandit aliquam rhoncus tristique ut lacus donec. Amet lectus ut donec non suspendisse sapien vel sed. 
                  A tellus tincidunt tellus tempor in. Tortor semper feugiat mi ultrices sit purus volutpat vel amet. Nulla 
                  duis elit cursus nibh sit ut adipiscing.
                </p>
              </section>

              <div className="blog-image-container">
                <img 
                  src="/images/section3/section3image.png" 
                  alt="Industrial Chemical Storage Tanks"
                  className="blog-image"
                />
              </div>

              <section className="blog-section">
                <h2 className="section-title">Dairy Products</h2>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur. Ultrices tortor tristique mollis rutrum nulla non dolor nec mollis. 
                  Blandit aliquam rhoncus tristique ut lacus donec. Amet lectus ut donec non suspendisse sapien vel sed. 
                  A tellus tincidunt tellus tempor in. Tortor semper feugiat mi ultrices sit purus volutpat vel amet. Nulla 
                  duis elit cursus nibh sit ut adipiscing. Tincidunt amet tortor nascetur fermentum nunc ipsum sapien ante a. 
                  Feugiat ut blandit eu orci enim. Lacus magna pharetra est volutpat porttitor.
                </p>
              </section>

              <div className="blog-image-grid">
                <img 
                  src="/images/FoodIngrediants/foodIngrediants.jpg" 
                  alt="Dairy Products"
                  className="blog-grid-image"
                />
                <img 
                  src="/images/FoodIngrediants/foodIngrediants.jpg" 
                  alt="Dairy Products"
                  className="blog-grid-image"
                />
              </div>

              <section className="blog-section">
                <h2 className="section-title">Rock Salt</h2>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur. Ultrices tortor tristique mollis rutrum nulla non dolor nec mollis. 
                  Blandit aliquam rhoncus tristique ut lacus donec. Amet lectus ut donec non suspendisse sapien vel sed. 
                  A tellus tincidunt tellus tempor in. Tortor semper feugiat mi ultrices sit purus volutpat vel amet. Nulla 
                  duis elit cursus nibh sit ut adipiscing. Tincidunt amet tortor nascetur fermentum nunc ipsum sapien ante a. 
                  Feugiat ut blandit eu orci enim. Lacus magna pharetra est volutpat porttitor.
                </p>
              </section>

              <div className="blog-image-grid">
                <img 
                  src="/images/saultSection/saultimage.png" 
                  alt="Rock Salt Mining"
                  className="blog-grid-image"
                />
                <img 
                  src="/images/saultSection/saultimage.png" 
                  alt="Rock Salt Processing"
                  className="blog-grid-image"
                />
              </div>

              <section className="blog-section">
                <h2 className="section-title">Conclusion</h2>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur. Ultrices tortor tristique mollis rutrum nulla non dolor nec mollis. 
                  Blandit aliquam rhoncus tristique ut lacus donec. Amet lectus ut donec non suspendisse sapien vel sed. 
                  A tellus tincidunt tellus tempor in. Tortor semper feugiat mi ultrices sit purus volutpat vel amet. Nulla 
                  duis elit cursus nibh sit ut adipiscing. Tincidunt amet tortor nascetur fermentum nunc ipsum sapien ante a. 
                  Feugiat ut blandit eu orci enim. Lacus magna pharetra est volutpat porttitor.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default ChemicalBlogPage;