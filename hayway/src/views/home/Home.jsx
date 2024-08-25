import React from 'react'
import Banner from '../../components/banner/Banner'
import "./Home.css"
import AceiteInfo from '../../components/info/aceiteInfo/AceiteInfo'
import Cbd from '../../components/svgs/Cbd'
import Indica from '../../components/svgs/Indica'
import Clima from '../../components/clima/Clima'
import Video from '../../components/video/Video'

const Home = () => {
  return (
    <div className='homeContainer'>
      {/* <Video /> */}
        <Banner />
        <Clima />
    </div>
  )
}

export default Home