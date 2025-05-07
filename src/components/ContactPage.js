import React from 'react';
import ContactForm from './ContactForm';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <section className="contact-page">
      <h2>Contato</h2>
      <div className="contact-info">
        <p>Email: contato@webtistacks.com</p>
        <p>Suporte: suporte@webtistacks.com</p>
        <p>Telefone: (11) 99999-9999</p>
        <p>CNPJ: 00.000.000/0001-00</p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
