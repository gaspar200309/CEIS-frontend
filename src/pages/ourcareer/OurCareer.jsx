import React from 'react'
import './OurCareer.css'
import ImagesApp from '../../assets/ImagesApp'


export default function OurCareer() {
  return (
    <>
        <div className='container'>
            <div>
                <h1 className='title'>Ingenieria en sistemas</h1>
                <p>
                La ingeniería de sistemas nació en los años 50 con el desarrollo de las primeras computadoras. En las décadas siguientes, se formalizó como una disciplina para gestionar y optimizar sistemas informáticos complejos, integrando hardware, software y procesos humanos. Hoy en día, se enfoca en el diseño y mejora de sistemas complejos en un mundo digital.
                </p>
                <img src={ImagesApp.ImgPrimay} />
            </div>
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
        </div>
    </>
  )
}
