import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot,
  faFacebook,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter as faTwitterBrand, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-links">
          <div>
            <h4>WebTIstacks</h4>
            <p>
            Transformando o futuro digital das<br />
            micro e pequenas empresas.
            </p>
          </div>
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
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" /> 
              Email: contato@webtistacks.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="footer-icon" /> 
              Telefone: (11) 99999-9999
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="footer-icon" /> 
              Av. Antônio Carlos Comitre, 1653
            </p>
          </div>
          <div>
            <h4>Redes Sociais</h4>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com/webtistacks" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} className="social-icon" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/webtistacks" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitterBrand} className="social-icon" /> Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/webtistacks" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-copy">&copy; 2025 WebTIstacks. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;