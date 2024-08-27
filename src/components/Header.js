import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch, BsList } from 'react-icons/bs';
import { Offcanvas } from 'react-bootstrap';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <header className='header-top-strip py-3'>
  <div className='container-xxl'>
    <div className='row'>
      {/* Column for Free Shipping text */}
      <div className='col-12'>
        <p className='text-white mb-0 text-center text-md-start'>
          Free Shipping Over $100 & Free Returns
        </p>
      </div>
      {/* Column for Hotline text */}
      <div className='col-12'>
        <p className='text-white mb-0 text-center text-md-end'>
          Hotline: <a href='tel:8884354646489894' className='text-white'>(888) 4354 646 489894</a>
        </p>
      </div>
    </div>
  </div>
</header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            {/* Mobile Menu Icon */}
            <div className='col-2 d-md-none'>
              <BsList className='text-white fs-3' onClick={handleShow} />
            </div>
            {/* Logo - Hidden on Mobile */}
            <div className='col-2 d-none d-md-block'>
              <h3>
                <Link to='/' className='text-white'>DevCollins</Link>
              </h3>
            </div>
            {/* Search Bar */}
            <div className='col-10 col-md-5'>
              <div className='input-group'>
                <input type='text' className='form-control py-2 search-input' placeholder='Search Product Here...' aria-label='Search Product Here...' />
                <span className='input-group-text p-3'>
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            {/* Links - Hidden on Mobile */}
            <div className='col-5 d-none d-md-flex align-items-center justify-content-between'>
              <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                <img src='images/compare.svg' alt='compare' />
                <p className='mb-0'>Compare <br /> Products</p>
              </Link>
              <Link to='/wish-list' className='d-flex align-items-center gap-10 text-white'>
                <img src='images/wishlist.svg' alt='wishlist' />
                <p className='mb-0'>Favourite <br /> Wishlist</p>
              </Link>
              <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                <img src='images/user.svg' alt='user' />
                <p className='mb-0'>Login <br /> My Account</p>
              </Link>
              <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                <img src='images/cart.svg' alt='cart' />
                <div className='d-flex flex-column'>
                  <span className='badge bg-white text-dark'>0</span>
                  <p className='mb-0'>$ 500</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3 d-none d-md-block'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div className='dropdown'>
                  <button className='btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center' data-bs-toggle='dropdown'>
                    <img src='images/menu.svg' alt='' /><span className='me-5 d-inline-block'>Shop Categories</span>
                  </button>
                  <ul className='dropdown-menu'>
                    <li><Link className='dropdown-item text-white' to='#'>Action</Link></li>
                    <li><Link className='dropdown-item text-white' to='#'>Another action</Link></li>
                    <li><Link className='dropdown-item text-white' to='#'>Something else here</Link></li>
                  </ul>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/ourstore'>Our Store</NavLink>
                    <NavLink to='/blog'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} className='bg-dark text-white'>
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Mobile Search Bar */}
          <div className='input-group mb-3'>
            <input type='text' className='form-control py-2 search-input' placeholder='Search Product Here...' aria-label='Search Product Here...' />
            <span className='input-group-text p-3'>
              <BsSearch className='fs-6' />
            </span>
          </div>
          {/* Menu Links */}
          <NavLink to='/' className='text-white mb-3 d-block border-bottom pb-2 mobile-menu-link'>Home</NavLink>
          <NavLink to='/ourstore' className='text-white mb-3 d-block border-bottom pb-2 mobile-menu-link'>Our Store</NavLink>
          <NavLink to='/blog' className='text-white mb-3 d-block border-bottom pb-2 mobile-menu-link'>Blogs</NavLink>
          <NavLink to='/contact' className='text-white mb-3 d-block border-bottom pb-2 mobile-menu-link'>Contact</NavLink>
          {/* Header Links */}
          <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white mb-3 border-bottom pb-2 mobile-menu-link'>
            <img src='images/compare.svg' alt='compare' />
            <p className='mb-0'>Compare Products</p>
          </Link>
          <Link to='/wish-list' className='d-flex align-items-center gap-10 text-white mb-3 border-bottom pb-2 mobile-menu-link'>
            <img src='images/wishlist.svg' alt='wishlist' />
            <p className='mb-0'>Favourite Wishlist</p>
          </Link>
          <Link to='/login' className='d-flex align-items-center gap-10 text-white mb-3 border-bottom pb-2 mobile-menu-link'>
            <img src='images/user.svg' alt='user' />
            <p className='mb-0'>Login My Account</p>
          </Link>
          <Link to='/cart' className='d-flex align-items-center gap-10 text-white mb-3 border-bottom pb-2 mobile-menu-link'>
            <img src='images/cart.svg' alt='cart' />
            <div className='d-flex flex-column'>
              <span className='badge bg-white text-dark'>0</span>
              <p className='mb-0'>$ 500</p>
            </div>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
