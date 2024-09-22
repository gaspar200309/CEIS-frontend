import React, { useEffect, useRef } from "react";
import ImagesApp from "../../assets/ImagesApp";
import useIcons from "../../hooks/useIcons";
import './ProfessionalProfile.css';

export default function ProfessionalProfile() {
    const { PiNumberCircleTwoDuotone, PiNumberCircleOneDuotone, PiNumberCircleThreeDuotone } = useIcons();

    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.1 }
        );

        elementsRef.current.forEach(element => {
            if (element) observer.observe(element);
        });

        return () => {
            elementsRef.current.forEach(element => {
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="container-professional">
            <h1 className="title" ref={el => elementsRef.current[0] = el}>Perfil profesional del Ingeniero de Sistemas</h1>
            <div className="content">
                <div className="text-section">
                    <PiNumberCircleOneDuotone className="icons-number" size={40} color="black" ref={el => elementsRef.current[1] = el} />
                    <div className="section" ref={el => elementsRef.current[2] = el}>
                        <h3 className="subtitle">Formación y Habilidades Técnicas:</h3>
                        <p className="text">
                        El ingeniero de sistemas cuenta con un título universitario en Ingeniería en Sistemas, Ingeniería en Computación, o campos relacionados. Además Está familiarizado con diversos sistemas operativos y metodologías de desarrollo de software, especialmente con enfoques ágiles como Scrum y Kanban.
                        </p>
                    </div>
                    <PiNumberCircleTwoDuotone className="icons-number" size={40} color="green" ref={el => elementsRef.current[3] = el} />
                    <div className="section" ref={el => elementsRef.current[4] = el}>
                        <h3 className="subtitle">Experiencia y Competencias Profesionales:</h3>
                        <p className="text">
                        El ingeniero de sistemas tiene una experiencia comprobada en la implementación y gestión de proyectos tecnológicos, desde el desarrollo de software hasta la administración de infraestructura tecnológica.
                        </p>
                        <div className="sub-section">
                            <img src={ImagesApp.Redes} alt="Redes" className="image-small" ref={el => elementsRef.current[5] = el} />
                            <div>
                                <h3 className="subtitle">Resolvedor de Problemas</h3>
                                <p className="text">
                                Se destaca por su habilidad para resolver problemas complejos, trabajar eficazmente en equipos multidisciplinarios y comunicarse de manera clara con clientes y colegas, tanto técnicos como no técnicos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <PiNumberCircleThreeDuotone className="icons-number" size={40} color="blue" ref={el => elementsRef.current[6] = el} />
                    <div className="section" ref={el => elementsRef.current[7] = el}>
                        <h3 className="subtitle">Conocimientos Adicionales:</h3>
                        <p className="text">
                        Además de sus habilidades técnicas y experiencia, el ingeniero de sistemas está al tanto de las últimas tendencias tecnológicas, como inteligencia artificial, machine learning y blockchain.
                        </p>
                    </div>
                </div>
                <img
                    src={ImagesApp.FondoOurCareer}
                    alt="Fondo Carrera"
                    className="image-side"
                    ref={el => elementsRef.current[8] = el}
                />
            </div>
        </div>
    );
}
