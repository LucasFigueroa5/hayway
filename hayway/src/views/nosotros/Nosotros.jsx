import React from 'react'
import QuienesSomos from '../../components/texts/QuienesSomos'
import "./Nosotros.css"
import Mision from '../../components/acordeon/Mision'
import Vision from '../../components/acordeon/Vision'
import Valores from '../../components/acordeon/Valores'

const Nosotros = () => {
  return (
    <div className='nosotrosContainer'>
        <QuienesSomos />
        <Mision />
        <Vision />
        <Valores />
    </div>
  )
}

export default Nosotros