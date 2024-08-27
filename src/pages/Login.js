import React from 'react'

//import from react router-dom
import { Link } from 'react-router-dom'
//import from components
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Login = () => {
  return (
    <>
      <Meta title='Login'/>
      <BreadCrumb title='Login'/>

      <Container class1="login-wrapper home-wrapper-2 py-5">
         <div className="container-xxl">
         <div className="row">
            <div className="col-12">
               <div className="auth-card">
                  <h3 className='text-center mb-3'>Login</h3>
                  <form action="" className='d-flex flex-column gap-30'>
                     <CustomInput type="email" name="email" placeholder='email' />
                     <CustomInput className='mt-1' type="password" name="password" placeholder='password' />
                     <div>
                        <Link to="/forgot-password">Forgot Password?</Link>
                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                          <button className='button border-0' type='submit'>Login</button>
                          <Link className='button signup' to='/signup'>Sign Up</Link>
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

export default Login