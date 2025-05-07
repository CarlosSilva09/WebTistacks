import React from 'react';
import '../styles/Solutions.css';

const Solutions = () => {
  const services = [
    'Criação de Sites',
    'SEO',
    'Suporte Técnico',
    'Hospedagem',
  ];

  return (
    <section className="solutions-section">
      <h2>Soluções</h2>
      <div className="solutions-cards">
        {services.map((service) => (
          <div key={service} className="solution-card">
            <h3>{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
