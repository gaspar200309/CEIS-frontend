import React from 'react'
import './LandResourses.css'
import ImagesApp from '../../assets/ImagesApp'

const LandResourses = () => {
  return (
    <>
      <h1 className='tit'>Material Académico</h1>
      <section className='landRes-main-cont'>
          <div className='l-div'>
            <h1>¿Qué es lo que encontrarás en esta sección?</h1>
            <p>Bienvenido a nuestra sección de Material Académico. Aquí puedes encontrar libros, prácticas y exámenes de semestres pasados, organizados por cada materia y nivel. La idea es que tengas acceso fácil a recursos que te ayuden en tus estudios y te preparen mejor para cada etapa de la carrera. ¡Explora y aprovecha todo lo que tenemos para ofrecer!</p>
          </div>
          <div className='r-div'></div>
      </section>
      <section className='seg-section'>
        <div>
          <h1>¿Tienes contenido nos quieras compartir?</h1>
          <p>Ayúdanos a enriquecer esta biblioteca para todos. Si tienes exámenes, prácticas o apuntes que puedan servir a otros estudiantes, envíanoslos para publicarlos aquí. ¡Haz clic y comparte!</p>
        </div>  
      </section>
      <section className='section newSec'>
          <div className='lf-send-cont'>
            <div>
              <input type="text" placeholder='Nombre'/>
              <input type="text" placeholder='Correo'/>
            </div>
            <div>
              <input className='input-mat' type="text" placeholder='Materia'/>
              <select name="" id="">
                <option value="">PDF</option>
                <option value="">Docx</option>
                <option value="">JPG</option>
                <option value="">PNG</option>
                <option value="">MP4</option>
              </select>
              <select name="" id="">
                <option value="">Examen Pasados</option>
                <option value="">Practicas</option>
                <option value="">Libros</option>
              </select>
            </div>
            <div>
              <textarea name="" id="" placeholder='Descripción'></textarea>
            </div>
            <div className='div-btn-send'>
              <button>Subir Archivo</button>
              <button>Enviar</button>
            </div>
          </div>
          <div className='rg-send-cont'>
            <img src={ImagesApp.books} alt="" />
          </div>
      </section>
    </>
  )
}

export default LandResourses