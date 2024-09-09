import React,{useEffect,useState} from 'react'
import Footer from '../components/Footer'
import axios from "axios"
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

const WomenApparels = () => {

const [products,setProducts]=useState([])
const [loader,setLoader]=useState(false);
const fetchData=async()=>{
   setLoader(true)
  const response=await axios.get("https://fakestoreapi.com/products")
  setProducts(response.data)
  setLoader(false)
}
useEffect(()=>{
  fetchData();
},[])
  
  return (
    <>
     <div className='container-fluid'>
        
        <div className='row my-5'>
          <div className='col-lg-3 col-md-6 col-sm-4 '>
            <div className='print-suit-1'>
             
         <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/PS470545-_2_c3d41c51-47d1-4871-813e-cc50e961b171_720x.jpg?v=1715251665' style={{height:"100%",width:"100%"}}/>
         <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2' style={{width:"200px",margin:"-70px"}}>
              <p>Copper Plain Tissue Dupatt PS4705 </p>
             </div>
             <div className='cambric-rate d-flex ' style={{marginLeft:"-70px"}}>
              <p>Rs. 790</p>
             </div>
           
            </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='print-suit-2'>
              <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/PS451009-_2_d1812ca5-b76f-4972-9b0e-383f83040695_720x.jpg?v=1715251615' style={{height:"100%",width:"100%"}}/>
              <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2' style={{width:"250px",margin:"-70px"}}>
              <p>White Screen Printed Cambaric Trouser PS4510</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center'style={{marginLeft:"-250px"}}>
              <p>Rs. 2,900</p>
             </div>
            
            </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='print-suit-3'>
              <img src='https://cdn.shopify.com/s/files/1/0485/1459/7030/files/PS450909-_2_79908830-d775-45c5-9a6d-27ec07f72b11_720x.jpg?v=1715251603' style={{height:"100%",width:"100%"}}/>
              <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2' style={{width:"250px",margin:"-70px"}}>
              <p>Ehite Screen Printed Cambaric Trouser PS 4509</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center' style={{marginLeft:"-250px"}}>
              <p>Rs. 1,800</p>
             </div>
                      
            </div>
            </div>
          </div>

          <div className='col-lg-3'>
            <div className='print-suit-3'>
              <img src='	https://cdn.shopify.com/s/files/1/0485/1459/7030/files/PS436308-_3_1d78a908-6bef-484d-8dc0-f2d788d83517_720x.jpg?v=1715251559' style={{height:"100%",width:"100%"}}/>
              <div className='cambric d-flex flex-column justify-content-center ' style={{marginLeft:'70px'}}>
             <div className='cabaric-1 my-2' style={{width:"250px",margin:"-70px"}}>
              <p>3PC - Digital Printed Cambric Suit PS4363</p>
             </div>
             <div className='cambric-rate d-flex justify-content-center' style={{marginLeft:"-250px"}}>
              <p>Rs. 300</p>
             </div>
            
            </div>
            </div>
          </div>

        </div>
      </div>

      <div className='category d-flex justify-content-center'>
        <h3>Shops By Category</h3>
      </div>
      <div className='container-fluid ' style={{gap:"none"}}>
        <div className='row'>
          <img className='col-lg-6' src='https://stylo.pk/cdn/shop/files/1x1_1_833e74e4-bda1-4243-bc73-1621b8854454_1512x.jpg?v=1723789061'/>
          <img className='col-lg-6' src='https://stylo.pk/cdn/shop/files/01-1x1_1_1512x.jpg?v=1709007044'/>

        </div>
      </div>


      <div className='container-fluid my-5' style={{gap:"none"}}>
        <div className='row'>
          <img className='col-lg-6' src='https://stylo.pk/cdn/shop/files/1x1-Pret_1512x.jpg?v=1699274421'/>
          <img className='col-lg-6' src='https://stylo.pk/cdn/shop/files/03-1x1_13c0c325-b9d5-400d-8035-28b18c64fdc1_1512x.jpg?v=1709007044'/>

        </div>
      </div>
      <div className='d-flex flex-wrap justify-content-evenly gap-3'>
        {
          loader ? <Loader/> : 
          products.map((product)=>{
            return(
              <Link to={`/product/${product.id}`}>
              <div class="card" style={{width: "18rem"}}>
              <img src={product.image} class="card-img-top" alt="..." style={{height:"100px",width:"100px"}}/>
              <div class="card-body">
                <h5 class="card-title">{product.title.slice(0,30)+"..."}</h5>
                <p class="card-text">{product.description.slice(0,30)+"....."}</p>
                <p>{product.rating.rate}</p>
                <a href="#" class="btn btn-primary">{product.price}</a>
              </div>
            </div>
            </Link>
          )
        })
        }
      </div>
      <Footer/>
      </>
  )
}

export default WomenApparels
