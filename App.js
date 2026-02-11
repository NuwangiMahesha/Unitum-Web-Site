import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BlogListPage from './pages/BlogListPage';
import ChemicalBlogPage from './pages/ChemicalBlogPage';
import UnitumEssence from './pages/UnitumEssence';
import CalciumCarbonatePage from './pages/CalciumCarbonatePage';
import PinkRockSaltPage from './pages/PinkRockSaltPage';
import DairyProductsPage from './pages/DairyProductsPage';
import ContactPage from './pages/ContactPage';
import CommunityPage from './pages/CommunityPage';
import AboutUsPage from './pages/AboutUsPage';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/chemical-blog" element={<ChemicalBlogPage />} />
          <Route path="/unitum-essence" element={<UnitumEssence />} />
          <Route path="/calcium-carbonate" element={<CalciumCarbonatePage />} />
          <Route path="/pink-rock-salt" element={<PinkRockSaltPage />} />
          <Route path="/dairy-products" element={<DairyProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;