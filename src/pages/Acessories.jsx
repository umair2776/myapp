import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles3.css';

// import required modules
import { Pagination } from 'swiper/modules';

import axios from 'axios';
import Footer from '../components/Footer';
import Loader from '../components/Loader';


export default function App() {
  const [products,setProducts]=useState([])
  const [loader,setLoader]=useState(false)
  const fetchData=async()=>{
    setLoader(true)
   const response= await axios.get("https://fakestoreapi.com/products")
   setProducts(response.data)
   setLoader(false)
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
    <div className='women d-flex justify-content-center'>
    <h1>Acessories</h1>
    </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination]}
        className="mySwiper" style={{height:"100%",width:"600px",marginLeft:"300px"}}
        
      >
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/Accessories-main_160x.png?v=1667196626'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/collections/29_160x.png?v=1720896837'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/products/M00013_1_160x.jpg?v=1664973246'/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/files/BR815610_3_1af7c1f1-57d7-4a08-b0c7-7f1e2a408c85_160x.jpg?v=1712314183'/></SwiperSlide>
        
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

          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/S0169010_2_360x.jpg?v=1708077384'/>
          <div className='fancy'>
          <p>Accessories</p>
        </div>
        <div className='peach'>
          <h5><b>Neutral Shoe Shiner...</b></h5>
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/K6011816_2_360x.jpg?v=1690806862'/>
          <div className='fancy'>
          <p>Acessories</p>
        </div>
        <div className='peach'>
          <h5><b>Neutral Shoe Shiner...</b></h5>
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/J3338601_1_360x.jpg?v=1701433363'/>
          <div className='fancy'>
          <p>Accessories</p>
        </div>
        <div className='peach'>
          <h5><b>Neutral Shoe Shiner...</b></h5> 
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/S0162001_4_360x.jpg?v=1703324107'/>
          <div className='fancy'>
          <p>Accessories</p>
        </div>
        <div className='peach'>
          <h5><b>Neutral Liquid Polish...</b></h5>
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
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/S0161162_3_360x.jpg?v=1703324120'/>
          <div className='fancy'>
          <p>Acessories</p>
        </div>
        <div className='peach'>
          <h5><b>White Liqud Polish...</b></h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 5,000.00 </p>
          </div>
          
        </div>
          </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/T5008845_1_360x.jpg?v=1690806916'/>
          <div className='fancy'>
          <p>Acessories</p>
        </div>
        <div className='peach'>
          <h5><b>Black Liquid Polish M00017...</b></h5>
        </div>
        <div className='fancy-rate'>
          <div className='rate1'>
          <p>Rs 5,000.00 </p>
          </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
          
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/J3346715_1_360x.jpg?v=1705474400'/>
          <div className='fancy'>
          <p>Accessories</p>
        </div>
        <div className='peach'>
          <h5><b>Black Wax Polish M0001...</b></h5>
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
          
          <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/products/J3346015_1_360x.jpg?v=1704868860'/>
          <div className='fancy'>
          <p>Accessories</p>
        </div>
        <div className='peach'>
          <h5><b>Neutral Wax Polish...</b></h5>
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
          <img src='https://stylo.pk/cdn/shop/products/M00013_1_1080x.jpg?v=1664973246' style={{height:"100%" ,width:"100%"}}/>
          <div className='maroon d-flex justify-content-center'>
            <p>Neutral Shoe Shiner M00013</p>
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
            <img  src='https://stylo.pk/cdn/shop/products/M0001639_4_1080x.jpg?v=1671002155' style={{height:"100%" ,width:"100%"}}/>
            <div className='maroon d-flex justify-content-center'>
            <p>Neutral Shoe Shiner M000016</p>
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
            <img src='https://stylo.pk/cdn/shop/products/M00009_1080x.jpg?v=1664973238' style={{height:"100%" ,width:"100%",backgroundSize:"cover"}}/>
            <div className='maroon d-flex justify-content-center'>
            <p>Black Liquid Polish M00009</p>
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
{/* <Footer/> */}
</div>

<div className='d-flex flex-wrap justify-content-evenly gap-3'>
        {
          loader ? <Loader/> : 
          products.map((product)=>{
            return(
              <div class="card" style={{width: "18rem"}}>
              <img src={product.image} class="card-img-top" alt="..." style={{height:"100px",width:"100px"}}/>
              <div class="card-body">
                <h5 class="card-title">{product.title.slice(0,30)+"..."}</h5>
                <p class="card-text">{product.description.slice(0,30)+"....."}</p>
                <p>{product.rating.rate}</p>
                <a href="#" class="btn btn-primary">{product.price}</a>
              </div>
            </div>
          )
        })
        }
      </div>
   <Footer/>

      </>
  )}