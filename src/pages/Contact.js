import React from 'react'

//import from components
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'


//import from react-icons 
import { BiHomeCircle, BiPhoneCall, BiMailSend, BiInfoCircle } from "react-icons/bi"
import Container from '../components/Container'

const Contact = () => {
  return (
    <>
    <Meta title='Contact Us'/>
    <BreadCrumb title='Contact Us'/>

    <Container class1="contact-wrapper py-5 home-wrapper-2"> 
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39751.92958439576!2d-3.1888226895348444!3d51.48577225109026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e0332820e5fdf%3A0xb776441289cbc8fe!2sCardiff%20CF24!5e0!3m2!1sen!2suk!4v1690743478648!5m2!1sen!2suk" 
         style= {{width:"600", height:"450px", border:"0"}}
           className='w-100 '
         allowFullScreen="" loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade">
         </iframe>
        </div>
        <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between">
            <div>
              <h3 className="contact-title mb-4">Contact Us</h3>
              <form action="" className='d-flex flex-column gap-15'>
                <div>
                  <input type="text" className="form-control" placeholder='Name'/>
                </div>
                <div>
                  <input type="email" className="form-control" placeholder='Email'/>
                </div>
                <div>
                  <input type="tel" className="form-control" placeholder='Mobile Number'/>
                </div>
                <div>
                  <textarea className="w-100 form-control" cols={30} rows={4} placeholder='Comment'/>
                </div>
                <div>
                  <button className='button border-0'>Submit</button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="contact-title mb-4">Get in Touch with  Us</h3>
              <div>
                <ul className='ps-0'>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiHomeCircle className='fs-5'/>
                    <address className='mb-0'>Hno: 220 Cardiff Road, CF77TYB</address>
                    </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiPhoneCall className='fs-5'/>
                    <a href="tel:9383783884">+44758679578895</a>
                    </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiMailSend className='fs-5'/>
                    <a href="mailto: johndh@gmail.com">devcollins@gmail.com</a>
                  </li>
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                    <BiInfoCircle className='fs-5'/>
                    <p className='mb-0'>Monday-Friday</p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Contact