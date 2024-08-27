import React from 'react'

//import from components
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

//import from react router-dom
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const SignUp = () => {
  return (
    <>
      <Meta title='Sign Up'/>
      <BreadCrumb title='Sign Up'/>

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
        <div className="row">
            <div className="col-12">
               <div className="auth-card">
                  <h3 className='text-center mb-3'>Register An Account</h3>
                  <form action="" className='d-flex flex-column gap-30'>

                     <CustomInput name="name" type="type"  placeholder="Full Name"/>
                     <CustomInput type="email" name="email" placeholder='Email'/>
                     <CustomInput type="tel" name="name" placeholder='Phone Number'/>
                     <CustomInput className='mt-1' type="password" name="password" placeholder="password"/>

                     <div>
                        <Link to="/forgot-password">Forgot Password?</Link>
                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                          <button className='button border-0' type='submit'>Sign Up</button>

                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
        </div>
      </Container>
    </>
  )
}

export default SignUp