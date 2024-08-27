import React from 'react'

import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

//import from react-router-dom
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const RefundPolicy = () => {
  return (
    <>
        
        <Meta title='Refund Policy'/>
        <BreadCrumb title='Refund Policy'/>

   <Container class1="policy-wrapper py-5 home-wrapper">
      <div className="container-xxl">
         <div className="row">
            <div className="col-12">
               <div className="policy">
                  
               </div>
            </div>
         </div>
      </div>
   </Container>
    </>
  )
}

export default RefundPolicy