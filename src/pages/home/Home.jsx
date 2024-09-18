import React from 'react'
import './Home.css'
import imgPrimary from '../../assets/LogoCeis.jpg'
import imgSecondary from '../../assets/img-secondary.jpg'
import imgTerniary from '../../assets/img-terniary.jpg'
import Card from '../../components/cards/Card'
import imgComunicado from '../../assets/image-card-comunications.jpg'
import imgCourses from '../../assets/image-card-courses.jpg'
import imgMaterial from '../../assets/image-card-material.jpg'
import Paragraph from '../../components/paragraph/Paragraph';


function Home() {
  return (
    <section>
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
            <h1>Preguntas Frecuentes</h1>
                <div className='div-cont-faq-questions'>
                    <div>
                        <Paragraph 
                            subtitle="How Startup Framework works?" 
                            pContent="The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS." 
                            className="faq-left" />

                        <Paragraph 
                            subtitle="What exactly am I buying?" 
                            pContent="You’re buying an access to the Startup Generator app to export ready-made templates with the rest source files included. It’s an online tool, not a software. For more details about generator’s workflow watch this tutorial." 
                            className="faq-left" />

                        <Paragraph 
                            subtitle="How Startup Framework works?" 
                            pContent="The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS." 
                            className="faq-left" />

                    </div>
                    <div>
                    <Paragraph 
                            subtitle="How Startup Framework works?" 
                            pContent="The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS." 
                            className="faq-rigth" />

                        <Paragraph 
                            subtitle="What exactly am I buying?" 
                            pContent="You’re buying an access to the Startup Generator app to export ready-made templates with the rest source files included. It’s an online tool, not a software. For more details about generator’s workflow watch this tutorial." 
                            className="faq-rigth" />

                        <Paragraph 
                            subtitle="How Startup Framework works?" 
                            pContent="The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS." 
                            className="faq-rigth" />
                        
                    </div>
            </div>            
        </main>


    </section>
);
}

export default Home