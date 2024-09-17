import React from 'react'
import './Home.css'
import NavBar from '../../components/navbar/NavBar'
import imgPrimary from '../../assets/img-primary.jpg'
import imgSecondary from '../../assets/img-secondary.jpg'
import imgTerniary from '../../assets/img-terniary.jpg'
import Card from '../../components/cards/Card'
import imgComunicado from '../../assets/image-card-comunications.jpg'
import imgCourses from '../../assets/image-card-courses.jpg'
import imgMaterial from '../../assets/image-card-material.jpg'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <section>
        <NavBar/>
        <main >
            <div className='main-container'>
                <div className='content'>
                    <p className='tittle'>Centro de estudiantes de ingenieria de sistemas</p>
                    <p className='paragraph'>
                        we made it so breautiful and simple. It combines landings, pages, blogs and shop screens. It is defenitly the tool you need in your collection!
                    </p>
                </div>
                <div className='content2'>
                    
                    <div className='image-vision'>
                        <div className="principal-img">
                            <img src={imgPrimary} alt="" />
                        </div>

                        <div className="secundary-img">
                            <img src={imgSecondary} alt="" />
                        </div>

                        <div className="terniary-img">
                            <img src={imgTerniary} alt="" />
                        </div>
                    </div>
                
                </div>
            </div>
        </main>

        <main className='main-redirect-container'>
            <p className='tittle'>Title</p>
            <div className='card-container'>
                <Card className="custom-card" image={imgComunicado} title="Comunicados" description="¡Atención! Consulta los últimos comunicados del Centro de Estudiantes de Ingeniería de Sistemas para estar al día con eventos y noticias importantes."  />
                <Card className="custom-card" image={imgCourses} title="Cursos" description="¡Atención! Consulta los últimos comunicados del Centro de Estudiantes de Ingeniería de Sistemas para estar al día con eventos y noticias importantes."  />
                <Card className="custom-card" image={imgMaterial} title="Recursos" description="¡Atención! Consulta los últimos comunicados del Centro de Estudiantes de Ingeniería de Sistemas para estar al día con eventos y noticias importantes."  />
            </div>
        </main>

        <main className='main-our-career-container'>
            <div className='left-side'>
                <p className='tittle'>Nuestra Carrera</p>
                <p className='paragraph'>
                    we made it so breautiful and simple. It combines landings, pages, blogs and shop screens. It is defenitly the tool you need in your collection!
                </p>
                <button>Ver más</button>
            </div>
            <div className='rigth-side'>
                
            </div>
        </main>
        
        <main className='faq-main-section'>
            
        </main>


        <Footer/>

    </section>
);
}

export default Home