import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles3.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Footer from '../components/Footer';


export default function App() {
  return (
    <>
    <div className='women d-flex justify-content-center'>
    <h2>Kids</h2>
    </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination]}
        className="mySwiper" style={{height:"100%",width:"600px",marginLeft:"350px"}}
        
      >
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/boy_62388b7f-947b-4d23-abbb-57b061de87e2_160x.png?v=1720895945'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Girls_160x.png?v=1720895997'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/boy_9afac739-bada-4ede-aea3-4bd1ea105397_160x.png?v=1720895970'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/38_160x.png?v=1720896017'/></SwiperSlide>
        
      </Swiper>
      
   
        <div className='specially d-flex justify-content-center mt-5'><h3>Specially Selected for You</h3></div>

      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>

          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/KD053645_2_360x.jpg?v=1720596900'/>
          <div className='fancy'>
          <p>Kids</p>
        </div>
        <div className='peach'>
          <h5><b>Boys Navy Casual Flip...</b></h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 3,204.00 </p>
          </div>
          <div className='rate2'>
          <p><del>3,600.00</del></p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/KD059145_2_360x.jpg?v=1720435091'/>
          <div className='fancy'>
          <p>Kids</p>
        </div>
        <div className='peach'>
          <h5><b>Boys Black Casual Flip...</b></h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 3,204.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 3,600.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/KD975301_2_1ab6fdd5-2372-4baa-b4e1-4d33901e190e_360x.jpg?v=1720596208'/>
          <div className='fancy'>
          <p>Kids</p>
        </div>
        <div className='peach'>
          <h5><b>Boys Pink Casual Flip...</b></h5> 
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 3,204.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 3,600.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/KD975601_2_57d017ec-ef67-4784-952b-beaf073b6452_360x.jpg?v=1720596211'/>
          <div className='fancy'>
          <p>Kids</p>
        </div>
        <div className='peach'>
          <h5><b>Boys Black Casual Flip...</b></h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 3,204.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 3,600.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/KD975415_2_cb6eb48f-8b5b-4f0f-b946-3750cfc73736_360x.jpg?v=1720597165'/>
          <div className='fancy'>
          <p>Kids</p>
        </div>
        <div className='peach'>
          <h5><b>Boys Pink Casual Flip Flo...</b></h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 5,000.00 </p>
          </div>
          
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/KD547815_2_360x.jpg?v=1720520146'/>
          <div className='fancy'>
          <p>Kids</p>
        </div>
        <div className='peach'>
          <h5><b>Boys Sky Blue Casual Flip...</b></h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 5,000.00 </p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/KD066715_2_360x.jpg?v=1720435130'/>
          <div className='fancy'>
          <p>Kids</p>
        </div>
        <div className='peach'>
          <h5><b>Blue Casual Flip Flo</b>...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,764.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 3,600.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/KD975315_2_591dbf92-b2e0-4959-8e99-bda903752022_360x.jpg?v=1720597162'/>
          <div className='fancy'>
          <p>Kids</p>
        </div>
        <div className='peach'>
          <h5><b>Boys Grey Casual Flip Flo...</b></h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 5,000.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 5,000.00</del></p>
          </div>
        </div>


        
          </SwiperSlide>
       
      </Swiper>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4 Bag-1'>
          <img src='https://stylo.pk/cdn/shop/products/KD144009_2_900x.jpg?v=1720594687' style={{height:"100%" ,width:"100%"}}/>
          <div className='maroon d-flex justify-content-center'>
            <p>Boys White Casual Jogger KD1440</p>
          </div>
          <div className='maroon-rate d-flex justify-content-center'>
            <div className='maroon-1'>
              <p><del>Rs.3,400</del></p>
            </div>
            <div className='maroon-2'>
              <p>Rs. 3,026</p>
            </div>
          </div>
          <div className='maroon-btn  d-flex justify-content-center'>
            <button>Boys Black Casual Flip Flop KD5333</button>
          </div>
          </div>
          <div className=' col-lg-4 Bag-2'>
            <img  src='https://stylo.pk/cdn/shop/products/KD533301_2_900x.jpg?v=1720521935' style={{height:"100%" ,width:"100%"}}/>
            <div className='maroon d-flex justify-content-center'>
            <p>Boys Navy Casual Flip Flop KD5333</p>
          </div>
          <div className='maroon-rate d-flex justify-content-center'>
            <div className='maroon-1'>
              <p><del>Rs.3,400</del></p>
            </div>
            <div className='maroon-2'>
              <p>Rs. 3,026</p>
            </div>
          </div>
          <div className='maroon-btn  d-flex justify-content-center'>
            <button>More Like This</button>
          </div>
          </div>
          <div className='col-lg-4 Bag-3'>
            <img src='https://stylo.pk/cdn/shop/products/KD533348_2_900x.jpg?v=1720593557' style={{height:"100%" ,width:"100%",backgroundSize:"cover"}}/>
            <div className='maroon d-flex justify-content-center'>
            <p>Maroon Formal Shoulder Bag P55220</p>
          </div>
          <div className='maroon-rate d-flex justify-content-center'>
            <div className='maroon-1'>
              <p><del>Rs.3,400</del></p>
            </div>
            <div className='maroon-2'>
              <p>Rs. 3,026</p>
            </div>
          </div>
          <div className='maroon-btn  d-flex justify-content-center'>
            <button>More Like This</button>
          </div>
          </div>
        </div>
      </div>
      <div className='end-footer'>
<Footer/>
</div>
      </>
  )}