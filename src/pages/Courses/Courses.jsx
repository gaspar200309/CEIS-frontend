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
                    subtitle="Nivel Básico"
                    description="aspdiasjkdhajkshdkjashdkasjhd"
            />
            <Card   className="card-course"
                    image={ImagesApp.Comunicados2}
                    title="Curso HTML"
                    description="aspdiasjkdhajkshdkjashdkasjhd"
            />
            <Card   className="card-course"
                    image={ImagesApp.Comunicados2}
                    title="Curso HTML"
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