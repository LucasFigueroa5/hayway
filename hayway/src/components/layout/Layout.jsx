import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import BtnWhatsapp from '../btns/btnWhatsapp';
import Footer from '../footer/Footer';
import "./Layout.css"

const Layout = () => {
  return (
    <div className='layoutCont'>
      <Navbar />
      <Outlet />
      <Footer />
      <BtnWhatsapp />
    </div>
  );
}

export default Layout;