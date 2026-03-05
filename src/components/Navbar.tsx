import { useState } from 'react';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="cyber-container navbar-container">
        <div className="navbar-brand">
          <div className="navbar-logo" />
          <div className="navbar-title">
            RELICWARE
          </div>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#hero" className="navbar-link" onClick={() => setIsOpen(false)}>INICIO</a></li>
          <li><a href="#clientes" className="navbar-link" onClick={() => setIsOpen(false)}>ALIADOS</a></li>
          <li><a href="#servicios" className="navbar-link" onClick={() => setIsOpen(false)}>SERVICIOS</a></li>
          <li><a href="#beneficios" className="navbar-link" onClick={() => setIsOpen(false)}>VENTAJA TÁCTICA</a></li>
          <li><a href="#contacto" className="navbar-link highlight" onClick={() => setIsOpen(false)}>CONTACTO_SECURE</a></li>
        </ul>
      </div>
    </nav>
  );
};