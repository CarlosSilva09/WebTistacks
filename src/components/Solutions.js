import React from 'react';
import '../styles/Solutions.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCode, faTools, faServer } from '@fortawesome/free-solid-svg-icons';


const Solutions = () => {
  const services = [
    { name: 'Criação de Sites', icon: faCode},
    { name: 'SEO', icon: faSearch },
    { name: 'Suporte Técnico', icon: faTools },
    { name: 'Hospedagem e Infra', icon: faServer },
  ];

  return (
    <section className="solutions-section">
      <h2>Nossas Soluções</h2>
      <h4>Serviços especializados para ajudar seu negócio digital a decolar! 🚀</h4>
        <div className="solutions-cards">
          {services.map((service) => (
          <div key={service.name} className="solution-card">
          <FontAwesomeIcon icon={service.icon} size="2x" className="icon" />
          <h3>{service.name}</h3>
        </div>
        ))}
        </div>
    </section>
  );
};

export default Solutions;
