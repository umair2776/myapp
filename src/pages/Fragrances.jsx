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
    <h2>Fragrances</h2>
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
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Perfume-main_160x.png?v=1720897366'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/28_02f62d0f-bee7-467b-b4f7-855d8a375ca6_160x.png?v=1720897307'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/10_160x.png?v=1721967882'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/11_e974a920-5964-4f75-90f7-6e019056e235_160x.png?v=1721967915'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/01_58caa47f-1570-4d1c-a904-c13d73f8cb95_160x.png?v=1721967794'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/10_160x.png?v=1721967882'/></SwiperSlide>

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

    <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR200710_3_360x.jpg?v=1684139959'/>
    <div className='fancy'>
    <p>Fragrances</p>
  </div>
  <div className='peach'>
    <h5><b>HOW LOVELY Body Mist F...</b></h5>
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
    <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR500110_4_360x.jpg?v=1698735560'/>
    <div className='fancy'>
    <p>Fragrances</p>
  </div>
  <div className='peach'>
    <h5><b>FAIRY PRINCESS Perfume...</b></h5>
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
    <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR500210_4_360x.jpg?v=1698735566'/>
    <div className='fancy'>
    <p>Fragrances</p>
  </div>
  <div className='peach'>
    <h5><b>BEAR Perfume For Kids...</b></h5> 
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
    <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR200610_3_360x.jpg?v=1684139954'/>
    <div className='fancy'>
    <p>Fragrances</p>
  </div>
  <div className='peach'>
    <h5><b>CHERISH YOU BOdy Mist...</b></h5>
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
    <p>Fragrances</p>
  </div>
  <div className='peach'>
    <h5><b>HONEY BUNCH Body Mist...</b></h5>
  </div>
  <div className='fancy-rate'>
    <div className='rate1'>
    <p>Rs 5,000.00 </p>
    </div>
    
  </div>
    </SwiperSlide>
  <SwiperSlide>
    <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR2010_360x.jpg?v=1659004797'/>
    <div className='fancy'>
    <p>Fragrances</p>
  </div>
  <div className='peach'>
    <h5><b>OH MY MY Body Mist For...</b></h5>
  </div>
  <div className='fancy-rate'>
    <div className='rate1'>
    <p>Rs 5,000.00 </p>
    </div>
  </div>
    </SwiperSlide>
  <SwiperSlide>
    
    <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR2010_360x.jpg?v=1659004797'/>
    <div className='fancy'>
    <p>Accessories</p>
  </div>
  <div className='peach'>
    <h5><b>SPECIAL ONE BODY MIST F...</b></h5>
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
    
    <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR2008_360x.jpg?v=1659004260'/>
    <div className='fancy'>
    <p>Fragrances</p>
  </div>
  <div className='peach'>
    <h5><b>ANDORNED PERFUME For...</b></h5>
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR2003_900x.jpg?v=1626524259' style={{height:"100%" ,width:"100%"}}/>
          <div className='maroon d-flex justify-content-center'>
            <p>STUNNER Body Mist For Women PR2004</p>
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
            <img  src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR2011_900x.jpg?v=1659004955' style={{height:"100%" ,width:"100%"}}/>
            <div className='maroon d-flex justify-content-center'>
            <p>SWEETNESS Body Mist For Women PR2003</p>
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
            <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PR2004_900x.jpg?v=1626524401' style={{height:"100%" ,width:"100%",backgroundSize:"cover"}}/>
            <div className='maroon d-flex justify-content-center'>
            <p>OH MY MY Body Mist For Women PR2011</p>
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