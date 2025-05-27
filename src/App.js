import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Blog from './components/Blog';
import ContactPage from './components/ContactPage';

import { FaWhatsapp } from 'react-icons/fa';

import './styles/App.css'; 
import './styles/global.css'; 

// Componente para detectar rota e resetar animações
function AnimationResetter({ resetAnimations }) {
  const location = useLocation();

  useEffect(() => {
    // Quando a rota muda, reseta as animações
    resetAnimations();
  }, [location, resetAnimations]);

  return null;
}

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [step, setStep] = useState('inicio');

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setStep('inicio');
  };

  const handleOptionClick = (option) => {
    setStep(option);
  };

  const handleBack = () => {
    setStep('inicio');
  };

  // Função para adicionar/remover classe 'visible' nas seções visíveis no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const triggerBottom = window.innerHeight * 0.9;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para resetar as animações (remove e adiciona a classe visible)
  const resetAnimations = useCallback(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.remove('visible');
      void section.offsetWidth; // força reflow para reiniciar animação
      section.classList.add('visible');
    });
  }, []);

  return (
    <Router>
      <AnimationResetter resetAnimations={resetAnimations} />
      <Header onResetAnimations={resetAnimations} />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section className="bg-white-100 section-slide">
                <Hero />
              </section>

              <section className="bg-white-200 section-slide">
                <About />
              </section>

              <section className="bg-white-100 section-slide">
                <Solutions />
              </section>

              <section className="bg-white-100 section-slide">
                <WhyChooseUs />
              </section>

              <section className="bg-white-100 section-slide">
                <Testimonials />
              </section>
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />

      {/* Assistente Virtual */}
      <div className="virtual-assistant-container">
        <div className="assistant-bubble" onClick={togglePopup}>
          <img src="/images/robozinhoo.gif" alt="Assistente Virtual" />
        </div>

        <div className={`assistant-popup ${isPopupVisible ? 'active' : ''}`}>
          <div className="assistant-header">
            <strong>Stackii</strong>
          </div>
          <div className="assistant-body">
            {step === 'inicio' && (
              <>
                <p>Como posso te ajudar?</p>
                <button className="assistant-btn" onClick={() => handleOptionClick('precos')}>Consultar nossos preços</button>
                <button className="assistant-btn" onClick={() => handleOptionClick('problemas')}>Problemas com o site ou sistema</button>
                <button className="assistant-btn" onClick={() => handleOptionClick('projetos')}>Consulte nossos projetos</button>
              </>
            )}

            {step === 'precos' && (
              <>
                <p>Você pode ver nossos planos em nossa página ou conversar com um consultor pelo WhatsApp.</p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp style={{ marginRight: '8px' }} />
                  Ir para o WhatsApp
                </a>
                <button className="back-btn" onClick={handleBack}>Voltar</button>
              </>
            )}

            {step === 'problemas' && (
              <>
                <p>Descreva seu problema e envie para nossa equipe ou fale direto no WhatsApp:</p>
                <a
                  href="https://wa.me/5515997283825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <FaWhatsapp style={{ marginRight: '8px' }} />
                  Falar no WhatsApp
                </a>
                <button className="back-btn" onClick={handleBack}>Voltar</button>
              </>
            )}

            {step === 'projetos' && (
              <>
                <p>Confira nossos projetos incríveis em nossa página de projetos.</p>
                <a href="/projects" className="assistant-btn" onClick={togglePopup}>Abrir Projetos</a>
                <button className="back-btn" onClick={handleBack}>Voltar</button>
              </>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;







