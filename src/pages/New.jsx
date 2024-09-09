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

          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN586916_2_854a8781-d7cb-4922-8906-4de76f0142cc_360x.jpg?v=1720502542'/>
          <div className='fancy'>
          <p>Fancy</p>
        </div>
        <div className='peach'>
          <h5>Peach Fancy Chappal...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,420.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 2,900.00</del></p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN584115_2_8416ff2a-a5cc-4bcd-a4ee-a38f03214f6d_360x.jpg?v=1720443357'/>
          <div className='fancy'>
          <p>Fancy</p>
        </div>
        <div className='peach'>
          <h5>Peach Fancy Chappal...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,420.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 2,900.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN574015_2_6b6c7bf0-7932-48df-80b4-8ad89ec74d86_360x.jpg?v=1720629406'/>
          <div className='fancy'>
          <p>Fancy</p>
        </div>
        <div className='peach'>
          <h5>Peach Fancy Chappal...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,420.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 2,900.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN068218_2_1da633a3-91a4-41f3-aa9f-ea38ed454760_360x.jpg?v=1720503892'/>
          <div className='fancy'>
          <p>Fancy</p>
        </div>
        <div className='peach'>
          <h5>Peach Fancy Chappal...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,420.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 2,900.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN069401_2_58d6185b-f4b3-46bf-b939-3ed63cee9ce1_360x.jpg?v=1720420947'/>
          <div className='fancy'>
          <p>Fancy</p>
        </div>
        <div className='peach'>
          <h5>Peach Fancy Chappal...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,420.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 2,900.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN068823_2_152be893-ae5c-403e-a646-d10bd9dd57b7_360x.jpg?v=1720503948'/>
          <div className='fancy'>
          <p>Fancy</p>
        </div>
        <div className='peach'>
          <h5>Peach Fancy Chappal...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,420.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 2,900.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN583115_2_88324480-acb8-451a-8d71-f38b72dbbeaf_360x.jpg?v=1720443218'/>
          <div className='fancy'>
          <p>Fancy</p>
        </div>
        <div className='peach'>
          <h5>Peach Fancy Chappal...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,420.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 2,900.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FN586015_2_360x.jpg?v=1720443370'/>
          <div className='fancy'>
          <p>Fancy</p>
        </div>
        <div className='peach'>
          <h5>Peach Fancy Chappal...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,420.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 2,900.00</del></p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN583123_2_9550b1fc-5ded-4836-bfe2-fc6f500741b1_360x.jpg?v=1720503921'/>
          <div className='fancy'>
          <p>Fancy</p>
        </div>
        <div className='peach'>
          <h5>Peach Fancy Chappal...</h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 1,420.00 </p>
          </div>
          <div className='rate2'>
          <p><del>Rs 2,900.00</del></p>
          </div>
        </div>
          </SwiperSlide>
      </Swiper>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-lg-4 col-md-6 col-sm-4 '>
            <div className='print-suit-1'>
             
         <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/PS948011_477ad176-ec47-4276-bd55-486844bdec33_900x.jpg?v=1724775425' style={{height:"330px",width:"360px"}}/>
         <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2'>
              <p>Digital Printed Cambric Suit PS9450</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'>
              <p>Rs. 7,500</p>
             </div>
             <div className='cambric-btn d-flex justify-content-center'>
              <button>More like this</button>
             </div>
            </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='print-suit-2'>
              <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/PS945011_8b90b745-be70-401c-9550-ac237f36c892_900x.jpg?v=1724775424' style={{height:"330px",width:"360px"}}/>
              <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2'>
              <p>Digital Printed Cambric Suit PS9450</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'>
              <p>Rs. 7,500</p>
             </div>
             <div className='cambric-btn d-flex justify-content-center'>
              <button>More like this</button>
             </div>
            </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='print-suit-3'>
              <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/PS947209_d764c056-0e22-4af6-9de9-382d28875d46_900x.jpg?v=1724775424' style={{height:"330px",width:"360px"}}/>
              <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2'>
              <p>Digital Printed Cambric Suit PS9450</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'>
              <p>Rs. 7,500</p>
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
  )

}

