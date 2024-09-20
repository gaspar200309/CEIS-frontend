import React from 'react'
import './SubjectSelector.css'
const SubjectSelector = ({ materias }) => {
  return (
    <ul className="subject-list">
      {materias.map((materia, index) => (
        <li key={index} className="subject-item">
          <span className="icon"></span> {materia}
        </li>
      ))}
    </ul>
  );
}

export default SubjectSelector