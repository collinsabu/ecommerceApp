import React from 'react'

//import from components
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

//import from react router-dom
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'


const ForgotPassword = () => {


  return (
    <>
      <Meta title='Forgot Password'/>
      <BreadCrumb title='Forgot Password'/>

      <Container class1="login-wrapper home-wrapper-2 py-5">
         <div className="container-xxl">         <div className="row">
            <div className="col-12">
               <div className="auth-card">
                  <h3 className='text-center mt-2 mb-3'>Reset Password</h3>
                  <p className="text-center my-2"> Check your email for a link to reset password</p>
                  <form action="" className='d-flex flex-column gap-30'>
                    <CustomInput type="email" name="email" placeholder='email' />


                     <div>
                        <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                          <button className='button border-0' type='submit'>Submit</button>
                          <Link  to='/login'>Cancel</Link>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div></div>
      </Container>
    </>
  )
}

export default ForgotPassword