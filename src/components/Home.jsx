import React from 'react'
import Carousel from "./Carousel"
import Discount from './Discount'
import Collection from './Collection'
import Pret from './Pret'
import Footer from './Footer'
// import Counter from './Counter'
// import Headings from "./Headings"

const Home = () => {
  return (
    <>
     <Carousel/>
     <Discount/>
     <Collection/>
     <Pret/> 
     {/* <Headings/>  */}
     <Footer/>
     {/* <Counter/> */}

    
    </>
  )
}

export default Home