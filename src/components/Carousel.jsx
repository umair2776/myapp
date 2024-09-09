import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/files/1920x600_3_35cf4430-be33-4bcd-a59d-e9aca474d33d.jpg?v=1724395958'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/files/1920X600_1_d5f569a8-796f-4e12-8b39-ba70ad96765d.jpg?v=1723806520'/></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      
      </Swiper>
    </>
  );
}
