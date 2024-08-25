import React from 'react';
import Indica from '../svgs/Indica';
import Sativa from '../svgs/Sativa';
import Automatica from '../svgs/Automatica';
import Hibrido from '../svgs/Hibrido';
import "./TiposHojas.css";

const TiposHojas = () => {
  return (
    <div className='hojasCont'>
      <div className="hojaItem">
        <Indica />
      </div>
      <div className="hojaItem">
        <Sativa />
      </div>
      <div className="hojaItem">
        <Automatica />
      </div>
      <div className="hojaItem">
        <Hibrido />
      </div>
    </div>
  );
}

export default TiposHojas;