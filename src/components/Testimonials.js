import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: 'João Silva',
    comment: 'A WebTIstacks transformou nosso site e aumentou significativamente nosso alcance online.',
  },
  {
    name: 'Maria Santos',
    comment: 'Profissionais dedicados e atendimento excelente. Recomendo para qualquer microempresa.',
  },
  {
    name: 'Pedro Oliveira',
    comment: 'Soluções inovadoras e suporte rápido. Estamos muito satisfeitos com os resultados.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Depoimentos</h2>
      <div className="testimonials-container">
        {testimonials.map(({ name, comment }) => (
          <div key={name} className="testimonial-card">
            <p>"{comment}"</p>
            <h4>- {name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
