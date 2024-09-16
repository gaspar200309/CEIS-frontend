import React from 'react'
import './Home.css'
import NavBar from '../../components/navbar/NavBar'
import imgPrimary from '../../assets/img-primary.jpg'
import imgSecondary from '../../assets/img-secondary.jpg'
import imgTerniary from '../../assets/img-terniary.jpg'
function Home() {
  return (
    <section>
        <NavBar/>
        <div className='main-container'>
            <div className='content'>
                <p className='tittle'>Centro de estudiantes de ingenieria de sistemas</p>
                <p className='paragraph'>we made it so breautiful and simple. It combines landings, pages, blogs and shop screens. It is defenitly the tool you need in your collection!</p>
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
    </section>
);
}

export default Home