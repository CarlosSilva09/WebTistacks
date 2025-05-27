// Componente do cabeçalho com navegação e menu hambúrguer para telas pequenas

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ onResetAnimations }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (onResetAnimations) {
      onResetAnimations();
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">WebTIstacks</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar bar1 ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar bar2 ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar bar3 ${menuOpen ? 'open' : ''}`}></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              to="/"
              end
              onClick={handleHomeClick}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
