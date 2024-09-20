import React, { useState } from 'react';
import './Resourses.css';
import SubjectSelector from '../../components/subjectSelector/SubjectSelector';
import Card from '../../components/cards/Card';
import ImagesApp from '../../assets/ImagesApp';

const Resourses = () => {
  const [selectedSemestre, setSelectedSemestre] = useState(null);
  const [showSubjects, setShowSubjects] = useState(false); 

  const materiasPorSemestre = {
    1: ['Álgebra 1', 'Cálculo 1', 'Met. Investigación', 'Física General', 'Introd. a la programación', 'Inglés 1'],
    2: ['Álgebra 2', 'Calculo 2', 'Matemática Discreta', 'Elementos de Progra.', 'Arquitectura de Comp.'],
    3: ['Ecuacuiones Dif.', 'Estadéstica 1', 'Cálculo Numérico', 'Met. y Taller de Prog.', 'Base de Datos 1', 'Circuitos Electrónicos'],
    4: ['Estadística 2', 'Base de Datos 2', 'Taller de Sis. Ope.', 'Sis. Información 1', 'Contabilidad Básica', 'Inves. Operativa 1'],
    5: ['Ingles II', 'Sis. Info. 2', 'Aplicacion De Sist. Ope.', 'Inves. Operativa 2', 'Sistemas 1', 'Mercadotecnia'],
    6: ['Simulacion de Sist.', 'Ingenieria de Software', 'IA', 'Sistemas 2', 'Sistemas Económicos', 'Redes de Computadoras'],
    7: ['Taller de Ing. Software', 'Redes Avanzadas', 'Dinámica de Sist.', 'Sistemas 3', 'Gestion de Calidad de Software', 'Planif. y Eva. de Proyectos'],
    8: ['Ingles 3', 'Evaluacion y Auditoria', 'Taller de Sim. de Sistemas', 'Gestion Estrategica de Sistemas', 'Meto. y Planif. Dd Proyecto Dr Grado', 'Seguridad de Sistemas'],
    9: ['Proyecto Final', 'Parctica Empresarial'],
    Electivas: ['Generacion de Software', 'Programacion Movil', 'Big Data', 'Web Semánticas', 'Robótica', 'Telefonía IP']
  };

  const handleMouseEnter = (semestre) => {
    setSelectedSemestre(semestre);
    setShowSubjects(true);
  };

  const handleMouseLeave = () => {
    setShowSubjects(false);
  };

  return (
    <main className='.main'>
      <h1 className='mat-acad'>Material Académico</h1>
      <div className="semestre-menu">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'Electivas'].map((semestre) => (
          <div
            className="semestre-container"
            onMouseEnter={() => handleMouseEnter(semestre)}
            onMouseLeave={handleMouseLeave}
            key={semestre}
          >
            <button className="semestre-btn">
              {typeof semestre === 'string' ? semestre : `${semestre}er Semestre`}
            </button>
            {showSubjects && selectedSemestre === semestre && (
              <div className="subject-selector-container">
                <SubjectSelector materias={materiasPorSemestre[semestre]} />
              </div>
            )}
          </div>
        ))}
      </div>

      <section className='section'>
        <h3>
          Cálculo 1 
        </h3>
        <div className='underline'></div>
        <div className='card-container-res'>
          <Card className="custom-card-resourses" image={ImagesApp.Comunicados1} title="Exámenes pasados" description="¡Atención! Consulta los últimos comunicados del Centro de Estudiantes de Ingeniería de Sistemas para estar al día con eventos y noticias importantes."  />
          <Card className="custom-card-resourses" image={ImagesApp.Comunicados2} title="Libros" description="¡Atención! Consulta los últimos comunicados del Centro de Estudiantes de Ingeniería de Sistemas para estar al día con eventos y noticias importantes."  />
          <Card className="custom-card-resourses" image={ImagesApp.Comunicados2} title="Practicas" description="¡Atención! Consulta los últimos comunicados del Centro de Estudiantes de Ingeniería de Sistemas para estar al día con eventos y noticias importantes."  />
        </div>
      </section>

    </main>
  );
};

export default Resourses;
