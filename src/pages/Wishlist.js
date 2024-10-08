import React from 'react'

//import from components
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'


const Wishlist = () => {
  return (
    <>
      <Meta title='WishList'/>
      <BreadCrumb title='WishList'/>

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
         <div className="container-xxl">
            <div className="row">
               <div className="col-3">
                  <div className="wishlist-card w-100 position-relative">
                  <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                     <div className="wishlist-card-image">
                        <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                     </div>
                     <div className=" px-3 py-3">
                     <h5 className='title'>Mega Smart Watch: 29GB RAM</h5>
                     <h6 className="price">$ 100</h6>
                     </div>
                  </div>
               </div>

               <div className="col-3">
                  <div className="wishlist-card w-100 position-relative">
                  <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                     <div className="wishlist-card-image">
                        <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                     </div>
                     <div className=" px-3 py-3">
                     <h5 className='title'>Mega Smart Watch: 29GB RAM</h5>
                     <h6 className="price">$ 100</h6>
                     </div>
                  </div>
               </div>

               <div className="col-3">
                  <div className="wishlist-card w-100 position-relative">
                  <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                     <div className="wishlist-card-image">
                        <img src="images/watch.jpg" className='img-fluid w-100' alt="" />
                     </div>
                     <div className=" px-3 py-3">
                     <h5 className='title'>Mega Smart Watch: 29GB RAM</h5>
                     <h6 className="price">$ 100</h6>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Container>
    </>
  )
}

export default Wishlist