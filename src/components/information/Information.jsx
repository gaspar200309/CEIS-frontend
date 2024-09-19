import React from 'react'
import { PiStudentBold } from "react-icons/pi";
import { FaLandmark } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import './Informatio.css'

export default function Information() {
  return (
    <div className='container-information'>
      <h1>Información</h1>
      <div className='content'>
        <InfoCard icon={<PiStudentBold className='icon' />} title="DURACIÓN DE LA CARRERA" description="I felt it was taking a liberty to sit down, with my cap in my hand, on the corner of the chair." />
        <InfoCard icon={<FaLandmark className='icon' />} title="ÁREAS DE ESTUDIO" description="I felt it was taking a liberty to sit down, with my cap in my hand, on the corner of the chair." />
        <InfoCard icon={<BsLightningFill className='icon' />} title="MODALIDADES DE GRADUACIÓN" description="I felt it was taking a liberty to sit down, with my cap in my hand, on the corner of the chair." />
      </div>
    </div>
  )
}

function InfoCard({ icon, title, description }) {
  return (
    <div className='cardI'>
      {icon}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
