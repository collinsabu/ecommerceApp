import React from 'react'
//images import 
import blog from "../images/blog-1.jpg"

import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

//import from react-router-dom
import {Link } from 'react-router-dom'


//import from react-icons
import { HiOutlineArrowLeft } from "react-icons/hi"
import Container from '../components/Container'

const Singleblog = () => {
  return (
    <>
        
      <Meta title='Single Blog'/>
      <BreadCrumb title='Single Blog'/>

      <Container class1="blog-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
         <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blog' className='d-flex align-items-center  gap-10'><HiOutlineArrowLeft className='fs-5'/>Back to Blogs</Link>
                <h3 className="title">
                  A Beautiful sunday morning
                </h3>
                <img src={blog} className="w-100 my-4 img-fluid " alt="blog" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum 
                  quis adipisci dolor reiciendis? Accusamus, libero!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum 
                  quis adipisci dolor reiciendis? Accusamus, libero! Lorem 
                  ipsum dolor sit amet consectetur, adipisicing elit. Rerum 
                  quis adipisci dolor reiciendis? Accusamus, libero!</p>
              </div>
            </div>
         </div>
      </div>
    </Container>

    </>
  )
}

export default Singleblog