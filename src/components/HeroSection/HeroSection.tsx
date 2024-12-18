// src/components/HeroSection/HeroSection.tsx
import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero section" id="hero">
      <div className="hero_content">
        <h1 className="text-title">Майстер Гумору</h1>
        {/* <button className="hero_button" onClick={() => alert('Дякуємо за замовлення!')}>
          Купити зараз
        </button> */}
      </div>
      {/* <div className="hero_image-container">
        <img 
          src="/images/hero-image.jpg" 
          alt="Гірлянда на фоні святкового інтер'єру" 
          className="hero_image" 
        />
      </div> */}
    </section>
  );
};

export default HeroSection;
