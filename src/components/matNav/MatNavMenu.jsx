import React from 'react';
import './MatNavMenu.css';
const MatNavMenu = () => {
  const semesterData = {
    1: ['Álgebra 1', 'Cálculo 1', 'Met. Investigación', 'Física General', 'Introd. a la programación', 'Inglés 1'],
    2: ['Álgebra 2', 'Calculo 2', 'Matemática Discreta', 'Elementos de Progra.', 'Arquitectura de Comp.'],
    3: ['Ecuacuiones Dif.', 'Estadéstica 1', 'Cálculo Numérico', 'Met. y Taller de Prog.', 'Base de Datos 1', 'Circuitos Electrónicos'],
    4: ['Estadística 2', 'Base de Datos 2', 'Taller de Sis. Ope.', 'Sis. Información 1', 'Contabilidad Básica', 'Inves. Operativa 1'],
    5: ['Ingles II', 'Sis. Info. 2', 'Aplicacion De Sist. Ope.', 'Inves. Operativa 2', 'Sistemas 1', 'Mercadotecnia'],
    6: ['Simulacion de Sist.', 'Ingenieria de Software', 'IA', 'Sistemas 2', 'Sistemas Económicos', 'Redes de Computadoras'],
    7: ['Taller de Ing. Software', 'Redes Avanzadas', 'Dinámica de Sist.', 'Sistemas 3', 'Gestion de Calidad de Software', 'Planif. y Eva. de Proyectos'],
    8: ['Ingles 3', 'Evaluacion y Auditoria', 'Taller de Sim. de Sistemas', 'Gestion Estrategica de Sistemas', 'Meto. y Planif. Dd Proyecto Dr Grado', 'Seguridad de Sistemas'],
    9: ['Proyecto Final', 'Parctica Empresarial'],
    'Electivas': ['Generacion de Software', 'Programacion Movil', 'Big Data', 'Web Semánticas', 'Robótica', 'Telefonía IP']
  };

  return (
    <nav className="nav-container">
      <ul className="nav-menu">
        {Object.entries(semesterData).map(([semester, subjects]) => (
          <li key={semester} className="nav-item">
            <div className="nav-link">
              {semester === 'Electivas' ? 'Electivas' : `Semestre ${semester}`} 
              <span className="arrow">▼</span>
            </div>
            <ul className="dropdown-menu">
              {subjects.map((subject, index) => (
                <li key={index} className="dropdown-item">
                  <a href={`#${subject.toLowerCase().replace(/ /g, '-')}`}>
                    {subject}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MatNavMenu;