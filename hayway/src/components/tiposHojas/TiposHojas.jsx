import React from 'react'
import Indica from '../svgs/Indica'
import "./TiposHojas.css"
import Sativa from '../svgs/Sativa'
import Automatica from '../svgs/Automatica'
import Hibrido from '../svgs/Hibrido'

const TiposHojas = () => {
  return (
    <div className='hojasCont'>
        <Indica />
        <Sativa />
        <Automatica />
        <Hibrido />
    </div>
  )
}

export default TiposHojas