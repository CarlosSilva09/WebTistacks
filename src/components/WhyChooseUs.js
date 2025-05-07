import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    'Inovação Constante',
    'Suporte Próximo',
    'Acessibilidade',
    'Resultados Reais',
  ];

  return (
    <section className="why-section">
      <h2>Por que escolher a WebTIstacks</h2>
      <div className="why-cards">
        {reasons.map((reason) => (
          <div key={reason} className="why-card">
            <h3>{reason}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
