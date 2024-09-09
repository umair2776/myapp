import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Prenav1 = () => {
   
  return (
    <>
    <div className='container-fluid refresh' >
      <div className='row'>
        <div className='col col-lg-4'>
        </div>
        <div className='col col-lg-4'>
          <div className='img d-flex justify-content-center' style={{ height: "55px",  marginTop:"0px"}}>
            <img src='https://stylo.pk/cdn/shop/files/110x60-Logo_45_140x@2x.png?v=1705411679' alt="Logo" />
          </div>
        </div>
        <div className='col col-lg-4'>
          <div className='icons d-flex justify-content-end fs-4 mt-3 gap-2' style={{color:"black"}}>
         <Link><CiSearch /></Link> 
         <Link to="/signup"><CiUser/></Link> 
         <Link><CiHeart /></Link> 
          <Link><CiShoppingCart /></Link>
          </div>
        </div>
      </div>
    </div>
    <div className='hr'>
    <hr></hr>
    </div>
    </>
  );
}

export default Prenav1;
