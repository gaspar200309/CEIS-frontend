import React from 'react'
import "./NavBar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/ic-islogo.png";


function NavBar() {
    return (
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
            <h1>CEIS</h1>
          </div>
          <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nuestra-carrera">Nuestra carrera</Link></li>
            <li><Link to="/recursos">Recursos</Link></li>
            <li><Link to="/comunicados">Comunicados</Link></li>
            <li><Link to="/cursos">Cursos</Link></li>
            <li><Link to="/faq">F.A.Q.</Link></li>
          </ul>
          <div className="navbar-buttons">
            <button className="btn-login">Inicia Sesión</button>
            <button className="btn-register">Regístrate</button>
          </div>
        </nav>
      );   
}

export default NavBar