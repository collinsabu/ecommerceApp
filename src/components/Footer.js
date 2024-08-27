import React from 'react';

//images import
import newsletter from "../images/newsletter.png";

//import from react-router-dom
import { Link } from 'react-router-dom';

//import from react-icons
import { RiLinkedinBoxFill, RiYoutubeFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-md-5 d-none d-md-flex mb-3 mb-md-0">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className='mb-0 text-white'>Sign up for our newsletter</h2>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="input-group">
                <input type="text" className="form-control py-2" placeholder="Enter your Email..." aria-label="Enter your Email..." aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row text-center text-md-start">
            <div className="col-12 col-md-4 mb-4">
              <h4 className="text-white mb-3">Contact Us</h4>
              <address className="text-white fs-6">
                Hno: 277 Nearest <br />
                vill address, <br />
                PostCode: 131103
              </address>
              <a href="tel:08063509092" className='d-block text-white mb-2'>080 63509092</a>
              <a href="mailto:devcollins@shop.com" className='d-block text-white mb-2'>devcollins@shop.com</a>
              <div className="social_icons d-flex justify-content-center justify-content-md-start gap-15 mt-3">
                <a href="#"><RiLinkedinBoxFill className='text-white fs-4' /></a>
                <a href="#"><RiYoutubeFill className='text-white fs-4' /></a>
                <a href="#"><RiInstagramFill className='text-white fs-4' /></a>
                <a href="#"><RiTwitterFill className='text-white fs-4' /></a>
              </div>
            </div>
            
            <div className="col-12 col-md-2 mb-4">
              <h4 className="text-white mb-3">Information</h4>
              <div className='footer-links d-flex flex-column align-items-center align-items-md-start'>
                <Link to='/privacy-policy' className='text-white py-1 mb-1'>Privacy</Link>
                <Link to='/refund-policy' className='text-white py-1 mb-1'>Refund Policy</Link>
                <Link to='/shipping-policy' className='text-white py-1 mb-1'>Shipping Policy</Link>
                <Link to='/terms-condition' className='text-white py-1 mb-1'>Terms & Conditions</Link>
                <Link to='/blog' className='text-white py-1 mb-1'>Blog</Link>
              </div>
            </div>

            <div className="col-12 col-md-2 mb-4">
              <h4 className="text-white mb-3">Account</h4>
              <div className='footer-links d-flex flex-column align-items-center align-items-md-start'>
                <Link to='' className='text-white py-1 mb-1'>About Us</Link>
                <Link to='' className='text-white py-1 mb-1'>FAQ</Link>
                <Link to='' className='text-white py-1 mb-1'>Contact</Link>
                <Link to='' className='text-white py-1 mb-1'>Watch</Link>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <h4 className="text-white mb-3">Quick Links</h4>
              <div className='footer-links d-flex flex-column align-items-center align-items-md-start'>
                <Link to='#' className='text-white py-1 mb-1'>Laptops</Link>
                <Link to='#' className='text-white py-1 mb-1'>Headphones</Link>
                <Link to='#' className='text-white py-1 mb-1'>Tablets</Link>
                <Link to='#' className='text-white py-1 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Collins Abu
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
