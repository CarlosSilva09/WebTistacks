import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Nossa História</h2>
      <p>Desde 2020, transformando o mercado digital com soluções inovadoras e personalizadas</p>
      <div className="cards-container">
        <div className="card">
          <h3>Missão</h3>
          <p>Oferecer soluções digitais que impulsionem o crescimento das microempresas.</p>
        </div>
        <div className="card">
          <h3>Visão</h3>
          <p>Ser referência em inovação e atendimento personalizado no mercado digital.</p>
        </div>
        <div className="card">
          <h3>Valores</h3>
          <p>Compromisso, inovação, transparência e foco no cliente.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
