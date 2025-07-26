import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
  <div className='Layout'>
    <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
    <Footer/>
  </div>
  )
}

export default Layout