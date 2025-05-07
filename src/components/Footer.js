import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-links">
          <div>
            <h4>Links Úteis</h4>
            <ul>
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#solutions">Soluções</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <p>Email: contato@webtistacks.com</p>
            <p>Telefone: (11) 99999-9999</p>
          </div>
          <div>
            <h4>Redes Sociais</h4>
            <ul className="social-links">
              <li><a href="https://facebook.com/webtistacks" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/webtistacks" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com/company/webtistacks" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <p className="footer-copy">&copy; 2024 WebTIstacks. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
