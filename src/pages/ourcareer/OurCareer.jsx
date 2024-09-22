import React from 'react';
import './OurCareer.css';
import ImagesApp from '../../assets/ImagesApp';
import ProfessionalProfile from '../../components/infProfileProfessional/ProfessionalProfile';
import Accreditation from '../../components/accreditation/Accreditation';
import Information from '../../components/information/Information';
import useOnScreenAnimation from '../../hooks/useOnScreenAnimation'; // Importamos el hook

export default function OurCareer() {
    const [refTitle, isVisibleTitle] = useOnScreenAnimation(0.1);
    const [refParagraph, isVisibleParagraph] = useOnScreenAnimation(0.1);
    const [refImage, isVisibleImage] = useOnScreenAnimation(0.1);

    return (
        <>
            <div className='container-ourcareer'>
                <main>
                    <div className='main-container-ourcareer'>
                        <div className='content'>
                            {/* Animamos el título */}
                            <p
                                ref={refTitle}
                                className={`tittle ${isVisibleTitle ? 'fade-in' : ''}`}
                            >
                                Ingenieria en sistemas
                            </p>
                            {/* Animamos el párrafo */}
                            <p
                                ref={refParagraph}
                                className={`paragraph ${isVisibleParagraph ? 'fade-in' : ''}`}
                            >
                                La ingeniería de sistemas nació en los años 50 con el desarrollo de las primeras computadoras. En las décadas siguientes, se formalizó como una disciplina para gestionar y optimizar sistemas informáticos complejos, integrando hardware, software y procesos humanos. Hoy en día, se enfoca en el diseño y mejora de sistemas complejos en un mundo digital.
                            </p>
                        </div>
                        <div className='content2'>
                            {/* Animamos la imagen */}
                            <div
                                ref={refImage}
                                className={`image-vision ${isVisibleImage ? 'fade-in' : ''}`}
                            >
                                <div className="principal-img">
                                    <img src={ImagesApp.Redes} alt="Visión" />
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
    );
}
