import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section fade-in">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Transformando ideias em soluções digitais</h1>
          <p>Especialistas em criar experiências digitais inovadoras para microempresas</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Fale Conosco</a>
            <a href="#about" className="btn btn-secondary">Saiba Mais</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
