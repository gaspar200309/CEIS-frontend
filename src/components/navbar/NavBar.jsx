import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ImagesApp from '../../assets/ImagesApp';
import useIcons from '../../hooks/useIcons';
import './NavBar.css';
import { FaTimes, FaBars } from 'react-icons/fa'; // Añadimos estos íconos

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ImagesApp.Logo} alt="Logo" />
        <h1>CEIS</h1>
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} color="white" /> : <FaBars size={25} color="white" />}
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nuestra-carrera">Nuestra carrera</Link></li>
        <li><Link to="/comunicados">Comunicados</Link></li>
        <li><Link to="/recursos">Recursos</Link></li>
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/faq">F.A.Q.</Link></li>
      </ul>

      <div className="navbar-buttons">
        <button className="btn-login">Inicia Sesión</button>
        <button className="btn-register">Regístrate</button>
      </div>

      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
          <li><Link to="/nuestra-carrera" onClick={toggleMenu}>Nuestra carrera</Link></li>
          <li><Link to="/recursos" onClick={toggleMenu}>Recursos</Link></li>
          <li><Link to="/comunicados" onClick={toggleMenu}>Comunicados</Link></li>
          <li><Link to="/cursos" onClick={toggleMenu}>Cursos</Link></li>
          <li><Link to="/faq" onClick={toggleMenu}>F.A.Q.</Link></li>
        </ul>

        <div className="navbar-mobile-buttons">
          <button className="btn-login" onClick={toggleMenu}>Inicia Sesión</button>
          <button className="btn-register" onClick={toggleMenu}>Regístrate</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
