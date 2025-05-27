import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Support from './components/Support.js';
import ContactPage from './components/ContactPage';

import './styles/App.css'; 
import './styles/global.css'; 

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-white-100 full-width">
                <Hero />
              </div>

              <div className="bg-white-200 full-width">
                <About />
              </div>

              <div className="bg-white-100 full-width">
                <Solutions />
              </div>

              <div className="bg-white-100 full-width">
                <WhyChooseUs />
              </div>

              <div className="bg-white-100 sfull-width">
                <Testimonials />
              </div>
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/support" element={<Support />} />
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
            <p>Oi! Precisa de ajuda com algo? 👋</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;