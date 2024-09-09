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
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate=useNavigate();
  return (
    <>
    <div className='women d-flex justify-content-center'>
    <h2>Bags</h2>
    </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination]}
        className="mySwiper" style={{height:"100%",width:"600px"}}
        
      >
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Hand-bags_160x.png?v=1723014005'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Clutches_160x.png?v=1666270416'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/shoulder-bags_160x.png?v=1723014025'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/36_160x.png?v=1723014067'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/22_31d39d70-9f2f-4e60-9a5c-d5b4f820f92f_160x.png?v=1723014108'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/products/P7635201_4_160x.jpg?v=1720671224'/></SwiperSlide>

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

          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/P4743801_3_730dc320-4b0b-4fb2-a528-af57cb9e9d8a_360x.jpg?v=1724409842'/>
          <div className='fancy'>
            
          <p>Bags</p>
          
        </div>
        <div className='peach'>
          <h5>Yellow Casual Backpack...</h5>
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/P4743811_3_b5c39e56-1e3f-422c-a996-3da95bfaee86_360x.jpg?v=1724409858'/>
          <div className='fancy'>
          <p>Bags</p>
        </div>
        <div className='peach'>
          <h5>Pink Casual Backpack...</h5>
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/P4743911_3_ce858c40-e640-4042-9b1f-b1d8c097eb82_360x.jpg?v=1724409898'/>
          <div className='fancy'>
          <p>Bags</p>
        </div>
        <div className='peach'>
          <h5>Maroon Casual Backpack...</h5> 
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/P5537720_3_360x.jpg?v=1720693182'/>
          <div className='fancy'>
          <p>Bags</p>
        </div>
        <div className='peach'>
          <h5>Brown Casual Backpack...</h5>
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/P4739001_3_360x.jpg?v=1720671399'/>
          <div className='fancy'>
          <p>Bags</p>
        </div>
        <div className='peach'>
          <h5>Black Casual Backpack...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 5,000.00 </p>
          </div>
          
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/P4743920_3_d9c42501-9f5f-4cd2-a362-200081e81915_360x.jpg?v=1724409914'/>
          <div className='fancy'>
          <p>Bags</p>
        </div>
        <div className='peach'>
          <h5>Green Casual Backpack...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 5,000.00 </p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/P4743914_3_e829be4c-52a0-4a08-9c65-09cb6f31b759_360x.jpg?v=1724409907'/>
          <div className='fancy'>
          <p>Bags</p>
        </div>
        <div className='peach'>
          <h5>Black Formal Backpack...</h5>
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
          
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/P5537718_3_360x.jpg?v=1720684127'/>
          <div className='fancy'>
          <p>Bags</p>
        </div>
        <div className='peach'>
          <h5>Fawn Casual Backpack...</h5>
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/P5522005_3_720x.jpg?v=1720682742' style={{height:"100%" ,width:"100%"}}/>
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
          <div className=' col-lg-4 Bag-2'>
            <img  src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/P5522018_3_720x.jpg?v=1720688827' style={{height:"100%" ,width:"100%"}}/>
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
          <div className='col-lg-4 Bag-3'>
            <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/P5522053_3_900x.jpg?v=1720690247' style={{height:"100%" ,width:"100%",backgroundSize:"cover"}}/>
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

    );
}