import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Obrigado pelo contato.');
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
      </form>
    </section>
  );
};

export default ContactForm;
