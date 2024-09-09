import React from 'react';
import { MdLocalShipping } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaRegEnvelope, FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <>
    <div className='main-footer'>
      <div className='container-fluid'>
        <div className='row '>
          <div className='cont-1 col-md-6 col-lg-4 py-3 border border-black'>
            <div className='icons-main d-flex gap-2 align-items-center'>
              <div className='icons'>
                <MdLocalShipping />
              </div>
              <div className='heads'>
                <h6 style={{ marginBottom: '0' }}>FREE SHIPPING</h6>
              </div>
            </div>
            <div className='paragraphs' style={{ marginTop: '0', marginLeft: "22px" }}>
              <p style={{ marginBottom: '0' }}>
                Free Shipping on orders Above 
                <span style={{ display: 'block' }}>PKR5000</span>
              </p>
            </div>
          </div>

          <div className='cont-1 col-md-6 col-lg-3 py-3 border border-black'>
            <div className='icons-main d-flex gap-2 align-items-center'>
              <div className='icons'>
                <MdLocalShipping />
              </div>
              <div className='heads'>
                <h6 style={{ marginBottom: '0' }}>FREE SHIPPING</h6>
              </div>
            </div>
            <div className='paragraphs' style={{ marginTop: '0', marginLeft: "22px" }}>
              <p style={{ marginBottom: '0' }}>
                Free Shipping on orders Above 
                <span style={{ display: 'block' }}>PKR5000</span>
              </p>
            </div>
          </div>

          <div className='cont-1 col-md-6 col-lg-4 py-3 border border-black'>
            <div className='icons-main d-flex gap-2 align-items-center'>
              <div className='icons'>
                <MdLocalShipping />
              </div>
              <div className='heads'>
                <h6 style={{ marginBottom: '0' }}>FREE SHIPPING</h6>
              </div>
            </div>
            <div className='paragraphs' style={{ marginTop: '0', marginLeft: "22px" }}>
              <p style={{ marginBottom: '0' }}>
                Free Shipping on orders Above 
                <span style={{ display: 'block' }}>PKR5000</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-10 mb_50'>
            <div className='get' style={{ marginTop: "60px" }}>
              <h5>Get in touch</h5>
            </div>
            <div className='phone d-flex gap-1 my-4'>
              <div className='call' style={{ fontSize: "18px" }}>
                <IoCall />
              </div>
              <div className='number my-2'>
                <p>+92 42 111178956</p>
              </div>
            </div>
            <div className='message d-flex gap-1'>
              <div className='inbox' style={{ fontSize: "18px" }}>
                <FaRegEnvelope />
              </div>
              <div className='support px-1 my-1'>
                <p>support@stylo.pk</p>
              </div>
            </div>
            <div className='main-icons d-flex gap-3 my-2' style={{ fontSize: "18px", flexWrap: "nowrap" }}>
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <CiLinkedin />
              <FaPinterestP />
            
            </div>
            <div className='two-pics d-flex gap-1 my-4' style={{height:"25px"}}>
              <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/ICONS_APP_STORE.webp?v=1665137415'/>
              <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/ICONS_GOOGLE_PLAY.webp?v=1665137385 '/>
            </div>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-12 mb_50'>
            <div className='about ' style={{marginTop:"60px"}}>
              <h5>About</h5>
              <div className='list-items my-4'>
                <li>Our Story</li>
                <li>Career@Stylo</li>
                <li>Contact Us</li>
                <li>Blogs</li>
                <li>Download Our App </li>
                <li>Terms of Service</li>
                <li>Store Locations</li>

              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-12 mb_50'>
            <div className='information' style={{marginTop:"60px"}}>
              <h5>Information</h5>
              <div className='list-items my-4'>
                <li>Online Order Tracking</li>
                <li>Shipping Policy</li>
                <li>Returns & Exchange</li>
                <li>Policy</li>
                <li>Privacy Policy</li>
                <li>FAQs</li>
                <li>Refund policy</li>
                <li>School Campaign</li>
                <li>Terms & Condition</li>

              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-12 mb_50'>
            <div className='chart' style={{marginTop:"60px"}}>
              <h5>Size Chart</h5>
              <div className='list-items my-4'>
                <li>Ladies Shoes Size Chart</li>
                <li>Ladies Apparel Size Chart</li>
                <li>Denim Size Chart</li>
                <li>Kids Shoes Size Chart</li>
                <li>Kids Pret Size Chart</li>



              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mb_50'>
            <div className='newsletter'style={{marginTop:"60px"}}>
              <h5>Newsletter Signup</h5>
              <div className='list-items my-4'>
                <li>Subscribe and stay Updated!</li>
                <form className='form d-flex'>
                  <input type='email' name='email' placeholder='Your email address'/>
                  <div className='btn1'>
                <button>Subscribe</button>
                </div>
                </form>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='copyright'>
      &copy;2024 Stylo| All Rights Reserved
    </div>
    </>
  );
}

export default Footer;
