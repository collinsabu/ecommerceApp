import React from 'react'

import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

//import from react-router-dom
import {Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Meta title='404 Page'/>
      <BreadCrumb title='404 Page'/>
      <div className="notfound d-flex justify-content-center align-items-center">
         <h1>This Page Doesn't Exist, <br/> Please resturn to <Link to='/'>Home Page</Link></h1>
      </div>
   </>
  )
}

export default NotFound