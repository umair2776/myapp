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
    <h2>Women Shoes</h2>
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
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Bubble_Banner_160x.png?v=1680593849'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Summer-main_160x.png?v=1680593722'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Winter-main_160x.png?v=1697191891'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Wedding-main_160x.png?v=1680593755'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Ethnic-main_160x.png?v=1667191480'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Winter-main_160x.png?v=1697191891'/></SwiperSlide>

      </Swiper>
      <div className='container'>
        
        <div className='row my-5'>
          <div className='col-lg-4 col-md-6 col-sm-4 '>
            <div className='print-suit-1'>
             
         <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/WN426605_2_900x.jpg?v=1721816039' style={{height:"100%",width:"100%"}}/>
         <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2'>
              <p>Maroon Moccasin WN4266</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'>
              <p>Rs.2,900</p>
             </div>
             <div className='cambric-btn d-flex justify-content-center'>
              <button>More like this</button>
             </div>
            </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='print-suit-2'>
              <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR506418_2_900x.jpg?v=1721816157' style={{height:"100%",width:"100%"}}/>
              <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2'>
              <p>Women Pink Formal Sandel </p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'>
              <p>Rs. 2,600</p>
             </div>
             <div className='cambric-btn d-flex justify-content-center'>
              <button>More like this</button>
             </div>
            </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='print-suit-3'>
              <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/CL923501_2_900x.jpg?v=1720417324' style={{height:"100%",width:"100%"}}/>
              <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2'>
              <p>Women Black Casual Chappal</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'>
              <p>Rs. 1,300</p>
             </div>
             <div className='cambric-btn d-flex justify-content-center'>
              <button>More like this</button>
             </div>
            </div>
            </div>
          </div>

        </div>
      </div>


      <div className='container'>
        
        <div className='row my-5'>
          <div className='col-lg-4 col-md-6 col-sm-4 '>
            <div className='print-suit-1'>
             
         <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/CL924301_2_900x.jpg?v=1720417483' style={{height:"100%",width:"100%"}}/>
         <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2'>
              <p>Black Casual Flip Flop </p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'>
              <p>Rs. 1,400</p>
             </div>
             <div className='cambric-btn d-flex justify-content-center'>
              <button>More like this</button>
             </div>
            </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='print-suit-2'>
              <img src='	https://cdn.shopify.com/s/files/1/0485/1459/7030/products/CL180801_2_900x.jpg?v=1720435615' style={{height:"100%",width:"100%"}}/>
              <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2'>
              <p>Women Casual Black Slipper</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'>
              <p>Rs. 1,400</p>
             </div>
             <div className='cambric-btn d-flex justify-content-center'>
              <button>More like this</button>
             </div>
            </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='print-suit-3'>
              <img src='	https://cdn.shopify.com/s/files/1/0485/1459/7030/products/AT730402_2_900x.jpg?v=1720431969' style={{height:"100%",width:"100%"}}/>
              <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2'>
              <p>Women Brown Casual Sneaker</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'>
              <p>Rs. 1,800</p>
             </div>
             <div className='cambric-btn d-flex justify-content-center'>
              <button>More like this</button>
             </div>
            </div>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </>
  );
}
