import React from 'react'

//import from react-router-dom
import { Link } from 'react-router-dom'

//importing Marquee
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'

//import from component
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'


//inporting the Data
import { services } from '../utils/Data'

const Home = () => {
  return (
    <>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGE FRO PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>fROM $999.00 or <br/> $41.62/mo</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
            {/* === BANNER SMALL STARTS === */}
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              {/* small 1 */}
            <div className="small-banner position-relative">
              <img src="images/catbanner-01.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>SUPERCHARGE FRO PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>fROM $999.00 0R <br/>$41.62/mo</p>
              </div>
            </div>
             {/* small 2 */}
            <div className="small-banner position-relative">
              <img src="images/catbanner-02.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
              <h4>New Arrival</h4>
                <h5>Buy iPad Air</h5>
                <p>fROM $599.00 0R <br/> $41.62/month</p>
              </div>
            </div>
             {/* small 3 */}
            <div className="small-banner position-relative">
              <img src="images/catbanner-03.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>Buy  iPad Air</h5>
                <p>fROM $599.00 0R <br/>$41.62/mo</p>
              </div>
            </div>
             {/* small 4 */}
            <div className="small-banner position-relative">
              <img src="images/catbanner-04.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>Buy iPad Air</h5>
                <p>fROM $599.00 0R <br/>$41.62/mo</p>
              </div>
            </div>
            </div>
          </div>
    </div>
    </Container>

    <Container class1="home-wrapper-1 py-5">
    <div className="col-12">
<div className="services d-flex align-items-center justify-content-between">
  {
    services.map((i, j) => {
      return (
        <div className='d-flex align-items-center gap-15' key={j}>
          <img src={i.image} alt="services" />
          <div>
            <h6>{i.title}</h6>
            <p className='mb-0'>{i.tagline}</p>
          </div>
        </div>
      )
    })
  }
</div>
</div>
    </Container>


     <Container class1='home-wrapper-2 py-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className=' d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div> 

              <div className=' d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv"/>
              </div>   

              <div className=' d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera"/>
              </div>  

              <div className=' d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>  

              <div className=' d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div> 

              <div className=' d-flex align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv"/>
              </div>   

              <div className=' d-flex align-items-center'>
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera"/>
              </div>  

              <div className=' d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera"/>
              </div>          
            </div>
          </div>
        </div>
      </div>
     </Container>

      {/* ===== Featured Collection Section ====== */}\
      <Container class1="featured-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 className="section">
                    <h3 className='section-heading'> Featured Collection</h3>
                  </h3>
                </div>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>

              </div>
            </div>
       </Container>

       
      {/* ===== Featured Collection Section ====== */}\
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous1.png" alt="" className='img-fluid'/>
               <div className="famous-content position-absolute">
               <h5>Big Screen</h5>
                <h6>SMart Watch series7</h6>
                <p>fROM $399 05 $16.63/month for 24months</p>
               </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous2.png" alt="" className='img-fluid'/>
               <div className="famous-content position-absolute">
               <h5 className='text-dark'>Potable Speaker</h5>
                <h6 className='text-dark'>Bluetooth Speaker</h6>
                <p className='text-dark'>fROM $399 05 $16.63/month for 24months</p>
               </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous3.png" alt="" className='img-fluid'/>
               <div className="famous-content position-absolute">
               <h5 className='text-dark'>Smart Phone</h5>
                <h6 className='text-dark'>Iphone 14pro</h6>
                <p className='text-dark'>From $399 05 $16.63/month for 24months</p>
               </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous4.png" alt="" className='img-fluid'/>
               <div className="famous-content position-absolute">
               <h5 className='text-dark'>Potable Headphone</h5>
                <h6 className='text-dark'>Wireless Headphone</h6>
                <p className='text-dark'>fROM $399 05 $16.63/month for 24months</p>
               </div>
              </div>
            </div>

          </div>
        </div>
      </Container>


      {/* ===== Special Product Section Section ====== */}\
      <Container class1='special-wrapper py-5 home-wrapper-2'>
       <div className="container-xxl">
        <div className="row">
          <div className="col-12">
             <h3 className='section-heading'> Special Product </h3>   
          </div>
        </div>
        <div className="row ">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
       </div>
      </Container>

      {/* ===== Popular Product Section ====== */}\
      <Container class1="popular-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 className="section">
                    <h3 className='section-heading'> Our Popular Products </h3>
                  </h3>
                </div>
              </div>
              <div className="row">
              <ProductCard/>
               <ProductCard/>
               <ProductCard/>
               <ProductCard/>
              </div>
            </div>
      </Container>

      {/* ===== Marquee Section ====== */}\
      <Container class1="marquee-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      </Container>

      {/* ===== Blog Wrapper Section ====== */}\
      <Container class1="blog-wrapper py-5 home-wrapper-2">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12">
        <h3 className='section-heading'> Our Latest Update</h3>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <BlogCard />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <BlogCard />
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <BlogCard />
        </div> 

        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <BlogCard />
        </div>
      </div>
    </div>
  </div>
</Container>


    </>
  )
}

export default Home