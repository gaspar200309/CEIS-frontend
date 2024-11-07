import React from 'react'
import './Courses.css'
import Card from '../../components/cards/Card'
import ImagesApp from '../../assets/ImagesApp'
const Courses = () => {
  return (
    <main>
        <h1>Cursos</h1>
        <nav className='nav-course'>
            <div>
                <p className='p-selected'>Matemáticas</p>
                <p>Programación</p>
                <p>Administrador</p>
                <p>Otros</p>
            </div>
            <input type="text" placeholder='Buscar'/>
        </nav>
        <section className='section-course-card'>
            <Card   className="card-course"
                    image={ImagesApp.Comunicados2}
                    title="Curso HTML"
                    subtitle="Alfredo Torrico"
                    description="Este curso cuenta para tener contenido variado y de calidad"
            />
            <Card   className="card-course"
                    image={ImagesApp.Comunicados2}
                    title="Curso HTML"
                    subtitle="Jhon Henry"
                    description="aspdiasjkdhajkshdkjashdkasjhd"
            />
            <Card   className="card-course"
                    image={ImagesApp.Comunicados2}
                    title="Curso HTML"
                    subtitle="Armando Gaspar"
                    description="aspdiasjkdhajkshdkjashdkasjhd"
            />
            
        </section>
        <div>
            {/* <Pagination count={10} color="primary" /> */}
        </div>
    </main>
  )
}

export default Courses