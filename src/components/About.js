import React from 'react';
import '../styles/About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>Nossa História</h2>
      <p>Desde 2020, transformando o mercado digital com soluções inovadoras e personalizadas</p>

      <div className="cards-container">
        <div className="card">
          <FontAwesomeIcon icon={faBullseye} size="2x" className="icon" />
          <h3>Missão</h3>
          <p>Oferecer soluções digitais que impulsionem o crescimento das microempresas.</p>
        </div>
        
      <div className="card">
          <FontAwesomeIcon icon={faEye} size="2x" className="icon" />
          <h3>Visão</h3>
          <p>Ser referência em inovação e atendimento personalizado no mercado digital.</p>
      
      </div>

      <div className="card">
          <FontAwesomeIcon icon={faHeart} size="2x" className="icon" />
          <h3>Valores</h3>
          <p>Compromisso, inovação, excelência, criatividade, transparência e foco no cliente.</p>
      </div>
      </div>
    </section>
  );
};

export default About;
