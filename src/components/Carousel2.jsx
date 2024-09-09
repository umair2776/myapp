import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles2.css'; // Updated to import 'styles2.css'
import { FreeMode, Pagination } from 'swiper/modules';

const Products1 = () => {
  return (
    <>
      <div style={{ margin: '30px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Recommended For You</h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {/* Swiper slides with items */}
          <SwiperSlide>
            <div className="item">
              <div className="pic">
                <img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR516018_3_360x.jpg?v=1698732862" alt="Pink Formal Sandal" />
              </div>
              <div className="category">Casual</div>
              <div className="description">Pink Formal Sandal</div>
              <div className="price">Rs 1,960.00</div>
            </div>
          </SwiperSlide>
          {/* Repeat for other items */}
          <SwiperSlide>
            <div className="item">
              <div className="pic">
                <img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR516005_3_360x.jpg?v=1697435475" alt="Maroon Formal Sandal" />
              </div>
              <div className="category">Formal</div>
              <div className="description">Maroon Formal Sandal</div>
              <div className="price">Rs 1,960.00</div>
            </div>
          </SwiperSlide>
          {/* Add remaining items in the same manner */}
        </Swiper>
      </div>
    </>
  );
}

export default Products1;
