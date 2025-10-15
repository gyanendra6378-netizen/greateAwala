import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer"
import About from "./pages/aboutUs/About"
import Contacts from "./pages/contact/Contacts"
import Blogs from "./pages/Blogs"
import Services from "./pages/Services"
import Cart from "./pages/Cart"
import Checkout from "./pages/checkout/Checkout"
import SmoothScroll from "./components/SmoothScroll"
import Products from "./pages/Products/Products"
import ProductDetails from "./pages/Products/ProductDetails"
// import Checkout from "./pages/Checkout"

function App() {
 

  return (
    <>
      <Router>
        <Navbar/>
        <SmoothScroll/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contacts/>} />
           <Route path="/blogs" element={<Blogs/>} />
            <Route path="/services" element={<Services/>} />
             <Route path="/cart" element={<Cart/>} />
              <Route path="/product/:id" element={<ProductDetails />} />
             <Route path="/checkout" element={<Checkout/>} />
             <Route path="/products" element={<Products/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
