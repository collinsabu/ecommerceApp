import React from 'react'

//Import from react-router-dom
import { Link } from 'react-router-dom';


//import from react-icons
import { BiArrowBack } from 'react-icons/bi';
import watch from "../images/watch.jpg"

//import from component
import Container from '../components/Container';

const CheckOut = () => {
  return (
    <>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
         <div className="row">
            <div className="col-7">
               <div className="checkout-left-data">
                  <h3 className="website-name"></h3>
                  <nav style={{"--bs-breadcrumb-divider": ">"}} aria-label="breadcrumb">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <Link to="/cart" className='text-dark total-price'>Cart</Link>
                        </li>&nbsp; /&nbsp;
                        <li className="breadcrumb-item total-price active">
                           Information
                        </li> &nbsp; /
                        <li className="breadcrumb-item total-price active" aria-current="page">Shipping</li>&nbsp; /
                        <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                     </ol>
                  </nav>
                  <h4 className="title total">Contact Information</h4>
                  <p className="user-details">collinsabu@baba.com</p>
                  <h4 className='mb-3'>Shipping Address</h4>
                  <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                     <div className='w-100'>
                        <select name="" className='form-control form-select ' id="">
                           <option value="" selected disabled> Select Country </option>
                        </select>
                     </div>
                     <div className='flex-grow-1'>
                        <input type="text" className="form-control" placeholder='First Name'/>
                     </div>
                     <div className='flex-grow-1'>
                        <input type="text" className="form-control" placeholder='Last Name'/>
                     </div>
                     <div className='w-100'>
                        <input type="text" className="form-control" placeholder='Address'/>
                     </div>
                     <div className='w-100'>
                        <input type="text" className="form-control" placeholder='Apartment, Suit, etc'/>
                     </div>
                     <div className='flex-grow-1'>
                     <div className='w-100'>
                        <input type="text" className="form-control" placeholder='City'/>
                     </div>
                     </div>
                     <div className='flex-grow-1'> 
                        <select name="" className='form-control form-select ' id="">
                           <option value="" selected disabled>Select State</option>
                        </select>
                     </div>
                     <div className='flex-grow-1'>
                        <input type="text" className="form-control" placeholder='Zip Code'/>
                     </div>
                     <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                          <Link to="/cart" className='text-dark'><BiArrowBack className='mb-1'/> Return to Cart</Link>
                          <Link to="/cart" className='button'>Continue to Shipping</Link>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            <div className="col-5">
               <div className='border-bottom py-4'>
                  <div className="d-flex mb-2
                   gap-10 align-items-center">
                  <div className='w-75 d-flex gap-10'>
                     <div className='w-25 position-relative'>
                        <span style={{top:"-10px", right: "2px" }} className="badge bg-secondary text-white rounded-circle  position-absolute">1</span>
                        <img className="img-fluid" src={watch} alt="product" />
                     </div>
                     <div>
                        <h5 className="total-price">grethg</h5>
                        <p className="total-price">s / #hddhhn</p>
                     </div>
                  </div>
                  <div className='flex-grow-1'>
                     <h5 className='total'>$ 100</h5>
                  </div>
                  </div>
               </div>
               <div className='border-bottom py-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                     <p className='total'>SubTotal</p>
                     <p className='total-price'>$ 10000</p>
                  </div>
                  <div className='d-flex justify-content-between align-items-center'>
                     <p className='mb-0 total'>Shipping</p>
                     <p className='mb-0 total-price'>10000</p>
                  </div>
               </div>
               <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                  <h4 className='total'>Total</h4>
                  <h5 className='total-price'>$1000</h5>
               </div>
            </div>
         </div>
      </div>
    </Container>
    </>
  )
}

export default CheckOut