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
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
