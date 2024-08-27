import React from 'react'

// import from 'react-dom
import { Outlet } from 'react-router-dom'

//import from component 
import Header from './Header';
import Footer from './Footer';        

const Layouts = () => {
  return (
    <div>
      <Header/>

        <Outlet/>

      <Footer/>
    </div>
  )
}

export default Layouts