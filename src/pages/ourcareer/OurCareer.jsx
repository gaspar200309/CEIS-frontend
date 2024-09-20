import React from 'react'
import './OurCareer.css'
import ImagesApp from '../../assets/ImagesApp'
import Paragraph from '../../components/paragraph/Paragraph'
import Accreditation from '../../components/accreditation/Accreditation'
import Information from '../../components/information/Information'


export default function OurCareer() {

    return (
        <>
            <div className='container-ourcareer'>
                <main >
                    <div className='main-container-ourcareer'>

                        <div className='content'>
                            <p className='tittle'>Ingenieria en sistemas</p>
                            <p className='paragraph'>
                                La ingeniería de sistemas nació en los años 50 con el desarrollo de las primeras computadoras. En las décadas siguientes, se formalizó como una disciplina para gestionar y optimizar sistemas informáticos complejos, integrando hardware, software y procesos humanos. Hoy en día, se enfoca en el diseño y mejora de sistemas complejos en un mundo digital.
                            </p>
                        </div>
                        <div className='content2'>

                            <div className='image-vision'>
                                <div className="principal-img">
                                    <img src={ImagesApp.Redes} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
                <div className="PerfilDelIngSistemas">
                    <img className="Image" src={ImagesApp.FondoOurCareer} alt="Placeholder" />

                    <div className="EasySteps">
                        Perfil profesional del Ingeniero de Sistemas
                    </div>

                    <div className="IconFill">
                        <div className="Icon"></div>
                    </div>

                    <div className="Steps">
                        <div className="Line"></div>

                        {/* Step 3 */}
                        <div className="Step" style={{ top: '577.96px' }}>
                            <div className="Text">
                                <div className="VarietyOfDesigns">Conocimientos Adicionales:</div>
                                <div className="YouCanDecideWheth">
                                    Además de sus habilidades técnicas y experiencia, el ingeniero de sistemas está al tanto de las últimas tendencias tecnológicas, como inteligencia artificial, machine learning y blockchain.
                                </div>
                            </div>
                            <div className="StepNumber">
                                <div className="Circle"></div>
                                <div>3</div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="Step" style={{ top: '193.33px' }}>
                            <div className="Text">
                                <div className="TwentyFiveAwesome">Experiencia y Competencias Profesionales:</div>
                                <div className="TheMostImportantP">
                                    El ingeniero de sistemas tiene una experiencia comprobada en la implementación y gestión de proyectos tecnológicos, desde el desarrollo de software hasta la administración de infraestructura tecnológica.
                                </div>
                            </div>
                            <div className="FellOurDesign">Resolvedor de Problemas</div>
                            <div className="StartupDesignFrame">
                                Se destaca por su habilidad para resolver problemas complejos, trabajar eficazmente en equipos multidisciplinarios y comunicarse de manera clara con clientes y colegas.
                            </div>
                            <img className="ThisisengineeringZbltu0zbjcuUnsplash1" src={ImagesApp.Redes} alt="Placeholder" />
                            <div className="StepNumber">
                                <div className="Circle"></div>
                                <div>2</div>
                            </div>
                        </div>

                        {/* Step 1 */}
                        <div className="Step" style={{ top: '0px' }}>
                            <div className="Text">
                                <div className="HowStartupFramewor">Formación y Habilidades Técnicas:</div>
                                <div className="TheGeneratorAppIs">
                                    El ingeniero de sistemas cuenta con un título universitario en Ingeniería en Sistemas, Ingeniería en Computación, o campos relacionados. Está familiarizado con sistemas operativos y metodologías ágiles como Scrum y Kanban.
                                </div>
                            </div>
                            <div className="StepNumber">
                                <div className="Circle"></div>
                                <div>1</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Accreditation />
                <Information />
                <div className='malla-curricular'>
                    <h1>Malla curricular</h1>
                    <img src={ImagesApp.Malla} alt="Malla Curricular" />
                </div>
            </div>
        </>
    )
}
