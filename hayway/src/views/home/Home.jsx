import React from 'react'
import Banner from '../../components/banner/Banner'
import "./Home.css"
import AceiteInfo from '../../components/info/aceiteInfo/AceiteInfo'
import Cbd from '../../components/svgs/Cbd'
import Indica from '../../components/svgs/Indica'
import Clima from '../../components/clima/Clima'

const Home = () => {
  return (
    <div className='homeContainer'>
        <Banner />
        <Clima />
    </div>
  )
}

export default Home