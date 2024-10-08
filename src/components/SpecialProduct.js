import React from 'react';
// Import the Rating component from 'react-simple-star-rating'
import { Rating } from 'react-simple-star-rating';
// Import the Link component from 'react-router-dom'
import { Link } from 'react-router-dom';

const SpecialProduct = () => {
  return (
    <div className='col-6 mb-3'>
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" alt="watch" className='img-fluid' />
          </div>
          <div className='special-product-content'>
            <h5 className="brand">Havels</h5>
            <h6 className="title">Samsung Galaxy Note10+</h6>
            <Rating
              size={24}
              activeColor="#bf4800"
              initialValue={3}
            />
            <p className="price">
              <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className='mb-0'>
                <b>5</b> Days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className='badge rounded-circle bg-danger p-3'>1</span>:
                <span className='badge rounded-circle bg-danger p-3'>1</span>:
                <span className='badge rounded-circle bg-danger p-3'>1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div className="progress">
                <div 
                  className="progress-bar" 
                  style={{ width: "70%", backgroundColor: "green" }}>
                </div>
              </div>
            </div>
            <Link className='button'> Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
