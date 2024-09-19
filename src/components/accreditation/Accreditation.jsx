import React from 'react';
import ImagesApp from '../../assets/ImagesApp';
import './Accreditation.css';

export default function Accreditation() {
    return (
        <div className="AccreditationContainer">
            <h1>Acreditaciones de la carrera</h1>
            <div className="AccreditationImages">
                <img src={ImagesApp.AcreditacionCINDA} alt="Acreditación CINDA" />
                <img src={ImagesApp.AcreditacionSUB} alt="Acreditación SUB" />
            </div>
        </div>
    );
}
