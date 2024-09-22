import React from 'react'
import './OurCareer.css'
import ImagesApp from '../../assets/ImagesApp'
import Paragraph from '../../components/paragraph/Paragraph'
import Accreditation from '../../components/accreditation/Accreditation'
import Information from '../../components/information/Information'
import ProfessionalProfile from '../../components/infProfileProfessional/ProfessionalProfile'


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
               <ProfessionalProfile /> 
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
