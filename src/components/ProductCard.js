import React, { useState } from 'react';

// Importing images
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg"; // Import the view image

// Import from react-simple-star-rating
import { Rating } from 'react-simple-star-rating';

// Import from react-router-dom
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <>
      <div className={`${location.pathname === "/ourstore" ? `gr-${grid}` : "col-6 col-md-4 col-lg-3"} mb-3`}>
        <div className="product-card position-relative bg-white p-2 rounded shadow-sm">
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'>
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <Link to=":id" className='text-decoration-none'>
            <div className="product-image">
              <img src={watch} alt="Product" className='img-fluid rounded' />
              <img src={watch2} alt="Product" className='img-fluid rounded mt-2' />
            </div>
          </Link>
          <div className="product-details mt-3">
            <h6 className="brand text-muted">Havels</h6>
            <h5 className="product-title text-dark">
              Kids Headphones Bulk 10-Pack Multi-Colored for Students
            </h5>
            <Rating
              onClick={handleRating}
              size={24}
              activeColor="#bf4800"
              initialValue={3}
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"} text-muted mt-2`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reiciendis.
            </p>
            <p className="price text-primary fw-bold mt-2">$100.00</p>
          </div>
          <div className="action-bar position-absolute d-flex flex-column gap-2 p-2">
            <button className='border-0 bg-transparent'>
              <img src={prodcompare} alt="compare" />
            </button>
            <button className='border-0 bg-transparent'>
              <img src={addcart} alt="add to cart" />
            </button>
            <button className='border-0 bg-transparent'>
              <img src={view} alt="view" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
