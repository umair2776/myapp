import Navbar from "./components/Navbar" 
import navbar from "./components/navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Prenav1 from "./components/Prenav1";
import List from "./components/List";
// import Carousel from "./components/Carousel"
// import Carousel2 from "./components/Carousel2"
// import Discount from "./components/Discount";
// import Collection from "./components/Collection";
// import Pret from "./components/Pret";
import pret from "./components/pret.css"
// import Headings from "./components/Headings"
import Footer from "./components/Footer";
import footer from "./components/footer.css"
import { Routes,Route } from "react-router-dom";
// import Home from "./pages/Home";
import MainNavabar from "./components/MainNavabar";
import Home from "./components/Home";
import New from "./pages/New";
import WomenShoes from "./pages/WomenShoes";
import WomenApparels from "./pages/WomenApparels";
import Bags from "./pages/Bags";
import Kids from "./pages/Kids";
import Acessories from "./pages/Acessories";
import Fragrances from "./pages/Fragrances";
// import "bootstrap/dist/css"
import bags from "./pages/bags.css"
import ProductDescriptiom from "./pages/ProductDescriptiom"

import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./pages/Signup";

function App() {
  return (
  <>
  <MainNavabar/>

     <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/womenshoes" element={<WomenShoes/>}/>
      <Route path="/womenappearls" element={<WomenApparels/>}/>
      <Route path="/bags" element={<Bags/>}/>
      <Route path="/kids" element={<Kids/>}/>
      <Route path="/acessories" element={<Acessories/>}/>
      <Route path="/fragrances" element={<Fragrances/>}/>
      <Route path="/product/:id" element={<ProductDescriptiom/>}/>
      <Route path="/signup" element={<Signup/>}/>






     </Routes> 
     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Zoom}
/>
{/* Same as */}
<ToastContainer />
    </>
  );
}

export default App;
