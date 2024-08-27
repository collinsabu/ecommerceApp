import React from 'react'

import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

//import from react-router-dom
import { Link } from 'react-router-dom'
import Container from '../components/Container'

const TermsAndCondictions = () => {
  return (
   <>
        
   <Meta title='Terms And Conditions'/>
   <BreadCrumb title='Terms And Conditions'/>

   <Container className="policy-wrapper py-5 home-wrapper">
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

export default TermsAndCondictions